import { FeaturedPaper } from "@/components/papers/FeaturedPaper"
import { PapersGrid } from "@/components/papers/PaperGrid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
    return (
        <main className="min-h-[calc(100vh-10rem)] max-w-6xl mx-auto pt-4 pb-12 px-4">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">Written Works</h1>
                    <p className="text-muted-foreground">
                        A collection of my professional papers, blog posts, and creative writings.
                    </p>
                </div>

                <Tabs defaultValue="all" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all">All Works</TabsTrigger>
                        <TabsTrigger value="professional">Professional</TabsTrigger>
                        <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                        <TabsTrigger value="creative">Creative</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="space-y-8">
                        <FeaturedPaper />
                        
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Recent Works</h2>
                            <PapersGrid papers={[
                                {
                                    title: "Example Article",
                                    description: "March 2024",
                                    type: "blog",
                                    date: "March 2024",
                                    platform: "Medium",
                                    preview: "Brief preview of the article content...",
                                    links: [
                                        { label: "Read More →", href: "#", primary: true }
                                    ]
                                }
                                // Add more papers here
                            ]} />
                        </section>
                    </TabsContent>

                    <TabsContent value="professional" className="space-y-4">
                        <PapersGrid 
                            columns={1}
                            papers={[
                                {
                                    title: "Academic Paper Title",
                                    description: "Authors, Conference (Year)",
                                    type: "professional",
                                    date: "2024",
                                    preview: "Paper abstract or brief description...",
                                    links: [
                                        { label: "Read Paper →", href: "#", primary: true },
                                        { label: "View Citations", href: "#" },
                                        { label: "Download PDF", href: "#" }
                                    ]
                                }
                            ]} 
                        />
                    </TabsContent>

                    {/* Add similar TabsContent sections for "blog" and "creative" */}
                </Tabs>
            </div>
        </main>
    )
}