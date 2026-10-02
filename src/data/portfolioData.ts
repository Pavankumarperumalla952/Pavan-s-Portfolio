import { Project, EducationItem, HobbyItem, SkillCategory, Certificate } from '../types';

export const PERSONAL_INFO = {
  name: 'Pavan Kumar Perumalla',
  role: 'B.Tech Student | Electronics & Communication Engineering | Software & AI Enthusiast',
  college: 'Lendi Institute of Engineering Technology',
  location: 'Andhra Pradesh, India',
  phone: '8074483783',
  email: 'pavankumarperumalla952@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pavan-kumar-perumalla-481b2834a',
  github: 'https://github.com/Pavankumarperumalla952',
  resumeUrl: '/Pavan_Kumar_Perumalla_Resume.pdf',
  summary: 'ECE undergraduate with hands-on experience building software, AI, Android, and IoT projects. Experienced with Python, Java, TypeScript, web development, Firebase, and microcontroller-based systems, with a growing focus on software and AI development. Passionate about building practical, user-focused solutions and continuously learning modern technologies.',
  interests: [
    'Software Development',
    'Artificial Intelligence',
    'Web Technologies',
    'Android Development',
    'IoT',
    'Real-World Problem Solving'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'dafofe',
    num: '01',
    title: 'DaFoFe: Daily Food Feedback',
    category: 'Software / Web Application',
    tagline: 'Bridging honest student voices with cafeteria administration',
    keyIdea: 'Give students a simple and comfortable way to express their honest opinion about their daily food experience.',
    description: 'DaFoFe (Daily Food Feedback) is a feedback platform designed for college hostels, canteens, and food-service environments. Usually, when a person in charge asks students, "How is the food?", students may simply say that it is good, even when they have genuine complaints or suggestions. This makes it difficult for management to understand students\' actual opinions. DaFoFe provides students with a simple platform where they can share their own opinions and feedback about the food on a daily basis. This allows management to understand student satisfaction, identify common issues, and use genuine feedback to improve food quality and service.',
    features: [
      'Daily anonymous meal evaluation system eliminating social awkwardness',
      'Categorized feedback on taste, hygiene, quantity, and serving time',
      'Management analytics dashboard tracking student satisfaction trends over time',
      'Automated issue aggregation highlighting recurring canteen concerns'
    ],
    techStack: ['Web Development', 'TypeScript', 'React', 'HTML / CSS', 'Firebase / Database', 'Analytics'],
    image: '/src/assets/images/project_dafofe_mockup_1790789750913.jpg',
    githubUrl: 'https://github.com/Pavankumarperumalla952',
    status: 'Completed Prototyping'
  },
  {
    id: 'aaradhya-ai',
    num: '02',
    title: 'Aaradhya AI Assistant',
    category: 'Artificial Intelligence / Android Application',
    tagline: 'Personal conversational companion with voice interaction and cloud sync',
    keyIdea: 'Build an AI assistant that users can interact with naturally and use as a personal digital companion.',
    description: 'Aaradhya AI is an AI-powered personal assistant application designed to provide an interactive conversational experience similar to modern AI assistants where users can communicate with an AI through natural language. The application is designed to understand user questions and provide useful responses through a conversational interface. I am developing the project while exploring AI integration, Android development, voice interaction, Firebase, backend services, and modern application development. The project also focuses on creating a more personal and interactive assistant experience rather than simply providing a basic question-and-answer interface.',
    features: [
      'Natural language conversation pipeline with context-aware responses',
      'Voice input and speech synthesis for touchless interaction',
      'Firebase cloud backend for profile synchronization and chat history',
      'Fluid Android client interface with adaptive conversational cards'
    ],
    techStack: ['Artificial Intelligence', 'Android Development', 'Java', 'Firebase', 'Voice Interaction', 'Python'],
    image: '/src/assets/images/project_aaradhya_ai_1790789763032.jpg',
    githubUrl: 'https://github.com/Pavankumarperumalla952',
    status: 'In Active Development'
  },
  {
    id: 'solar-water',
    num: '03',
    title: 'Solar-Powered Smart Water Purification & Monitoring',
    category: 'Hardware / IoT / Smart India Hackathon Concept',
    tagline: 'Sustainable solar-driven water purification with real-time IoT parameter tracking',
    keyIdea: 'Use renewable energy and smart monitoring technology to create a sustainable and intelligent water-purification solution.',
    description: 'The Solar-Powered Smart Water Purification and Quality Monitoring System is a smart water-management solution designed to address the problems of water purification, water-quality monitoring, and energy availability. The system combines solar power, water purification, sensors, and monitoring technology to create a sustainable solution for checking and improving water quality. Sensors can be used to monitor important water parameters, while the purification unit helps treat the water based on the system design. Using solar energy as the primary power source makes the system suitable for locations where reliable electricity is unavailable. Designed around the real-world problem-solving approach encouraged by the Smart India Hackathon.',
    features: [
      'Integrated solar energy harvesting circuit ensuring off-grid operation',
      'Multi-sensor IoT telemetry array measuring pH, TDS (Total Dissolved Solids), and turbidity',
      'Automated multi-stage filtration control mechanism',
      'Remote telemetry data streaming for water safety compliance and alerts'
    ],
    techStack: ['Hardware Engineering', 'IoT Sensors', 'Solar Power Circuits', 'Microcontroller / Arduino', 'Embedded C', 'Telemetry'],
    image: '/src/assets/images/project_solar_water_1790789775370.jpg',
    githubUrl: 'https://github.com/Pavankumarperumalla952',
    status: 'Hackathon Concept & Prototype'
  },
  {
    id: 'smart-attendance',
    num: '04',
    title: 'Smart Attendance System',
    category: 'Hardware / IoT Project',
    tagline: 'Automated RFID digital attendance eliminating proxy records and manual calling',
    keyIdea: 'Replace traditional attendance methods with an automated digital system that helps reduce proxy attendance and simplifies attendance management.',
    description: 'The Smart Attendance System is a digital attendance solution designed to make attendance recording faster, more accurate, and more secure while reducing the possibility of proxy attendance. Instead of manually calling names or maintaining attendance records on paper, students can register their attendance using a digital identification system. The system can identify a student and automatically record the attendance along with the required details. The project combines hardware, RFID technology, microcontroller-based processing, LCD display, Wi-Fi connectivity, and cloud-based data storage to create an automated attendance system that streams records to an online database.',
    features: [
      'High-speed contactless RFID card authentication for instant identification',
      'Microcontroller core managing tag verification and debounce algorithms',
      '16x2 alphanumeric LCD display providing real-time visual feedback and student greeting',
      'Wi-Fi module transmitting timestamped attendance directly to cloud databases'
    ],
    techStack: ['Hardware / Embedded', 'RFID Technology', 'Arduino / Microcontroller', 'C', 'Wi-Fi / IoT', 'Cloud Database'],
    image: '/src/assets/images/project_smart_attendance_1790789788107.jpg',
    githubUrl: 'https://github.com/Pavankumarperumalla952',
    status: 'Working Prototype'
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'lendi',
    institution: 'Lendi Institute of Engineering Technology',
    degree: 'B.Tech — Electronics and Communication Engineering (ECE)',
    location: 'Jonnada, Vizianagaram',
    period: 'Currently Pursuing',
    statusBadge: 'Current Academic Focus',
    description: 'Pursuing undergraduate degree in ECE with a dedicated focus on software development, AI, embedded systems, and IoT. Actively bridging hardware fundamentals with modern programming paradigms.',
    tags: ['ECE Core', 'Digital Electronics', 'Microcontrollers', 'Software Dev', 'AI & Machine Learning']
  },
  {
    id: 'chaitanya',
    institution: 'Sri Chaitanya Jr College, Visakhapatnam',
    degree: 'Intermediate',
    location: 'Visakhapatnam, Andhra Pradesh',
    period: 'Completed',
    statusBadge: 'Higher Secondary',
    grade: '75%',
    description: 'Comprehensive study of higher secondary sciences and mathematics. Developed foundational analytical capabilities, scientific reasoning, and problem-solving discipline.',
    tags: ['Mathematics', 'Physics', 'Chemistry', 'Analytical Reasoning']
  },
  {
    id: 'dvmm',
    institution: 'Dr. DVMM High School, Parvathipuram',
    degree: '10th',
    location: 'Parvathipuram, Andhra Pradesh',
    period: 'Completed',
    statusBadge: 'Secondary Education',
    grade: '83%',
    description: 'Foundational schooling that sparked an enduring curiosity about how mechanical and electronic things work, leading toward an engineering journey.',
    tags: ['General Science', 'Mathematics', 'Foundational Studies']
  }
];

