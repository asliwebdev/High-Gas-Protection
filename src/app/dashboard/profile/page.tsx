import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Profile() {
  return (
    <main className="h-full flex items-center justify-center">
      <h1 className="text-6xl">Welcome To The Profile Page! </h1>
    </main>
  );
}
