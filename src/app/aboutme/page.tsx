import { Bebas_Neue, Roboto } from "next/font/google";
import Image from "next/image";
import HogsBack from "../../../public/Hogs.png";
import Sisyphus from "../../../public/sisyphus.png"
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: "300",
});

export default function Home() {
  return (
    <main className={`${roboto.className} text-md md:mx-40`}>
      <Navbar />
      <p className={`${bebas.className} sm:text-4xl text-3xl mt-10 px-4`}>
        {" "}
        ABOUT ME{" "}
      </p>
      <div className="flex justify-around mt-10 flex-wrap">
        {/* <Spotify link="https://open.spotify.com/track/1ijxFUEg4lVYjBETDb4cHW" /> */}
        {/* <Image
            priority
            src={worldMap}
            alt="Map"
            className={`md:scale-50 scale-[0.5] m-6 -mb-2`}
          /> */}
        <div className="px-4">
          <div className="flex justify-center">
            <Image
              priority
              src={HogsBack}
              alt="a picture of me"
              className="px-4 lg:scale-125 lg:mb-10"
              height={300}
            />
          </div>
          <p className=" text-slate-500 text-xs mb-4 text-center">
            {" "}
            Hog&apos;s Back Park, Ottawa{" "}
          </p>
          <p className="">
            {" "}
            I&apos;m Raquib, a 5th year software engineering student at the
            University of Alberta. I love tinkering with Algorithms, Operating
            Systems, and Web Development. I have a lot of fun{" "}
            <Link
              href="https://devpost.com/software/proton-news"
              className="underline"
              target="blank"
            >
              {" "}
              participating
            </Link>{" "}
            (and
            <Link
              href="https://devpost.com/software/inclusify-kd3uo9"
              className="underline"
              target="blank"
            >
              {" "}
              winning!
            </Link>
            ) in hackathons.{" "}
          </p>
          <br></br>
          <p className="">
            I have worked at
            <Link
              href="https://www.scotiabank.com/ca/en/personal.html"
              className="underline hover:text-red-600"
              target="blank"
            >
              {" "}
              Scotiabank
            </Link>{" "}
            where I analyzed patterns in data to identify fraud, and have worked
            at{" "}
            <Link
              href="https://www.insidedesk.com"
              className="underline hover:text-indigo-500"
              target="blank"
            >
              {" "}
              InsideDesk
            </Link>{" "}
            where I build robust web architecture microservices to retrieve
            insurance data.
          </p>
          <br />
          <p className="">
            {" "}
            I love hiking. I love snowboarding. I love geography. I love cinema.
            I love traveling. I love languages. I love doing a lot of things. I
            love trying new things.{" "}
          </p>
          <br />
          <h3 className="font-bold"> My relationship with trying </h3>
          <div className="flex justify-center">
            <Image
              priority
              src={Sisyphus}
              alt="a picture of me"
              className="px-4 lg:scale-125 lg:mb-10 lg:mt-10"
              height={300}
            />
          </div>
          <p className=" text-slate-500 text-xs text-center">
            {" "}
            <Link
              href="https://www.britannica.com/topic/The-Myth-of-Sisyphus"
              className="underline hover:text-slate-900"
              target="blank"
            >
              {" "}
              Le Mythe de Sisyphe (The Myth of Sysyphus)
            </Link>{" "}
          </p>
          <br />
          <p>
            {" "}
            Sisyphus was condemned by the gods to roll a boulder uphill for
            eternity. At first, he rebelled. He cursed himself, he cursed his
            life. Eventually he realized, the most effective form rebelling was
            to rejoice the act, and accept his fate. What a metaphor for life,
            no?{" "}
          </p>
          <br />
          <p>
            {" "}
            Life has numerous challenges; There&apos;s always someone with
            better circumstances that me, and someone else with worse
            ciscumstances than me. All I can do, is joyously accept what is in
            front of me, and face it head-on. And if I do not know how to face
            it, I <span className="italic"> try </span> to face it.{" "}
          </p>
          <br />
          <p>
            {" "}
            So I try. I always try til I succeed. Try till that boulder rolls
            all the way up the hill. And I enjoy it. This is my latest venture
            of &apos;trying&apos;: Web Development, and writing. I have an
            intrinsic fear of how fast time passes, and I think writing will
            help with slowing the pace, allowing me to think, and relive my
            recent memories. I have also been fascinated with web development,
            and this is my shot at trying it. By reading this, you are accessing
            a piece of my mind. Welcome, and thank you for reading this. I hope this journey is pleasant for
            you.{" "}
          </p>
          <br />
          <p className="mb-10">
            {" "}
            I will write a weekly blog, about all the things I think of and
            experience. Some blogs will be short, some will be long. All will be
            badly written, but I will improve my writing as time goes by. If you
            have any thoughts, feel free to mail me at{" "}
            <Link
              href="mailto:r.raquib01@gmail.com?subject=Hello from Raquib's Blog"
              className="underline hover:text-slate-900"
            >
              {" "}
              r.raquib (at) gmail (dot) com.
            </Link>{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
