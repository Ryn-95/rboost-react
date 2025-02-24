export default function middleware(req) {
  const response = new Response();
  
  // Forcer l'indexation pour toutes les routes
  response.headers.set('X-Robots-Tag', 'index, follow');
  
  return response;
}

export const config = {
  matcher: '/:path*',
} 