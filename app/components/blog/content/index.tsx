import {Post} from "@/app/lib/types";

interface PostContentProps {
    post: Post;
}

function PostContent({ post }: PostContentProps) {
    return (
        <div className="space-y-8">

            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.body }}
            />

            <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                    <span
                        key={tag.slug}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                        {tag.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default PostContent
