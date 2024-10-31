import { Posts, Post, Users } from './types'

const API_URL = 'https://admin.svsc.uz/api'

async function fetchWithErrorHandling(url: string) {
    const response = await fetch(url, { next: { revalidate: 3600 } }) // Cache for 1 hour
    console.log('Raw response:', await response.text())
    if (!response.ok) {
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json()
            throw new Error(errorData.message || 'An error occurred')
        } else {
            const errorText = await response.text()
            throw new Error(`Server returned ${response.status}: ${errorText}`)
        }
    }

    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server did not return JSON')
    }

    return response.json()
}

// Posts API
export async function getAllPosts(): Promise<Posts[]> {
    try {
        return await fetchWithErrorHandling(`${API_URL}/posts`)
    } catch (error) {
        console.error('Error fetching posts:', error)
        throw error
    }
}

export async function getPostById(id: string): Promise<Post | null> {
    try {
        return await fetchWithErrorHandling(`${API_URL}/posts/${id}`)
    } catch (error) {
        console.error('Error fetching post:', error)
        throw error
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
        return await fetchWithErrorHandling(`${API_URL}/users/${id}`)
    } catch (error) {
        console.error('Error fetching user:', error)
        throw error
    }
}



// Utility function to get user for a post
export async function getUserForPost(userId: string): Promise<Users | null> {
    return getUserById(userId)
}