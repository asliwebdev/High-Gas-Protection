import type { Metadata } from "next";

import { getUserProfile } from "@/lib/data";
import ProfileInfos from "./ProfileInfos";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function Profile() {
  const profileData = await getUserProfile();
  return (
    <main className="h-full flex justify-center">
      <ProfileInfos profileData={profileData} />
    </main>
  );
}
