import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-[#2e5422] text-[#dadada]'>
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right '>
                    <p className='text-4xl font-bold inline border-b-4 border-[#c9ba36]'>About</p>
                
                    <div></div>
                
                </div>
            </div>
            <div className='max-w-[5000px] w-full grid sm:grid-cols-2 gap-8 py-6 px-[65px]'>
                <div>
                    <p className='text-4xl font-bold'>
                        Hey, my name is Isaac. I invite you to my portifolio and get to know me.
                     </p>
                </div>
                <div>
                    <p className=''>
                        I have always been passinate about tech sicne I was young. My journey took off when I studied my fullstack development.
                        Since then I have shared my love for this craft with my peers. 
                        Through my compasion for people I strive to learn more and more to be better equiped to help a larger group that I may not have access to right now.
                    </p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default About