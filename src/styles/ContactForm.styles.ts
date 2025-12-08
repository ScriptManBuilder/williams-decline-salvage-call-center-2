import styled from 'styled-components';

export const ContactFormContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0a2540 0%, #1e3a5f 50%, #0d1821 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 102, 204, 0.3), transparent);
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 425px) {
    padding: 2.5rem 1.25rem;
  }
`;

export const ContactFormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    border-radius: 12px;
  }

  @media (max-width: 425px) {
    padding: 2rem 1.5rem;
  }
`;

export const ContactFormTitle = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 0.75rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const ContactFormDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 425px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.75rem;

  @media (max-width: 425px) {
    margin-bottom: 1.5rem;
  }
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: inherit;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.2);
    background: rgba(255, 255, 255, 0.12);
  }

  &:hover:not(:focus) {
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: inherit;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.2);
    background: rgba(255, 255, 255, 0.12);
  }

  &:hover:not(:focus) {
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 425px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
    min-height: 100px;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #0066cc 0%, #3388dd 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #0052a3 0%, #0066cc 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 102, 204, 0.4);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 425px) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
`;

export const SuccessMessage = styled.div`
  padding: 1rem 1.25rem;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.4);
  border-radius: 8px;
  color: #6ee7b7;
  font-size: 0.95rem;
  margin-top: 1.5rem;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 425px) {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.div`
  padding: 1rem 1.25rem;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.4);
  border-radius: 8px;
  color: #fca5a5;
  font-size: 0.95rem;
  margin-top: 1.5rem;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 425px) {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
`;
