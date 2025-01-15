import React from 'react'
import Link from 'next/link'
import { FaBluesky, FaX } from 'react-icons/fa6';
import { FaGithub, FaLinkedin, FaNewspaper, FaMedium } from 'react-icons/fa';

const SocialLinks = () => {
  return (
        <div className="flex justify-center gap-6">
          <Link
            href="https://github.com/jontdean"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/jontdean"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://bsky.app/profile/jontdean.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaBluesky className="h-6 w-6" />
          </Link>
          <Link
            href="https://x.com/jontdean"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaX className="h-6 w-6" />
          </Link>
          {/* Substack */}
          <Link
            href="https://jontdean.substack.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaNewspaper className="h-6 w-6" />
          </Link>
          {/* Medium */}
          <Link
            href="https://medium.com/@jontdean"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaMedium className="h-6 w-6" />
          </Link>
        </div>
  )
}

export default SocialLinks