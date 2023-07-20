import {BsSearch} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import React from 'react';
import Link from 'next/link'

export default function Navbar(){
    return(
        <>
            <div className='fixed z-10 w-screen p-1 bg-slate-300'>
                <div className='flex justify-between items-center'>
                    <div className='ml-6 bg-white p-1 rounded-md'><Link href={'/'}><div className='m-2' ><AiFillHome size={32} style={{ color: 'black', fontWeight: 'bolder' }}/></div></Link></div>
                    <button className='mr-8 bg-white p-1 rounded-md'>
                        <Link href={`/Search`}>
                            <div className='m-2'><BsSearch size={32} style={{ color: 'black', fontWeight: 'bolder' }}/></div> 
                        </Link>
                    </button>
                </div>

            </div>
        </>
    )
}