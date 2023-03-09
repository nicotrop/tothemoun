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
      <section>
        <Header navigation={navigation} />
        <main>{children}</main>
      </section>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return <footer>Footer</footer>;
};
