export interface Meta {
    description: string;
    title: string;
    canonical_link: string;
}

export enum USERS {
    1 = "Contributor",
    2 = "Editor",
    3 = "Admin"
}

export interface Posts {
    id: string;
    title: string;
    summary: string;
    featured_image: string;
    published_at: string | Date;
    views_count: number;
    read_time: number;
}

export interface Post {
    id: string;
    slug: string;
    title: string;
    summary: string;
    body: string;
    featured_image?: string;
    featured_image_caption: string;
    user_id: string;
    meta: Meta;
    published_at: Date | string;
    read_time: number;
    tags: {
        name: string;
        slug: string;
        pivot: {
            post_id: string;
            tag_id: string
        }
    }[];
    topic: {
        name: string;
        slug: string;
        pivot: {
            post_id: string;
            topic_id: string
        }
    }[];
}

export interface Tags {
    id: string;
    name: string;
    posts_count: number;
    created_at: string | Date;
}

export interface Tag {
    id: string;
    slug: string;
    name: string;
    user_id: string;
    created_at: string | Date;
    updated_at: string | Date;
    deleted_at: string | Date | null;
}

export interface Users {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    role: USERS;
    posts_count: number;
    default_avatar: string;
    created_at: string | Date;
    updated_at: string | Date;
    deleted_at: string | Date | null
}
