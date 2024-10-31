import Image from 'next/image';
import { Post, Users } from '@/app/lib/types';

interface PostHeaderProps {
    post: Post;
    author: Users;
}

export default function PostHeader({ post, author }: PostHeaderProps) {
    const formattedDate = new Date(post.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="mb-8">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                        <Image
                            src={author.avatar || author.default_avatar}
                            alt={author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <p className="font-semibold">{author.name}</p>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="text-gray-500">
                    <span className="mr-4">{post.read_time} min read</span>
                </div>
            </div>
            {post.featured_image && (
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-6">
                    <Image
                        src={post.featured_image}
                        alt={post.featured_image_caption}
                        fill
                        className="object-cover"
                    />
                    {post.featured_image_caption && (
                        <p className="text-sm text-gray-500 mt-2">{post.featured_image_caption}</p>
                    )}
                </div>
            )}
            <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                    <span
                        key={tag.slug}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                    >
            {tag.name}
          </span>
                ))}
                {post.topic.map((topic) => (
                    <span
                        key={topic.slug}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
            {topic.name}
          </span>
                ))}
            </div>
        </div>
    );
}