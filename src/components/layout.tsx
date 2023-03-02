import { ReactNode } from "react";
import Image from "next/image";

export const Layout = ({
  children,
  navigation,
}: {
  children: ReactNode;
  navigation: any;
}) => {
  return (
    <div>
      <section className="h-screen">
        <Header navigation={navigation} />
        <main>{children}</main>
      </section>
      <Footer />
    </div>
  );
};

const Header = ({ navigation }: any) => {
  return (
    <header className="h-full">
      <iframe
        className="aspect-video w-full min-h-[370px] bg-blend-overlay bg-red bg-opacity-10"
        src="https://www.youtube.com/embed/pyIa-TInRTQ?autoplay=1&mute=1&controls=0&loop=1&start=2&disablekb=1&modestbranding=1&iv_load_policy=3&rel=0&showinfo=0&autohide=1&enablejsapi=1&origin=https://www.alexbrown.dev&widgetid=1"
      ></iframe>
      <input type="text" name="search" id="searchBar" />
      <nav>
        <ul className="flex border-solid border-2 border-black">
          {navigation?.data?.navigation_item?.map((item: any, i: number) => (
            <li key={i}>
              <span>{item.item_name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return <footer>Footer</footer>;
};
