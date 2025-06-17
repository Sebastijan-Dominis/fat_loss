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
      <label htmlFor={id} className="mt-2 md:mt-4 md:text-lg">
        {labelText}
      </label>
      <select
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-8 w-40 rounded-md border-2 border-[#32cd32] outline-none focus:ring focus:ring-[#32cd32] md:h-12 md:w-56 md:rounded-lg md:text-lg"
      >
        {options.map((o: string) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
