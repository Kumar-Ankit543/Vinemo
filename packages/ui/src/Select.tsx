export const Select = ({
  options,
  onSelect,
}: {
  onSelect: (value: String) => void;
  options: {
    key: String;
    value: String;
  }[];
}) => {
  return (
    <select
      onChange={(e) => {
        onSelect(e.target.value);
      }}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
    >
      {options.map((option) => (
        <option value={option.key as string}>{option.value}</option>
      ))}
    </select>
  );
};
