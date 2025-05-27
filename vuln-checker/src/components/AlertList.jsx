import React from 'react';
import { Link } from 'react-router-dom';

const AlertList = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return <p>데이터가 없습니다.</p>;

  return (
    <ul className="space-y-3">
      {alerts.map((alert, index) => (
        <li
          key={index}
          className="border rounded p-4 shadow hover:bg-gray-50 transition"
        >
          <Link
            to={`/detail/${encodeURIComponent(alert.name)}`}
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            {alert.name}
          </Link>
          <p className="text-sm text-gray-600">위험도: {alert.risk}</p>
        </li>
      ))}
    </ul>
  );
};

export default AlertList;
