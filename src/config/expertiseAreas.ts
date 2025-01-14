import { Code2, Database, Network, Brain, Server, Lock } from "lucide-react"

interface ExpertiseArea {
    title: string
    description: string
    icon: React.ElementType
    skills: {
      name: string
      level: number // 0 to 100
    }[]
}
  
export const expertiseAreas: ExpertiseArea[] = [
    {
        title: "Data Engineering",
        description: "Building scalable data pipelines and ETL processes using modern frameworks",
        icon: Database,
        skills: [
        { name: "Apache Spark", level: 90 },
        { name: "Hadoop", level: 85 },
        { name: "Kafka", level: 80 },
        { name: "SQL", level: 95 },
        ]
    },
    {
        title: "Software Development",
        description: "Full-stack development with focus on performance and scalability",
        icon: Code2,
        skills: [
        { name: "Rust", level: 85 },
        { name: "Python", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "React", level: 85 },
        ]
    },
    {
        title: "Systems Administration",
        description: "Managing and securing infrastructure and cloud resources",
        icon: Server,
        skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 90 },
        { name: "Linux", level: 88 },
        { name: "Networking", level: 82 },
        ]
    },
    {
        title: "Machine Learning",
        description: "Implementing ML solutions and data-driven applications",
        icon: Brain,
        skills: [
        { name: "PyTorch", level: 80 },
        { name: "Linfa", level: 85 },
        { name: "PolaRS", level: 88 },
        { name: "Data Analysis", level: 90 },
        ]
    },
    {
        title: "DevOps",
        description: "Automating deployment and maintaining CI/CD pipelines",
        icon: Network,
        skills: [
        { name: "CI/CD", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "Terraform", level: 75 },
        { name: "Monitoring", level: 85 },
        ]
    },
    {
        title: "Security",
        description: "Implementing secure practices and protecting sensitive data",
        icon: Lock,
        skills: [
        { name: "Cryptography", level: 80 },
        { name: "Auth Systems", level: 85 },
        { name: "Security Auditing", level: 82 },
        { name: "Compliance", level: 78 },
        ]
    },
]