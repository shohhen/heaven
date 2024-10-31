export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishedAt: string;
    image?: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}