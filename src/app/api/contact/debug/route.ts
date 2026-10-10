import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  const db = supabaseAdmin();
  const { data, error } = await db
    .from("contact_submissions")
    .insert({
      name: "Debug Test",
      email: "debug@example.com",
      message: "Testing insert directly from debug route.",
    })
    .select();

  return NextResponse.json({
    env: {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL?.slice(0, 30) + "...",
      anonLen: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length,
      serviceLen: process.env.SUPABASE_SERVICE_ROLE_KEY?.length,
    },
    data,
    error,
  });
}
