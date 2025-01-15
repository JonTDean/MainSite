'use client';
import { useState } from 'react';
import { projects } from '@/config/dummyProjects';
import Sidebar from '@/components/projects/Sidebar';
import SearchBar from '@/components/projects/SearchBar';
import ProjectGrid from '@/components/projects/ProjectGrid';

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Sidebar */}
      <Sidebar 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />

      {/* Main Content */}
      <div className="flex-1">
        {/* Search Bar */}
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        {/* Project Grid */}
        <ProjectGrid 
          projects={filteredProjects}
        />
      </div>
    </div>
  );
}