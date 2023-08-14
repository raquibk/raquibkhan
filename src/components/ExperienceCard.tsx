import Image from 'next/image';

type ExperienceProps = {
    image: any;
    title: string
    description: string;
    timeline: string
}

export function ExperienceCard({image, title, description, timeline}: ExperienceProps) {
    return <>
        <div className='flex flex-col m-6 overflow-hidden w-42'>
            <Image 
            priority
            src={image}
            alt='test'
            className={`h-16 m-6 self-center -mb-2`}
            />
            <div className="relative flex py-5 items-center -mb-3">
                <div className="flex-grow border-t border-slate-400"></div>
            </div>
            <p className='text-center px-2 text-sm font-semibold'> {title} </p>
            <p className='text-center px-2 text-xs'> {description} </p>
            <p className='text-center px-2 text-xs text-slate-600'> {timeline} </p>
        </div>
    </>
}