import { FaWhatsapp  } from 'react-icons/fa';

const ConversationButton = () => {
  // Add your conversation logic here, such as opening a chat window
  const handleConversationClick = () => {
    // Implement your logic to start a conversation
    console.log("Clicked on conversation button");
  };

  return (
    <button
      className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 focus:outline-none"
      onClick={handleConversationClick}
    >
      <FaWhatsapp  className="text-lg" />
    </button>
  );
};

export default ConversationButton;
