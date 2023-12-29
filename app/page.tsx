'use client';

import React, { useState } from 'react';
import { useStudentList, StudentInfo } from './hooks/useStudentList';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import InputAndButton from './components/InputAndButton';

export default function Home() {
  const students = useStudentList();
  const [selectedName, setSelectedName] = useState<string>(''); // 선택된 이름을 상태로 추가합니다.
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    이름: '',
    소개: '',
    장점: '',
  });

  const handleStudentClick = (name: string): void => {
    setSelectedName(name); // 상태 업데이트
    setStudentInfo({
      ...students[name],
      이름: name,
    });
  };

  const handleShowButtonClick = (name: string): void => {
    setSelectedName(name); // 상태 업데이트
    if (students[name]) {
      setStudentInfo(students[name]);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-row bg-gray-100 p-8 shadow-xl w-auto'>
        <StudentList
          students={students}
          onSelect={handleStudentClick}
          selectedName={selectedName} // 이 부분을 추가합니다.
        />
        <div className='flex-1 p-6 flex flex-col min-h-full justify-between'>
          <StudentDetail studentInfo={studentInfo} />
          <InputAndButton
            onSubmit={handleShowButtonClick}
            setSelectedName={setSelectedName}
          />
        </div>
      </div>
    </div>
  );
}
