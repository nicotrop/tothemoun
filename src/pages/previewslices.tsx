import { Layout } from "@/components/global";
import { HeroVideo } from "@/components/heroComponents";
import { OneArticleBlock } from "@/components/oneArticle";
import { SEOsection } from "@/components/seoSection";
import { TopStories } from "@/components/topStories";
import { CollectionCarousel } from "@/components/collectionCarousel";
import SquareCardCarousel from "@/components/squareCardsCarousel";
import { InterceptImprovedGrid } from "@/components/mixedGridImproved";
import { PhotoBanner } from "@/components/photoBanner";
import { PinterestGrid } from "@/components/pinterestGrid";
import { MarqueeBannerComp } from "@/components/marqueeBanner";

export default function PreviewSlices() {
  return (
    <Layout>
      <HeroVideo />
      <SEOsection />
      <TopStories />
      <CollectionCarousel />
      <InterceptImprovedGrid />
      <OneArticleBlock />
      <InterceptImprovedGrid />
      <SquareCardCarousel />
      <InterceptImprovedGrid />
      <PhotoBanner />
      <InterceptImprovedGrid />
      <MarqueeBannerComp />
      <PinterestGrid />
    </Layout>
  );
}
