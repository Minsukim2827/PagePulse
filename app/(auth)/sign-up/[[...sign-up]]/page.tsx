import AnimateWrapper from "@/components/AnimateWrapper";
import {SignUp} from "@clerk/nextjs"

export default function Page() {
    return (
        <AnimateWrapper>
        <div className="flex justify-center m-auto"> 
            <SignUp />
        </div>
        </AnimateWrapper>
    );
}