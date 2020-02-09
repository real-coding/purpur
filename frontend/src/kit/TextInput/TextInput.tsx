import * as React from 'react';
import { StyledInput } from './styled';

interface TextInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return <StyledInput {...props} />;
};

TextInput.defaultProps = {
  placeholder: '',
  type: 'text'
};

export default TextInput;
