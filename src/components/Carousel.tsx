'use client'

import React, { useState } from 'react'

import Image from 'next/image'

import { projects, getProjectByName } from '../dispositions/projects'


export default function Carousel(): React.ReactNode {
    const [currentProject, setCurrentProject] = useState<string>(
        Object.keys(projects)[0]
    )
    const projectDetails = getProjectByName(currentProject)

    return (
        <div>
            {/* Rest of your component code */}
            {/* Update the Image component usage */}
            <Image
                width={1280}
                height={720}
                className='object-cover w-80 h-40 rounded-xl'
                src={projectDetails?.thumbnail || '/assets/projects/default.jpg'}
                alt={currentProject}
            />
            {/* Rest of your component code */}
        </div>
    )
}
