import ContactInfoItem from './item';

const ContactInfo = () => {
  const handleNavigate = (path) => window.open(path, '_blank');
  return (
    <div className="mt-6">
      <ContactInfoItem
        label={'My Phone:'}
        heading={'09142200988'}
        isPointer={false}
        onClick={() => {}}
      />
      <ContactInfoItem
        label={'My Telegram account:'}
        heading={'https://t.me/JesuisMehrdad'}
        isPointer={true}
        onClick={() => handleNavigate('https://t.me/JesuisMehrdad')}
      />
      <ContactInfoItem
        label={'My Whatsapp account:'}
        heading={'https://wa.me/+989142200988'}
        isPointer={true}
        onClick={() => handleNavigate('https://wa.me/+989142200988')}
      />
    </div>
  );
};

export default ContactInfo;
