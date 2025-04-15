import { type MetadataRoute } from "next";

import { siteConfig } from "../config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/#try`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/#setup`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/#variants`,
      lastModified: new Date(),
    },
  ];
}
