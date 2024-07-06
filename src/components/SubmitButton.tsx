"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-center items-center mt-8">
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
