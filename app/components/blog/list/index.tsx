import {Posts} from '@/app/lib/types';
import BlogCard from '@/app/components/blog/card';

interface BlogListProps {
    posts: Posts[];
}

export default function BlogList({ posts }: BlogListProps) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
}