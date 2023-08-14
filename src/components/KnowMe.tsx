import { Bebas_Neue } from "@next/font/google"
import { VerticalDivider } from "./VerticalDivider"

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

export function KnowMe() {
    return <>
        <div className="flex flex-wrap mt-10 m-6 justify-around w-2/3">
            <div className="flex flex-col m-6 overflow-hidden">
                <h1 className={`${bebas.className} mb-2`}> Hobbies </h1>
                <li>
                    <ul> Reading books </ul>
                </li>
            </div>
            <VerticalDivider />
            <div className="flex flex-col m-6 overflow-hidden">
                <h1 className={`${bebas.className} mb-2`}> Movies </h1>
                <li>
                    <ul> Nightcrawler </ul>
                </li>
            </div>
            <VerticalDivider />
            <div className="flex flex-col m-6 overflow-hidden">
                <h1 className={`${bebas.className} mb-2`}> Books </h1>
                <li>
                    <ul> Silk Roads </ul>
                </li>
            </div>
        </div>
    </>
}