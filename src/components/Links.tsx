import Link from "next/link";

export function Links() {
    return <>
        <div className="flex justify-center sm:-mt-4 tracking-wide">
          <Link href="https://github.com/raquibk" className="underline mx-4" target="_blank" rel="noopener noreferrer"> Github </Link>
          <Link href="/Lavani_Resume.pdf" className="underline mx-4" target="_blank" rel="noopener noreferrer"> Resume </Link>
          <Link href="https://www.linkedin.com/in/lavani/" className="underline mx-4" target="_blank" rel="noopener noreferrer"> LinkedIn </Link>
        </div>
    </>
}