import { Layout, Wrapper } from "@/components/global";
import { InterceptMixedGrid } from "@/components/mixedGrid";
import MockCarousel2 from "@/components/mockCarousel2";
import MockCarousel3 from "@/components/mockCarousel3";
import { HeroSliders, HeroVideo } from "@/components/heroComponents";
import { InterceptImprovedGrid } from "@/components/mixedGridImproved";

export default function PreviewSlices() {
  return (
    <Layout>
      {/* <Wrapper>
        <div>
          Hero Auto Sliders + Ecom Sticky NavBar + Marquee Scrolling Banner
        </div>
      </Wrapper>
      <HeroSliders /> */}
      <Wrapper>
        <div>Hero Video + Ecom Sticky NavBar + Overlay title + Down button</div>
      </Wrapper>
      <HeroVideo />
      <Wrapper padding={true}>
        <div className="mt-8">
          Mixed Grid Component from{" "}
          <a href="https://theintercept.com/">The Intercept</a>
        </div>
      </Wrapper>
      <InterceptMixedGrid />
      <Wrapper padding={true}>
        <div className="mt-8">
          Improved Grid Component from{" "}
          <a href="https://theintercept.com/">The Intercept</a>
        </div>
      </Wrapper>
      <InterceptImprovedGrid />
      <Wrapper>
        <div className="mt-8">Carousel Component2 // No inspiration</div>
      </Wrapper>
      <MockCarousel2 />
      <Wrapper>
        <div className="mt-8">Carousel Component3 // No inspiration</div>
      </Wrapper>
      <MockCarousel3 />
    </Layout>
  );
}
