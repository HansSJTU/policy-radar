import Link from 'next/link';
export default function NotFound() {
  return (
    <main style={{ maxWidth: 720, margin: '80px auto', padding: 24 }}>
      <h1>没有找到这项政策 / Policy not found</h1>
      <p>请从政策列表打开对应详情。</p>
      <Link href="/#ranking">查看全部政策 / Browse policies</Link>
    </main>
  );
}
