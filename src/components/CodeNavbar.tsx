import Image from "next/image";
import codesignature from "../../public/CodeSignature.svg";
import Link from "next/link";

export function CodeNavbar() {
  return (
    <>
      <div className="flex justify-center mt-6">
        <Link href="/blogs/algorithms">
          <Image priority src={codesignature} alt="test" className="h-14 sm:h-20" />
        </Link>
      </div>
    </>
  );
}
