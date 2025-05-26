// src/VulnResult.js
import React from 'react';
// 백엔드에서 가져온 취약점 이름과 리스크를 목록으로 보여주는 기능
const VulnResult = ({ data }) => {
  if (!data || !data.alerts || data.alerts.length === 0) {
    return <p className="text-gray-600">취약점 결과가 없습니다.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">보안 취약점 목록</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">#</th>
            <th className="p-2 border">취약점 이름</th>
            <th className="p-2 border">위험도</th>
          </tr>
        </thead>
        <tbody>
          {data.alerts.map((alert, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{alert.name}</td>
              <td className={`p-2 border font-semibold text-${getColor(alert.risk)}`}>
                {alert.risk}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getColor = (risk) => {
  switch (risk) {
    case 'High':
      return 'red-600';
    case 'Medium':
      return 'yellow-600';
    case 'Low':
      return 'green-600';
    case 'Informational':
      return 'gray-500';
    default:
      return 'black';
  }
};

export default VulnResult;
