import React, { useRef } from 'react'
import Experience from './Experience'

const WorkExperiences = () => {
  const id = useRef(0)
  return (
    <div className="px-6">
      <Experience
        variant={id.current++}
        header={'In-silico hotbed'}
        date={'July 2019 - December 2020'}
        body={'Work as a team solving ICPC problems using algorithms in C++ and python'}
      />

      <Experience
        variant={id.current++}
        header={'Technological University of Pereira'}
        date={'December 2018 - Present'}
        body={'Started my college career'}
      />

    </div>
  )
}

export default WorkExperiences
