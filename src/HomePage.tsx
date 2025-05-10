// src/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to right, #1CB5E0, #000851)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        padding: '2rem',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          animation: 'fadeIn 2s ease-in-out',
        }}
      >
        🚀 Cross-platform App Framework
      </h1>
      <p
        style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          marginBottom: '2rem',
          animation: 'fadeIn 2.5s ease-in-out',
        }}
      >
        Build once. Run anywhere. Deliver seamless apps across web, mobile, and desktop using a unified architecture.
      </p>
      <button
        onClick={() => navigate('/report')}
        style={{
          backgroundColor: '#00c6ff',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          borderRadius: '10px',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          animation: 'fadeIn 3s ease-in-out',
        }}
      >
        Explore Framework →
      </button>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }
            p {
              font-size: 1rem;
            }
            button {
              padding: 12px 24px;
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
