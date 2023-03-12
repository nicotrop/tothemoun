import { PromoSectionType } from "@/components/PromoSection.Client";
import { mockPromoSectionData } from "@/utils/mockData";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PromoSectionType>
): void {
  res.status(200).json(mockPromoSectionData);
}
