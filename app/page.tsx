'use client';

import { useState, useEffect } from 'react';

// 학생 정보에 대한 인터페이스를 정의합니다.
interface StudentInfo {
  소개: string;
  장점: string;
}

// 학생 목록의 타입을 정의합니다.
interface StudentList {
  [key: string]: StudentInfo;
}

// page.tsx
export default function Home() {
  const [students, setStudents] = useState<StudentList>({});
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    소개: '',
    장점: '',
  });

  useEffect(() => {
    // studentList.json에서 학생 데이터를 불러옵니다.
    fetch('/databases/studentList.json')
      .then((response) => response.json())
      .then((data) => setStudents(data as StudentList));
  }, []);

  const handleStudentClick = (name: string): void => {
    setStudentInfo(students[name]);
  };

  const handleShowButtonClick = (): void => {
    if (students[selectedStudent]) {
      setStudentInfo(students[selectedStudent]);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-row bg-gray-100 p-8 shadow-xl w-3/5 h-4/5'>
        {/* Sidebar */}
        <ul className='p-6 flex-none w-full md:w-60 min-h-full overflow-y-auto cursor-pointer'>
          {Object.keys(students).map((name) => (
            <li key={name} onClick={() => handleStudentClick(name)}>
              {name}
            </li>
          ))}
        </ul>

        {/* Main Content */}
        <div className='flex-1 p-6 flex flex-col min-h-full'>
          <div>
            <div>
              <p className='text-3xl'>소개</p>
              <p className='p-2 h-32'>{studentInfo.소개}</p>
            </div>
            <div>
              <p className='text-2xl'>장점</p>
              <p className='p-2 h-32'>{studentInfo.장점}</p>
            </div>
            <input
              type='text'
              className='p-4 mb-4 h-10'
              placeholder='Write your name.'
              onChange={(e) => setSelectedStudent(e.target.value)}
            ></input>
            <button
              className='bg-gray-300 text-white p-4'
              onClick={handleShowButtonClick}
            >
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
