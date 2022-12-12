import React from 'react'
import Image from 'next/image'
import Lolo from '../../public/projects/Lolo.png'
import Link from 'next/link'

const index = () => {
  return (
    <div className='w-full '>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#ab1c1c]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group hover:bg-gradient-to-r from-[#d72323] to-[#ab1c1c]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={Lolo} alt="cardImg"/>
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-2xl text-white tracking-wider text-center'>LoloStore</h3>
                        <p className='pb-2 pt-2 text-white text-center'>Basic HTML - CSS</p>
                        <Link href="/">
                            <p className='text-center py-2 rounded-lg bg-[#f5eded] text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default index