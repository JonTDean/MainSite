import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturedPaper() {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">Featured</h2>
            <Card className="hover:bg-accent/50 transition">
                <CardHeader>
                    <div className="space-y-1">
                        <Badge variant="outline" className="mb-2">Professional</Badge>
                        <CardTitle className="text-lg">Featured Paper Title</CardTitle>
                        <CardDescription>Conference/Journal Name, 2024</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Detailed description of the featured work and its impact...
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="text-primary hover:underline">Read Paper →</a>
                        <a href="#" className="text-muted-foreground hover:underline">View Citations</a>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}