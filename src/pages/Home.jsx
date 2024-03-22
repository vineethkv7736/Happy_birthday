import React from 'react'
import BgParticles from '../../components/BgParticles'

const Home = () => {

    return (
        <div className="min-h-screen w-full">
            <BgParticles/>
            <div className='flex flex-col justify-center items-center min-h-screen w-full text-white'>
                <h1 className="text-5xl md:text-8xl land mb-1">Happy Birthday</h1>
                <p className="text-2xl land">@ 15</p>
                <p className="mb-6 text-xs">I hope you enjoy your special day to the fullest</p>
                <img src="./src/assets/bithday.jpeg" alt="birthday" width={300} height={300 } className="rounded-xl h-auto w-1/2 md:w-1/3"/>
                {/* <audio src="./src/assets/birthdaySong.mp3" autoPlay={true}></audio> */}
                <p className="text-sm font-serif opacity-50 mt-2"> Forget the past;
                look forward to the future </p><p className="text-sm font-serif opacity-50 my-1">The best things are yet to come</p>
            </div>
        </div>
    )
}

export default Home
