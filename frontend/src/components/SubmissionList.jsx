import React, { useEffect, useState } from "react";
import SubmissionCard from "./SubmissionCard";

export default function SubmissionList() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubmissions() {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/submissions/");
        const data = await res.json();
        setSubmissions(Array.isArray(data) ? data : []);
      } catch {
        setSubmissions([]);
      }
      setLoading(false);
    }
    fetchSubmissions();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">All Submissions</h2>
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <svg className="animate-spin h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
        </div>
      ) : submissions.length === 0 ? (
        <div className="text-center text-blue-400">No submissions found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {submissions.map((submission) => (
            <SubmissionCard key={submission._id} submission={{
              ...submission,
              attachmentUrl: submission.attachment // adjust if your API returns a different field
            }} />
          ))}
        </div>
      )}
    </div>
  );
}