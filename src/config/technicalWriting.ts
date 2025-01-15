type BlogPost = {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    link: string;
}

type AcademicPaper = {
    title: string;
    institution: string;
    year: string;
    type: string;
    link: string;
}  

// You can move these to a separate config file later
export const BLOG_POSTS: BlogPost[] = [
    {
      title: "Understanding Modern Web Architecture",
      excerpt: "An exploration of current web development patterns and best practices...",
      date: "2024-03-15",
      readTime: "5 min read",
      link: "/papers/blog/web-architecture"
    },
    // Add more blog posts...
]

export const ACADEMIC_PAPERS: AcademicPaper[] = [
    {
      title: "Analysis of Distributed Systems in Cloud Computing",
      institution: "Western Governors University",
      year: "2024",
      type: "Research Paper",
      link: "/papers/academic/distributed-systems"
    },
    // Add more papers...
]

