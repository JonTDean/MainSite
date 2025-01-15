import { PaperCard } from "./PaperCard"

interface PapersGridProps {
    papers: Array<{
        title: string
        description: string
        type: 'blog' | 'professional' | 'creative'
        date: string
        platform?: string
        preview?: string
        links?: Array<{ label: string, href: string, primary?: boolean }>
    }>
    columns?: 1 | 2
}

export function PapersGrid({ papers, columns = 2 }: PapersGridProps) {
    return (
        <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : ''} gap-4`}>
            {papers.map((paper, index) => (
                <PaperCard key={index} {...paper} />
            ))}
        </div>
    )
}