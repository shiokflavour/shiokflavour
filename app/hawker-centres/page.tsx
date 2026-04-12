import { getClosureStatusesForNames } from "../lib/hawker-closures";
import { FEATURED_HAWKERS } from "../lib/featured-hawkers";
import HawkerCentresClient from "./hawker-centres-client";

export default async function HawkerCentresPage() {
  const closureByName = await getClosureStatusesForNames(
    FEATURED_HAWKERS.map((h) => h.name),
  );
  return <HawkerCentresClient closureByName={closureByName} />;
}
