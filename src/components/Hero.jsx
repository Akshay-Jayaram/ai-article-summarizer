import React from 'react'
import { ai }  from "../assets/";


const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-6 pt-2'>
                <img src={ai} alt='logo' className='w-36 object-contain' />
            </nav>

            <h1 className='head_text'>
                <span className='blue_gradient '>SummAIzer</span><br className='max-md:hidden' /> Your Ultimate AI-Powered Article Summarizer
            </h1>
            <h2 className='desc'>
            Transform lengthy articles into concise insights effortlessly, saving you time and delivering the essence of content in seconds.
            </h2>
        </header>
    );
}

export default Hero