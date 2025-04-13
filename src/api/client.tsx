import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://your-backend.vercel.app/api';

const apiClient = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const createJob = (data: { id: string; title: string; description: string }) =>
  apiClient.post('/jobs', data);

export const createCandidate = (data: { id: string; name: string; bio: string }) =>
  apiClient.post('/candidates', data);

export const matchCandidates = (jobId: string) =>
  apiClient.post('/match', { jobId });