"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          
        >
          
          <h1 className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              {" "}
              Skills{" "}
            </span>
          </span>
          </h1>
          
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-orange-00 font-medium mt-[10px] text-center mb-[15px]'
        >
            Quality Assurance through dogfooding and more
        </motion.div>
        
    </div>
  )
}

export default SkillText