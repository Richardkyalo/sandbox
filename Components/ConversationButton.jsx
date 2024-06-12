import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ConversationButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleConversationClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 bg-transparent text-green-500 rounded-full p-3 shadow-lg focus:outline-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleConversationClick}
    >
      <FaAngleUp className="text-lg" />
    </button>
  );
};

export default ConversationButton;
