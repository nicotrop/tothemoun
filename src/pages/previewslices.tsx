import { Layout, Wrapper } from "@/components/global";
import { InterceptMixedGrid } from "@/components/mixedGrid";
import MockCarousel2 from "@/components/mockCarousel2";
import MockCarousel from "@/components/mockCarousel";
import MockCarousel3 from "@/components/mockCarousel3";
import { WashingtonPostGrid } from "@/components/mixedGrid2";
import HeroVideo from "@/components/heroVideo";
import { EcomVideo, HeroSliders } from "@/components/heroSliders";

export default function PreviewSlices() {
  return (
    <Layout>
      <Wrapper>
        <div>
          Hero Auto Sliders + Ecom Sticky NavBar + Marquee Scrolling Banner
        </div>
      </Wrapper>
      <HeroSliders />
      <Wrapper>
        <div>
          Hero Auto Sliders + Ecom Sticky NavBar + Marquee Scrolling Banner
        </div>
      </Wrapper>
      <EcomVideo />
      <Wrapper>
        <div className="mt-8">
          Hero Video Component + FoodingNav + Scrolling Articles
        </div>
      </Wrapper>
      <HeroVideo />
      <Wrapper>
        <div className="mt-8">
          Mixed Grid Component from{" "}
          <a href="https://theintercept.com/">The Intercept</a>
        </div>
      </Wrapper>
      <InterceptMixedGrid />
      <Wrapper>
        <div className="mt-8">
          Mixed Grid Component from{" "}
          <a href="https://www.washingtonpost.com/">The Washington Post</a>
        </div>
      </Wrapper>
      <WashingtonPostGrid />
      <Wrapper>
        <div className="mt-8">Carousel Component // No inspiration</div>
      </Wrapper>
      <MockCarousel />
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
