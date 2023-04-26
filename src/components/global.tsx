import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main className="">{children}</main>
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
      className={`${
        padding ? `px-4 xl:px-0` : null
      } ${className} pt-8 pb-2 xl:px-0 max-w-7xl m-auto px-0`}
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
  className,
}: {
  title?: string;
  className?: string;
}) => {
  let defaultTitle = "Edit me";
  return (
    <h2
      className={`text-[32px] lg:text-[52px] font-extrabold tracking-tighter font-header ${className}`}
    >{`${title ? title : defaultTitle} >`}</h2>
  );
};

export const SectionTitleContainer = ({
  children,
  link,
  containerClassName = "",
  linkClassName = "",
}: {
  containerClassName?: string;
  linkClassName?: string;
  children: React.ReactNode;
  link?: Url;
}) => {
  return (
    <div className={`pb-7 ${containerClassName}`}>
      <Link href={link ? link : "#"} className={`${linkClassName}`}>
        {children}
      </Link>
    </div>
  );
};

export const FontLogo = () => {
  return (
    <h2
      className={`text-2xl font-extrabold uppercase text-white"
    }`}
    >
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
