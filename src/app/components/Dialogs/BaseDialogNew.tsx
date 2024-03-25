import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import closeIcon from "./../../../../public/close.svg";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  titleText: string;
  bodyText: string;
  buttons: Button[];
};

type Button = {
  text: string;
  onClick: () => void;
};

export default function BaseDialog(props: Props) {
  const { open, setOpen, titleText, bodyText, buttons } = props;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[800px] sm:p-8">
                <div>
                  <div className="text-start">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium text-secondary"
                    >
                      {titleText}
                    </Dialog.Title>
                    <div className="mt-6" dangerouslySetInnerHTML={{ __html: bodyText }} />
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-4 btn-style justify-center max-w-[424px]">
                  {buttons.map((button) => (
                    <button
                      key={button.text}
                      type="button"
                      className="btn btn-primary"
                      onClick={() => button.onClick()}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
                <button className="absolute top-8 right-8" onClick={() => setOpen(false)}>
                  <Image src={closeIcon} alt="close Icon" />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}