import { BlogLink } from "@/components/BlogLink";
import { Experience } from "@/components/Experience";
import { Navbar } from "@/components/Navbar";
import { TypeWriter } from "@/components/TypeWriter";
import { Bebas_Neue, Roboto} from "next/font/google"


const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: '300',
})

async function shuffle<T>(array: T[]): Promise<T[]> {
  "use server"
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default async function Home() {
  let journey = ["journey", "journey", "journey", "journey", "journey", "journey", "राह", "سفر", "ಪ್ರಯಾಣ", "ప్రయాణం", "رحلة", "旅行", "여행", "путешествие", "voyage", "reise", "การเดินทาง", "resa", "seyahat", "যাত্ৰা"];
  journey = (await shuffle(journey));
  journey.push("journey");
  return (
    <main className={`${roboto.className} text-md`}>
      <Navbar />
      <div className="sm:mx-40">
        <p
          className={`${bebas.className} mt-10 sm:mt-20 sm:text-4xl text-3xl text-center`}
        >
          {" "}
          I am a{" "}
          <span className="hover:underline decoration-slate-800/[0.33]">
            {" "}
            software engineer{" "}
          </span>{" "}
          who likes working on interesting problems and building robust
          solutions<span className="animate-pulse"> . </span>
        </p>
        <div className="flex justify-center flex-row mt-10">
          <p className="text-xl mx-1"> My </p>
          <TypeWriter text={journey} />
        </div>
        <Experience />
        <div className="flex justify-center flex-row mt-10">
          <p className="text-lg mx-1">Blogs</p>
        </div>
        <div className="mt-5 mb-10">
          <BlogLink title={"about me"} link={"/blogs/aboutme"}></BlogLink>
          <BlogLink title={"algorithms"} link={"/blogs/algorithms"}></BlogLink>
          <BlogLink title={"time"} link={"/blogs/time"}></BlogLink>
        </div>
      </div>
    </main>
  );
}
