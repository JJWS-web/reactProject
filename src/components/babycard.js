import React from 'react';
import '../styles/babycard.css';

export function Card({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return (
    <div className="mb-2 border-b pb-2">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
