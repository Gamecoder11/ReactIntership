import Image from 'next/image'

export async function generateStaticParams() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    const paths = data.map(info=>({Details:`${info.id}`}))
    return paths
  }
   
  async function getPost(params) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.Details}`)
    const info = await res.json()
   
    return info
  }
   
  

export default async function Details({params}){
    const info= await getPost(params)
    return(
        <div className=''>
            <div className="relative top-16 p-1 flex flex-col items-center" key={info.id}>
                <div className="border-2 rounded-md broder-slate-50 p-2"><Image  src={`${info.image}`} width={500} height={500} alt="Picture of the author"/></div>
                <div className="lg:w-5/6 flex flex-col m-1 p-1 gap-2">
                    <h1 className="font-semibold text-2xl lg:text-4xl text-center text-red-700">{info.title}</h1>
                    <h2 className="font-medium italic sm:text-center text-xl sm:2xl xl:text-3xl">${info.price}</h2>
                    <p className="font-medium italic text-lg sm:text-xl xl:text-2xl text-blue-700">{info.description}</p>
                    
                </div>
            </div>
        </div>
    )
}

