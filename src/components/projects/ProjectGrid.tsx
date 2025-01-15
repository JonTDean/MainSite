import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Project } from '@/config/dummyProjects'

type ProjectGridProps = {
    projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {projects.map((project) => (
      <Card key={project.id} className="overflow-hidden">
        {/* Project Image */}
        <div className="aspect-[16/9] relative">
          <Image
            fill
            src={project.image}
            alt={project.title}
            className="object-cover"
          />
        </div>
        
        <CardHeader className="p-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </CardHeader>
        
        <CardContent className="p-4 pt-0">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 gap-2">
          <Button 
            className="flex-1" 
            asChild
          >
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </Button>
          {project.sourceCode && (
            <Button 
              variant="outline" 
              className="flex-1"
              asChild
            >
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    ))}
  </div>
  )
}

export default ProjectGrid