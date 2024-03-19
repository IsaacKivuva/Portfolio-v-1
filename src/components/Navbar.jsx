import React, {useState} from 'react'
import Logo4 from '../assets/Logo4.png'
import {FaTimes, FaBars, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonBadgeFill} from 'react-icons/bs'

const Navbar = () => {

    const[nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-7 bg-[#2e5422] text-[#eaeee9]'>
        <div >
            <img src={Logo4} alt='Logo' style={{width: '80px'}} className='z-10' />
        </div>
        <div>
            <ul className='hidden md:flex'>
                <li className='hover:bg-[#eaeee9] hover:text-[#1e1e1f] hover:rounded-xl duration-100'>Home</li>
                <li className='hover:bg-[#eaeee9] hover:text-[#1e1e1f] hover:rounded-xl duration-100'>About</li>
                <li className='hover:bg-[#eaeee9] hover:text-[#1e1e1f] hover:rounded-xl duration-100'>Skills</li>
                <li className='hover:bg-[#eaeee9] hover:text-[#1e1e1f] hover:rounded-xl duration-100'>Projects</li>
                <li className='hover:bg-[#eaeee9] hover:text-[#1e1e1f] hover:rounded-xl duration-100'>Contact</li>
            </ul>
        </div>

        {/* Hamberger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes /> }
        </div>

        {/* Mobile view */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#161f13e1] flex flex-col items-center justify-center'}>
            <li className='py-5 text-2xl'>Home</li>
            <li className='py-5 text-2xl'>About</li>
            <li className='py-5 text-2xl'>Skills</li>
            <li className='py-5 text-2xl'>Projects</li>
            <li className='py-5 text-2xl'>Contact</li> 
        </ul>

        {/* Socials */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300  bg-blue-600'>
                    <a href='' className='flex justify-between items-center w-full h-full'>
                        LinkedIn 
                        <FaLinkedin  size={30}  />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a href='' className='flex justify-between items-center w-full h-full'>
                        GitHub
                        <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ea4335]'>
                    <a href='' className='flex justify-between items-center w-full h-full'>
                        Email
                        <HiOutlineMail  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#97aa91]'>
                    <a href='' className='flex justify-between items-center w-full h-full'>
                        Resume 
                        <BsFillPersonBadgeFill  size={30}/>
                    </a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar