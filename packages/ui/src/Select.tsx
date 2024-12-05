export const Select = ({
  options,
  onSelect,
}: {
  onSelect: (value: String) => void;
  options: {
    id: String;
    key: String;
    value: String;
  }[];
}) => {
  return (
    <select
      onChange={(e) => {
        onSelect(e.target.value);
      }}
      className="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
    >
      {options.map((option) => (
        <option key={option.id as string} value={String(option.key)}>
          {option.value}
        </option>
      ))}
    </select>
  );
};
