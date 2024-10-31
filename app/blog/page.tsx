import { getAllPosts } from '@/app/lib/api'
import BlogList from '@/app/components/blog/list'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | SVSC',
    description: 'Read our latest articles about healing, support, and empowerment.'
}

export default async function BlogPage() {
    let posts = []
    let error = null

    try {
        posts = await getAllPosts()
    } catch (err) {
        console.error('Failed to fetch posts:', err)
        error = err instanceof Error ? err.message : 'An unexpected error occurred'
    }

    return (
        <main className="py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Insights, stories, and resources for healing and empowerment.
                </p>
                {error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    <BlogList posts={posts} />
                )}
            </div>
        </main>
    )
}