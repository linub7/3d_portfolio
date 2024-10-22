import ContactInfoItem from './item';

const ContactInfo = () => {
  const handleNavigate = (path) => window.open(path, '_blank');
  return (
    <div className="mt-6">
      <ContactInfoItem
        label={'Phone:'}
        heading={'09142200988'}
        isPointer={false}
        onClick={() => {}}
      />
      <ContactInfoItem
        label={'Telegram:'}
        heading={'https://t.me/JesuisMehrdad'}
        isPointer={true}
        onClick={() => handleNavigate('https://t.me/JesuisMehrdad')}
      />
      <ContactInfoItem
        label={'Whatsapp:'}
        heading={'https://wa.me/+989142200988'}
        isPointer={true}
        onClick={() => handleNavigate('https://wa.me/+989142200988')}
      />
    </div>
  );
};

export default ContactInfo;
