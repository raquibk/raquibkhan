import { Bebas_Neue } from "@next/font/google"
import Link from "next/link"

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

export function KnowMe() {
    const listAttr = "text-slate-700 hover:text-amber-600 transition-all duration-500 ease-out";
    return <>
        <div className="flex flex-wrap justify-center grid-cols-3">
            <div className="mt-10">
                <h1 className={`${bebas.className} mb-2 text-xl`}> Movies </h1>
                <ol className="md:list-decimal">
                    <li className={listAttr}> 
                        <Link href={'https://www.imdb.com/title/tt2194499/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_about%2520time'}> About Time </Link> 
                    </li>
                    <li className={listAttr}>
                        <Link href={'https://www.imdb.com/title/tt0468569/?ref_=chttp_t_3'}> The Dark Knight
                        </Link>
                    </li>
                    <li className={listAttr}>
                        <Link href={'https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_interstellar'}> Interstellar 
                        </Link>
                    </li>
                    <li className={listAttr}>
                        <Link href={'https://www.imdb.com/title/tt0109830/?ref_=tt_sims_tt_t_8'}> Forrest Gump 
                        </Link>
                    </li>
                    <li className={listAttr}>
                        <Link href={'https://www.imdb.com/title/tt3322420/'}> Queen 
                        </Link>
                    </li>
                </ol>
            </div>
            <div className="mt-10">
                <h1 className={`${bebas.className} mb-2 text-xl`}> Articles </h1>
                <ol className="md:list-decimal">
                    <li className={listAttr}> 
                        <Link href={'https://www.planetary.org/worlds/pale-blue-dot'}> A Pale Blue Dot </Link> 
                    </li>
                    <li className={listAttr}>
                        <Link href={'https://www.abrahamlincolnonline.org/lincoln/speeches/bixby.htm'}> Letter to Mrs. Bixby
                        </Link>
                    </li>
                    <li className={listAttr}>
                        <Link href={'https://winstonchurchill.org/resources/speeches/1940-the-finest-hour/their-finest-hour/'}> Their Finest Hour
                        </Link>
                    </li>
                    <li className={listAttr}>
                        <Link href={'http://worrydream.com/refs/Brooks-NoSilverBullet.pdf'}> No Silver Bullet
                        </Link>
                    </li>
                </ol>
            </div>
        </div>
    </>
}