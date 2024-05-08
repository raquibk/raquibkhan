import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";


const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

~Two sum~
`;

export default function Home() {
    return (
      <>
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </>
    );
}