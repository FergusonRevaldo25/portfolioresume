export type Project = { id: number; title: string; category: string; image: string; badges: string[]; description: string; demo: string; repo: string };

export const allProjects: Project[] = [
  {
    "id": 14,
    "title": "GitHub Actions CI/CD Pipeline",
    "category": "devops",
    "image": "/projects/github-actions.jpg",
    "badges": [
      "GitHub Actions",
      "CI/CD",
      "Python",
      "Automation"
    ],
    "description": "Automated CI/CD pipeline with GitHub Actions. Runs Python unit tests automatically on every push.",
    "demo": "https://github.com/FergusonRevaldo25/python-cicd-demo",
    "repo": "https://github.com/FergusonRevaldo25/python-cicd-demo"
  },
  {
    "id": 15,
    "title": "Terraform Infrastructure as Code",
    "category": "devops",
    "image": "/projects/terraform.jpg",
    "badges": [
      "Terraform",
      "Docker",
      "IaC",
      "Nginx"
    ],
    "description": "Infrastructure as Code using Terraform to provision Docker containers with Nginx web server.",
    "demo": "#",
    "repo": "https://github.com/FergusonRevaldo25/terraform-docker-demo"
  },
  {
    "id": 16,
    "title": "Kubernetes with Minikube",
    "category": "devops",
    "image": "/projects/kubernetes.jpg",
    "badges": [
      "Kubernetes",
      "Minikube",
      "Pods",
      "Scaling"
    ],
    "description": "Local Kubernetes cluster with Minikube featuring 5-replica Nginx deployment and self-healing pods.",
    "demo": "#",
    "repo": "https://github.com/FergusonRevaldo25/kubernetes-minikube-demo"
  },
  {
    "id": 17,
    "title": "Prometheus + Grafana Stack",
    "category": "devops",
    "image": "/projects/prometheus-grafana.jpg",
    "badges": [
      "Prometheus",
      "Grafana",
      "Docker",
      "Monitoring"
    ],
    "description": "Complete monitoring stack with Prometheus metrics collection and Grafana dashboards.",
    "demo": "#",
    "repo": "https://github.com/FergusonRevaldo25/prometheus-grafana-stack"
  },
  {
    "id": 10,
    "title": "Automated Log Archiver",
    "category": "devops",
    "image": "/projects/log-archiver.jpg",
    "badges": [
      "Bash",
      "Cron",
      "Linux",
      "Automation"
    ],
    "description": "Bash script that compresses logs with timestamps, archives them, and schedules daily backups via cron.",
    "demo": "#",
    "repo": "https://github.com/FergusonRevaldo25/nqf5-devops-portfolio"
  },
  {
    "id": 11,
    "title": "Nginx Static Portfolio",
    "category": "devops",
    "image": "/projects/nginx.jpg",
    "badges": [
      "Nginx",
      "Linux",
      "HTML/CSS"
    ],
    "description": "Manual Linux server provisioning with Nginx hosting a static website with security headers.",
    "demo": "#",
    "repo": "https://github.com/FergusonRevaldo25/nqf5-devops-portfolio"
  },
  {
    "id": 12,
    "title": "Containerized Python App",
    "category": "devops",
    "image": "/projects/docker.jpg",
    "badges": [
      "Docker",
      "Python",
      "Flask"
    ],
    "description": "Multi-stage Docker containerization of a Python Flask app with 84% size reduction.",
    "demo": "#",
    "repo": "https://github.com/FergusonRevaldo25/nqf5-devops-portfolio"
  },
  {
    "id": 1,
    "title": "Glass Morphic Auth",
    "category": "auth",
    "image": "/projects/glass.auth.jpg",
    "badges": [
      "Authentication",
      "Security",
      "UI/UX"
    ],
    "description": "Modern authentication system with glass morphic design, behavioral CAPTCHA, and 2FA support.",
    "demo": "https://fergusonrevaldo25.github.io/auth-system",
    "repo": "https://github.com/FergusonRevaldo25/auth-system"
  },
  {
    "id": 2,
    "title": "Split-Screen Login",
    "category": "auth",
    "image": "/projects/split.jpg",
    "badges": [
      "Login",
      "Cloudflare",
      "Security"
    ],
    "description": "50/50 split-screen login design with Cloudflare Turnstile CAPTCHA integration.",
    "demo": "https://fergusonrevaldo25.github.io/split-login",
    "repo": "https://github.com/FergusonRevaldo25/split-login"
  },
  {
    "id": 3,
    "title": "Neo-Brutalist Gamified",
    "category": "auth",
    "image": "/projects/neo.jpg",
    "badges": [
      "Gamification",
      "XP System",
      "Interactive"
    ],
    "description": "Gamified authentication with XP earning system and battle CAPTCHA mechanics.",
    "demo": "https://fergusonrevaldo25.github.io/neo-brutalist-login",
    "repo": "https://github.com/FergusonRevaldo25/neo-brutalist-login"
  },
  {
    "id": 4,
    "title": "Glass Dashboard",
    "category": "dashboard",
    "image": "/projects/glassd.jpg",
    "badges": [
      "Dashboard",
      "Analytics",
      "CRUD"
    ],
    "description": "Complete admin dashboard with user management, real-time analytics, and dark mode.",
    "demo": "https://fergusonrevaldo25.github.io/Glass-Morphic-Authentication-Dashboard/",
    "repo": "https://github.com/FergusonRevaldo25/Glass-Morphic-Authentication-Dashboard"
  },
  {
    "id": 7,
    "title": "Weather Dashboard",
    "category": "dashboard",
    "image": "/projects/weather.jpg",
    "badges": [
      "Weather",
      "API",
      "Live Data"
    ],
    "description": "Live weather monitoring dashboard with 3-day forecast and city search.",
    "demo": "https://fergusonrevaldo25.github.io/weather-dashboard",
    "repo": "https://github.com/FergusonRevaldo25/weather-dashboard"
  },
  {
    "id": 8,
    "title": "IT Pro Solutions",
    "category": "dashboard",
    "image": "/projects/it.jpg",
    "badges": [
      "E-commerce",
      "Real-time",
      "Payments"
    ],
    "description": "IT services marketplace with real-time chat, shopping cart, and Stripe payments.",
    "demo": "https://fergusonrevaldo25.github.io/IT-Services-Dashboard/",
    "repo": "https://github.com/FergusonRevaldo25/IT-Services-Dashboard"
  },
  {
    "id": 5,
    "title": "AI Real-Time Chat Bot",
    "category": "ai",
    "image": "/projects/Al.jpg",
    "badges": [
      "AI",
      "Real-time",
      "Socket.io"
    ],
    "description": "Intelligent AI chat companion with real-time messaging and smart responses.",
    "demo": "https://realtime-ai-chat-whil.onrender.com",
    "repo": "https://github.com/FergusonRevaldo25/Real-Time-App"
  },
  {
    "id": 9,
    "title": "Calculator & Chat Assistant",
    "category": "ai",
    "image": "/projects/cal.jpg",
    "badges": [
      "Calculator",
      "NLP",
      "Assistant"
    ],
    "description": "Classic calculator with natural language chat assistant for math operations.",
    "demo": "https://fergusonrevaldo25.github.io/classic-calculator-chat",
    "repo": "https://github.com/FergusonRevaldo25/classic-calculator-chat"
  },
  {
    "id": 18,
    "title": "J.A.R.V.I.S. AI Assistant",
    "category": "ai",
    "image": "",
    "badges": [
      "AI",
      "Voice",
      "Python",
      "Next.js",
      "FastAPI",
      "Groq",
      "Whisper"
    ],
    "description": "Iron Man-inspired AI voice assistant with holographic UI. Voice commands, Spotify control, system automation, persistent memory, and real-time speech synthesis.",
    "demo": "https://jarvis-frontend-pi.vercel.app/",
    "repo": "https://github.com/FergusonRevaldo25/jarvis-platform"
  },
  {
    "id": 6,
    "title": "Lamborghini Showcase",
    "category": "showcase",
    "image": "/projects/lam.jpg",
    "badges": [
      "Gallery",
      "Filtering",
      "Interactive"
    ],
    "description": "Interactive car showcase with real-time filtering and detailed specifications.",
    "demo": "https://fergusonrevaldo25.github.io/LABOGINIS-WEBSITE/",
    "repo": "https://github.com/FergusonRevaldo25/LABOGINIS-WEBSITE"
  }
];
