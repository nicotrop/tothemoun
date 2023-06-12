import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { Key, ReactNode } from "react";
import { NavBar } from "./navBar";
import FooterClient from "./footer.client";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { KeyTextField, LinkField } from "@prismicio/types";
import { PrismicLink } from "@prismicio/react";

export const MobileBottomNav = () => {
  return (
    <div className="fixed sm:hidden h-14 z-50 bg-primary bottom-0 w-full border-black border-t-2 grid grid-cols-3 content-center text-center">
      <Link href={"/"}>
        <span>Ou manger</span>
      </Link>
      <Link href={"/"}>
        <span>Ou loger</span>
      </Link>
      <Link href={"/"}>
        <span>Que faire</span>
      </Link>
    </div>
  );
};

export const Wrapper = ({
  children,
  padding = true,
  className,
  style,
}: {
  children: ReactNode;
  padding?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <section
      className={`${padding ? `px-8 py-12` : "p-0"} ${className} w-full`}
      style={style}
    >
      {children}
    </section>
  );
};

export const Container = ({
  children,
  className,
  padding = "around",
}: {
  children: ReactNode;
  className?: string;
  padding: "right" | "left" | "around";
}) => {
  return (
    <div
      className={`${
        padding === "right"
          ? `pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12`
          : padding === "left"
          ? `pl-4 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12`
          : padding === "around"
          ? `px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12`
          : null
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const SectionTitle = ({
  title,
  className = "font-header",
  showSymbol = true,
}: {
  title?: string | KeyTextField;
  className?: string;
  showSymbol?: boolean;
}) => {
  let defaultTitle = "Edit me";
  return (
    <h3
      className={`text-4xl lg:text-5xl font-black tracking-tighter ${className}`}
    >{`${title ? title : defaultTitle} ${showSymbol === true ? " >" : ""}`}</h3>
  );
};

export const SectionTitleContainer = ({
  children,
  containerClassName = "",
}: {
  containerClassName?: string;
  linkClassName?: string;
  children: React.ReactNode;
  link?: Url;
}) => {
  return <div className={`pb-6 ${containerClassName}`}>{children}</div>;
};

export const FontLogo = () => {
  return (
    <h2 className={`text-2xl font-extrabold uppercase text-white`}>
      to the moun
    </h2>
  );
};

export const ThemeButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-primary text-secondary text-base font-medium py-2 px-4 rounded-md w-fit hover:bg-secondary hover:text-primary hover:ease-linear hover:duration-200">
      {children}
    </button>
  );
};

export const GlobalButton = ({
  text,
  link,
  className = "",
}: {
  text: string;
  link?: LinkField;
  className?: string;
}) => {
  return (
    <button
      className={`h-fit w-fit flex cursor-pointer ${className} rounded-sm text-primary sm:text-secondary bg-secondary sm:bg-white whitespace-nowrap border-solid border-secondary sm:border-white border-2 hover:bg-transparent sm:hover:bg-[#FFFFFF26] hover:text-secondary sm:hover:text-white ease-in-out duration-300`}
    >
      {link ? (
        <PrismicLink
          field={link}
          className="flex items-center gap-2 justify-center h-11 py-0 px-4 font-semibold text-sm tracking-wider uppercase font-title"
        >
          <span>{text}</span>
          <ChevronDoubleRightIcon className="w-3 h-3" />
        </PrismicLink>
      ) : (
        <Link
          href={"/"}
          className="flex items-center gap-2 justify-center h-11 py-0 px-4 font-semibold text-sm tracking-wider uppercase font-title"
        >
          <span>{text}</span>
          <ChevronDoubleRightIcon className="w-3 h-3" />
        </Link>
      )}
    </button>
  );
};

export const ArticleTag = ({
  tags,
  className = "",
}: {
  tags: string[];
  className?: string;
}) => {
  return (
    <div className={`${className}`}>
      {tags.map((tag, i) => {
        if (i < 1) {
          return (
            <span
              key={i}
              className={`uppercase text-xs font-title tracking-tight font-semibold`}
            >
              {tag}
            </span>
          );
        }
      })}
    </div>
  );
};
