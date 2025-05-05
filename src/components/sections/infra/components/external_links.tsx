import Link from 'next/link';

export default function External_Links() {
    return (
        <div
            className="grid grid-cols-2 gap-x-12 py-30"
            style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 20,
                lineHeight: '100%',
                color: '#605F5F',
            }}
        >
            {/* Left column */}
            <div className="flex flex-col gap-4">
                <Link href="/infrastructure/research"><h3>RESEARCH</h3></Link>
                <Link href="/infrastructure/careers"><h3>CAREERS</h3></Link>
                <Link href="/infrastructure/about"><h3>ABOUT</h3></Link>
            </div>
            {/* Right column */}
            <div className="flex flex-col gap-4">
                <Link href="/infrastructure/linkedin"><h3>LINKEDIN</h3></Link>
                <Link href="/infrastructure/X"><h3>X</h3></Link>
            </div>
        </div>
    );
}
  