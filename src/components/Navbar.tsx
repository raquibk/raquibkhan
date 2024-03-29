import Image from 'next/image';
import signature from "../../public/Signature.svg";
import { Links } from './Links';
import Link from 'next/link';

export function Navbar() {
    return (
      <>
        <div className="flex justify-center mt-6">
          <Link href="/">
            <Image
              priority
              src={signature}
              alt="test"
              className="h-14 sm:h-20"
            />
          </Link>
        </div>
        <Links />
      </>
    );
}