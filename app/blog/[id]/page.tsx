import { Metadata } from 'next';
import { getPostById, getUserById } from '@/app/lib/api';
import PostHeader from '@/app/components/blog/header';
import PostContent from "@/app/components/blog/content";
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await getPostById(resolvedParams.id);

    if (!post) {
        return {
            title: 'Post Not Found | SVSC'
        };
    }

    // Fetch author data for enhanced metadata
    const author = await getUserById(post.user_id);
    const authorName = author?.name || 'SVSC';

    return {
        title: `${post.title} | SVSC`,
        description: post.meta.description,
        authors: [{ name: authorName }],
        openGraph: {
            title: post.meta.title,
            description: post.meta.description,
            type: 'article',
            publishedTime: post.published_at,
            authors: [authorName],
            images: post.featured_image ? [{
                url: post.featured_image,
                alt: post.title,
                width: 1200,
                height: 630,
            }] : [],
            siteName: 'SVSC',
            url: `https://svsc.uz/blog/${post.slug}`,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.meta.title,
            description: post.meta.description,
            images: post.featured_image ? [post.featured_image] : [],
            creator: author?.username || '@svsc',
        },
        alternates: {
            canonical: post.meta.canonical_link
        },
        robots: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
        keywords: `${post.tags[0]}, ${post.topic}`, // Add relevant keywords
        verification: {
            google: 'google707e00d571520721.html',
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getPostById(resolvedParams.id);

    if (!post) {
        notFound();
    }

    const author = await getUserById(post.user_id);

    if (!author) {
        throw new Error('Failed to load author information');
    }

    return (
        <main className="py-20">
            <article className="container mx-auto px-4 max-w-4xl">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "image": post.featured_image ? [post.featured_image] : [],
                            "datePublished": post.published_at,
                            "dateModified": post.updated_at || post.published_at,
                            "author": [{
                                "@type": "Person",
                                "name": author.name,
                                "url": `https://svsc.uz/author/${author.username}`
                            }],
                            "publisher": {
                                "@type": "Organization",
                                "name": "SVSC",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://svsc.uz/logo.png" // Update with your actual logo URL
                                }
                            },
                            "description": post.meta.description,
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://svsc.uz/blog/${post.slug}`
                            }
                        })
                    }}
                />
                <PostHeader post={post} author={author} url={`https://svsc.uz/blog/${post.id}`} />
                <PostContent post={post} />
            </article>
        </main>
    );
}