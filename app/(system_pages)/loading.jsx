
import Image from "next/image";

export default function MainLoadingPage(){
    return (
        <div className={"loading-overlay"}>
            <div className="loader">
                <Image src={"/images/denr_logo.png"} alt="denr-logo" fill/>
            </div>
        </div>

    )
}