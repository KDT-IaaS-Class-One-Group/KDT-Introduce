import { useState, useEffect } from 'react';

export interface StudentInfo {
  소개: string;
  장점: string;
}

export interface StudentList {
  [key: string]: StudentInfo;
}

export function useStudentList() {
  const [students, setStudents] = useState<StudentList>({});

  useEffect(() => {
    fetch('/databases/studentList.json')
      .then((response) => response.json())
      .then((data) => setStudents(data as StudentList));
  }, []);

  return students;
}

