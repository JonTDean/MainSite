"use client"

import { ACADEMIC_PAPERS } from '@/config/technicalWriting'
import { ArrowRight } from 'lucide-react'
import NextLink from 'next/link'
import React from 'react'

const AcademicPapers = () => {
  return (
      <div className="writing-item">
        <h3 className="text-2xl font-semibold mb-4">Academic Papers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACADEMIC_PAPERS.map((paper, index) => (
            <NextLink href={paper.link} key={index}>
              <div className="group p-6 border rounded-lg hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium group-hover:text-primary transition-colors">
                    {paper.title}
                  </h4>
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{paper.institution}</span>
                  <span>•</span>
                  <span>{paper.year}</span>
                  <span>•</span>
                  <span>{paper.type}</span>
                </div>
              </div>
            </NextLink>
          ))}
        </div>
      </div>
  )
}

export default AcademicPapers