import { Bebas_Neue } from "@next/font/google"
import { VerticalDivider } from "./VerticalDivider"

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

export function KnowMe() {
    return <>
        <div className="flex justify-center flex-wrap">
            <div className="mx-36 mt-10">
                <h1 className={`${bebas.className} mb-2`}> Hobbies </h1>
                
            </div>
            <div className="mx-36 mt-10">
                <h1 className={`${bebas.className} mb-2`}> Hobbies </h1>
                
            </div>
            <div className="mx-36 mt-10">
                <h1 className={`${bebas.className} mb-2`}> Hobbies </h1>
                
            </div>
        </div>
    </>
}