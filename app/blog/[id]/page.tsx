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

    return {
        title: `${post.title} | SVSC`,
        description: post.meta.description,
        openGraph: {
            title: post.meta.title,
            description: post.meta.description,
            images: post.featured_image ? [{
                url: post.featured_image,
                alt: post.title,
            }] : [],
        },
        alternates: {
            canonical: post.meta.canonical_link
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getPostById(resolvedParams.id);

    if (!post) {
        notFound();
    }

    // Fetch author data
    const author = await getUserById(post.user_id);

    if (!author) {
        throw new Error('Failed to load author information');
    }

    return (
        <main className="py-20">
            <article className="container mx-auto px-4 max-w-4xl">
                <PostHeader post={post} author={author} />
                <PostContent post={post} />
            </article>
        </main>
    );
}