import Image from 'next/image';
import { Post, Users } from '@/app/lib/types';
import { formatDate } from '@/app/lib/utils';

interface PostHeaderProps {
    post: Post;
    author: Users;
}

export default function PostHeader({ post, author }: PostHeaderProps) {
    const avatarUrl = author.avatar?.dark_mode || author.default_avatar;

    return (
        <header className="mb-8">
            {post.featured_image && (
                <div className="mb-8 relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                        src={post.featured_image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {post.featured_image_caption && (
                        <p className="mt-2 text-sm text-gray-500 italic">
                            {post.featured_image_caption}
                        </p>
                    )}
                </div>
            )}

            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex justify-between items-center gap-4 text-gray-600">
                <div className="flex  items-center gap-2">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full">
                        <Image
                            src={avatarUrl}
                            alt={author.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">{author.name}</p>
                        <p className="text-sm">{author.username}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <time dateTime={post.published_at}>
                        {formatDate(post.published_at)}
                    </time>
                    <span>·</span>
                    <span>{post.read_time}</span>
                </div>
            </div>

            {post.summary && (
                <p className="mt-4 text-xl text-gray-600 leading-relaxed">
                    {post.summary}
                </p>
            )}
        </header>
    );
}