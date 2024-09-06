const ContactInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  isTextarea = false,
  onChange = () => {},
}) => {
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      {!isTextarea ? (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      ) : (
        <textarea
          rows={7}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        ></textarea>
      )}
    </label>
  );
};

export default ContactInput;
