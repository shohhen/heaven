import { getAllPosts } from '@/app/lib/api';

export default async function sitemap() {
    const posts = await getAllPosts();
    const baseUrl = 'https://svsc.uz';

    return posts.data.map((post) => ({
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: post.updated_at || post.published_at,
        changeFrequency: 'weekly',
        priority: 0.8,
    }));
}