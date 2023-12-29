import React from 'react';
import { StudentInfo } from '../hooks/useStudentList';

interface Props {
  students: { [key: string]: StudentInfo };
  onSelect: (name: string) => void;
  selectedName: string; // 추가된 prop 타입
}

export default function StudentList({
  students,
  onSelect,
  selectedName,
}: Props) {
  return (
    <ul className='p-6 flex-none w-full md:w-60 min-h-full overflow-y-scroll cursor-pointer flex flex-col justify-between'>
      {Object.keys(students).map((name) => (
        <li
          key={name}
          onClick={() => onSelect(name)}
          className={`${
            name === selectedName
              ? 'font-bold list-disc text-right'
              : 'font-normal opacity-50'
          }`}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
