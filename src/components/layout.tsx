import { ReactNode } from "react";
import { Header } from "./Header";

export const Layout = ({
  children,
  navigation,
}: {
  children: ReactNode;
  navigation: any;
}) => {
  return (
    <div>
      <section className="w-screen">
        <Header navigation={navigation} />
        <main className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          {children}
        </main>
      </section>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return <footer className="px-4">Footer</footer>;
};
