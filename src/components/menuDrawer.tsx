import { arrayArticles, navigationItemType } from "@/utils/mockData";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PrismicNextImage } from "@prismicio/next";
import { ImageFieldImage } from "@prismicio/types";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, Fragment, SetStateAction } from "react";
import { NewsleterSection } from "./footer.client";
import tothemounsecond from "../../public/assets/tothemounsecond.svg";

export const MenuDrawer = ({
  navigation,
  open,
  setOpen,
  logo,
}: {
  navigation: navigationItemType[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  logo?: ImageFieldImage;
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="-translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="-translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md z-40 bg-primary text-secondary">
                  <div className="flex h-full flex-col overflow-y-scroll py-6 shadow-xl px-6">
                    <div className="sm:px-6 border-b-2">
                      <div className="flex items-center justify-between border-b-2 border-secondary border-solid py-3">
                        <Dialog.Title>
                          <Link href={"/"} className="pb-6">
                            {logo ? (
                              <PrismicNextImage
                                field={logo}
                                width={124}
                                height={60}
                                className="object-cover h-fit m-0"
                              />
                            ) : (
                              <Image
                                src={tothemounsecond}
                                alt={"logo"}
                                width={124}
                                height={60}
                                className="object-cover h-fit m-0"
                              />
                            )}
                          </Link>
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className=" text-secondary border-solid border-[0.5px] border-tertiary focus:outline-none"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-6">
                      <DrawerMenu navigation={navigation} />
                      <div className="w-full relative aspect-[6/4]">
                        <Image
                          src={arrayArticles[0].article_cover}
                          alt="img cover"
                          fill
                        />
                      </div>
                      <MenuSectionCustom />
                      <hr className="border-t-2 border-secondary border-solid" />
                      <NewsleterSectionCustom />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const NewsleterSectionCustom = () => {
  return (
    <div className="w-full text-secondary">
      {/* <span className="h-10 flex customer-flex-center items-end mb-6 uppercase tracking-tighter"> */}
      <span className="font-medium font-header text-2xl">
        {/* <PrismicRichText field={data.newsletter_header} /> */}
        <h2>Inscrivez vous à notre Newsletter</h2>
      </span>
      <div className="custom-text-center leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus at
        illum possimus necessitatibus dicta a!
      </div>
      <form className="w-full flex customer-flex-center pt-4">
        <div className="w-full py-4 px-1 flex justify-around border-solid border-2 border-secondary">
          <input
            id="emailInput"
            type="email"
            placeholder="Email"
            className="focus:outline-none w-[80%] bg-transparent"
          />
          <input
            type="submit"
            value={"＞"}
            className="text-sm font-black py-0 px-1 hover:cursor-pointer bg-tertiary text-secondary"
          />
        </div>
      </form>
    </div>
  );
};

const MenuSectionCustom = () => {
  const data = [
    {
      text: "Qui sommes nous ?",
      link: "/",
    },
    {
      text: "Contactez nous",
      link: "/",
    },
    {
      text: "Confiance et sécurité",
      link: "/",
    },
    {
      text: "Politique de confidentialité",
      link: "/",
    },
  ];
  return (
    <div className="w-full">
      <ul className="flex flex-col gap-2">
        {data?.map((elem: any, index: number) => {
          if (index < 3) {
            return (
              <li key={index}>
                <Link href={"/"}>
                  <span>{elem.text}</span>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export const DrawerMenu = ({
  navigation,
  className = "",
}: {
  navigation: navigationItemType[];
  className?: string;
}) => {
  return (
    <ul
      className={`flex flex-col -gap-0 text-tertiary font-extrabold uppercase font-header tracking-tighter text-3xl ${className}`}
    >
      {navigation?.map((elem: navigationItemType, i: number) => {
        return (
          <Link key={i} href={`${elem?.item_link?.slug}`}>
            <li className={`w-auto ${i === 0 && "text-secondary"}`}>
              <span>
                {elem.item_name.includes("faire")
                  ? "que faire?"
                  : elem.item_name}
              </span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
