"use client"
import { Typewriter } from 'react-simple-typewriter'

type TypeWriterProps = {
  text: string[];
}

export function TypeWriter({text}: TypeWriterProps) {

  return <>
        <div className="text-center text-xl text-zinc-500" >
            <Typewriter
                words={text}
                loop={5}
                cursor
                cursorStyle=''
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </div>
    </>
}