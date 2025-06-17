interface SelectProps {
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  labelText: string;
  options: Array<string>;
}

function Select({ id, value, setValue, labelText, options }: SelectProps) {
  return (
    <>
      <label htmlFor={id} className="mt-2">
        {labelText}
      </label>
      <select
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-8 w-40 rounded-md border border-2 border-[#32cd32]"
      >
        {options.map((o: string) => (
          <option value={o}>{o}</option>
        ))}
      </select>
    </>
  );
}

export default Select;
