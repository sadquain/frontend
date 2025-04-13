export default function MatchResults({ results }: { results: Array<{ candidateId: string; matchScore: number }> }) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Matching Candidates</h2>
        <div className="space-y-2">
          {results.map((result, index) => (
            <div key={result.candidateId} className="p-4 border rounded-lg">
              <div className="flex justify-between">
                <span className="font-medium">#{index + 1}: {result.candidateId}</span>
                <span className="text-indigo-600">
                  {(result.matchScore * 100).toFixed(1)}% match
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }