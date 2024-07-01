import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
};

export default function About() {
  return (
    <main className="h-full flex items-center justify-center">
      <h1 className="text-6xl">Welcome To The FAQs Page! </h1>
    </main>
  );
}
