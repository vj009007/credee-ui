"use client";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import closeIcon from "./../../../../public/close.svg";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  icon?: React.ReactNode;
  btnIcon?: React.ReactNode;
  titleText: string;
  bodyText: string;
  footerText: string;
  signLink: string;
  buttons: Button[];
};

type Button = {
  text: string;
  onClick: () => void;
};

export default function BaseDialog(props: Props) {
  const { open, setOpen, icon, titleText, bodyText, footerText, btnIcon, signLink, buttons } = props;

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-8">
                <div>
                  {icon && (
                    <div className="mx-auto flex h-24 w-24 text-[40px] text-primary items-center justify-center rounded-full bg-[#936cff1f]">
                      {icon}
                    </div>
                  )}
                  <div className="mt-3 text-center sm:mt-6">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium text-secondary"
                    >
                      {titleText}
                    </Dialog.Title>
                    <div className="mt-3 max-w-[300px] mx-auto">
                      <p className="text-sm">{bodyText}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-4 btn-style justify-center">
                  {buttons.map((button) => (
                    <button
                      key={button.text}
                      type="button"
                      className="btn btn-primary"
                      onClick={() => button.onClick()}
                    >
                      {btnIcon} {button.text}
                    </button>
                  ))}
                </div>
                {footerText && (
                    <div className="mt-5 text-xs font-normal text-center justify-center flex items-center gap-1">
                      {footerText} <a href="#" className="text-primary text-medium hover:underline">{signLink}</a>
                    </div>
                  )}
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
