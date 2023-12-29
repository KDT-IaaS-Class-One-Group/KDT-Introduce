import React from 'react';
import { StudentInfo } from '../hooks/useStudentList';

interface Props {
  studentInfo: StudentInfo;
}

export default function StudentDetail({ studentInfo }: Props) {
  return (
    <div className='w-500'>
      <div className='mb-10'>
        <h2 className='text-3xl'>{studentInfo.이름} 소개</h2>
        <p className='p-2 h-32 overflow-y-auto'>{studentInfo.소개}</p>
      </div>
      <div className='mb-10'>
        <h2 className='text-2xl'>{studentInfo.이름} 장점</h2>
        <p className='p-2 h-32 overflow-y-auto'>{studentInfo.장점}</p>
      </div>
    </div>
  );
}
