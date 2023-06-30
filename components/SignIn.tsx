"use client";
import { signInWithGoogle } from '@/firebase/config';
import { CustomButton } from "@/components";
const SignIn=()=> {
    return (
        <div className="flex-1 h-screen flex flex-col items-center justify-center pb-20 px-10">
            <h1 className="text-xl">You need to sign in to access this page!</h1>
            <CustomButton
                title="Sign in with Google"
                containerStyles='bg-primary-blue text-white rounded-full mt-10'
                handleClick={signInWithGoogle}
            />
        </div>


    )
}
export default SignIn;