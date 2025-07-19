import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();

const serverUrl = process.env.SERVER_URL || "http://127.0.0.1:5173/";

try {
  console.log(`Navigating to ${serverUrl}...`);
  console.log("Sometimes puppeteer takes a moment to start.");
  console.log("If it takes too long, cancel the operation and try again.");

  await page.goto(serverUrl);

  await page.addStyleTag({
    content: `
        @page {
          margin: 2cm;
          size: A4;
        }
      `,
  });

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const filename = `${year}-${month}-${day}-Sascha-Rose-CV.pdf`;

  await page.pdf({
    path: `../../${filename}`,
    format: "A4",
    printBackground: true,
    margin: {
      top: "2cm",
      right: "2cm",
      bottom: "2cm",
      left: "2cm",
    },
  });

  await page.pdf({
    path: `../../Sascha-Rose-CV.pdf`,
    format: "A4",
    printBackground: true,
    margin: {
      top: "2cm",
      right: "2cm",
      bottom: "2cm",
      left: "2cm",
    },
  });

  console.log(`PDF generated successfully: ${filename}`);
} catch (error) {
  console.error("Error generating PDF:", error);
  console.log(`Make sure the web server is running at ${serverUrl}`);
} finally {
  await browser.close();
}
