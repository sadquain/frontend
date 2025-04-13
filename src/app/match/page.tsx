'use client';
import { useState } from 'react';
import { matchCandidates } from '../../api/client';
import MatchResults from '../../components/MatchResults';

export default function MatchPage() {
  const [jobId, setJobId] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMatch = async () => {
    setLoading(true);
    try {
      const response = await matchCandidates(jobId);
      setResults(response.data);
    } catch (error) {
      console.error('Error matching candidates:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Match Candidates to Job</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job ID
          </label>
          <input
            type="text"
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={handleMatch}
          disabled={loading || !jobId}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Matching...' : 'Match Candidates'}
        </button>
      </div>
      {results.length > 0 && <MatchResults results={results} />}
    </div>
  );
}