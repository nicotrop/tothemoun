import { ReactNode } from "react";
import { Header, itemType } from "./Header";

export const Layout = ({
  children,
  navigation,
}: {
  children: ReactNode;
  navigation: itemType[];
}) => {
  return (
    <div>
      <section className="w-screen">
        <Header navigation={navigation} />
        {/* <main className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"> */}
        <main>{children}</main>
      </section>
      <Footer />
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
}: {
  children: ReactNode;
  padding?: boolean;
  className?: string;
}) => {
  return (
    <section
      className={`${
        padding ? `px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12` : null
      } ${className} py-12`}
    >
      {children}
    </section>
  );
};
