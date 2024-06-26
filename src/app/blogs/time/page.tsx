"use client";
import { useStopwatch } from 'react-timer-hook';
import { Navbar } from "@/components/Navbar";
import { Bebas_Neue, Roboto } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: "300",
});

function MyStopwatch() {
  const {
    totalSeconds
  } = useStopwatch({ autoStart: true });
  return (
    <div>
      <div
        style={{ textAlign: "center" }}
        className={`${bebas.className} h-screen flex items-center justify-center -mt-20 flex-col`}
      >
        <div
          style={{
            fontSize: `${totalSeconds * 10 > 300 ? 300 : totalSeconds * 10}px`,
          }}
        >
          {totalSeconds}
        </div>
        {/* code snoopers: i am assuming this article doesn't take more than a 1000 seconds to read. Going to be quite chaotic on phone if it exceeds a 1000 */}
        <div className={`text-4xl ${roboto.className}`}>
          {totalSeconds < 10
            ? "the trouble is, you think you have time - buddha"
            : "↓"}
        </div>
      </div>
    </div>
  );

}


export default function Home() {
    return (
      <div>
        <Navbar />
        <div>
          <MyStopwatch />
        </div>
        <div
          className={`sm:mx-40 ${bebas.className} mt-10 sm:mt-20 sm:text-4xl text-3xl mx-5`}
        >
          <p className='h-screen'>to be continued</p>
        </div>
      </div>
    );
}