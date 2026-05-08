import {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  ImageRun,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  WidthType,
  type IImageOptions,
  type ParagraphChild,
} from "docx";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

import { en } from "../web/src/i18n/en";
import { de } from "../web/src/i18n/de";
import { coreStack } from "../web/src/data/coreStack";
import type { Content, ExperienceItem } from "../web/src/i18n/types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..", "..");
const photoPath = resolve(__dirname, "..", "web", "public", "sascha-rose.png");

const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" } as const;
const tableNoBorders = {
  top: noBorder,
  bottom: noBorder,
  left: noBorder,
  right: noBorder,
  insideHorizontal: noBorder,
  insideVertical: noBorder,
};

const cvBlue = "266196";
const cvGray = "5A5A5A";

function paragraph(text: string, options: { spacingAfter?: number; bold?: boolean } = {}) {
  return new Paragraph({
    spacing: { after: options.spacingAfter ?? 120 },
    children: [new TextRun({ text, bold: options.bold })],
  });
}

function emptyParagraph() {
  return new Paragraph({ spacing: { after: 120 }, children: [new TextRun("")] });
}

function sectionHeading(text: string) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 160 },
    border: {
      bottom: { color: cvBlue, space: 4, style: BorderStyle.SINGLE, size: 6 },
    },
    children: [new TextRun({ text, color: cvBlue, bold: true, size: 26 })],
  });
}

function readPngSize(buffer: Buffer) {
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function buildHeader(content: Content, photoData: Buffer) {
  const titleParagraph = new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({ text: content.headerTitle, bold: true, size: 36, color: cvBlue })],
  });

  const contactLines: { value: string; href?: string }[] = [
    { value: "sascha.rose@actyvyst.com", href: "mailto:sascha.rose@actyvyst.com" },
    { value: "+49 179 50 898 30", href: "tel:+491795089830" },
    { value: content.contact.location },
    { value: "github.com/rsascha", href: "https://github.com/rsascha" },
    { value: "actyvyst.de", href: "https://actyvyst.de" },
  ];

  const contactParagraphs = contactLines.map((line) => {
    const children: ParagraphChild[] = [];
    if (line.href) {
      children.push(
        new ExternalHyperlink({
          link: line.href,
          children: [new TextRun({ text: line.value, color: cvBlue, style: "Hyperlink" })],
        })
      );
    } else {
      children.push(new TextRun({ text: line.value }));
    }
    return new Paragraph({ spacing: { after: 60 }, children });
  });

  const photoSize = readPngSize(photoData);
  const photoWidth = 130;
  const photoHeight = Math.round((photoWidth * photoSize.height) / photoSize.width);
  const photoOptions: IImageOptions = {
    type: "png",
    data: photoData,
    transformation: { width: photoWidth, height: photoHeight },
  };

  const photoParagraph = new Paragraph({
    alignment: AlignmentType.RIGHT,
    children: [new ImageRun(photoOptions)],
  });

  return new Table({
    layout: TableLayoutType.FIXED,
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [6200, 3000],
    borders: tableNoBorders,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders: tableNoBorders,
            margins: { top: 0, bottom: 0, left: 0, right: 0 },
            children: [titleParagraph, ...contactParagraphs],
          }),
          new TableCell({
            borders: tableNoBorders,
            margins: { top: 0, bottom: 0, left: 0, right: 0 },
            children: [photoParagraph],
          }),
        ],
      }),
    ],
  });
}

function buildIntroSection(content: Content) {
  const paragraphs: Paragraph[] = [sectionHeading(content.intro.bringHeading)];
  for (const text of content.intro.bringParagraphs) {
    paragraphs.push(paragraph(text));
  }
  paragraphs.push(sectionHeading(content.intro.languagesHeading));
  paragraphs.push(paragraph(content.intro.languagesText));
  paragraphs.push(sectionHeading(content.intro.lookingForHeading));
  paragraphs.push(paragraph(content.intro.lookingForText));
  return paragraphs;
}

function buildCoreStackSection(content: Content) {
  return [
    sectionHeading(content.technologies.heading),
    paragraph(coreStack.map((entry) => entry.technology).join(", ")),
  ];
}

function buildExperienceItem(item: ExperienceItem, content: Content) {
  const paragraphs: Paragraph[] = [];

  const titleChildren: ParagraphChild[] = [
    new TextRun({ text: item.title, bold: true, color: cvBlue, size: 24 }),
    new TextRun({ text: "  —  ", color: cvGray }),
    new TextRun({ text: item.period, color: cvGray }),
  ];
  paragraphs.push(
    new Paragraph({
      spacing: { before: 200, after: 60 },
      keepNext: true,
      children: titleChildren,
    })
  );

  const companyText = item.subtitle ? `${item.company} · ${item.subtitle}` : item.company;
  paragraphs.push(
    new Paragraph({
      spacing: { after: 100 },
      keepNext: true,
      children: [new TextRun({ text: companyText, italics: true })],
    })
  );

  paragraphs.push(paragraph(item.description, { spacingAfter: 80 }));

  if (item.links && item.links.length > 0) {
    const linkChildren: ParagraphChild[] = [
      new TextRun({ text: `${content.experience.linksLabel}: `, bold: true }),
    ];
    item.links.forEach((link, index) => {
      linkChildren.push(
        new ExternalHyperlink({
          link: link.href,
          children: [new TextRun({ text: link.label, color: cvBlue, style: "Hyperlink" })],
        })
      );
      if (index < item.links!.length - 1) {
        linkChildren.push(new TextRun({ text: ", " }));
      }
    });
    paragraphs.push(new Paragraph({ spacing: { after: 60 }, children: linkChildren }));
  }

  if (item.technologies) {
    paragraphs.push(
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: `${content.experience.technologiesLabel}: `, bold: true }),
          new TextRun({ text: item.technologies }),
        ],
      })
    );
  }

  return paragraphs;
}

function buildExperienceSection(content: Content) {
  const paragraphs: Paragraph[] = [sectionHeading(content.experience.heading)];
  for (const item of content.experience.items) {
    paragraphs.push(...buildExperienceItem(item, content));
  }
  return paragraphs;
}

async function buildDocument(content: Content, photoData: Buffer) {
  const intro = buildIntroSection(content);
  const stack = buildCoreStackSection(content);
  const experience = buildExperienceSection(content);

  return new Document({
    creator: "Sascha Rose",
    title: content.pageTitle,
    description: content.pageTitle,
    styles: {
      default: {
        document: {
          run: { font: "Calibri", size: 22 },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 },
          },
        },
        children: [buildHeader(content, photoData), emptyParagraph(), ...intro, ...stack, ...experience],
      },
    ],
  });
}

async function main() {
  const photoData = await readFile(photoPath);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const datePrefix = `${year}-${month}-${day}`;

  const targets: { language: "en" | "de"; content: Content }[] = [
    { language: "en", content: en },
    { language: "de", content: de },
  ];

  for (const target of targets) {
    const document = await buildDocument(target.content, photoData);
    const buffer = await Packer.toBuffer(document);

    const datedFilename = resolve(repoRoot, `${datePrefix}-Sascha-Rose-CV-${target.language}.docx`);
    const stableFilename = resolve(repoRoot, `Sascha-Rose-CV-${target.language}.docx`);

    await writeFile(datedFilename, buffer);
    await writeFile(stableFilename, buffer);

    console.log(`DOCX generated successfully: ${datedFilename}`);
    console.log(`DOCX generated successfully: ${stableFilename}`);
  }
}

main().catch((error) => {
  console.error("Error generating DOCX:", error);
  process.exit(1);
});
