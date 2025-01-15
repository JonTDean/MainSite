import React from 'react'
import { Input } from '../ui/input'

type SearchBarProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <div className="mb-6">
        <Input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
  )
}

export default SearchBar