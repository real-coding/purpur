import React from 'react';
import { TextInput } from '../../kit';

export const BaseLayoutPage: React.FC = () => (
  <div>
    Base layout page
    <div>
      <TextInput
        value=""
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          console.log(e.target.value);
        }}
      />
    </div>
  </div>
);
