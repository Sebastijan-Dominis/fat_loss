interface InputProps {
  id: string;
  placeholder: string;
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
  labelMT: string;
  labelText: string;
}

function Input({
  id,
  placeholder,
  value,
  setValue,
  labelMT,
  labelText,
}: InputProps) {
  return (
    <>
      <label
        htmlFor={id}
        className={`${labelMT} max-w-[60dvw] text-center md:pt-2 md:text-lg`}
      >
        {labelText}
      </label>
      <input
        type="number"
        id={id}
        className="h-8 w-40 rounded-md border-2 border-[#32cd32] px-2 py-1 outline-none focus:ring focus:ring-[#32cd32] md:h-12 md:w-56 md:rounded-lg md:text-lg"
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </>
  );
}

export default Input;