export const HOBBIES: HobbyItem[] = [
  {
    id: 'story-writing',
    title: 'Writing Stories',
    shortDesc: 'Crafting original plots, building worlds, and developing compelling character arcs.',
    fullDesc: 'One of my favourite hobbies is writing stories. I enjoy creating ideas, developing characters, imagining situations, and turning thoughts into stories. It trains creative problem-solving and structured narrative thinking.',
    iconName: 'PenTool',
    accent: 'from-amber-500/20 to-orange-500/20'
  },
  {
    id: 'filmmaking',
    title: 'Filmmaking & Short Films',
    shortDesc: 'Fusing visual direction, pacing, soundscapes, and digital tools into motion narratives.',
    fullDesc: 'I am interested in making short films because filmmaking allows me to combine storytelling, creativity, visuals, and technology. It gives a unique medium to communicate concepts vividly.',
    iconName: 'Video',
    accent: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    id: 'current-affairs',
    title: 'Current Affairs & World Events',
    shortDesc: 'Tracking geopolitical dynamics, global technological shifts, and sociopolitical trends.',
    fullDesc: 'I have a strong interest in current affairs and world events. I enjoy learning about what is happening around the world and understanding the background, history, and implications behind important events.',
    iconName: 'Globe',
    accent: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'history',
    title: 'History & Civilization',
    shortDesc: 'Examining past turning points to decode how today\'s scientific and societal world developed.',
    fullDesc: 'History is another subject I enjoy exploring because understanding the past helps me understand how the present world developed, evolved, and continues to transform.',
    iconName: 'BookOpen',
    accent: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'exploring',
    title: 'Exploring New Technologies',
    shortDesc: 'Hands-on experimentation with emerging developer tools, frameworks, and electronics.',
    fullDesc: 'Whether it is a new technology, software tool, idea, subject, or project, I like experimenting and learning through direct experience rather than abstract theory.',
    iconName: 'Sparkles',
    accent: 'from-pink-500/20 to-rose-500/20'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming & Web Development',
    description: 'Core languages and web technologies used for building interactive applications',
    skills: [
      { name: 'Python', level: 'Core', description: 'Scripting, AI prototyping, data processing, and algorithmic problem-solving' },
      { name: 'TypeScript', level: 'Proficient', description: 'Type-safe frontend development, React components, and modern web apps' },
      { name: 'Java', level: 'Intermediate', description: 'Object-oriented programming, data structures, and Android foundation' },
      { name: 'C', level: 'Intermediate', description: 'Low-level programming, memory logic, and microcontroller firmware' },
      { name: 'HTML & CSS', level: 'Proficient', description: 'Semantic structure, responsive layouts, Tailwind CSS, and UX styling' },
      { name: 'Web Development', level: 'Proficient', description: 'Building full responsive applications, APIs, and state management' }
    ]
  },
  {
    title: 'Other Technical Interests',
    description: 'Hardware integration, mobile systems, cloud infrastructure, and intelligent agents',
    skills: [
      { name: 'AI Integration', level: 'Focus Area', description: 'Conversational LLMs, prompt engineering, and intelligent app features' },
      { name: 'Android Development', level: 'Focus Area', description: 'Mobile UI design, activity lifecycles, and Android Studio workflows' },
      { name: 'Firebase', level: 'Proficient', description: 'Firestore real-time databases, authentication, and cloud services' },
      { name: 'IoT (Internet of Things)', level: 'Applied', description: 'Connecting physical sensors with cloud telemetries and dashboards' },
      { name: 'Arduino', level: 'Applied', description: 'Microcontroller circuit design, sensor interfacing, and hardware prototyping' }
    ]
  },
  {
    title: 'Engineering & Development Practices',
    description: 'Methodologies and tools for delivering reliable, collaborative digital solutions',
    skills: [
      { name: 'Git & GitHub', level: 'Essential', description: 'Version control, repository management, branching, and code collaboration' },
      { name: 'Hardware Prototyping', level: 'Applied', description: 'Breadboarding, circuit wiring, RFID integration, and LCD displays' },
      { name: 'Analytical Thinking', level: 'Strengths', description: 'Breaking complex engineering problems into clean, modular solutions' },
      { name: 'Continuous Learning', level: 'Strengths', description: 'Eager exploration of emerging software, libraries, and global trends' }
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'nptel-iot',
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL • IIT Kharagpur (Funded by MoE, Govt. of India)',
    date: 'Jan-Apr 2026 (12 Week Course)',
    score: '73% (Consolidated)',
    badge: 'Elite • Skill India',
    image: '/Screenshot 2026-10-02 221746.png',
    fallbackImage: '/nptel_iot_certificate.png',
    skills: ['Internet of Things (IoT)', 'Sensors & Actuators', 'Embedded Systems', 'IIT Kharagpur']
  },
  {
    id: 'cisco-ai',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    date: 'Issued on Jul 05, 2026',
    badge: 'Verified Credential',
    image: '/cisco.png',
    fallbackImage: '/cisco_modern_ai_certificate.png',
    skills: ['Artificial Intelligence', 'Machine Learning', 'LLMs & Prompting', 'Chatbots']
  },
  {
    id: 'cisco-analytics',
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Issued on Jul 05, 2026',
    badge: 'Verified Credential',
    image: '/cisco 2.png',
    fallbackImage: '/cisco_data_analytics_certificate.png',
    skills: ['Data Analytics', 'SQL & Tableau', 'Data Preparation', 'Excel Labs']
  },
  {
    id: 'cisco-apply-ai',
    title: 'Apply AI: Analyze Customer Reviews',
    issuer: 'Cisco Networking Academy',
    date: 'Issued on Jul 05, 2026',
    badge: 'Verified Credential',
    image: '/cisco 3.png',
    fallbackImage: '/cisco_apply_ai_certificate.png',
    skills: ['Applied AI', 'Tabular Data Processing', 'Prompt Engineering', 'Spreadsheet Automation']
  }
];
