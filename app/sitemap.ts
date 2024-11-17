// app/sitemap.ts
import { getAllPosts } from '@/app/lib/api'

export default async function sitemap(): Promise<({
    lastModified: string;
    priority: number;
    changeFrequency: string;
    url: string
} | { lastModified: string; priority: number; changeFrequency: string; url: string } | {
    lastModified: string;
    priority: number;
    changeFrequency: string;
    url: string
})[]> {
    const baseUrl = 'https://svsc.uz'
    const { data: posts } = await getAllPosts()

    const postUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: new Date(post.updated_at || post.published_at).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.7
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 0.8
        },
        ...postUrls
    ]
}
