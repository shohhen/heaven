import {MetadataRoute} from "next";

export default async function generateSitemapIndex(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: 'https://svsc.uz/sitemap.xml',
            lastModified: new Date().toISOString(),
        },
    ]
}