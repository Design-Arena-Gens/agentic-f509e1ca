import { NextResponse } from "next/server";
import { promptIdeas } from "@/data/prompts";

export function GET() {
  return NextResponse.json(promptIdeas, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
