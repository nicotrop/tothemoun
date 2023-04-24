import { Layout, Wrapper } from "@/components/global";
import { InterceptMixedGrid } from "@/components/mixedGrid";
import MockCarousel2 from "@/components/mockCarousel2";
import MockCarousel from "@/components/mockCarousel";
import MockCarousel3 from "@/components/mockCarousel3";
import { WashingtonPostGrid } from "@/components/mixedGrid2";

export default function PreviewSlices() {
  return (
    <Layout>
      <Wrapper>
        <div className="mt-1">
          Mixed Grid Component from{" "}
          <a href="https://theintercept.com/">The Intercept</a>
        </div>
      </Wrapper>
      <InterceptMixedGrid />
      <Wrapper>
        <div className="mt-1">
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
