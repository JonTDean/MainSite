import { IconType } from "react-icons";
import { FaRust, FaPython, FaReact, FaRocket, FaNodeJs, FaTree, FaGit, } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiMongodb, SiNuxtdotjs, SiExpress, SiDotnet, SiPytorch, SiPolars, SiLangchain, SiFirebase, SiSupabase, SiDocker, SiDungeonsanddragons } from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp, TbBrandPowershell, TbCircleDashedLetterD, TbCircleDashedLetterL, TbSql } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { RiNextjsFill, RiSvelteFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export interface TechItem {
    name: string;
    icon: IconType; // Path to icon in public/tech/
    category: "languages" | "web" | "ai-ml" | "cloud" | "tools";
}

export const techStack: Record<string, TechItem[]> = {
  languages: [
    { name: "Rust", icon: FaRust, category: "languages" },
    { name: "Python", icon: FaPython, category: "languages" },
    { name: "TypeScript", icon: SiTypescript, category: "languages" },
    { name: "JavaScript", icon: SiJavascript, category: "languages" },
    { name: "C++", icon: TbBrandCpp, category: "languages" },
    { name: "C#", icon: TbBrandCSharp, category: "languages" },
    { name: "SQL", icon: TbSql, category: "languages" },
  ],
  web: [
    { name: "React", icon: FaReact, category: "web" },
    { name: "Next.js", icon: RiNextjsFill, category: "web" },
    { name: "Nuxt.js", icon: SiNuxtdotjs, category: "web" },
    { name: "SvelteKit", icon: RiSvelteFill , category: "web" },
    { name: "Node.js", icon: FaNodeJs, category: "web" },
    { name: "ASP.NET", icon: SiDotnet, category: "web" },
    { name: "Express", icon: SiExpress , category: "web" },
    { name: "RocketRS", icon: FaRocket, category: "web" },
    { name: "YewRS", icon: FaTree, category: "web" },
    { name: "SQLx", icon: TbSql, category: "web" },
  ],
  "ai-ml": [
    { name: "PyTorch", icon: SiPytorch, category: "ai-ml" },
    { name: "DanfoJS", icon: TbCircleDashedLetterD, category: "ai-ml" },
    { name: "Linfa", icon: TbCircleDashedLetterL, category: "ai-ml" },
    { name: "PolaRS", icon: SiPolars, category: "ai-ml" },
    { name: "Apache Arrow", icon: MdKeyboardDoubleArrowRight, category: "ai-ml" },
    { name: "Langchain", icon: SiLangchain, category: "ai-ml" },
  ],
  cloud: [
    { name: "Firebase", icon: SiFirebase, category: "cloud" },
    { name: "Supabase", icon: SiSupabase, category: "cloud" },
    { name: "MongoDB", icon: SiMongodb, category: "cloud" },
    { name: "Redis", icon: DiRedis, category: "cloud" },
  ],
  tools: [
    { name: "Git", icon: FaGit, category: "tools" },
    { name: "Docker", icon: SiDocker, category: "tools" },
    { name: "Ghidra", icon: SiDungeonsanddragons, category: "tools" },
    { name: "PowerShell", icon: TbBrandPowershell, category: "tools" },
  ],
}