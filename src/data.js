export const profile = {
  name: 'Vallem Vengal Reddy',
  title: 'Python Full Stack Developer & AI Specialist',
  shortTitle: 'Full Stack Developer | AI Specialist',
  bio: [
    "Hey, I'm Vengal — a Python Full Stack Developer who enjoys taking an idea from a blank file to a deployed, working product.",
    "I split my time between building clean, responsive interfaces with React and building solid backend systems with Django, and I like using data — with NumPy, Pandas, and Jupyter Notebook — to make applications smarter, not just functional.",
    "I care about writing code that's easy to hand off, interfaces that don't make people think, and shipping things that are actually used.",
  ],
  email: 'vengalreddy2005@gmail.com',
  phone: '+91 93916 51749',
  linkedin: 'https://www.linkedin.com/in/vallemvengalreddy',
  github: 'https://github.com/vengalreddy422',
  leetcode: 'https://leetcode.com/u/vengalreddy7462/',
}

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export const education = [
  {
    degree: 'MCA (Master of Computer Applications)',
    institution: 'MITS College, Madanapalle',
    grade: 'CGPA: 8.5',
    years: 'Masters',
  },
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: 'Krishna Chaithanya Degree College, Nellore',
    grade: 'CGPA: 8.7',
    years: 'Degree',
  },
  {
    degree: 'Intermediate (BiPC)',
    institution: 'Sri Vikas Junior College, Vinjamuru',
    grade: '847 / 1000 marks',
    years: 'Intermediate',
  },
  {
    degree: '10th Class (SSC)',
    institution: 'Sri Saraswathi High School, Vinjamuru',
    grade: '582 / 600 marks',
    years: 'Class 10',
  },
]

export const experience = [
  {
    role: 'Data Analysis with Python',
    org: 'Self-directed practice',
    period: 'Ongoing',
    tags: ['NumPy', 'Pandas', 'Jupyter Notebook'],
    points: [
      'Performed data cleaning, transformation, and exploratory analysis on CSV datasets using Pandas and NumPy.',
      'Used Jupyter Notebook to prototype analysis workflows, visualize trends, and document findings step by step.',
      'Practiced structuring raw, messy data into a form that is ready for reporting and downstream use.',
    ],
  },
  {
    role: 'Freelance Frontend Developer — HR Frames',
    org: 'HR Frames, Nellore',
    period: 'Freelance',
    tags: ['React.js', 'Vite', 'Vercel'],
    url: 'https://hr-frames-sydb.vercel.app/',
    points: [
      'Built a responsive frontend website for HR Frames, a photo frame business, to showcase their product collections and improve customer engagement.',
      'Designed a clean, modern interface with responsive layouts, smooth navigation, and an optimized browsing experience across desktop and mobile.',
      'Deployed and shipped the application on Vercel.',
    ],
  },
]

