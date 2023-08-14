import { Experience } from "@/components/Experience";
import { Links } from "@/components/Links";
import { Navbar } from "@/components/Navbar";
import { TypeWriter } from "@/components/TypeWriter";
import { Bebas_Neue, Roboto, Source_Code_Pro } from "@next/font/google"
import Mario from "../../public/mario.svg"
import Image from 'next/image';
import { KnowMe } from "@/components/KnowMe";


const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: '300',
})

const source_code = Source_Code_Pro({
  subsets: ['latin'],
  weight: '300',
})


export default function Home() {
  return <main className={`${roboto.className} text-sm`}>
    < Navbar />
    <div className="snap-proximity snap-y">
      <div className="snap-center min-h-screen sm:mx-40 mx-10">
        <p className={`${bebas.className} mt-10 sm:mt-20 sm:text-4xl text-3xl text-center`}> I am a <span className="hover:underline decoration-slate-800/[0.33]"> software engineer </span> who likes working on interesting problems and building robust solutions<span className="animate-pulse"> . </span></p>
        <div className="flex justify-center flex-row mt-10">
          <p className="text-xl mx-1"> My journey </p>
          <TypeWriter
            text={[" (so far)", ""]} />
          {/* <Image 
            priority
            src={Mario}
            alt='test'
            className={`h-6 self-center animate-bounce`}
            width={35}
            /> */}
        </div>
        <Experience />
        <div className="flex justify-center flex-row mt-10">
          <p className="text-xl mx-1"> Favorites </p>
        </div>
        <KnowMe />
      </div>
    </div>

  </main>
}
