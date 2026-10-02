const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Ensure destination directories exist
const publicDir = path.resolve('public');
const assetsDir = path.resolve('src/assets/images');
fs.mkdirSync(publicDir, { recursive: true });
fs.mkdirSync(assetsDir, { recursive: true });

// 1. NPTEL IoT Certificate SVG (Landscape 1000x750)
const nptelSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 750" width="1000" height="750" style="background:#ffffff; font-family:'Liberation Serif', Georgia, serif;">
  <!-- Background border -->
  <rect width="1000" height="750" fill="#ffffff" />
  <rect x="15" y="15" width="970" height="720" fill="none" stroke="#d4af37" stroke-width="2" />
  <rect x="20" y="20" width="960" height="710" fill="none" stroke="#f1f5f9" stroke-width="1" />

  <!-- Top Elite Ribbon Banner -->
  <polygon points="430,20 570,20 550,68 500,82 450,68" fill="#b91c1c" />
  <text x="500" y="55" font-family="'Liberation Sans', Arial, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">Elite</text>

  <!-- Left: NPTEL Logo Motif -->
  <g transform="translate(85, 95)">
    <circle cx="35" cy="35" r="38" fill="none" stroke="#b91c1c" stroke-width="3" stroke-dasharray="6,3" />
    <circle cx="35" cy="35" r="28" fill="none" stroke="#d97706" stroke-width="2" />
    <circle cx="35" cy="35" r="8" fill="#b91c1c" />
    <path d="M 15 35 Q 35 15 55 35 Q 35 55 15 35" fill="none" stroke="#4f46e5" stroke-width="1.5" />
    <path d="M 35 15 Q 55 35 35 55 Q 15 35 35 15" fill="none" stroke="#059669" stroke-width="1.5" />
  </g>

  <!-- Title Center -->
  <text x="500" y="125" font-family="'Liberation Serif', serif" font-size="34" font-weight="bold" fill="#881337" text-anchor="middle" letter-spacing="0.5">NPTEL ONLINE CERTIFICATION</text>
  <text x="500" y="150" font-family="'Liberation Sans', sans-serif" font-size="14" fill="#334155" text-anchor="middle">(Funded by the MoE, Govt. of India)</text>

  <!-- Right: Skill India Logo & Student Photo -->
  <g transform="translate(835, 38)">
    <text x="55" y="65" font-family="'Liberation Sans', sans-serif" font-size="18" font-weight="bold" fill="#0284c7" text-anchor="middle">Skill India</text>
    <text x="55" y="80" font-family="'Liberation Sans', sans-serif" font-size="10" fill="#475569" text-anchor="middle">कौशल भारत - कुशल भारत</text>
    
    <!-- Photo Box -->
    <rect x="0" y="95" width="110" height="135" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" rx="4" />
    <rect x="0" y="95" width="110" height="135" fill="#2563eb" opacity="0.15" />
    <circle cx="55" cy="140" r="24" fill="#1e3a8a" />
    <path d="M 22 215 C 22 178, 88 178, 88 215 Z" fill="#991b1b" />
    <line x1="35" y1="180" x2="35" y2="225" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="3,3" />
    <line x1="75" y1="180" x2="75" y2="225" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="3,3" />
    <line x1="22" y1="200" x2="88" y2="200" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="3,3" />
    <circle cx="55" cy="138" r="19" fill="#fcd34d" />
    <path d="M 38 132 Q 55 116 72 132 Q 55 124 38 132" fill="#111827" />
  </g>

  <!-- Awarded to -->
  <text x="500" y="210" font-family="'Liberation Serif', serif" font-size="18" font-style="italic" fill="#334155" text-anchor="middle">This certificate is awarded to</text>
  
  <text x="500" y="255" font-family="'Liberation Serif', serif" font-size="28" font-weight="bold" fill="#0f172a" text-anchor="middle" letter-spacing="1">PERUMALLA PAVAN KUMAR</text>
  
  <text x="500" y="295" font-family="'Liberation Serif', serif" font-size="17" fill="#334155" text-anchor="middle">for successfully completing the course</text>
  
  <text x="500" y="340" font-family="'Liberation Serif', serif" font-size="28" font-weight="bold" fill="#0f172a" text-anchor="middle">Introduction to Internet of Things</text>

  <g transform="translate(300, 375)">
    <text x="135" y="20" font-family="'Liberation Serif', serif" font-size="18" fill="#0f172a">with a consolidated score of</text>
    <text x="350" y="20" font-family="'Liberation Serif', serif" font-size="24" font-weight="bold" fill="#0f172a">73</text>
    <text x="395" y="20" font-family="'Liberation Serif', serif" font-size="18" fill="#0f172a">%</text>
  </g>

  <!-- Scores Table -->
  <g transform="translate(230, 420)">
    <rect x="0" y="0" width="540" height="42" fill="#ffffff" stroke="#334155" stroke-width="1.5" />
    <line x1="285" y1="0" x2="285" y2="42" stroke="#334155" stroke-width="1.5" />
    <line x1="190" y1="0" x2="190" y2="42" stroke="#cbd5e1" stroke-width="1" />
    <line x1="455" y1="0" x2="455" y2="42" stroke="#cbd5e1" stroke-width="1" />
    
    <text x="95" y="27" font-family="'Liberation Serif', serif" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">Online Assignments</text>
    <text x="238" y="27" font-family="'Liberation Serif', serif" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">22.28/25</text>

    <text x="370" y="27" font-family="'Liberation Serif', serif" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">Proctored Exam</text>
    <text x="498" y="27" font-family="'Liberation Serif', serif" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">51/75</text>
  </g>

  <!-- Stats & Duration -->
  <text x="500" y="500" font-family="'Liberation Serif', serif" font-size="16" fill="#334155" text-anchor="middle">Total number of candidates certified in this course: <tspan font-weight="bold">43953</tspan></text>
  
  <text x="500" y="555" font-family="'Liberation Serif', serif" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">Jan-Apr 2026</text>
  <text x="500" y="580" font-family="'Liberation Serif', serif" font-size="15" fill="#334155" text-anchor="middle">(12 week course)</text>

  <!-- Coordinator Signature -->
  <g transform="translate(770, 525)">
    <path d="M 20 25 Q 40 5 60 20 T 90 10 T 120 28 T 150 15" fill="none" stroke="#0f172a" stroke-width="1.8" />
    <text x="85" y="45" font-family="'Liberation Serif', serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">Prof. Haimanti Banerji</text>
    <text x="85" y="62" font-family="'Liberation Serif', serif" font-size="12" fill="#334155" text-anchor="middle">Coordinator, NPTEL</text>
    <text x="85" y="78" font-family="'Liberation Serif', serif" font-size="12" fill="#334155" text-anchor="middle">IIT Kharagpur</text>
  </g>

  <!-- Bottom Tan Banner -->
  <rect x="0" y="625" width="1000" height="65" fill="#fed7aa" opacity="0.65" />
  
  <!-- IIT Kharagpur Left -->
  <g transform="translate(30, 630)">
    <circle cx="28" cy="27" r="22" fill="#1e3a8a" />
    <polygon points="28,10 33,24 47,24 36,33 40,46 28,38 16,46 20,33 9,24 23,24" fill="#fcd34d" />
    <text x="60" y="33" font-family="'Liberation Serif', serif" font-size="16" font-weight="bold" fill="#431407">Indian Institute of Technology Kharagpur</text>
  </g>

  <!-- Swayam Right -->
  <g transform="translate(800, 630)">
    <rect x="0" y="4" width="165" height="48" fill="#ffffff" stroke="#fdba74" rx="4" />
    <text x="82" y="16" font-family="'Liberation Sans', sans-serif" font-size="8" font-weight="bold" fill="#ea580c" text-anchor="middle">FREE ONLINE EDUCATION</text>
    <text x="82" y="37" font-family="'Liberation Sans', sans-serif" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">swayam</text>
    <text x="82" y="47" font-family="'Liberation Sans', sans-serif" font-size="7" fill="#475569" text-anchor="middle">शिक्षित भारत, उन्नत भारत</text>
  </g>

  <!-- Dark Red Footer Strip -->
  <rect x="0" y="690" width="1000" height="60" fill="#881337" />
  <text x="35" y="725" font-family="'Liberation Sans', sans-serif" font-size="13" font-weight="bold" fill="#ffffff">Roll No: NPTEL26CS37S868400846</text>
  
  <!-- QR Code -->
  <g transform="translate(490, 695)">
    <rect x="0" y="3" width="40" height="40" fill="#ffffff" />
    <rect x="4" y="7" width="12" height="12" fill="#000000" />
    <rect x="24" y="7" width="12" height="12" fill="#000000" />
    <rect x="4" y="27" width="12" height="12" fill="#000000" />
    <rect x="20" y="23" width="8" height="8" fill="#000000" />
    <rect x="28" y="31" width="8" height="8" fill="#000000" />
    <text x="-12" y="27" font-family="'Liberation Sans', sans-serif" font-size="12" fill="#ffffff" text-anchor="end">To verify the certificate</text>
  </g>

  <text x="965" y="725" font-family="'Liberation Sans', sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="end">No. of credits recommended: 4</text>
