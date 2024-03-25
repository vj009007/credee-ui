"use client";
import BaseDialog from "./BaseDialog";
import { IoLogIn } from "react-icons/io5";
import GoogleSigninDialog from "./GoogleSigninDialog";
import { useState } from "react";
import SignupDialog from "./SignupDialog";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function SigninDialog(props: Props) {
  const [dialogOpenSignup, setDialogOpenSignup] = useState(false);
  const [dialogOpenSignin, setDialogOpenSignin] = useState(false);

  return (
    <>
      <BaseDialog
        open={props.open}
        setOpen={props.setOpen}
        titleText="Login is required to continue"
        bodyText=""
        footerText=""
        icon={<IoLogIn />}
        signLink=""
        buttons={[
          {
            text: "Sign in",
            onClick: () => setDialogOpenSignin(true), // Fixed function name
          },
          {
            text: "Sign up",
            onClick: () => setDialogOpenSignup(true),
          },
        ]}
      />
      <SignupDialog open={dialogOpenSignup} setOpen={setDialogOpenSignup} />
      <GoogleSigninDialog open={dialogOpenSignin} setOpen={setDialogOpenSignin} /> {/* Fixed typo in prop name */}
    </>
  );
}