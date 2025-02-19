import Image from 'next/image'
import Link from 'next/link'
export default function SearchItem({info}){
    return(
        <>
            <div className="">
                <div className='flex flex-col align-center gap-2 border-2 border-white'>
                    <div className="p-2 sm:p-4 flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-12" key={info.id}>
                        <div className="border-2 rounded-md broder-slate-50 p-2"><Image  src={`${info.image}`} width={150} height={150} alt="Picture of the author"/></div>
                        <Link href={`/Products/${info.id}`}><h1 className="font-semibold m-2 p-2 text-center text-xl lg:text-3xl text-red-700 hover:drop-shadow-md hover:scale-110">{info.title}</h1></Link>
                    </div>
                </div>
            </div>
        </>
    )
}