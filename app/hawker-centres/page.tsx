import HawkerCentresClient from "@/app/components/hawker-centres-client";
import { FEATURED_HAWKERS as HAWKER_CENTRES } from "@/app/lib/featured-hawkers";

export default function HawkerCentresPage() {
  return <HawkerCentresClient hawkers={HAWKER_CENTRES} />;
}
