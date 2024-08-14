"use client";

import { useRef } from "react";
import FormInput from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { toast } from "sonner";
import { sendMessage } from "@/lib/actions";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function clientAction(formData: FormData) {
    const response = await sendMessage(formData);
    if (response.error) {
      toast.error(`${response.error}`);
    } else {
      toast.success(`${response?.message || "Message successfully sent!"}`);
      formRef.current?.reset();
    }
  }

  return (
    <form ref={formRef} action={clientAction} className="max-w-[900px] w-full mt-16 bg-[#2D2D2D] p-6 sm:p-10 rounded-lg">
      <div className="flex flex-col gap-y-5 w-full">
        <FormInput
          type="text"
          name="title"
          placeholder="Enter your message title"
          label="Title"
          width="w-full"
        />
        <FormInput name="message" textarea label="Message" />
      </div>
      <SubmitButton text="Send Message" />
    </form>
  );
}
