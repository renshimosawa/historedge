export const GA_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

export const pageview = (url: any) => {
  window.gtag("config", GA_TAG_ID, {
    page_path: url,
  });
};
