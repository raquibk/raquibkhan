import { CodeBlogLink } from "@/components/CodeBlogLink";
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

const BASE_URL = "/blogs/algorithms/";

export default async function Home() {
  return (
    <main className={`${roboto.className} text-md`}>
      <Navbar />
      <div className="sm:mx-40">
        <p
          className={`${bebas.className} mt-10 sm:mt-20 sm:text-4xl text-3xl mx-5`}
        >
            Algorithms
        </p>
        <div className="mt-5 mb-10 mx-5">
          <CodeBlogLink title={"two sum"} link={BASE_URL+"twosum"}></CodeBlogLink>
        </div>
      </div>
    </main>
  );
}
