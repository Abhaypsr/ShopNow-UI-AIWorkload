import styled from 'styled-components/macro';

export const ChatButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  z-index: 250;
  font-size: 1.4rem;

  &:hover {
    filter: brightness(1.05);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ChatWindow = styled.div`
  position: fixed;
  right: 20px;
  bottom: 90px;
  width: min(700px, calc(100vw - 40px));
  height: min(620px, calc(100vh - 80px));
  background-color: ${({ theme }) => theme.colors.background};
  border: 2px solid #0074d9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  resize: both;
  box-sizing: border-box;
  min-width: 320px;
  min-height: 320px;
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 80px);
  z-index: 240;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 116, 217, 0.18);

  > * {
    background-color: ${({ theme }) => theme.colors.background};
    box-sizing: border-box;
  }

  @media (max-width: 760px) {
    width: calc(100vw - 20px);
    right: 10px;
    left: 10px;
    bottom: 70px;
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
`;

export const MinimizeButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const MessageList = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background};
`;

interface IMessageItem {
  author: 'user' | 'bot';
}

export const MessageItem = styled.div<IMessageItem>`
  display: flex;
  justify-content: ${({ author }) => (author === 'user' ? 'flex-end' : 'flex-start')};
  margin-bottom: 12px;
`;

export const MessageBubble = styled.div<IMessageItem>`
  max-width: 80%;
  padding: 12px 14px;
  border-radius: 18px;
  background-color: ${({ author, theme }) =>
    author === 'user' ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const ChatFooter = styled.div`
  display: flex;
  gap: 10px;
  padding: 14px 16px 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ChatInput = styled.input`
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 999px;
  padding: 12px 16px;
  font-size: 0.95rem;
  outline: none;
  box-sizing: border-box;

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.12);
  }
`;

export const SendButton = styled.button`
  min-width: 80px;
  border: none;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  padding: 0 16px;
  font-weight: bold;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;
