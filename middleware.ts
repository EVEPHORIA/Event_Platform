import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/blog',
    '/api/blog'
  ],
  ignoredRoutes: [],
  afterAuth(auth, req) {
    // Protect /admin route
    if (req.nextUrl.pathname.startsWith('/admin')) {
      if (!auth.userId) {
        return Response.redirect(new URL('/sign-in', req.url));
      }
      // Optionally, you can add more logic here to check admin role
    }
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
