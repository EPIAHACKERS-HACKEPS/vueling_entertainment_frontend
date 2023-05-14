import styled from '@emotion/styled'

export interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 4px;
  width: calc(100% - 2rem);
  max-width: 400px;

  @media (min-width: 768px) {
    width: calc(100% - 4rem);
    max-width: 500px;
  }
`

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`

export const ModalButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  margin-left: 1rem;
  cursor: pointer;
`