</svg>`;

// Helper for Cisco Certificates
function makeCiscoSvg(courseName, bullets, badgeText, badgeColor1, badgeColor2) {
  const bulletLines = bullets
    .map((b, i) => `<text x="95" y="${340 + i * 26}" font-family="'Liberation Sans', Arial, sans-serif" font-size="13.5" fill="#334155">${b}</text>`)
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 750" width="1000" height="750" style="background:#ffffff; font-family:'Liberation Sans', Arial, sans-serif;">
  <!-- Certificate Border & Background -->
  <rect width="1000" height="750" fill="#ffffff" />
  <rect x="18" y="18" width="964" height="714" fill="none" stroke="#e2e8f0" stroke-width="2" rx="4" />

  <!-- Background security waves top right -->
  <g opacity="0.12" stroke="#0284c7" stroke-width="1.2" fill="none">
    <path d="M 600,0 C 700,80 850,50 1000,140" />
    <path d="M 580,0 C 690,90 840,65 1000,165" />
    <path d="M 560,0 C 680,100 830,80 1000,190" />
    <path d="M 540,0 C 670,110 820,95 1000,215" />
    <path d="M 520,0 C 660,120 810,110 1000,240" />
  </g>

  <!-- Cisco Networking Academy Header Logo -->
  <g transform="translate(85, 80)">
    <!-- Cisco Bars -->
    <rect x="0" y="14" width="3" height="12" fill="#0284c7" rx="1.5" />
    <rect x="6" y="8" width="3" height="18" fill="#0284c7" rx="1.5" />
    <rect x="12" y="4" width="3" height="22" fill="#0284c7" rx="1.5" />
    <rect x="18" y="0" width="3" height="26" fill="#0284c7" rx="1.5" />
    <rect x="24" y="6" width="3" height="20" fill="#0284c7" rx="1.5" />
    <rect x="30" y="12" width="3" height="14" fill="#0284c7" rx="1.5" />
    <text x="40" y="12" font-size="13" font-weight="bold" fill="#002c52" letter-spacing="0.5">Networking</text>
    <text x="40" y="26" font-size="13" font-weight="bold" fill="#002c52" letter-spacing="0.5">Academy</text>
    <text x="0" y="45" font-size="18" font-weight="900" fill="#0284c7" letter-spacing="1.5">CISCO</text>
  </g>

  <!-- Main Certificate Title -->
  <text x="85" y="185" font-size="34" font-weight="bold" fill="#002c52">Certificate of Course Completion</text>

  <!-- Recipient Name -->
  <text x="85" y="248" font-size="28" font-weight="bold" font-style="italic" fill="#009eb3" letter-spacing="0.5">PERUMALLA PAVAN KUMAR</text>

  <!-- Credential Description -->
  <text x="85" y="285" font-size="16" fill="#1e293b">has successfully achieved student level credential for completing the <tspan font-style="italic">${courseName}</tspan> course.</text>

  <!-- Learning Outcomes Title -->
  <text x="85" y="325" font-size="15" font-style="italic" font-weight="500" fill="#0f172a">The student was able to proficiently:</text>

  <!-- Bullets -->
  ${bulletLines}

  <!-- Bottom Left: Cisco Verified Digital Badge -->
  <g transform="translate(85, 600)">
    <rect x="0" y="0" width="96" height="96" rx="12" fill="${badgeColor1}" stroke="#cbd5e1" stroke-width="1" />
    <rect x="4" y="4" width="88" height="22" rx="4" fill="#0f172a" />
    <text x="48" y="18" font-size="8" font-weight="bold" fill="#22c55e" text-anchor="middle">Verified</text>
    <circle cx="48" cy="50" r="20" fill="${badgeColor2}" opacity="0.4" />
    <path d="M 12 55 Q 48 35 84 55 Q 48 75 12 55" fill="${badgeColor2}" />
    <text x="48" y="84" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">${badgeText}</text>
  </g>

  <!-- QR Code -->
  <g transform="translate(210, 610)">
    <rect x="0" y="0" width="62" height="62" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />
    <rect x="6" y="6" width="18" height="18" fill="#0f172a" />
    <rect x="38" y="6" width="18" height="18" fill="#0f172a" />
    <rect x="6" y="38" width="18" height="18" fill="#0f172a" />
    <rect x="28" y="28" width="10" height="10" fill="#0f172a" />
    <rect x="38" y="44" width="8" height="8" fill="#0f172a" />
    <text x="31" y="76" font-size="10" fill="#475569" text-anchor="middle">Scan to Verify</text>
  </g>

  <!-- Issue Date -->
  <text x="85" y="718" font-size="12" font-weight="bold" fill="#009eb3">Issued on: Jul 05, 2026</text>

  <!-- Right: Signature Lynn Bloomer -->
  <g transform="translate(520, 615)">
    <path d="M 20 30 Q 60 5 100 25 T 160 10 T 210 28 T 260 15" fill="none" stroke="#002c52" stroke-width="2" />
    <line x1="20" y1="36" x2="280" y2="36" stroke="#cbd5e1" stroke-width="1" />
    <text x="20" y="54" font-size="14" font-weight="bold" fill="#002c52">Lynn Bloomer</text>
    <text x="20" y="70" font-size="13" fill="#475569">Director, Cisco Networking Academy</text>
  </g>
</svg>`;
}

