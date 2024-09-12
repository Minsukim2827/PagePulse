import AnimateWrapper from "@/components/AnimateWrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <AnimateWrapper>
        <div className="flex justify-center m-auto"> 
<SignIn />
        </div>
        </AnimateWrapper>
    );
}