import { NextResponse } from "next/server";

export const revalidate = 86400; // cache for 24 hours

export async function GET() {
  try {
    const res = await fetch(
      "https://data.gov.sg/api/action/datastore_search?resource_id=d_bda4baa634dd1cc7a6c7cad5f19e2d68&limit=1000",
      { signal: AbortSignal.timeout(8000) },
    );
    const json = await res.json();
    return NextResponse.json(json?.result?.records || []);
  } catch {
    return NextResponse.json([]);
  }
}

