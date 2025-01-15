"use client"

import { BLOG_POSTS } from '@/config/technicalWriting'
import { ArrowRight } from 'lucide-react'
import NextLink from 'next/link'
import React from 'react'

const BlogPosts = () => {
  return (
    <div className="writing-item">
    <h3 className="text-2xl font-semibold mb-4">Blog Posts</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {BLOG_POSTS.map((post, index) => (
        <NextLink href={post.link} key={index}>
          <div className="group p-6 border rounded-lg hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-medium group-hover:text-primary transition-colors">
                {post.title}
              </h4>
              <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-muted-foreground text-sm mb-2">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </NextLink>
      ))}
    </div>
  </div>
  )
}

export default BlogPosts