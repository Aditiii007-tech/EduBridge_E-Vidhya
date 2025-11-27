import { User, StudentSummary } from '../types';

export const mockUsers: User[] = [
  {
    id: 'student_01',
    name: 'Rahul Kumar',
    role: 'student',
    avatar: '👨‍🎓'
  },
  {
    id: 'teacher_01',
    name: 'Amit Sir',
    role: 'teacher',
    avatar: '👨‍🏫'
  },
  {
    id: 'parent_01',
    name: 'Rajesh Kumar (Rahul\'s Dad)',
    role: 'parent',
    studentId: 'student_01',
    avatar: '👨'
  }
];

export const mockClassData: StudentSummary[] = [
  { id: 's1', name: 'Rahul Kumar', attendance: 85, avgScore: 78, needsAttention: false },
  { id: 's2', name: 'Priya Singh', attendance: 95, avgScore: 92, needsAttention: false },
  { id: 's3', name: 'Amit Sharma', attendance: 60, avgScore: 45, needsAttention: true },
  { id: 's4', name: 'Sneha Gupta', attendance: 88, avgScore: 81, needsAttention: false },
  { id: 's5', name: 'Vikram Malhotra', attendance: 40, avgScore: 35, needsAttention: true },
];
