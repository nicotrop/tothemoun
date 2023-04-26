import { navigationItemType } from "@/utils/mockData";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, Fragment, SetStateAction } from "react";

export const MenuDrawer = ({
  navigation,
  open,
  setOpen,
}: {
  navigation: navigationItemType[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md z-40">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-2xl font-extrabold uppercase text-black">
                          to the moun
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <DrawerMenu navigation={navigation} />
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

export const DrawerMenu = ({
  navigation,
}: {
  navigation: navigationItemType[];
}) => {
  return (
    <ul className="flex flex-col gap-1 mt-1">
      {navigation?.map((elem: navigationItemType, i: number) => {
        return (
          <Link key={i} href={`${elem?.item_link?.slug}`}>
            <li className="flex items-center justify-start gap-2 bg-white py-1 h-11 w-auto">
              <Image
                src={elem?.item_icon?.url}
                width={20}
                height={20}
                alt="icon"
                className="object-contain w-4 h-auto"
              />
              <span>{elem.item_name}</span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
