
import { jobTypes } from '@/app/constData/jobTypes'
import Link from 'next/link'
import React from 'react'

export default function JobTypeSection() {
  return (
    <section className="bg-jobsBg1 min-h-96 px-2 py-10">
        <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-10 text-center'>
            {jobTypes.map((job)=>(<Link href={`/jobs?q=${job.title}`} key={job.title} className='p-4 flex flex-col items-center'>
                <div>{job.logo}</div>
                <p className="text-base md:text-xl font-bold">{job.title}</p>
            </Link>))}
        </div>
        {/* <div className='max-w-6xl mx-auto grid grid-cols-4 gap-20'>
            {jobTypes.map((job)=>(<div key={job.title} className='p-4 flex flex-col items-center'>
                <div>{job.logo}</div>
                <p className="text-xl font-bold">{job.title}</p>
            </div>))}
        </div> */}
    </section>
  )
}
