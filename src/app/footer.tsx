import Image from "next/image";
import logo from "./../../public/footer-logo.svg";
import X from "./../../public/x.svg";
import Discord from "./../../public/discord.svg";

export default function Footer() {


    return (
        <footer className="relative pb-3">
            <div className="container mx-auto">
                <div className="flex items-center justify-between border-t border-solid border-[#10111233] pt-10">
                    <a href="#" className="logo">
                        <Image src={logo} alt="Credee" />
                    </a>
                    <div className="nav-menu flex items-center gap-10">
                        <a href="#">Privacy Policy  </a>
                        <a href="#">Terms </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="#"><Image src={X} alt="icons" /></a>
                        <a href="#"><Image src={Discord} alt="icons" /></a>
                    </div>
                </div>
                <p className="text-xs mt-2">© Copyright Credee.ai</p>
            </div>
        </footer>
    );
  }