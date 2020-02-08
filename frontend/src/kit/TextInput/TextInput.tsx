import * as React from 'react';

interface TextInputProps {
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  value: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <input
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      type="text"
      value={props.value}
    ></input>
  );
};

TextInput.defaultProps = {
  defaultValue: '',
  placeholder: '',
  type: 'text'
};

export default TextInput;
