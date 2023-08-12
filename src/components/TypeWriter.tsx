"use client"
import { Typewriter } from 'react-simple-typewriter'

type TypeWriterProps = {
  text: string[];
}

export function TypeWriter({text}: TypeWriterProps) {

  return <>
        <div className="text-center mt-16 text-xl" >
            <Typewriter
                words={text}
                loop={1}
                cursor
                cursorStyle=''
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </div>
    </>
}