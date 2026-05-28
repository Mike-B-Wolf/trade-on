const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") || "https://trade-on-company.com";
const isDev = siteUrl.includes("dev.");

export const getRobotsTxt = () => {
  if (isDev) {
    return `User-agent: *\nDisallow: /\n`; 
  }

  return `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\nHost: ${siteUrl}\n`;
};

export const getRobotsHeaders = () => ({
  "Content-Type": "text/plain; charset=utf-8",
});
