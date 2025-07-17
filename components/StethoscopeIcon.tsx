
import React from 'react';

const StethoscopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.8 2.3A.3.3 0 1 0 5.4 2a.3.3 0 0 0-.6.3" />
    <path d="M8.5 2.8c2.5 1.2 4.5 3.2 5.5 5.2" />
    <path d="M19.2 2.3a.3.3 0 1 1-.6.3.3.3 0 0 1 .6-.3" />
    <path d="M15.5 2.8c-2.5 1.2-4.5 3.2-5.5 5.2" />
    <path d="M12 8.7a4.7 4.7 0 0 0-4.7 4.7v5.5a3.1 3.1 0 0 0 3.1 3.1h3.1a3.1 3.1 0 0 0 3.1-3.1v-5.5A4.7 4.7 0 0 0 12 8.7z" />
    <path d="M10.2 2.5c-.3.2-.6.4-.8.7" />
    <path d="M13.8 2.5c.3.2.6.4.8.7" />
  </svg>
);

export default StethoscopeIcon;
