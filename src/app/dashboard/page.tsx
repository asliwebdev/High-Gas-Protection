import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Dashboard() {
  return (
    <main className="h-full flex items-center justify-center">
      <div>
        <h1 className="text-6xl">Welcome To The Dashboard! </h1>
        <p className="text-2xl mt-6">
          To Be able to access to this page you have to be authenticated!!!
        </p>
      </div>
    </main>
  );
}
