import { Layout, Wrapper } from "@/components/global";
import { InterceptMixedGrid } from "@/components/mixedGrid";
import MockCarousel2 from "@/components/mockCarousel2";
import MockCarousel3 from "@/components/mockCarousel3";
import {
  HeroSliders,
  HeroVideo,
  MarqueeBanner,
} from "@/components/heroComponents";
import { InterceptImprovedGrid } from "@/components/mixedGridImproved";
import { OneArticleBlock } from "@/components/oneArticle";
import { SEOsection } from "@/components/seoSection";
import { ALaUne } from "@/components/laUne";

export default function PreviewSlices() {
  return (
    <Layout>
      <HeroVideo />
      {/* <Wrapper padding={true}>
        <div className="mt-8">
          Improved Grid Component from{" "}
          <a href="https://theintercept.com/">The Intercept</a>
        </div>
      </Wrapper> */}
      <SEOsection />
      {/* <div className="overflow-hidden">
        <MarqueeBanner>
          <div className="inline-flex items-center gap-2">
            <GlobeAmericasIcon className="w-5 h-5 text-secondary" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              at.
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              at.
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <GlobeAmericasIcon className="w-5 h-5" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              at.
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              at.
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <GlobeAmericasIcon className="w-5 h-5" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              at.
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              at.
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <GlobeAmericasIcon className="w-5 h-5" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              at.
            </span>
          </div>
          <div className="inline-flex items-center gap-2">
            <UserIcon className="w-5 h-5" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              at.
            </span>
          </div>
        </MarqueeBanner>
      </div> */}
      <ALaUne />
      <OneArticleBlock />
      <MockCarousel3 />
      <InterceptImprovedGrid />
      <OneArticleBlock />
      <InterceptImprovedGrid />
      {/* <Wrapper>
        <div className="mt-8">Carousel Component2 // No inspiration</div>
      </Wrapper> */}
      <MockCarousel2 />
      {/* <Wrapper>
        <div className="mt-8">Carousel Component3 // No inspiration</div>
      </Wrapper> */}
    </Layout>
  );
}
