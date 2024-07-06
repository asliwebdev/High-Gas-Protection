type InputTypes = {
  type?: string;
  name: string;
  placeholder?: string;
  label: string;
  minLength?: number;
  textarea?: boolean;
  width?: string;
};

export default function FormInput({
  type,
  name,
  placeholder,
  label,
  minLength,
  textarea,
  width,
}: InputTypes) {
  const inputProps: { [key: string]: any } = {
    className:
      "block w-full py-[9px] placeholder:text-[rgba(201,201,201,1)] bg-transparent border-b outline-none",
    type,
    name,
    id: name,
    placeholder,
    required: true,
    minLength: minLength || 0,
  };

  if (type === "tel") {
    inputProps.pattern = "\\+998[0-9]{9}";
  }

  return (
    <div
      className={`w-full ${
        !textarea && !width && "lg:w-1/2"
      } flex flex-col gap-y-1`}
    >
      <label htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea
          name="message"
          id={name}
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
