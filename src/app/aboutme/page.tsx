import { Bebas_Neue, Roboto } from "@next/font/google";
import Image from "next/image";
import HogsBack from "../../../public/Hogs.png";
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
              alt="test"
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
          <p className=""> I love hiking. I love snowboarding. I love geography. Most of all, I love trying new things.  </p>
        </div>
      </div>
    </main>
  );
}
