// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Synapse Matching System</h1>
        <div className="space-y-4">
          <Link
            href="/add-job"
            className="block w-full rounded-md bg-indigo-600 py-2 px-4 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add New Job
          </Link>
          <Link
            href="/add-candidate"
            className="block w-full rounded-md bg-indigo-600 py-2 px-4 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add New Candidate
          </Link>
          <Link
            href="/match"
            className="block w-full rounded-md bg-indigo-600 py-2 px-4 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Match Candidates
          </Link>
        </div>
      </div>
    </div>
  );
}