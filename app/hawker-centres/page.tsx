import HawkerCentresClient from "@/app/components/hawker-centres-client";
import {
  getClosureStatus,
  type ClosureStatus,
} from "@/app/lib/hawker-closures";
import { FEATURED_HAWKERS as HAWKER_CENTRES } from "@/app/lib/featured-hawkers";

export default async function HawkerCentresPage() {
  const closureMap: Record<string, ClosureStatus> = {};
  await Promise.all(
    HAWKER_CENTRES.map(async (hawker) => {
      const closure = await getClosureStatus(hawker.name);
      closureMap[hawker.name] = closure;
    }),
  );
  return (
    <HawkerCentresClient hawkers={HAWKER_CENTRES} closureMap={closureMap} />
  );
}
