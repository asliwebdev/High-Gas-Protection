export default function FormSelect() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-y-1">
      <label htmlFor="gender">Gender</label>
      <select
        name="gender"
        id="gender"
        aria-placeholder="choose your gender"
        className="block w-full py-[9px] text-[rgba(201,201,201,1)] bg-transparent border-b outline-none"
      >
        <option id="placeholder" value="" disabled selected hidden>
          choose your gender...
        </option>
        <option value="male" style={{ color: "black" }}>
          Male
        </option>
        <option value="female" style={{ color: "black" }}>
          Female
        </option>
      </select>
    </div>
  );
}
