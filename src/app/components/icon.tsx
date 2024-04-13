
import { motion } from 'framer-motion'

import React from 'react'

export default function Icon() {

    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 1)"
        },
        visible: {
          pathLength: 1,
          fill: "#049fbb"
        }
      };

  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <motion.path
                d="M25 100V0H15V75L50 100L85 75V0H75V100H65V25L50 40L35 25V100H25ZM85 25V40L65 60V25H85Z"
                variants={icon}
                initial="hidden"
                animate="visible"
            />
    </svg>
      
    </div>
  )
}

 
