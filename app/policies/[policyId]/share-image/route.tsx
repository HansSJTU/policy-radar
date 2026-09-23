import { ImageResponse } from 'next/og';
import { getPolicy } from '../../../policy-data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ policyId: string }> },
) {
  const { policyId } = await params;
  const language =
    new URL(request.url).searchParams.get('lang') === 'en' ? 'en' : 'zh';
  const p = getPolicy(policyId, language);
  if (!p) return new Response('Not found', { status: 404 });
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: '64px 72px',
        background: '#172b46',
        color: '#f5f7fb',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', fontSize: 24, color: '#c3a3f2' }}>
        STAY PATH RADAR / {p.path}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: language === 'en' ? 58 : 62,
          lineHeight: 1.25,
          marginTop: 44,
        }}
      >
        {p.title}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 28,
          lineHeight: 1.5,
          marginTop: 30,
          color: '#cad6e6',
        }}
      >
        {p.teaser}
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 'auto',
          justifyContent: 'space-between',
          fontSize: 22,
          color: '#b4c3d7',
        }}
      >
        <span>{p.status}</span>
        <span>{p.checkedOn} · ET</span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
