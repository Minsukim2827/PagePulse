import { SignInForm } from "./signinform";

export default function Page() {
    return (
        
        <div className="shadow-lg bg-theme11 rounded-2xl p-10 gap-6 flex flex-col justify-center m-auto w-p5 dark:border-white"> 
            <h1 className="text-4xl">Sign in to PagePulse!</h1>
            <SignInForm />
        </div>
    );
}