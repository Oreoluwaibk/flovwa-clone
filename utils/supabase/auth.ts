// utils/auth.ts
// import { supabase } from "./supabase/client";

import { createClient } from "./client";
const supabase = createClient();

export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .single(); // only one row

  if (error) {
    console.error("Error fetching profile:", error);
    // return null;
  }

  return { data, error };
};

export const updateUserProfile = async (
  userId: string,
  updates: Partial<{
    name: string;
    last_name: string;
    email: string;
    profile_pic: string;
    interest: string;
    goal: string;
    country: string;
    city: string;
    flag: string;
    country_code: string;
    country_code_iso3: string;
    is_author: boolean;
    role: string[];
    tools: string[];
    total_points: number;
    referral_count: number;
  }>
) => {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("user_id", userId)
    .select(); // returns updated row

  if (error) {
    console.error("Error updating profile:", error);
    return null;
  }

  return data?.[0]; // updated profile
};
