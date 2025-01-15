export type Project = {    
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    demoLink: string;
    sourceCode?: string;
    category: string;
};

export type Category = {
    id: string;
    label: string;
};

export const projects: Project[] = [
    // Frontend Projects
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS, featuring dark mode and responsive design",
      tags: ["Next.js", "React", "Tailwind CSS"],
      image: "/images/portfolio.jpg",
      demoLink: "https://yourportfolio.com",
      sourceCode: "https://github.com/yourusername/portfolio",
      category: "frontend"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Modern dashboard for managing online store inventory and sales analytics",
      tags: ["React", "Material UI", "Chart.js"],
      image: "/images/dashboard.jpg",
      demoLink: "https://dashboard-demo.com",
      sourceCode: "https://github.com/yourusername/dashboard",
      category: "frontend"
    },
    {
      id: 3,
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and interactive maps",
      tags: ["Vue.js", "TailwindCSS", "OpenWeather API"],
      image: "/images/weather.jpg",
      demoLink: "https://weather-app.demo",
      sourceCode: "https://github.com/yourusername/weather",
      category: "frontend"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media engagement and growth",
      tags: ["React", "Redux", "Styled Components"],
      image: "/images/social-dashboard.jpg",
      demoLink: "https://social-metrics.demo",
      sourceCode: "https://github.com/yourusername/social-dashboard",
      category: "frontend"
    },
  
    // Backend Projects
    {
      id: 5,
      title: "Task Management API",
      description: "RESTful API for task management with authentication and real-time updates",
      tags: ["Node.js", "Express", "MongoDB"],
      image: "/images/task-api.jpg",
      demoLink: "https://api-docs.yoursite.com",
      sourceCode: "https://github.com/yourusername/task-api",
      category: "backend"
    },
    {
      id: 6,
      title: "Authentication Service",
      description: "Microservice handling user authentication with JWT and OAuth2",
      tags: ["Python", "FastAPI", "PostgreSQL"],
      image: "/images/auth-service.jpg",
      demoLink: "https://auth-demo.com",
      sourceCode: "https://github.com/yourusername/auth-service",
      category: "backend"
    },
    {
      id: 7,
      title: "E-commerce Backend",
      description: "Scalable backend system for e-commerce platform with payment integration",
      tags: ["Node.js", "NestJS", "MySQL"],
      image: "/images/ecommerce-backend.jpg",
      demoLink: "https://api.ecommerce.demo",
      sourceCode: "https://github.com/yourusername/ecommerce-backend",
      category: "backend"
    },
    {
      id: 8,
      title: "Real-time Chat Server",
      description: "WebSocket-based chat server with message persistence and user presence",
      tags: ["Go", "WebSocket", "Redis"],
      image: "/images/chat-server.jpg",
      demoLink: "https://chat.demo",
      sourceCode: "https://github.com/yourusername/chat-server",
      category: "backend"
    },
  
    // Full Stack Projects
    {
      id: 9,
      title: "Project Management Tool",
      description: "Complete project management solution with real-time collaboration",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/images/project-management.jpg",
      demoLink: "https://project-tool.demo",
      sourceCode: "https://github.com/yourusername/project-tool",
      category: "fullstack"
    },
    {
      id: 10,
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support and SEO optimization",
      tags: ["Next.js", "Django", "PostgreSQL"],
      image: "/images/blog-platform.jpg",
      demoLink: "https://blog-platform.demo",
      sourceCode: "https://github.com/yourusername/blog-platform",
      category: "fullstack"
    },
    {
      id: 11,
      title: "Video Streaming App",
      description: "YouTube-like platform for video sharing and streaming",
      tags: ["Vue.js", "Node.js", "FFmpeg", "AWS"],
      image: "/images/video-stream.jpg",
      demoLink: "https://video-app.demo",
      sourceCode: "https://github.com/yourusername/video-stream",
      category: "fullstack"
    },
    {
      id: 12,
      title: "Real Estate Platform",
      description: "Property listing and management platform with virtual tours",
      tags: ["React", "Express", "MongoDB", "Three.js"],
      image: "/images/real-estate.jpg",
      demoLink: "https://realestate.demo",
      sourceCode: "https://github.com/yourusername/real-estate",
      category: "fullstack"
    },
  
    // DevOps Projects
    {
      id: 13,
      title: "CI/CD Pipeline",
      description: "Automated deployment pipeline using GitHub Actions and AWS",
      tags: ["GitHub Actions", "AWS", "Docker"],
      image: "/images/cicd.jpg",
      demoLink: "https://pipeline.demo",
      sourceCode: "https://github.com/yourusername/cicd-pipeline",
      category: "devops"
    },
    {
      id: 14,
      title: "Infrastructure as Code",
      description: "Cloud infrastructure management using Terraform and AWS",
      tags: ["Terraform", "AWS", "Python"],
      image: "/images/iac.jpg",
      demoLink: "https://iac.demo",
      sourceCode: "https://github.com/yourusername/terraform-aws",
      category: "devops"
    },
    {
      id: 15,
      title: "Kubernetes Cluster",
      description: "Production-grade Kubernetes cluster setup with monitoring",
      tags: ["Kubernetes", "Prometheus", "Grafana"],
      image: "/images/kubernetes.jpg",
      demoLink: "https://k8s.demo",
      sourceCode: "https://github.com/yourusername/k8s-cluster",
      category: "devops"
    },
    {
      id: 16,
      title: "Log Analytics Platform",
      description: "Centralized logging solution using ELK stack",
      tags: ["Elasticsearch", "Logstash", "Kibana"],
      image: "/images/elk.jpg",
      demoLink: "https://logs.demo",
      sourceCode: "https://github.com/yourusername/log-analytics",
      category: "devops"
    },
  
    // Machine Learning Projects
    {
      id: 17,
      title: "Image Classification",
      description: "Deep learning model for image classification using PyTorch",
      tags: ["Python", "PyTorch", "CNN"],
      image: "/images/image-classification.jpg",
      demoLink: "https://classify.demo",
      sourceCode: "https://github.com/yourusername/image-classifier",
      category: "ml"
    },
    {
      id: 18,
      title: "Sentiment Analysis",
      description: "NLP model for analyzing sentiment in social media posts",
      tags: ["Python", "BERT", "Transformers"],
      image: "/images/sentiment.jpg",
      demoLink: "https://sentiment.demo",
      sourceCode: "https://github.com/yourusername/sentiment-analysis",
      category: "ml"
    },
    {
      id: 19,
      title: "Recommendation Engine",
      description: "Movie recommendation system using collaborative filtering",
      tags: ["Python", "Scikit-learn", "pandas"],
      image: "/images/recommendation.jpg",
      demoLink: "https://recommend.demo",
      sourceCode: "https://github.com/yourusername/recommendation-engine",
      category: "ml"
    },
    {
      id: 20,
      title: "Time Series Forecasting",
      description: "Stock price prediction using LSTM networks",
      tags: ["Python", "TensorFlow", "Keras"],
      image: "/images/forecasting.jpg",
      demoLink: "https://forecast.demo",
      sourceCode: "https://github.com/yourusername/time-series",
      category: "ml"
    }
];

// Define categories
export const categories: Category[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'devops', label: 'DevOps' },
    { id: 'ml', label: 'Machine Learning' },
  ];