// 2. Cisco Modern AI
const ciscoAiSvg = makeCiscoSvg(
  'Introduction to Modern AI',
  [
    '•  Explain basic concepts in AI and Machine Learning.',
    '•  Use photo apps to classify objects, blur the background of a photo, and explain object detection &amp; segmentation.',
    '•  Use machine translation and explain the nuances and limitations of using AI for language translation.',
    '•  Explain fundamentals of how large language models work, and how to prompt LLMs to make use of these traits.',
    '•  Demonstrate use cases of LLM enabled chatbots: idea generation, summarization, rewording, and grading.',
    '•  Utilize two-way dialogue with chatbots, such as practicing for mock interviews.',
    '•  Facilitate collaboration between two chatbots to achieve a goal.',
    '•  Use LLMs with tools (web search, web page scraping). Multimodal prompting with images and text.'
  ],
  'Modern AI',
  '#065f46',
  '#10b981'
);

// 3. Cisco Data Analytics
const ciscoAnalyticsSvg = makeCiscoSvg(
  'Data Analytics Essentials',
  [
    '•  Explain how the data analytics process creates value from data.',
    '•  Explain the characteristics of data, including formats, availability and methods to acquire.',
    '•  Transform data using analytics tools.',
    '•  Analyze data using basic statistical and data preparation techniques.',
    '•  Complete hands-on lab using Excel, SQL, Tableau and other tools.',
    '•  Evaluate and share project portfolio.'
  ],
  'Data Analytics',
  '#0369a1',
  '#38bdf8'
);

