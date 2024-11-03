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
    const post = await getPostById(resolvedParams.id)
    const author = await getUserById(post?.user_id as string)

    return {
        title: post?.title,
        description: post?.summary,
        openGraph: {
            title: post?.title,
            description: post?.summary,
            type: 'article',
            publishedTime: post?.published_at,
            authors: [author?.name],
            images: [
                {
                    url: post?.featured_image || 'https://svsc.uz/default-blog-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: post?.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post?.title,
            description: post?.summary,
            images: [post?.featured_image || 'https://svsc.uz/default-blog-image.jpg'],
        },
    }
}

// Article schema for blog posts
function generateArticleSchema(post, author) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.summary,
        author: {
            '@type': 'Person',
            name: author.name,
        },
        datePublished: post.published_at,
        dateModified: post.updated_at || post.published_at,
        image: post.image || 'https://svsc.uz/default-blog-image.jpg',
        publisher: {
            '@type': 'Organization',
            name: 'SVSC',
            logo: {
                '@type': 'ImageObject',
                url: 'https://svsc.uz/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://svsc.uz/blog/${post.id}`,
        },
        keywords: post.topic?.map(t => t.name).join(', '),
    }
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getPostById(resolvedParams.id)

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
                        __html: JSON.stringify(generateArticleSchema(post, author)),
                    }}
                />
                <PostHeader post={post} author={author} url={`https://svsc.uz/blog/${post.id}`} />
                <PostContent post={post} />
            </article>
        </main>
    );
}