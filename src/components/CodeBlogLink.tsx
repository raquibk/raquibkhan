import Link from "next/link";

type BlogProps = {
  title: string;
  link: string;
};

export function CodeBlogLink({ title, link }: BlogProps) {
  return (
    <>
      <div>
        <Link href={link} className="underline">
          {title}
          {/* <svg className="h-4 w-4 text-[#777777]" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="17" y1="7" x2="7" y2="17" />  <polyline points="8 7 17 7 17 16" /></svg> */}
        </Link>
      </div>
    </>
  );
}
