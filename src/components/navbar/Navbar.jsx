import React from 'react'
import { BsFillBellFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'


const Navbar = () => {
    return (
        <div className='pl-1  pt-3 flex justify-between space-x-3  h-[50px] bg-blue-400 w-[500px] '>
            <h5>Notification </h5>
            <div className='flex space-x-2 justify-between'>
                <div className='flex'>
                    <BsFillBellFill color="white" className=''  size={30}/>
                    <p className='bg-red-600 px-2 mb-2 mt-2  text-sm rounded-full text-white z-2 ml-[-10px]'>2</p>
                </div>
                <div className='flex pr-4'>
                    <AiOutlineMail color='white' size={30} className='mr-2' />
                    <p className='bg-red-600 px-2 mb-2 mt-2   text-sm rounded-full text-white z-2 ml-[-20px]'>2</p>
                </div>

            </div>
        </div>
    )
}

export default Navbar