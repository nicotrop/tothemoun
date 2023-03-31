import { ReactNode } from "react";
// import { Header, itemType } from "./Header";

export const Layout = ({
  children,
}: // navigation,
{
  children: ReactNode;
  // navigation: itemType[];
}) => {
  return (
    // <div>
    //   <section className="w-screen">
    //     <Header navigation={navigation} />
    //     <main>{children}</main>
    //   </section>
    //   <Footer />
    // </div>
    <div>
      <main>{children}</main>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">Footer</footer>
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
        padding ? `px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12` : null
      } ${className} py-12`}
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
