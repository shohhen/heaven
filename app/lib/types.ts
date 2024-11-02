export interface Meta {
    description: string;
    title: string;
    canonical_link: string;
}

export enum USERS {
    Contributor = 1,
    Editor = 2,
    Admin = 3
}

export interface PostsResponse {
    data: Posts[];
    page: number;
    pages: number;
    total: number;
}

export interface Posts {
    id: string;
    title: string;
    summary: string | null;
    featured_image: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    read_time: string;
}

export interface Post {
    id: string;
    slug: string;
    title: string;
    summary: string;
    body: string;
    featured_image: string;
    featured_image_caption: string | null;
    user_id: string;
    published_at: string;
    meta: {
        description: string;
        title: string;
        canonical_link: string;
    };
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    read_time: string;
    tags: {
        name: string;
        slug: string;
        pivot: {
            post_id: string;
            tag_id: string;
        };
    }[];
    topic: {
        name: string;
        slug: string;
        pivot: {
            post_id: string;
            topic_id: string;
        };
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
    username: string;
    summary: string | null;
    avatar: {
        dark_mode: string | null;
        digest: string | null;
        locale: string;
        role: number;
        created_at: string;
        updated_at: string;
        deleted_at: string | null;
        posts_count: string;
        default_avatar: {
            default_locale: string;
        };
    };
    locale: string;
    role: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    posts_count: string;
    default_avatar: string;
}
