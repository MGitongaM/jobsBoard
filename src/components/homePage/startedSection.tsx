import React from 'react'
import { Button } from '../ui/button'

export default function StartedSection() {
  return (
    <section className="bg-gray-400 px-2 py-10">
        <div className='max-w-5xl mx-auto '>
            <div className="text-white text-center grid place-content-center space-y-8 ">
                <h3 className="font-semibold">Ready to get started?</h3>
                <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliquam aliquet vulputate lorem ac consequat.</p>
                <div className="flex gap-5 justify-center ">
                    <Button variant="default">Browse Jobs</Button>
                    <Button variant="outline" className='text-black'>Post a  Job</Button>
                </div>
            </div>
        </div>
    </section>
  )
}
