// Deno Website/API
// http://localhost:8000.
// deno run --allow-net server.ts
Deno.serve((_req: Request) => {
  return new Response("Hello, world!");
});

