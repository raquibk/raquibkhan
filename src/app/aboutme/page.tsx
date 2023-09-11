import { Bebas_Neue} from "@next/font/google"
import Image from 'next/image';
import worldMap from '../../../public/world.svg'

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

export default function Home() {
    return <>
        <div className="flex justify-center h-screen items-center flex-col">
            <Image 
            priority
            src={worldMap}
            alt='Map'
            className={`h-32 m-6 -mb-2`}
            />
            <p className={`${bebas.className} mt-10 sm:mt-20 sm:text-2xl text-3xl text-center`}> in development </p>
        </div>
    </>
}