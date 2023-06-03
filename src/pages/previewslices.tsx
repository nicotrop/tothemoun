import { Layout } from "@/components/global";
import { HeroVideo } from "@/components/heroComponents";
import { OneArticleBlock } from "@/components/oneArticle";
import { SEOsection } from "@/components/seoSection";
import SquareCardCarousel from "@/components/squareCardsCarousel";
import { PhotoBanner } from "@/components/photoBanner";
import { PinterestGrid } from "@/components/pinterestGrid";
import { MarqueeBannerComp } from "@/components/marqueeBanner";

export default function PreviewSlices() {
  return (
    <Layout>
      <HeroVideo />
      <OneArticleBlock />
      <SquareCardCarousel />
      <PhotoBanner />
      <MarqueeBannerComp />
      <SEOsection />
      <PinterestGrid />
    </Layout>
  );
}
