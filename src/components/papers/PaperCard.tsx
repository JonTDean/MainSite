import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PaperCardProps {
    title: string
    description: string
    type: 'blog' | 'professional' | 'creative'
    date: string
    platform?: string
    preview?: string
    links?: Array<{ label: string, href: string, primary?: boolean }>
}

export function PaperCard({ 
    title, 
    description, 
    type, 
    date, 
    platform, 
    preview, 
    links 
}: PaperCardProps) {
    return (
        <Card className="hover:bg-accent/50 transition">
            <CardHeader>
                <div className="space-y-1">
                    <Badge variant="outline" className="mb-2">{type}</Badge>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription>
                        {description || (platform ? `${platform} • ${date}` : date)}
                    </CardDescription>
                </div>
            </CardHeader>
            {(preview || links) && (
                <CardContent>
                    {preview && (
                        <p className="text-muted-foreground line-clamp-2">{preview}</p>
                    )}
                    {links && links.length > 0 && (
                        <div className="flex gap-4 mt-4">
                            {links.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.href}
                                    className={`${link.primary ? 'text-primary' : 'text-muted-foreground'} hover:underline`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </CardContent>
            )}
        </Card>
    )
}