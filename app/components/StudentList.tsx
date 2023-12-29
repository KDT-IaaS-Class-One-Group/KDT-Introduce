import React, { useState } from 'react';
import { StudentInfo } from '../hooks/useStudentList';

interface Props {
  students: { [key: string]: StudentInfo };
  onSelect: (name: string) => void;
}

export default function StudentList({ students, onSelect }: Props) {
  // 선택된 학생 이름을 관리하기 위한 상태
  const [selectedName, setSelectedName] = useState<string>('');

  // 학생을 선택할 때 실행할 함수
  const handleSelect = (name: string) => {
    setSelectedName(name); // 선택된 이름을 상태로 설정
    onSelect(name); // 부모 컴포넌트의 onSelect 함수 호출
  };

  return (
    <ul className='p-6 flex-none w-full md:w-60 min-h-full overflow-y-auto cursor-pointer flex flex-col justify-between'>
      {Object.keys(students).map((name) => (
        <li
          key={name}
          onClick={() => handleSelect(name)}
          className={`${
            name === selectedName
              ? 'font-bold list-disc text-right'
              : 'font-normal'
          }`}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
