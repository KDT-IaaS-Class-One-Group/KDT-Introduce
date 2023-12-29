import React from 'react';
import { StudentInfo } from '../hooks/useStudentList';

interface Props {
  students: { [key: string]: StudentInfo };
  onSelect: (name: string) => void;
}

export default function StudentList({ students, onSelect }: Props) {
  return (
    <ul className='p-6 flex-none w-full md:w-60 min-h-full overflow-y-auto cursor-pointer flex flex-col justify-between'>
      {Object.keys(students).map((name) => (
        <li key={name} onClick={() => onSelect(name)}>
          {name}
        </li>
      ))}
    </ul>
  );
}
