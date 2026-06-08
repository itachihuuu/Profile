// Centralized Profile & Core Data Configuration System
const PortfolioConfig = {
    profile: {
        name: " Coder Itachi", 
        title: "Front-End Developer & UI Specialist",
        tagline: "Creating modern, responsive, and high-performance web experiences that bring ideas to life.",
        aboutSummary: "I am a Front-End Developer focused on building modern, responsive, and visually engaging websites that deliver exceptional user experiences. I transform ideas, designs, and business goals into fast, interactive, and accessible web interfaces using modern web technologies.My approach combines clean code, attention to detail, and user-centered design principles to create websites that look professional across all devices while maintaining excellent performance. Whether it's a portfolio, business website, landing page, or web application, I strive to build digital experiences that are both aesthetically impressive and highly functional.",
        careerGoals: "To create high-quality web experiences that help businesses, brands, and individuals establish a strong digital presence while continuously advancing my expertise in modern frontend development, UI design, and web performance.",
        resumeUrl: "resume.pdf", 
        profileImage: "pic.jpg",
        corePhiloshpi:"Great design attracts attention, but great user experience builds trust. I believe every website should be visually appealing, responsive, fast, and intuitive. My goal is to create interfaces that not only look outstanding but also provide a seamless experience for every user.",
        resumeSummary:"Front-End Developer specializing in responsive web development, interactive user interfaces, and modern web design. Experienced in building clean, scalable, and performance-focused websites using HTML, CSS, JavaScript, React, and modern frontend technologies.Passionate about transforming concepts into engaging digital experiences through thoughtful design implementation, smooth interactions, and optimized user journeys. Dedicated to delivering professional, user-friendly solutions that help clients strengthen their online presence and achieve their business objectives."
    },
    
    titlesRotation: [
    "Front-End Developer",
    "React.js Developer",
    "Responsive Web Developer",
    "JavaScript Enthusiast",
    "Interactive Web Designer"
],
    
    stats: [
        { label: "Projects Completed", value: 24 },
        { label: "Technologies Learned", value: 12 },
        { label: "Happy Clients", value: 15 },
        { label: "Certifications Earned", value: 8 }
    ],
    
    skills: {
        frontend: [
            { name: "HTML5 / CSS3", level: 95 },
            { name: "JavaScript (ES6+)", level: 90 },
            { name: "React.js", level: 85 },
            { name: "Three.js / WebGL", level: 80 }
        ],
        design: [
            { name: "UI/UX Design", level: 90 },
            { name: "Responsive Layouts", level: 95 },
            { name: "Figma Layering", level: 85 }
        ],
        tools: [
            { name: "Git & GitHub", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "Deployment (Render/Netlify)", level: 90 }
        ]
    },
    
    services: [
        { title: "Landing Page Development", desc: "High-conversion, sleek promotional pages designed with razor-sharp responsive optimization." },
        { title: "3D Portfolio Websites", desc: "Immersive development portfolios using specialized WebGL visual effects to showcase your distinct identity." },
        { title: "UI/UX Code Implementation", desc: "Flawless translation of conceptual layouts into interactive, fluid design tokens." },
        { title: "Custom JavaScript Solutions", desc: "Engineered application logic optimized for native micro-interactions and dependency-free rendering." }
    ],
    
    projects: [
        {
            title: "Birthday wish surprise",
            category: "surprise",
            desc: "A full customized wish surprise for your partner and friend. <br><br> To unlock and access the inner content of this website use password 'PANDA'. ",
            tech: ["React", "Node.js", "CSS Modules"],
            image: "bdypic.png",
            demoUrl: "https://panda-birthday-wish.netlify.app",
            sourceUrl: "#"
        },
        {
            title: "AI Telegram Engine Bot (comming soon...)",
            category: "ai",
            desc: "An upcoming AI-powered Telegram automation platform currently under development. Features and source code will be available after release.",
            tech: ["Python", "Flask", "Telebot API"],
            image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=500&auto=format&fit=crop",
            demoUrl: "paste web url here",
            sourceUrl: "#",
            comingSoon: true
        }
    ],
    // review section
    testimonials: [
        { name: "Alex Rivers", role: "Product Manager", feedback: "The 3D portfolio layout blew our team away. The micro-interactions and high-framerate executions are top-tier.", rating: 5 },
        { name: "Sarah Jenkins", role: "Tech Founder", feedback: "Clean code architecture, zero reliance on bloated frameworks, and exceptionally responsive delivery.", rating: 5 }
    ],
    
    // 🌟 COMPLETE COMMUNICATION PORTAL LINKS MATRIX
    socials: {
        telegram: "https://t.me/yourusername",
        instagram: "https://instagram.com/itachihudost",
        github: "https://github.com/itachihuuu",
        linkedin: "https://linkedin.com/in/yourusername",
        whatsapp: "https://wa.me/9262281487",
        gmail: "mr.xxxshivam01@gmail.com"
    }
};

export default PortfolioConfig;
