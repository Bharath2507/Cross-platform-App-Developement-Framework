// src/ReportPage.tsx
import React from 'react';

const ReportPage = () => {
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
    color: '#fff',
    padding: '3rem 2rem',
    fontFamily: 'Segoe UI, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const contentStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '960px',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#00d4ff',
    textAlign: 'center',
    animation: 'slideIn 1.5s ease',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '1.75rem',
    color: '#ffc107',
    marginTop: '2rem',
    marginBottom: '1rem',
    borderBottom: '2px solid #555',
    paddingBottom: '0.5rem',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#e0e0e0',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    marginTop: '1rem',
    borderCollapse: 'collapse',
    color: '#fff',
    backgroundColor: '#1e1e1e',
    fontSize: '0.95rem',
  };

  const thTdStyle: React.CSSProperties = {
    border: '1px solid #444',
    padding: '10px',
    textAlign: 'left',
  };

  const preStyle: React.CSSProperties = {
    background: '#111',
    padding: '1rem',
    borderRadius: '8px',
    overflowX: 'auto',
    color: '#00ffea',
    marginTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>📘 Cross-platform App Development Framework</h1>

        <h2 style={sectionTitleStyle}>Executive Summary</h2>
        <p style={paragraphStyle}>
          This report presents a comprehensive study and design of a cross-platform app development framework that aims to support multiple platforms. It begins by identifying the limitations in leading frameworks such as Flutter, React Native, Xamarin, and Kotlin Multiplatform, and proposes a new conceptual architecture to bridge these gaps.
        </p>

        <h2 style={sectionTitleStyle}>Framework Comparison</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Feature</th>
              <th style={thTdStyle}>Flutter</th>
              <th style={thTdStyle}>React Native</th>
              <th style={thTdStyle}>Xamarin</th>
              <th style={thTdStyle}>Kotlin MP</th>
              <th style={thTdStyle}>Proposed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>Language</td>
              <td style={thTdStyle}>Dart</td>
              <td style={thTdStyle}>JavaScript</td>
              <td style={thTdStyle}>C#</td>
              <td style={thTdStyle}>Kotlin</td>
              <td style={thTdStyle}>Kotlin/TS</td>
            </tr>
            <tr>
              <td style={thTdStyle}>UI Consistency</td>
              <td style={thTdStyle}>Excellent</td>
              <td style={thTdStyle}>Good</td>
              <td style={thTdStyle}>Moderate</td>
              <td style={thTdStyle}>Moderate</td>
              <td style={thTdStyle}>Excellent</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Performance</td>
              <td style={thTdStyle}>High</td>
              <td style={thTdStyle}>Moderate</td>
              <td style={thTdStyle}>Moderate</td>
              <td style={thTdStyle}>High</td>
              <td style={thTdStyle}>High</td>
            </tr>
          </tbody>
        </table>

        <h2 style={sectionTitleStyle}>Architecture Diagram</h2>
        <pre style={preStyle}>
{`
+--------------------------+
|       Developer         |
+--------------------------+
            |
            v
+--------------------------+
|     Unified Codebase     |
+--------------------------+
            |
            v
+--------------------------+
| Cross-platform Renderer  |
+--------------------------+
            |
            v
+--------------------------+
|   Platform Bridges/API   |
+--------------------------+
            |
            v
+--------------------------+
|     Device Operating     |
|      System Layer        |
+--------------------------+
`}
        </pre>

        <h2 style={sectionTitleStyle}>Conclusion</h2>
        <p style={paragraphStyle}>
          The proposed framework addresses modern development needs with extensibility, native integration, and a rich developer experience. By enabling consistent UI, modular plugins, and scalable architecture, it is well-suited for startups and enterprises seeking to accelerate cross-platform development.
        </p>
      </div>

      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ReportPage;
