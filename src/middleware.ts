import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Redirect trailing slash to non-trailing slash (except root)
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    const newUrl = url.pathname.slice(0, -1) + url.search;
    return new Response(null, { status: 301, headers: { Location: newUrl } });
  }

  return next();
});
