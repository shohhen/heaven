import { Posts, Post, Users } from '@/app/lib/types'

const API_URL = 'https://admin.svsc.uz/api'

async function fetchWithErrorHandling(url: string) {
    const response = await fetch(url, { next: { revalidate: 3600 } }) // Cache for 1 hour

    if (!response.ok) {
        let errorMessage = `Server returned ${response.status}`
        try {
            const errorData = await response.json()
            errorMessage += `: ${errorData.message || 'An error occurred'}`
        } catch {
            const errorText = await response.text()
            errorMessage += `: ${errorText}`
        }
        throw new Error(errorMessage)
    }

    let data
    try {
        data = await response.json()
    } catch (error) {
        console.error('Error parsing JSON:', error)
        throw new Error('Server response was not valid JSON')
    }

    return data
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