import puppeteer from "puppeteer";

const browser = await puppeteer.launch();

const serverUrl = process.env.SERVER_URL || "http://127.0.0.1:5173/";

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const datePrefix = `${year}-${month}-${day}`;

const targets = [
  { language: "en", path: "" },
  { language: "de", path: "de/" },
];

const pdfMargins = {
  top: "2cm",
  right: "2cm",
  bottom: "2cm",
  left: "2cm",
};

try {
  for (const target of targets) {
    const page = await browser.newPage();
    const url = `${serverUrl}${target.path}`;

    console.log(`Navigating to ${url}...`);
    console.log("Sometimes puppeteer takes a moment to start.");
    console.log("If it takes too long, cancel the operation and try again.");

    await page.goto(url);

    await page.addStyleTag({
      content: `
        @page {
          margin: 2cm;
          size: A4;
        }
      `,
    });

    await page.waitForFunction(
      () => {
        const images = Array.from(document.images);
        return images.length > 0 && images.every((img) => img.complete && img.naturalHeight > 0);
      },
      { timeout: 30000 }
    );

    const datedFilename = `${datePrefix}-Sascha-Rose-CV-${target.language}.pdf`;
    const stableFilename = `Sascha-Rose-CV-${target.language}.pdf`;

    await page.pdf({
      path: `../../${datedFilename}`,
      format: "A4",
      printBackground: true,
      margin: pdfMargins,
    });

    await page.pdf({
      path: `../../${stableFilename}`,
      format: "A4",
      printBackground: true,
      margin: pdfMargins,
    });

    console.log(`PDF generated successfully: ${datedFilename}`);
    console.log(`PDF generated successfully: ${stableFilename}`);

    await page.close();
  }
} catch (error) {
  console.error("Error generating PDF:", error);
  console.log(`Make sure the web server is running at ${serverUrl}`);
} finally {
  await browser.close();
}
