import Image from 'next/image';
import Link from 'next/link';
import { Posts } from '@/app/lib/types';

interface BlogCardProps {
    post: Posts;
}

export default function BlogCard({ post }: BlogCardProps) {
    // Format date
    // const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    // });

    return (
        <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
            <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 w-full">
                    <Image
                        src={post.featured_image || '/api/placeholder/800/400'}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </Link>
            <div className="p-6">
                <Link href={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold mb-2 hover:text-purple-800 transition">
                        {post.title}
                    </h2>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.summary}</p>
                {/*<div className="flex items-center justify-between text-sm text-gray-500">*/}
                {/*    <div className="flex items-center">*/}
                {/*        <span className="mr-4">{formattedDate}</span>*/}
                {/*        <span>{post.read_time}</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </article>
    );
}