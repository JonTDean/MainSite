import React from 'react'
import SocialLinks from '../index/cta/SocialLinks'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </div>
          
          {/* Right side - Social Links */}
          <div className="flex gap-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer