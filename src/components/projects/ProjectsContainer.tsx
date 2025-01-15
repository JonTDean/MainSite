'use client';

import { useState, useRef } from 'react';
import { type Project } from '@/config/dummyProjects';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import ProjectGrid from './ProjectGrid';
import { ProjectGridAnimation } from './ProjectGridAnimation';

type ProjectsContainerProps = {
  projects: Project[];
};

export default function ProjectsContainer({ projects }: ProjectsContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex-1">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div 
          ref={scrollContainerRef} 
          className="h-[calc(100vh-20rem)] overflow-y-auto pr-4 scroll-smooth"
        >
          <ProjectGridAnimation 
            projects={filteredProjects} 
            scrollContainer={scrollContainerRef}
          >
            {(addToRefs) => (
              <ProjectGrid 
                projects={filteredProjects} 
                addToRefs={addToRefs} 
              />
            )}
          </ProjectGridAnimation>
        </div>
      </div>
    </>
  );
} 