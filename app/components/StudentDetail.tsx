import React from 'react';
import { StudentInfo } from '../hooks/useStudentList';

interface Props {
  studentInfo: StudentInfo;
}

export default function StudentDetail({ studentInfo }) {
  return (
    <>
      <div>
        <p className='text-3xl'>소개</p>
        <p className='p-2 h-32'>{studentInfo.소개}</p>
      </div>
      <div>
        <p className='text-2xl'>장점</p>
        <p className='p-2 h-32'>{studentInfo.장점}</p>
      </div>
    </>
  );
}
