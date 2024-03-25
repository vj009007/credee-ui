"use client";
import BaseDialog from "./BaseDialog";
import { FaUserPlus } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function SignupDialog(props: Props) {
  return (
    <BaseDialog
      open={props.open}
      setOpen={props.setOpen}
      titleText="Sign up"
      bodyText="To open all the possibilities, please log in or register"
      icon={<FaUserPlus />}
      btnIcon={<FaGoogle />}
      footerText="Have an account?"
      signLink="Sign in"
      buttons={[
        {
          text: "Sign up with Google",
          onClick: () => {
            alert("not implemented yet");
          },
        },
      ]}    />
  );
}
