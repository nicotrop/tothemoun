import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";
import { NavBar } from "./navBar";

export const Layout = ({
  children,
  footer,
  header,
}: {
  children: ReactNode;
  footer?: any;
  header?: any;
}) => {
  console.log(header);

  return (
    <div>
      {header && (
        <NavBar
          navigation={header.navigation.data.navigation_item}
          logo={header.logo}
        />
      )}
      <main>{children}</main>
      <footer>{footer}</footer>
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
      className={`${padding ? `px-5` : "px-0"} ${className} pt-8 pb-2 w-full`}
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
}: {
  title?: string;
  className?: string;
}) => {
  let defaultTitle = "Edit me";
  return (
    <h2
      className={`text-4xl lg:text-5xl font-black tracking-tighter ${className}`}
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

export const ArticleTag = ({
  tags,
  className = "",
  secondaryOnMobile = false,
}: {
  tags: string[];
  className?: string;
  secondaryOnMobile?: boolean;
}) => {
  return (
    <div className={`gap-2 ${className}`}>
      {tags.map((tag, i) => {
        if (i < 2) {
          return (
            <span
              key={i}
              className={`text-xs w-fit border-solid border-2 py-2 px-4 rounded-sm font-semibold 
              ${
                secondaryOnMobile
                  ? "border-white tracking-wider uppercase font-title text-secondary bg-white hover:text-white hover:cursor-default hover:bg-transparent ease-in-out duration-300 sm:bg-transparent sm:border-secondary sm:text-secondary sm:hover:text-secondary sm:hover:bg-primary sm:hover:border-primary"
                  : "border-secondary"
              }
              `}
            >
              {tag}
            </span>
          );
        }
      })}
    </div>
  );
};
