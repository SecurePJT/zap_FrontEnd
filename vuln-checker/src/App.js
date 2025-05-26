import React, { useState } from 'react';
import axios from 'axios';
import VulnResult from './VulnResult';

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!url.trim()) return alert('URL을 입력하세요.');
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/check', { url });
      setResult(response.data); // 백엔드에서 위와 같은 구조로 전달된다고 가정
    } catch (err) {
      console.error(err);
      setResult({ alerts: [] });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">웹사이트 취약점 분석기</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="분석할 URL 입력"
          className="p-3 border rounded w-full max-w-md"
        />
        <button
          onClick={handleCheck}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {loading ? '분석 중...' : '확인'}
        </button>
      </div>

      {result && <VulnResult data={result} />}
    </div>
  );
}

export default App;


