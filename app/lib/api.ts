import { PostsResponse, Post, Users } from './types';

const API_URL = 'https://admin.svsc.uz/viewer';

async function fetchWithErrorHandling(url: string) {
    const response = await fetch(url, {
        next: { revalidate: 3600 },
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred');
        } else {
            const errorText = await response.text();
            throw new Error(`Server returned ${response.status}: ${errorText}`);
        }
    }

    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
        throw new Error('Server did not return JSON');
    }

    return response.json();
}

export async function getAllPosts(): Promise<PostsResponse> {
    try {
        const response = await fetchWithErrorHandling(`${API_URL}/posts`);
        return response;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function getPostById(id: string): Promise<Post | null> {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            next: { revalidate: 3600 },
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.post || null;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}

// Users API
export async function getAllUsers(): Promise<Users[]> {
    try {
        return await fetchWithErrorHandling(`${API_URL}/users`)
    } catch (error) {
        console.error('Error fetching users:', error)
        throw error
    }
}

export async function getUserById(id: string): Promise<Users | null> {
    try {
        const response = await fetch(`${API_URL}/users/${id}`, {
            next: { revalidate: 3600 },
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.data || null; // Notice we're accessing data.data as shown in your API response
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}



// Utility function to get user for a post
export async function getUserForPost(userId: string): Promise<Users | null> {
    return getUserById(userId)
}