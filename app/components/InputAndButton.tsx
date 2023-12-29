import React, { useState } from 'react';

interface Props {
  onSubmit: (name: string) => void;
}

export default function InputAndButton({ onSubmit }: Props) {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <input
        type='text'
        className='p-4 mb-4 h-10'
        placeholder='Write your name.'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className='bg-gray-300 text-white p-4'
        onClick={() => onSubmit(inputValue)}
      >
        Show
      </button>
    </>
  );
}
