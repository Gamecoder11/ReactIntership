import SearchItem from "./SearchItem"

export default function SearchResult({data}){
    const detail= data.map(info=><SearchItem info={info}/>)
    return(
        <>
           <div className="fixed w-11/12 h-2/3 sm:w-2/3 sm:h-1/2">
                <div className="max-h-full border-4 border rounded-md bg-black/25 backdrop-blur-sm overflow-y-scroll">
                        {detail}
                </div>
           </div>
        </>
    )
}