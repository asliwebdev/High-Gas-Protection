export default function FormInput({
  type,
  placeholder,
  label,
  minLength,
  textarea,
  width,
}: {
  type?: string;
  placeholder?: string;
  label: string;
  minLength?: number;
  textarea?: boolean;
  width?: string;
}) {
  const inputProps: { [key: string]: any } = {
    className:
      "block w-full py-[9px] placeholder:text-[rgba(201,201,201,1)] bg-transparent border-b outline-none",
    id: type,
    type: type,
    name: type,
    placeholder: placeholder,
    required: true,
    minLength: minLength || 0,
  };

  if (type === "tel") {
    inputProps.pattern = "[0-9]{9}";
  }

  return (
    <div
      className={`w-full ${
        !textarea && !width && "lg:w-1/2"
      } flex flex-col gap-y-1`}
    >
      <label htmlFor={type}>{label}</label>
      {textarea ? (
        <textarea
          name="message"
          className="focus:outline-none placeholder:text-[rgba(201,201,201,1)] bg-transparent border-b py-2.5 placeholder:font-medium"
          placeholder="Write your message..."
          required
          rows={4}
        />
      ) : (
        <input {...inputProps} />
      )}
    </div>
  );
}
