"use client";
import { FaGoogle } from "react-icons/fa";
import BaseDialog from "./BaseDialog";
import { IoLogIn } from "react-icons/io5";


type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function GoogleSigninDialog(props: Props) {
  return (
    <BaseDialog
      open={props.open}
      setOpen={props.setOpen}
      titleText="Sign in"
      bodyText="To open all the possibilities, please log in or register"
      icon={<IoLogIn />}
      btnIcon={<FaGoogle />}
      footerText="Don’t have an account?"
      signLink="Sign up"
      buttons={[
        {
          text: "Sign in with Google",
          onClick: () => {
            alert("not implemented yet");
          },
        },
      ]}
       />
  );
}
