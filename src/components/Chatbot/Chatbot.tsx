import { useState } from 'react';

import * as S from './style';

interface IMessage {
  id: string;
  text: string;
  author: 'user' | 'bot';
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isSending, setIsSending] = useState(false);

  const toggleChat = () => setIsOpen((prev) => !prev);
  const closeChat = () => setIsOpen(false);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    const userMessage: IMessage = {
      id: `${Date.now()}-user`,
      text: trimmed,
      author: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmed }),
      });

      const result = await response.json();
      const botText = result?.response ?? 'Sorry, I could not get an answer.';

      const botMessage: IMessage = {
        id: `${Date.now()}-bot`,
        text: botText,
        author: 'bot',
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-error`,
          text: 'Unable to connect to the chat API.',
          author: 'bot',
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <S.ChatButton onClick={toggleChat} title="Open chat">
        💬
      </S.ChatButton>
      {isOpen && (
        <S.ChatWindow>
          <S.ChatHeader>
            <div>ShopNow Assistant</div>
            <S.MinimizeButton onClick={closeChat} title="Minimize chat">
              &minus;
            </S.MinimizeButton>
          </S.ChatHeader>
          <S.MessageList>
            {messages.map((message) => (
              <S.MessageItem key={message.id} author={message.author}>
                <S.MessageBubble author={message.author}>
                  {message.text}
                </S.MessageBubble>
              </S.MessageItem>
            ))}
          </S.MessageList>
          <S.ChatFooter>
            <S.ChatInput
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isSending}
            />
            <S.SendButton onClick={sendMessage} disabled={!input.trim() || isSending}>
              {isSending ? 'Sending...' : 'Send'}
            </S.SendButton>
          </S.ChatFooter>
        </S.ChatWindow>
      )}
    </>
  );
};

export default Chatbot;
