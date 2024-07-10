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
    <div className="flex justify-center items-center gap-10 mt-8">
      {cancel && (
        <Link
          href="/"
          aria-disabled={pending}
          className="bg-[#ff4c4c] rounded-md font-medium py-2 px-14 hover:opacity-85 transition-all duration-300"
        >
          Cancel
        </Link>
      )}
      <button
        type="submit"
        aria-disabled={pending}
        className={`bg-blue rounded-md font-medium py-2 px-14 btn-shadow hover:opacity-85 transition-all duration-300 ${
          pending && "opacity-75 transition-none"
        }`}
      >
        {pending ? "submitting..." : text}
      </button>
    </div>
  );
}
