export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://mmaulidinabdi.vercel.app/sitemap.xml",
  };
}
