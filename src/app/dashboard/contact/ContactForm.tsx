"use client";

import FormInput from "@/components/FormInput";
import { SubmitButton } from "@/components/SubmitButton";
import { toast } from "sonner";
import { sendMessage } from "@/lib/actions";

export default function ContactForm() {

  async function clientAction(formData: FormData) {
    const response = await sendMessage(formData);
    if (response.error) {
      toast.error(`${response.error}`);
    } else {
      toast.success(`${response?.message || "Message successfully sent!"}`);
    }
  }

  return (
    <form action={clientAction} className="max-w-[900px] mt-16">
      <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full">
        <FormInput
          type="text"
          name="firstname"
          placeholder="Enter your first name"
          label="First Name"
        />
        <FormInput
          type="text"
          name="lastname"
          placeholder="Enter your last name"
          label="Last Name"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5 w-full my-8">
        <FormInput
          type="email"
          name="email"
          placeholder="something@gmail.com"
          label="Email"
        />
        <FormInput
          type="tel"
          name="phoneNumber"
          placeholder="+998 99 123 45 67"
          label="Phone Number"
          minLength={9}
        />
      </div>
      <FormInput name="message" textarea label="Message" />
      <SubmitButton text="Send Message" />
    </form>
  );
}
