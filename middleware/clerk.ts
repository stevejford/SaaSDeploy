import { FreshContext, Handlers } from "$fresh/server.ts";

declare global {
  interface Window {
    Clerk: any;
  }
}

export const handler: Handlers = {
  async GET(req: Request, ctx: FreshContext) {
    const clerkFrontendApi = Deno.env.get("CLERK_PUBLISHABLE_KEY");

    // Add Clerk script to head
    ctx.state.clerk = {
      frontendApi: clerkFrontendApi,
    };

    const response = await ctx.next();
    const headers = new Headers(response.headers);

    // Add Clerk script
    const script = `<script 
      src="https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js"
      data-clerk-publishable-key="${clerkFrontendApi}">
    </script>`;
    
    const html = await response.text();
    const updatedHtml = html.replace('</head>', `${script}</head>`);

    return new Response(updatedHtml, {
      status: response.status,
      headers,
    });
  }
} 