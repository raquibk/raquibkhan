import { Experience } from "@/components/Experience";
import { Navbar } from "@/components/Navbar";
import { Bebas_Neue, Roboto, Source_Code_Pro } from "@next/font/google"
import Link from 'next/link';

export const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

export const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: '300',
})

export const source_code = Source_Code_Pro({
  subsets: ['latin'],
  weight: '400',
})


export default function Home() {
  return <main className={roboto.className}>
    < Navbar />
    <div className="snap-proximity snap-y">
      <div className="snap-center min-h-screen sm:mx-40 mx-10">
        <p className={`${bebas.className} mt-10 sm:mt-20 sm:text-4xl text-3xl text-center`}> I am a <span className="hover:underline decoration-slate-800/[0.33]"> software engineer </span> who likes working on interesting problems and building robust solutions<span className="animate-pulse"> . </span></p>
        <div className="flex justify-center mt-16">
          <Link href="https://github.com/raquibk" className="underline mx-4" target="_blank" rel="noopener noreferrer"> Github </Link>
          <Link href="/Lavani_Resume.pdf" className="underline mx-4" target="_blank" rel="noopener noreferrer"> Resume </Link>
          <Link href="https://github.com/raquibk" className="underline mx-4" target="_blank" rel="noopener noreferrer"> LinkedIn </Link>
        </div>
        <p className="text-center mt-16 text-xl"> My journey so far </p>
        <Experience />
      </div>
    </div>

  </main>
}
