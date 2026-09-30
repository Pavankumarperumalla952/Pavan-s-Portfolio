const fs = require('fs');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  // Standard Letter page: 612 x 792 points
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const marginX = 46;
  const contentWidth = width - marginX * 2;
  let y = height - 42;

  // Helper to draw centered text
  function drawCenteredText(text, size, font, color = rgb(0.1, 0.1, 0.1)) {
    const textWidth = font.widthOfTextAtSize(text, size);
    page.drawText(text, {
      x: (width - textWidth) / 2,
      y,
      size,
      font,
      color,
    });
    y -= size + 4;
  }

  // Helper to draw wrapped text
  function drawWrappedText(text, size, font, color = rgb(0.15, 0.15, 0.15), lineHeight = 11.5) {
    const words = text.split(' ');
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine ? currentLine + ' ' + words[i] : words[i];
      const testWidth = font.widthOfTextAtSize(testLine, size);

      if (testWidth > contentWidth && currentLine) {
        page.drawText(currentLine, { x: marginX, y, size, font, color });
        y -= lineHeight;
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      page.drawText(currentLine, { x: marginX, y, size, font, color });
      y -= lineHeight;
    }
  }

  // Helper for Section Titles
  function drawSectionTitle(title) {
    y -= 4;
    page.drawText(title, {
      x: marginX,
      y,
      size: 13,
      font: fontBold,
      color: rgb(0.05, 0.05, 0.05),
    });
    y -= 13;
  }

  // --- HEADER ---
  drawCenteredText('Pavan Kumar Perumalla', 20, fontBold, rgb(0.05, 0.05, 0.05));
  y -= 1;
  drawCenteredText(
    '8074483783  |  pavankumarperumalla952@gmail.com  |  linkedin.com/in/pavan-kumar-perumalla-481b2834a  |',
    7.5,
    fontBold,
    rgb(0.1, 0.1, 0.1)
  );
  drawCenteredText('github.com/Pavankumarperumalla952', 7.5, fontBold, rgb(0.1, 0.1, 0.1));

  y -= 2;

  // --- PROFESSIONAL SUMMARY ---
  drawSectionTitle('Professional Summary');
  drawWrappedText(
    'ECE undergraduate with hands-on experience building software, AI, Android, and IoT projects. Experienced with Python, Java, TypeScript, web development, Firebase, and microcontroller-based systems, with a growing focus on software and AI development. Passionate about building practical, user-focused solutions and continuously learning modern technologies.',
    8.2,
    fontRegular,
    rgb(0.15, 0.15, 0.15),
    10.5
  );

  y -= 3;

  // --- EDUCATION ---
  drawSectionTitle('Education');

  function drawEducationRow(school, place, detail) {
    page.drawText(school, { x: marginX, y, size: 8.8, font: fontBold, color: rgb(0.05, 0.05, 0.05) });
    const placeWidth = fontBold.widthOfTextAtSize(place, 8.5);
    page.drawText(place, { x: width - marginX - placeWidth, y, size: 8.5, font: fontBold, color: rgb(0.05, 0.05, 0.05) });
    y -= 10;
    page.drawText(detail, { x: marginX, y, size: 8, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    y -= 10;
  }

  drawEducationRow('Dr. DVMM High School', 'Parvathipuram', '10th — 83%');
  drawEducationRow('Sri Chaitanya Jr College', 'Visakhapatnam', 'Intermediate — 75%');
  drawEducationRow('Lendi Institute of Engineering Technology', 'Present', 'B.Tech — Electronics and Communication Engineering (ECE)');

  y -= 2;

  // --- PROJECTS ---
  drawSectionTitle('Projects');

  function drawProject(numTitle, category, description, keyIdea) {
    page.drawText(numTitle, { x: marginX, y, size: 9, font: fontBold, color: rgb(0.05, 0.05, 0.05) });
    y -= 10;
    page.drawText(category, { x: marginX, y, size: 8, font: fontBold, color: rgb(0.25, 0.25, 0.25) });
    y -= 10;
    drawWrappedText(description, 7.7, fontRegular, rgb(0.15, 0.15, 0.15), 9.6);
    y += 1;

    // Key idea line
    const keyLabel = 'Key idea: ';
    page.drawText(keyLabel, { x: marginX, y, size: 7.7, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
    const keyLabelWidth = fontBold.widthOfTextAtSize(keyLabel, 7.7);
    page.drawText(keyIdea, { x: marginX + keyLabelWidth, y, size: 7.7, font: fontRegular, color: rgb(0.15, 0.15, 0.15) });
    y -= 11;
  }

  drawProject(
    '01 — DaFoFe: Daily Food Feedback',
    'Software / Web Application',
    'DaFoFe (Daily Food Feedback) is a feedback platform designed for college hostels, canteens, and food-service environments. It gives students a simple and comfortable way to share their genuine daily opinions about food instead of giving only socially expected answers. This helps management understand student satisfaction, identify common issues, and improve food quality and service.',
    'Give students a simple and comfortable way to express their honest opinion about their daily food experience.'
  );

  drawProject(
    '02 — Aaradhya AI Assistant',
    'Artificial Intelligence / Android Application',
    'Aaradhya AI is an AI-powered personal assistant application designed to provide an interactive conversational experience similar to modern AI assistants. I am developing the project while exploring AI integration, Android development, voice interaction, Firebase, backend services, and modern application development. The project focuses on creating a more personal and interactive assistant experience.',
    'Build an AI assistant that users can interact with naturally and use as a personal digital companion.'
  );

  drawProject(
    '03 — Solar-Powered Smart Water Purification and Quality Monitoring System',
    'Hardware / IoT / Smart India Hackathon Concept',
    'A smart water-management solution combining solar power, water purification, sensors, and monitoring technology. The system is designed to monitor important water parameters and support water treatment, with solar energy as the primary power source for locations where reliable electricity may not always be available. The concept focuses on sustainability, smart monitoring, accessibility, and practical implementation.',
    'Use renewable energy and smart monitoring technology to create a sustainable and intelligent water-purification solution.'
  );

  drawProject(
    '04 — Smart Attendance System',
    'Hardware / IoT Project',
    'A digital attendance solution designed to make attendance recording faster, more accurate, and more secure while reducing proxy attendance. The project combines RFID technology, microcontroller-based processing, LCD display, Wi-Fi connectivity, and cloud-based data storage to identify students and automatically record attendance. Attendance information can be sent to an online database or spreadsheet for digital access.',
    'Replace traditional attendance methods with an automated digital system that helps reduce proxy attendance and simplifies attendance management.'
  );

  y -= 1;

  // --- SKILLS ---
  drawSectionTitle('Skills');

  page.drawText('Programming & Web Development', { x: marginX, y, size: 8.5, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  y -= 10;
  page.drawText('Python  •  TypeScript  •  Java  •  C  •  HTML Web Development', {
    x: marginX,
    y,
    size: 8,
    font: fontRegular,
    color: rgb(0.15, 0.15, 0.15),
  });
  y -= 12;

  page.drawText('Other Technical Interests', { x: marginX, y, size: 8.5, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
  y -= 10;
  page.drawText('AI Integration  •  Android Development  •  Firebase  •  IoT  •  Arduino', {
    x: marginX,
    y,
    size: 8,
    font: fontRegular,
    color: rgb(0.15, 0.15, 0.15),
  });
  y -= 14;

  // Bottom Line & Footer
  page.drawLine({
    start: { x: marginX, y },
    end: { x: width - marginX, y },
    thickness: 0.7,
    color: rgb(0.3, 0.3, 0.3),
  });
  y -= 13;

  drawCenteredText('github.com/Pavankumarperumalla952', 8, fontBold, rgb(0.1, 0.1, 0.1));

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('public/Pavan_Kumar_Perumalla_Resume.pdf', pdfBytes);
  console.log('Successfully generated public/Pavan_Kumar_Perumalla_Resume.pdf! File size:', pdfBytes.length);
}

generateResume().catch(console.error);
