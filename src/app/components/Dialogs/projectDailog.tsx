"use client";
import BaseDialogNew from "./BaseDialogNew";
import { IoLogIn } from "react-icons/io5";


type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function ProjectDialog(props: Props) {
  return (
    <BaseDialogNew
      open={props.open}
      setOpen={props.setOpen}
      titleText="What is the project?"
      bodyText={
        "Presentation material, without regard to authorities, is still resistant to changes in demand. The segmentation strategy is degenerate. The targeted traffic, at first glance, supports a branded investment product, using the experience of previous campaigns. It seems logical that brand selection distorts the public placement plan. In addition, the rate card is demanding for creativity. " +
        "<br />" + "<br />" +
        "Brand management, at first glance, rarely meets market expectations.The fact is that evaluating the effectiveness of a campaign induces a placement plan. The Marketing and Sales Department concentrates media mix based on the experience of Western colleagues. " + 
        "<br />" + "<br />" +
        "Along with this, production concentrates the corporate principle of perception. The consumer market, of course, produces media mix. The art of media planning justifies the image." +
        "<br />" + "<br />" +
        "Therefore, the media balances the product range. The youth audience accelerates the media business. Social responsibility, according to F.According to Kotler, an out-of-the-ordinary media channel saves money, given current trends."
      }
      buttons={[
        {
          text: "Publish",
          onClick: () => {
            alert("not implemented yet");
          },
        },
        {
          text: "Discard",
          onClick: () => {
            alert("not implemented yet");
          },
        },
      ]}    
      />
  );
}
