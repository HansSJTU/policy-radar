export function isInvalidJsonRequest(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');
  const fetchSite = request.headers.get('sec-fetch-site');
  const contentLength = Number(request.headers.get('content-length') ?? 0);

  return (
    (origin && origin !== requestUrl.origin) ||
    fetchSite === 'cross-site' ||
    contentLength > 2048
  );
}
