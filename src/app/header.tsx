"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "./../../public/logo.svg";
import darkMode from "./../../public/dark-mode.svg";
import SigninDialog from "./components/Dialogs/SigninDialog";
import SignupDialog from "./components/Dialogs/SignupDialog";
import ProjectDialog from "./components/Dialogs/projectDailog";

export default function Header() {

const [dialogOpen, setDialogOpen] = useState(false);
const [dialogOpenSignup, setDialogOpenSignup] = useState(false);
const [dialogOpenProject, setDialogOpenProject] = useState(false);
    return (
        <>
        <header className="relative">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <a href="#" className="logo">
                        <Image src={logo} alt="Credee" />
                    </a>
                    <div className="nav-menu flex items-center gap-10">
                        <a href="#">About</a>
                        <button onClick={() => setDialogOpenProject(true)}>How it works</button>
                    </div>
                    <div className="flex items-center gap-10">
                        <button><Image src={darkMode} alt="dark mode" /></button>
                        <div className="btn-wrapper flex items-center gap-4">
                            <button onClick={() => setDialogOpen(true)} className="btn btn-bordered">Sign in</button>
                            <button onClick={() => setDialogOpenSignup(true)} className="btn btn-secondry">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <SigninDialog open={dialogOpen} setOpen={setDialogOpen} />
        <SignupDialog open={dialogOpenSignup} setOpen={setDialogOpenSignup} />
        <ProjectDialog open={dialogOpenProject} setOpen={setDialogOpenProject} />
         </>
    );
  }
  