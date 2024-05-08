"use client"
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeNavbar } from "@/components/CodeNavbar";

const body = `**Two Sum**

Two sum is a right of passage at this point. A cornerstone of fundamental algorithms. You just need to return the indices of two numbers which sum up to a target.
&nbsp;  
&nbsp;  
**Quick Solution**

Keep track of which number is needed to complement the current number in the for loop. This can be done using a dictionary. Once a pair is found, return the two numbers
as a list.
&nbsp;  
&nbsp;  
**Time Complexity**

For loop: O(1)

Dictionary lookup: O(1)

Dictionary insertion: O(1)

*Overall Time Complexity: O(N)*
&nbsp;  
&nbsp;  
**Space Complexity**

Dictionary: O(N)

*Overall Space Complexity: O(N)*
&nbsp;  
&nbsp; 
`;

const solution = `  class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            complements = dict()

            for index, num in enumerate(nums):
                complement = target - num
                if complement in complements:
                    return [index, complements[complement]]
                complements[num] = index
            
            return [-1, -1]
`;

const customStyles = {
  backgroundColor: "#ebe3d3",
};



export default function Home() {
  return (
    <>
      <CodeNavbar />
      <div className="mt-10 px-8 lg:px-48 xl:px-96">
        <Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown>
        <SyntaxHighlighter language="python" customStyle={customStyles}>
          {solution}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
