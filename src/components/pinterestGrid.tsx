import Image from "next/image";
import { SectionTitle, SectionTitleContainer, Wrapper } from "./global";
import Link from "next/link";
import { arrayArticles } from "@/utils/mockData";

export const PinterestGrid = () => {
  return (
    <Wrapper>
      {/* <hr className="border-t-4 border-solid border-black pb-4" /> */}
      {/* <AboutText /> */}
      {/* <SectionTitleContainer containerClassName="border-t-4 border-white sm:border-black border-solid pt-4">
        <div className="flex flex-col gap-2">
          <SectionTitle title="#TOTHEMOUN" showSymbol={false} />
        </div>
      </SectionTitleContainer> */}
      <ul className="pin_container">
        <PinterestCard type="small" data={arrayArticles[0]} />
        <PinterestCard type="large" data={arrayArticles[0]} />
        <PinterestCard type="medium" data={arrayArticles[0]} />
        <PinterestCard type="large" data={arrayArticles[0]} />
        <PinterestCard type="small" data={arrayArticles[0]} />
        <PinterestCard type="large" data={arrayArticles[0]} />
        <PinterestCard type="small" data={arrayArticles[0]} />
        <PinterestCard type="medium" data={arrayArticles[0]} />
        <PinterestCard type="large" data={arrayArticles[0]} />
        <PinterestCard type="medium" data={arrayArticles[0]} />
      </ul>
    </Wrapper>
  );
};

const OtherMarquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-fit h-fit flex items-center overflow-hidden bg-transparent">
      <div className="w-fit flex items-center whitespace-nowrap overflow-hidden gap-4 relative animate-marquee text-9xl text-tertiary uppercase tracking-tighter py-6">
        {children}
      </div>
    </div>
  );
};

const AboutText = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`max-w-3xl m-auto flex flex-col items-center text-center gap-4 pb-12 ${className}`}
    >
      <h3 className="text-4xl lg:text-5xl font-black tracking-tighter font-header">
        About us
      </h3>
      <p className="font-bebas">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
        perspiciatis laboriosam accusantium dolore rem porro maxime placeat
        quasi sed modi, at dolorum quibusdam fugiat iusto! Voluptatem, laborum
        reprehenderit, iure delectus, quisquam tempora rerum quibusdam officia
        nobis eum ad vel molestiae nostrum odit accusamus fugiat laboriosam
        distinctio? In quidem odit, atque dolores ullam dolorem quis itaque
        architecto accusantium incidunt, non porro quae placeat eum maxime. Ut
        itaque, hic cum modi ad eveniet beatae in voluptate. Quidem quia quo,
        vitae suscipit corporis et dignissimos accusantium nesciunt eligendi
        blanditiis maiores officiis excepturi soluta eum rerum reprehenderit
        praesentium alias, commodi placeat voluptatum sint dolor?
      </p>
    </div>
  );
};

const PinterestCard = ({
  type,
  data,
}: {
  type: "small" | "medium" | "large";
  data: any;
}) => {
  let currentClass = "";
  switch (type) {
    case "small":
      currentClass = "card_small";
      break;
    case "medium":
      currentClass = "card_medium";
      break;
    case "large":
      currentClass = "card_large";
      break;
    default:
      currentClass = "card_medium";
      break;
  }
  return (
    <li className={`card ${currentClass} relative overflow-hidden`}>
      <Link href={"/"}>
        <Image
          alt="pinterest img"
          src={data.article_cover}
          fill
          className="object-cover w-full h-full"
        />
      </Link>
    </li>
  );
};
