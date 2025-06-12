export const portfolioData = {
  name: "Kundana Reddy Tamma",
  title: "Full Stack Developer & AI/ML Enthusiast",
  description: "AI & Web Developer passionate about building smart, user-focused applications. Blending machine intelligence with clean, responsive design to solve real-world problems.",
  bio: {
    short: "I'm a passionate AI/ML enthusiast and web developer, always eager to build innovative solutions and create impactful projects. Currently pursuing a B.Tech in Artificial Intelligence and Machine Learning, I love blending AI with modern web technologies to deliver real-world impact.",
    detailed: [
      "What started as a curiosity about how machines can think has evolved into a dedication to developing intelligent systems that enhance everyday interactions. I focus on building applications that are not only functional and efficient, but also clean, responsive, and accessible to all.",
      "My expertise spans across machine learning algorithms, web development frameworks, and modern deployment technologies. I'm constantly exploring new ways to integrate AI capabilities into web applications to create more intelligent and personalized user experiences."
    ]
  },
  stats: {
    projects: "10+",
    technologies: "10+",
    skills: "15+"
  },
  contact: {
    email: "kundanareddytamma@gmail.com",
    phone: "+91 6304461919",
    location: "Vijayawada, Andhra Pradesh, India"
  },
  social: {
    github: "https://github.com/kundanareddy2830",
    linkedin: "https://www.linkedin.com/in/kundanareddytamma",
    twitter: "#",
    email: "mailto:kundanareddytamma@gmail.com"
  },
  skills: {
    frontend: [
      { name: "React", icon: "fab fa-react", color: "text-[#61DAFB]" },
      { name: "JavaScript", icon: "fab fa-js", color: "text-[#F7DF1E]" },
      { name: "HTML5", icon: "fab fa-html5", color: "text-[#E34F26]" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "text-[#1572B6]" },
      { name: "TypeScript", icon: "fab fa-js", color: "text-[#3178C6]" },
      { name: "Tailwind", icon: "fab fa-css3", color: "text-[#06B6D4]" }
    ],
    aiml: [
      { name: "TensorFlow", icon: "fab fa-python", color: "text-[#FF6F00]" },
      { name: "PyTorch", icon: "fab fa-python", color: "text-[#EE4C2C]" },
      { name: "Scikit-learn", icon: "fab fa-python", color: "text-[#F7931E]" },
      { name: "OpenCV", icon: "fas fa-camera", color: "text-[#5C3EE8]" },
      { name: "NLP", icon: "fas fa-comments", color: "text-[#4CAF50]" },
      { name: "Computer Vision", icon: "fas fa-eye", color: "text-[#2196F3]" }
    ],
    programming: [
      { name: "Python", icon: "fab fa-python", color: "text-[#3776AB]" },
      { name: "Java", icon: "fab fa-java", color: "text-[#007396]" },
      { name: "C++", icon: "fas fa-code", color: "text-[#00599C]" },
      { name: "SQL", icon: "fas fa-database", color: "text-[#336791]" },
      { name: "Git", icon: "fab fa-git-alt", color: "text-[#F05032]" },
      { name: "Docker", icon: "fab fa-docker", color: "text-[#2496ED]" }
    ],
    frameworks: [
      { name: "Node.js", icon: "fab fa-node-js", color: "text-[#339933]" },
      { name: "Express", icon: "fas fa-server", color: "text-[#000000]" },
      { name: "Flask", icon: "fas fa-flask", color: "text-[#000000]" },
      { name: "Next.js", icon: "fab fa-react", color: "text-[#000000]" },
      { name: "Vue.js", icon: "fab fa-vuejs", color: "text-[#4FC08D]" }
    ],
    cloud: [
      { name: "AWS", icon: "fab fa-aws", color: "text-[#232F3E]" },
      { name: "Azure", icon: "fab fa-microsoft", color: "text-[#0078D4]" },
      { name: "MongoDB", icon: "fas fa-database", color: "text-[#47A248]" }
    ]
  },
  education: {
    degree: {
      institution: "Dhanekula Institute of Engineering and Technology, Vijayawada",
      program: "B.Tech in Artificial Intelligence & Machine Learning",
      duration: "2023 - 2027",
      courses: [
        "Artificial Intelligence",
        "Machine Learning", 
        "Web Development",
        "Data Structures & Algorithms",
        "Computer Vision"
      ]
    },
    certifications: [
      { name: "Artificial Intelligence Fundamentals", provider: "IBM" },
      { name: "Applications of AI", provider: "Great Learning" },
      { name: "Big Data Technologies and Applications", provider: "Coursera" },
      { name: "Introduction to Large Language Models", provider: "Google Cloud" },
      { name: "ChatGPT for Beginners", provider: "Great Learning" },
      { name: "Neural Networks and Deep Learning", provider: "Great Learning" },
      { name: "Data Structures", provider: "Infosys" },
      { name: "OpenCV Certification", provider: "OpenCV University" },
      { name: "Fundamentals of Generative AI", provider: "Microsoft" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Movie Recommender System",
      description: "Built a content-based movie recommendation system using user preferences. Integrated TMDB API and deployed using Streamlit with intelligent recommendation algorithms.",
      shortDescription: "AI-powered movie recommendations using machine learning",
      image: "/images/projects/movie-recommender.jpg",
      technologies: ["Python", "Streamlit", "Pandas", "TMDB API", "Pickle"],
      demoUrl: "https://movierecommendation-system28.streamlit.app/",
      githubUrl: "https://github.com/kundanareddy2830/movie_recommendation-system.git"
    },
    {
      id: 2,
      title: "Object Detection System",
      description: "Developed a real-time object detection web app using YOLOv8 and webcam/image input. Created an intuitive UI with adjustable detection settings.",
      shortDescription: "Real-time object detection with YOLOv8 integration",
      image: "/images/projects/object-detection.jpg",
      technologies: ["Streamlit", "OpenCV", "YOLOv8", "PIL", "NumPy"],
      demoUrl: "https://object-detection-28.streamlit.app/",
      githubUrl: "https://github.com/kundanareddy2830/object-detection.git"
    },
    {
      id: 3,
      title: "Adaptive Quiz App",
      description: "A React-based quiz application that intelligently adapts question difficulty based on user performance. Features a modern, animated UI with engaging interactions.",
      shortDescription: "Smart quiz app with adaptive difficulty system",
      image: "/images/projects/quiz-app.jpg",
      technologies: ["React.js", "CSS", "HTML"],
      demoUrl: "https://kundanareddy2830.github.io/quiz/",
      githubUrl: "https://github.com/kundanareddy2830/quiz.git"
    },
    {
      id: 4,
      title: "Interactive Chess Game",
      description: "Created a fully functional chess game with interactive UI and logic. Implemented turn-based system, piece selection, and valid move handling with elegant design.",
      shortDescription: "Full-featured chess game with interactive gameplay",
      image: "/images/projects/chess-game.jpg",
      technologies: ["JavaScript", "HTML", "CSS", "jQuery"],
      demoUrl: "https://kundanareddy2830.github.io/chess-game/",
      githubUrl: "https://github.com/kundanareddy2830/chess-game.git"
    },
    {
      id: 5,
      title: "Simon Says Game",
      description: "Developed a memory-based Simon Says game with event-driven programming. Features interactive gameplay, sound effects, and progressive difficulty levels.",
      shortDescription: "Classic memory game with interactive design",
      image: "/images/projects/simon-says.jpg",
      technologies: ["JavaScript", "HTML", "CSS"],
      demoUrl: "https://kundanareddy2830.github.io/simon-game/",
      githubUrl: "https://github.com/kundanareddy2830/simon-game.git"
    },
    {
      id: 6,
      title: "Spotify Music Interface",
      description: "Built a responsive music player with sleek UI and basic functionality. Features include playlist management, responsive design, and modern interface elements.",
      shortDescription: "Modern music player with responsive design",
      image: "/images/projects/spotify-ui.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://kundanareddy2830.github.io/spotify-UI/",
      githubUrl: "https://github.com/kundanareddy2830/spotify-UI.git"
    },
    {
      id: 7,
      title: "Music Playlist Player",
      description: "Built a responsive music player with sleek UI and basic functionality. Features playlist management, audio controls, and modern interface design.",
      shortDescription: "Interactive music playlist with audio controls",
      image: "/images/projects/playlist.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://kundanareddy2830.github.io/Playlist/",
      githubUrl: "https://github.com/kundanareddy2830/Playlist.git"
    },
    {
      id: 8,
      title: "Chat Application Interface",
      description: "Built a chat UI with sidebar navigation, message bubbles, and mobile-friendly design. Features responsive layout and modern messaging interface.",
      shortDescription: "Modern chat interface with responsive design",
      image: "/images/projects/chat-app.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://kundanareddy2830.github.io/Chat-Application/",
      githubUrl: "https://github.com/kundanareddy2830/Chat-Application.git"
    },
    {
      id: 9,
      title: "Swipe-Based Learning Recommendation",
      description: "A modern, interactive application that helps users discover personalized learning techniques through an intuitive swipe interface. The system intelligently learns from user preferences.",
      shortDescription: "Personalized learning recommendations with swipe interface",
      image: "/images/projects/learning-app.jpg",
      technologies: ["React.js", "HTML", "CSS"],
      demoUrl: "https://kundanareddy2830.github.io/swipe-based-recommender/",
      githubUrl: "https://github.com/kundanareddy2830/swipe-based-recommender.git"
    }
  ]
};