export const achievements = [
  { title: '💻 Technical Skills', detail: '20+ Technologies Learned (Ongoing). Continuously learning backend development, REST APIs, Git, GitHub, MySQL, MongoDB, and deployment practices. Building projects to apply new technologies in practical scenarios.' },
  { title: '🧩 Problem Solving', detail: '100+ Coding Problems Solved (Ongoing). Practicing Python programming and Data Structures & Algorithms. Focusing on interview-oriented coding patterns and logical problem solving.' },
  { title: '📚 Continuous Learning', detail: 'Backend Development Journey (2025 – Present). Learning Django REST Framework, authentication, CRUD operations, API development, database design, and deployment. Applying concepts by building complete end-to-end projects.' },
  { title: '📊 Portfolio Counters', detail: '5+ Projects Completed • 3+ Live Deployments • 20+ Technologies Learned • 100+ Coding Problems Solved • 2+ Major Full-Stack Applications • 100% Hands-on Learning' },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'React.js', 'Vite', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['Django', 'Django REST Framework'],
  },
  {
    category: 'Data & AI',
    items: ['NumPy', 'Pandas', 'Jupyter Notebook'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Cloud & Deployment',
    items: ['Vercel', 'Render', 'Cloudinary'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
]

export const proficiency = [
  { label: 'Python', value: 90 },
  { label: 'Django', value: 82 },
  { label: 'React.js', value: 80 },
  { label: 'SQL / MySQL', value: 78 },
  { label: 'Pandas & NumPy', value: 75 },
]

export const projects = [
  {
    title: 'Doctor Connect',
    subtitle: 'Doctor Appointment Booking System',
    description: 'A comprehensive healthcare platform streamlining appointment scheduling, payments, and automated email confirmations.',
    image: '/doctor_connect.png',
    github: 'https://github.com/vengalreddy422/doctor_booking_system',
    overview: 'Engineered a full-stack healthcare scheduling platform that connects patients with medical professionals. The system handles the entire appointment lifecycle, providing a seamless user experience from booking to payment, complete with automated notifications and flexible scheduling options.',
    highlights: [
      'Built an intuitive appointment scheduling system allowing users to easily book, reschedule, or cancel consultations.',
      'Integrated a secure payment gateway to process consultation fees reliably during the booking workflow.',
      'Implemented an automated email notification system to send instant booking confirmations, reminders, and cancellation alerts.',
      'Architected role-based dashboards for doctors to manage availability and for patients to track their appointment history.'
    ],
    tech: ['Python', 'Django', 'Django REST Framework', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Cloudinary', 'Render'],
    url: 'https://doctor-booking-system-9837.onrender.com/',
  },
  {
    title: 'Smart Academic Feedback System',
    subtitle: 'Feedback collection & analytics platform',
    description: 'A role-based platform designed for educational institutions to securely collect, manage, and analyze student feedback.',
    image: '/feedback_system.png',
    github: 'https://github.com/vengalreddy422/smart-academic-feedback-system',
    overview: 'A comprehensive, role-based academic feedback and analytics platform designed for educational institutions to efficiently collect, manage, analyze, and export student feedback. Engineered to simplify workflows for Administrators, Teachers, and Students.',
    highlights: [
      'Architected role-based authentication supporting dynamic feedback forms with public, private, anonymous, and identified responses.',
      'Engineered a powerful analytics dashboard featuring automated PDF and Excel report generation using Pandas, ReportLab, and OpenPyXL.',
      'Implemented QR-code-based feedback access and bulk student data uploads via Excel for streamlined administrative operations.'
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Pandas', 'OpenPyXL', 'ReportLab', 'Psycopg', 'Django ORM'],
    url: 'https://feedback-system-s3ty.onrender.com/',
  },
  {
    title: 'HR Frames',
    subtitle: 'Photo frame business website (Freelance)',
    description: 'A modern, highly responsive frontend showcase website built to display expansive photo frame collections.',
    image: '/hr_frames.png',
    github: 'https://github.com/vengalreddy422/hr_frames',
    overview: 'Engineered a modern and responsive photo frame showcase website for HR Frames. Designed to provide a clean, engaging user experience allowing customers to easily browse product categories, check pricing, and seamlessly contact the business via WhatsApp.',
    highlights: [
      'Developed a highly responsive product gallery with dynamic categorization, frame details, and integrated pricing.',
      'Implemented smooth UI animations and fluid transitions utilizing Framer Motion, GSAP, and Three.js.',
      'Integrated direct WhatsApp contact functionality to streamline the customer acquisition pipeline.',
      'Optimized the site for mobile-first browsing, ensuring lightning-fast performance via Vite and React.'
    ],
    tech: ['React.js', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Framer Motion', 'GSAP', 'Three.js', 'Vercel'],
    url: 'https://hr-frames-sydb.vercel.app/',
  },
]

export const certifications = [
  {
    title: 'Python Full Stack Development',
    issuer: 'Naresh IT, Hyderabad',
    year: '2025',
    description: 'Hands-on training covering Python, Django, databases, and building complete full-stack web applications end to end.',
  },
  {
    title: 'Python Full Stack Bootcamp',
    issuer: 'TAP Academy — MITS College',
    year: '2025',
    description: 'An intensive bootcamp focused on full-stack fundamentals: frontend development, backend logic, and deploying real projects.',
  },
  {
    title: 'Kaggle Python Certificate',
    issuer: 'Kaggle',
    year: 'Online',
    description: 'Covered core Python programming for data science, including data structures, functions, and working with real datasets.',
  },
  {
    title: 'HackerRank Certificate',
    issuer: 'HackerRank',
    year: 'Online',
    description: 'Validated problem-solving and programming fundamentals through timed coding assessments.',
  },
]
