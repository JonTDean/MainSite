import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t mt-32">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </div>
          
          {/* Right side - Social Links */}
          <div className="flex gap-4">
            <Link 
              href="https://github.com/yourusername" 
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer