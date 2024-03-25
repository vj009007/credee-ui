import Image from "next/image";
import arrowLeft from "./../../public/arrow-left.svg";
import favIcon from "./../../public/fav-icon.svg";

export default function Banner() {


    return (
       <section className="banner pt-28 pb-20">
        <div className="container mx-auto">
            <div className="flex items-end gap-6">
                <div className="max-w-[486px]">
                    <h1>Find Web3 products with</h1>
                </div>
                <div className="pb-6">
                    <Image src={arrowLeft} alt="arrow left" />
                </div>
                <h1 className="text-primary"><a href="#">Credee.ai</a></h1>
            </div>
            <p className="text-sm font-normal mt-8">
                Write reviews to earn
            </p>
            <div className="mt-10">
                <form action="#" className="flex items-center gap-6">
                    <div className="relative w-full">
                        <Image src={favIcon} alt="fav Icon" className="input-icon" />
                        <input type="text" className="input-style" placeholder="What do you want to know about web3 project?" />
                    </div>
                    <button className="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
       </section>
    );
  }