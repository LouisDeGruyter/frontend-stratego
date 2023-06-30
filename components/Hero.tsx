"use client";
import React from "react";
import {CustomButton} from '@/components';
import Image from 'next/image';
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();
    const handleClickPlay = () => {
        router.push('/chat')

    }
    return(
        <div className="hero">
            <div className="flex-1 pt-16 padding-x">
                <h1 className="hero__title">
                    Strategy
                </h1>
                <p className="hero__subtitle">
                    Play Strategy online against a friend or against the computer.
                </p>
                <CustomButton
                title="Play Stratego"
                containerStyles='bg-primary-blue text-white rounded-full mt-10'
                handleClick={handleClickPlay}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/heroImage.png" alt="hero" fill className="object-contain"/>
                </div>
                <div className="hero__image-overlay"/>
            </div>
            
        </div>

    )
}
export default Hero;