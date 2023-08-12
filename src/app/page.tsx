import { Experience } from "@/components/Experience";
import { Links } from "@/components/Links";
import { Navbar } from "@/components/Navbar";
import { TypeWriter } from "@/components/TypeWriter";
import { Bebas_Neue, Roboto, Source_Code_Pro } from "@next/font/google"


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
  return <main className={roboto.className}>
    < Navbar />
    <div className="snap-proximity snap-y">
      <div className="snap-center min-h-screen sm:mx-40 mx-10">
        <p className={`${bebas.className} mt-10 sm:mt-20 sm:text-4xl text-3xl text-center`}> I am a <span className="hover:underline decoration-slate-800/[0.33]"> software engineer </span> who likes working on interesting problems and building robust solutions<span className="animate-pulse"> . </span></p>
        <TypeWriter
          text={["My journey so far"]}
        />
        <Experience />
      </div>
    </div>

  </main>
}
