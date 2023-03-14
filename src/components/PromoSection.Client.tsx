import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useMediaQuery from "@/utils/hooks";
import { Wrapper } from "./Layout";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function ClientPromoSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/promo-data");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return data ? <PromoSection data={data} /> : null;
}

export type PromoSectionType = {
  mobileImageURL: string;
  desktopImageURL: string;
  promoLink?: string;
};

export const PromoSection = ({ data }: { data: PromoSectionType }) => {
  const isMobile = useMediaQuery("(max-width: 479px)");

  return (
    <Wrapper padding={false} className="py-6">
      <figure className="relative w-full sm:min-w-[30px] md:min-w-[380px] xl:min-w-0">
        <Link href={data?.promoLink ?? "#"} className="w-full h-full">
          <Image
            src={isMobile ? data.mobileImageURL : data.desktopImageURL}
            alt="promo-image"
            height={350}
            width={350}
            className={`object-cover h-full w-full max-h-[450px] xl:max-h-[600px] overflow-hidden ${
              isMobile ? "aspect-[3/4]" : "aspect-video"
            }`}
          />
        </Link>
      </figure>
    </Wrapper>
  );
};
