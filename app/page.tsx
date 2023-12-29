'use client';

import React, { useState } from 'react';
import { useStudentList, StudentInfo } from './hooks/useStudentList';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import InputAndButton from './components/InputAndButton';

export default function Home() {
  const students = useStudentList();
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    소개: '',
    장점: '',
  });

  const handleStudentClick = (name: string): void => {
    setStudentInfo(students[name]);
  };

  const handleShowButtonClick = (name: string): void => {
    if (students[name]) {
      setStudentInfo(students[name]);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-row bg-gray-100 p-8 shadow-xl w-auto'>
        <StudentList students={students} onSelect={handleStudentClick} />
        <div className='flex-1 p-6 flex flex-col min-h-full justify-between'>
          <StudentDetail studentInfo={studentInfo} />
          <InputAndButton onSubmit={handleShowButtonClick} />
        </div>
      </div>
    </div>
  );
}
