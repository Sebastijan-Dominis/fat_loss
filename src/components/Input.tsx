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
      <label htmlFor={id} className={`${labelMT} max-w-[60dvw] text-center`}>
        {labelText}
      </label>
      <input
        type="number"
        id={id}
        className="h-8 w-40 rounded-md border-2 border-[#32cd32] px-2 py-1"
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </>
  );
}

export default Input;
