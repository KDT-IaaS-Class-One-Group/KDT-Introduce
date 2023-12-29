import React, { useState } from 'react';

interface Props {
  onSubmit: (name: string) => void;
  setSelectedName: (name: string) => void; // 수정된 prop 타입
}

export default function InputAndButton({ onSubmit, setSelectedName }: Props) {
  const [inputName, setInputName] = useState('');

  const handleSubmit = () => {
    onSubmit(inputName);
    setSelectedName(inputName); // 입력된 이름을 상태로 설정합니다.
  };

  return (
    <div className='flex w-500 flex-col'>
      <input
        type='text'
        placeholder='Write your name.'
        className='p-4 mb-4 h-10'
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <button className='bg-gray-300 text-white p-4' onClick={handleSubmit}>
        Show
      </button>
    </div>
  );
}
