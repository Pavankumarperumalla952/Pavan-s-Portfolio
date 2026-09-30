import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePDF() {
  const pdfDoc = await PDFDocument.create();
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const page = pdfDoc.addPage([595.28, 841.89]); // A4 in points
  const { width, height } = page.getSize();

  const marginX = 48;
  let cursorY = height - 48;

  // Header: Name centered
  const nameText = 'Pavan Kumar Perumalla';
  const nameWidth = timesBold.widthOfTextAtSize(nameText, 24);
  page.drawText(nameText, {
    x: (width - nameWidth) / 2,
    y: cursorY,
    size: 24,
    font: timesBold,
    color: rgb(0, 0, 0),
  });

  cursorY -= 20;

  // Contact info line centered
  const contactText1 = '8074483783 | pavankumarperumalla952@gmail.com | linkedin.com/in/pavan-kumar-perumalla-481b2834a |';
  const contactText2 = 'github.com/Pavankumarperumalla952';
  const contact1Width = timesRoman.widthOfTextAtSize(contactText1, 8.5);
  const contact2Width = timesRoman.widthOfTextAtSize(contactText2, 8.5);

  page.drawText(contactText1, {
    x: (width - contact1Width) / 2,
    y: cursorY,
    size: 8.5,
    font: timesRoman,
    color: rgb(0, 0, 0),
  });

  cursorY -= 12;
  page.drawText(contactText2, {
    x: (width - contact2Width) / 2,
    y: cursorY,
    size: 8.5,
    font: timesRoman,
    color: rgb(0, 0, 0),
  });

  cursorY -= 24;

  // Helper to draw section heading
  const drawHeading = (title) => {
    page.drawText(title, {
      x: marginX,
      y: cursorY,
      size: 16,
      font: timesBold,
      color: rgb(0, 0, 0),
    });
    cursorY -= 18;
  };

  // Helper to wrap text
  const wrapText = (text, maxWidth, font, size) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  };

  // EDUCATION
  drawHeading('Education');

  const eduItems = [
    { school: 'Dr. DVMM High School', location: 'Parvathipuram', degree: '10th' },
    { school: 'Sri Chaitanya Jr College', location: 'Visakhapatnam', degree: 'Intermediate' },
    { school: 'Lendi Institute of Engineering Technology', location: 'Present', degree: 'B.Tech — Electronics and Communication Engineering (ECE)' },
  ];

  for (const item of eduItems) {
    page.drawText(item.school, {
      x: marginX,
      y: cursorY,
      size: 11,
      font: timesBold,
      color: rgb(0, 0, 0),
    });

    const locWidth = timesBold.widthOfTextAtSize(item.location, 11);
    page.drawText(item.location, {
      x: width - marginX - locWidth,
      y: cursorY,
      size: 11,
      font: timesBold,
      color: rgb(0, 0, 0),
    });

    cursorY -= 13;

    page.drawText(item.degree, {
      x: marginX,
      y: cursorY,
      size: 10,
      font: timesBold,
      color: rgb(0.1, 0.1, 0.1),
    });

    cursorY -= 15;
  }

  cursorY -= 6;

  // PROJECTS
  drawHeading('Projects');

  const projects = [
    {
      num: '01',
      title: 'DaFoFe: Daily Food Feedback',
      category: 'Software / Web Application',
      desc: 'DaFoFe (Daily Food Feedback) is a feedback platform designed for college hostels, canteens, and food-service environments. It gives students a simple and comfortable way to share their genuine daily opinions about food instead of giving only socially expected answers. This helps management understand student satisfaction, identify common issues, and improve food quality and service.',
      keyIdea: 'Give students a simple and comfortable way to express their honest opinion about their daily food experience.',
    },
    {
      num: '02',
      title: 'Aaradhya AI Assistant',
      category: 'Artificial Intelligence / Android Application',
      desc: 'Aaradhya AI is an AI-powered personal assistant application designed to provide an interactive conversational experience similar to modern AI assistants. I am developing the project while exploring AI integration, Android development, voice interaction, Firebase, backend services, and modern application development. The project focuses on creating a more personal and interactive assistant experience.',
      keyIdea: 'Build an AI assistant that users can interact with naturally and use as a personal digital companion.',
    },
    {
      num: '03',
      title: 'Solar-Powered Smart Water Purification and Quality Monitoring System',
      category: 'Hardware / IoT / Smart India Hackathon Concept',
      desc: 'A smart water-management solution combining solar power, water purification, sensors, and monitoring technology. The system is designed to monitor important water parameters and support water treatment, with solar energy as the primary power source for locations where reliable electricity may not always be available. The concept focuses on sustainability, smart monitoring, accessibility, and practical implementation.',
      keyIdea: 'Use renewable energy and smart monitoring technology to create a sustainable and intelligent water-purification solution.',
    },
    {
      num: '04',
      title: 'Smart Attendance System',
      category: 'Hardware / IoT Project',
      desc: 'A digital attendance solution designed to make attendance recording faster, more accurate, and more secure while reducing proxy attendance. The project combines RFID technology, microcontroller-based processing, LCD display, Wi-Fi connectivity, and cloud-based data storage to identify students and automatically record attendance. Attendance information can be sent to an online database or spreadsheet for digital access.',
      keyIdea: 'Replace traditional attendance methods with an automated digital system that helps reduce proxy attendance and simplifies attendance management.',
    },
  ];

  for (const proj of projects) {
    // Title
    const titleLine = `${proj.num} — ${proj.title}`;
    page.drawText(titleLine, {
      x: marginX,
      y: cursorY,
      size: 11,
      font: timesBold,
      color: rgb(0, 0, 0),
    });
    cursorY -= 13;

    // Category
    page.drawText(proj.category, {
      x: marginX,
      y: cursorY,
      size: 10,
      font: timesBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    cursorY -= 12;

    // Description wrapped
    const descLines = wrapText(proj.desc, width - marginX * 2, timesRoman, 8.8);
    for (const line of descLines) {
      page.drawText(line, {
        x: marginX,
        y: cursorY,
        size: 8.8,
        font: timesRoman,
        color: rgb(0.15, 0.15, 0.15),
      });
      cursorY -= 10.5;
    }

    // Key Idea
    const keyIdeaPrefix = 'Key idea: ';
    const keyIdeaLines = wrapText(`${keyIdeaPrefix}${proj.keyIdea}`, width - marginX * 2, timesRoman, 8.8);
    for (let i = 0; i < keyIdeaLines.length; i++) {
      const line = keyIdeaLines[i];
      if (i === 0) {
        page.drawText('Key idea: ', {
          x: marginX,
          y: cursorY,
          size: 8.8,
          font: timesBold,
          color: rgb(0, 0, 0),
        });
        const prefixWidth = timesBold.widthOfTextAtSize('Key idea: ', 8.8);
        const restOfLine = line.substring('Key idea: '.length);
        page.drawText(restOfLine, {
          x: marginX + prefixWidth,
          y: cursorY,
          size: 8.8,
          font: timesRoman,
          color: rgb(0.15, 0.15, 0.15),
        });
      } else {
        page.drawText(line, {
          x: marginX,
          y: cursorY,
          size: 8.8,
          font: timesRoman,
          color: rgb(0.15, 0.15, 0.15),
        });
      }
      cursorY -= 10.5;
    }

    cursorY -= 4;
  }

  cursorY -= 6;

  // SKILLS
  drawHeading('Skills');

  page.drawText('Programming & Web Development', {
    x: marginX,
    y: cursorY,
    size: 10.5,
    font: timesBold,
    color: rgb(0, 0, 0),
  });
  cursorY -= 12;

  page.drawText('Python  •  Typescript  •  Java  •  C  •  HTML Web Development', {
    x: marginX + 12,
    y: cursorY,
    size: 9.5,
    font: timesRoman,
    color: rgb(0.15, 0.15, 0.15),
  });
  cursorY -= 15;

  page.drawText('Other Technical Interests', {
    x: marginX,
    y: cursorY,
    size: 10.5,
    font: timesBold,
    color: rgb(0, 0, 0),
  });
  cursorY -= 12;

  page.drawText('AI Integration  •  Android Development  •  Firebase  •  IoT  •  Arduino', {
    x: marginX + 12,
    y: cursorY,
    size: 9.5,
    font: timesRoman,
    color: rgb(0.15, 0.15, 0.15),
  });
  cursorY -= 20;

  // Bottom line & footer
  page.drawLine({
    start: { x: marginX, y: cursorY },
    end: { x: width - marginX, y: cursorY },
    thickness: 0.8,
    color: rgb(0, 0, 0),
  });

  cursorY -= 14;
  const bottomLink = 'github.com/Pavankumarperumalla952';
  const bottomLinkWidth = timesBold.widthOfTextAtSize(bottomLink, 9.5);
  page.drawText(bottomLink, {
    x: (width - bottomLinkWidth) / 2,
    y: cursorY,
    size: 9.5,
    font: timesBold,
    color: rgb(0, 0, 0),
  });

  // Ensure public directory exists
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(path.join(publicDir, 'Pavan_Kumar_Perumalla_Resume.pdf'), pdfBytes);
  console.log('PDF generated successfully at public/Pavan_Kumar_Perumalla_Resume.pdf');
}

generatePDF().catch(console.error);
