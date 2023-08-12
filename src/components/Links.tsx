import Link from "next/link";

export function Links() {
    return <>
        <div className="flex justify-center mt-1">
          <Link href="https://github.com/raquibk" className="underline mx-4" target="_blank" rel="noopener noreferrer"> Github </Link>
          <Link href="/Lavani_Resume.pdf" className="underline mx-4" target="_blank" rel="noopener noreferrer"> Resume </Link>
          <Link href="https://github.com/raquibk" className="underline mx-4" target="_blank" rel="noopener noreferrer"> LinkedIn </Link>
        </div>
    </>
}