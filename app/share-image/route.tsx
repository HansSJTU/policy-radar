import { ImageResponse } from 'next/og';
import { schoolRecordCount } from '../cpt-schools';
import { homeCopy } from '../home-copy';
import { SITE_UPDATED_ON } from '../policy-freshness';
import { POLICY_IDS } from '../policy-ids';

// The home page's link preview, in the same look as each policy's image.
export async function GET(request: Request) {
  const language =
    new URL(request.url).searchParams.get('lang') === 'en' ? 'en' : 'zh';
  const ui = homeCopy[language];
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
        STAY PATH RADAR
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: language === 'en' ? 58 : 62,
          lineHeight: 1.25,
          marginTop: 44,
        }}
      >
        {ui.heroTitle}
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 40,
          marginTop: 24,
          color: '#cad6e6',
        }}
      >
        F-1 → CPT → OPT → H-1B
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
        <span>{ui.heroCount(POLICY_IDS.length, schoolRecordCount)}</span>
        <span>{SITE_UPDATED_ON} · ET</span>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
