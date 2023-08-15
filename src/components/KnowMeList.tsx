type ListProps = {
    list: string[],
}

export function KnowMeList(listprop: ListProps) {
    return <>
        <ol className="md:list-decimal">
            {listprop.list.map((item, index) => (
                <li key={index} className="text-slate-700 hover:text-amber-600 transition-all duration-500 ease-out">{item}</li>
            ))}
        </ol>
    </>

}