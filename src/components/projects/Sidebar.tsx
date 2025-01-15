import React from 'react'
import { categories } from '@/config/dummyProjects'
import { Button } from '../ui/button'

type SidebarProps = {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarProps) => {
  return (
    <div className="w-56 flex-shrink-0 pr-6">
    <div className="sticky top-24">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="space-y-1">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            onClick={() => setSelectedCategory(category.id)}
            className="w-full justify-start"
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Sidebar