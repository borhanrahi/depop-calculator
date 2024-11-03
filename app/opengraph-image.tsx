import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Depop Calculator - Free Fee & Profit Calculator 2024'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #ffffff, #f5f5f5)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#007AFF',
              marginBottom: '10px',
            }}
          >
            Depop Calculator
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#666666',
              maxWidth: '700px',
              textAlign: 'center',
            }}
          >
            Free Fee & Profit Calculator for Depop Sellers
          </div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '40px',
            }}
          >
            <div
              style={{
                background: '#E8F2FF',
                padding: '12px 24px',
                borderRadius: '8px',
                color: '#007AFF',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M20 6L9 17L4 12" 
                  stroke="#007AFF" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              Updated for 2024
            </div>
            <div
              style={{
                background: '#E8F2FF',
                padding: '12px 24px',
                borderRadius: '8px',
                color: '#007AFF',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M20 6L9 17L4 12" 
                  stroke="#007AFF" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              Multi-Currency
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      // Removing gradient and using simpler styles
      // Using SVG checkmark instead of ✓ character
    }
  )
}
