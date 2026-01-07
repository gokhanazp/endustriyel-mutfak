import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

// App icon size
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Icon generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: '#2563eb', // primary-600 rengi
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '8px',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="12" y1="2" x2="12" y2="22"></line>
                    <path d="m20 16-4-4 4-4"></path>
                    <path d="m4 8 4 4-4 4"></path>
                    <path d="m16 4-4 4-4-4"></path>
                    <path d="m8 20 4-4 4 4"></path>
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
