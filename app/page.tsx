'use client';

import React, { useState } from 'react';
import { useStudentList, StudentInfo } from './hooks/useStudentList';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import InputAndButton from './components/InputAndButton';

export default function Home() {
  const students = useStudentList();
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    이름: '', // 이름 상태를 추가합니다.
    소개: '',
    장점: '',
  });

  const handleStudentClick = (name: string): void => {
    setStudentInfo({
      ...students[name], // 스프레드 문법을 사용하여 학생 정보를 복사합니다.
      이름: name, // 선택된 학생의 이름을 추가합니다.
    });
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-row bg-gray-100 p-8 shadow-xl w-auto'>
        <StudentList students={students} onSelect={handleStudentClick} />
        <div className='flex-1 p-6 flex flex-col min-h-full justify-between'>
          <StudentDetail studentInfo={studentInfo} />
          <InputAndButton onSubmit={handleStudentClick} />
        </div>
      </div>
    </div>
  );
}
