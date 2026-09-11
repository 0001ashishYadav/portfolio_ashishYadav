import fs from 'fs';
import { PDFDocument } from 'pdf-lib';

async function createResumePdf() {
  const pngPath = 'public/Ashish_Yadav_Resume.png';
  const pdfPath = 'public/Ashish_Yadav_Resume.pdf';

  const pngBytes = fs.readFileSync(pngPath);
  const pdfDoc = await PDFDocument.create();
  
  const pngImage = await pdfDoc.embedPng(pngBytes);
  const { width, height } = pngImage.scale(1);

  // Create page with exact matching aspect ratio/dimensions
  const page = pdfDoc.addPage([width, height]);
  page.drawImage(pngImage, {
    x: 0,
    y: 0,
    width,
    height,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(pdfPath, pdfBytes);
  console.log(`Generated ${pdfPath} successfully (${pdfBytes.length} bytes)`);
}

createResumePdf().catch(console.error);
