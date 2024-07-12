"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  text,
  cancel,
}: {
  text: string;
  cancel?: boolean;
}) {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row gap-x-10 gap-y-5 mt-8">
      {cancel && (
        <Link href="/" aria-disabled={pending} className="bg-[#ff4c4c] btn">
          Cancel
        </Link>
      )}
      <button
        type="submit"
        aria-disabled={pending}
        className={`bg-blue btn ${pending && "opacity-75 transition-none"}`}
      >
        {pending ? "submitting..." : text}
      </button>
    </div>
  );
}