// 4. Cisco Apply AI Reviews
const ciscoApplyAiSvg = makeCiscoSvg(
  'Apply AI: Analyze Customer Reviews',
  [
    '•  Choose the right AI or non-AI tool for each task (LLM, chatbot that runs code, spreadsheet app, text editor).',
    '•  Process tabular data with an LLM, chatbot that writes and runs code, and spreadsheet app (Excel).',
    '•  Format tabular data that can be transferred between a chatbot and spreadsheet app.',
    '•  Prompt a chatbot to write and run code to process tabular data.',
    '•  Write complex spreadsheet formulas with the assistance of a chatbot.',
    '•  Include the "human in the loop" to make final decisions.'
  ],
  'Apply AI Reviews',
  '#15803d',
  '#4ade80'
);

// Array of certificates
const certs = [
  { svg: nptelSvg, baseName: 'Screenshot 2026-10-02 221746', altName: 'nptel_iot_certificate' },
  { svg: ciscoAiSvg, baseName: 'cisco', altName: 'cisco_modern_ai_certificate' },
  { svg: ciscoAnalyticsSvg, baseName: 'cisco 2', altName: 'cisco_data_analytics_certificate' },
  { svg: ciscoApplyAiSvg, baseName: 'cisco 3', altName: 'cisco_apply_ai_certificate' }
];

async function generateAll() {
  for (const { svg, baseName, altName } of certs) {
    const svgPath = path.join(publicDir, `${altName}.svg`);
    fs.writeFileSync(svgPath, svg);

    const pngPublic1 = path.join(publicDir, `${baseName}.png`);
    const pngPublic2 = path.join(publicDir, `${altName}.png`);
    const pngAssets1 = path.join(assetsDir, `${baseName}.png`);
    const pngAssets2 = path.join(assetsDir, `${altName}.png`);

    const pngBuffer = await sharp(Buffer.from(svg))
      .png({ quality: 95, compressionLevel: 8 })
      .toBuffer();

    fs.writeFileSync(pngPublic1, pngBuffer);
    fs.writeFileSync(pngPublic2, pngBuffer);
    fs.writeFileSync(pngAssets1, pngBuffer);
    fs.writeFileSync(pngAssets2, pngBuffer);

    console.log(`Generated high-res PNG for: ${baseName}.png (${pngBuffer.length} bytes)`);
  }
  console.log('All 4 certificate PNGs and SVGs generated successfully with sharp!');
}

generateAll().catch(console.error);
