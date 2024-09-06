const ContactInfoItem = ({
  label,
  heading,
  isPointer = false,
  onClick = () => {},
}) => {
  return (
    <div className="flex items-center gap-5">
      <span className="text-secondary">{label}</span>
      <h3
        className={`font-semibold ${
          isPointer
            ? 'cursor-pointer hover:underline hover:underline-offset-4'
            : ''
        }`}
        onClick={onClick}
      >
        {heading}
      </h3>
    </div>
  );
};

export default ContactInfoItem;
