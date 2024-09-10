import axios from 'axios';

// Constants
const APP_ID = '1770010016864452';
const APP_SECRET = 'cd7260ac5dc3bda82ad6c83c0ed26b2f';
const SHORT_LIVED_TOKEN = 'EAAZAJ0JJN2MQBO23cZAR0FdnemEJ5ATM7pweOj1jSOUXTi1tnXUEIlwrUYFZAMAZC5F9aSHJCLtnfF4CRWFZB6J9PuCOEcw8bxMWT2DqWTZAO1mPP8GIFuAFVQ3Iz3kBloxCgplqvzZCOyt93nZATj0CNEl78qZA6GKKdqheVicmIYVzBDPsKUUmZAprLjHCwJNBZAGabNApSPKPrWG8UzljD9rlDtZCjNGt8nc5mUiRs4Dw';
const PAGE_ID = '445770162507099';

// Type Definitions
interface Post {
    id: string;
    message?: string;
    story?: string;
    attachments?: {
        data: {
            target?: {
                id: string;
            };
        }[];
    };
}


export interface Attachment {
    target?: {
        id?: string;
    };
}

export interface PostDetail {
    attachments?: {
        data: Attachment[];
    };
}

interface PostDetails {
    id: string;
    views?: string;
    comments?: {
        summary: {
            total_count: number;
        };
    };
    likes?: {
        summary: {
            total_count: number;
        };
    };
    picture?: string;
    title?: string;
    description?: string;
    created_time?: string;
    updated_time?: string;
    post_views?: string;
}

// Refresh Access Token
export async function refreshAccessToken(): Promise<string> {
    const url = `https://graph.facebook.com/v20.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRET}&fb_exchange_token=${SHORT_LIVED_TOKEN}`;
    try {
        const response = await axios.get(url);
        return response.data.access_token;
    } catch (error) {
        // console.error('Error refreshing access token:', error);
        throw error;
    }
}

// Fetch Feed Data
export async function fetchFeedData(): Promise<Post[]> {
    const accessToken = await refreshAccessToken();
    const url = `https://graph.facebook.com/v20.0/${PAGE_ID}/feed?limit=100&access_token=${accessToken}`;
    try {
        const response = await axios.get<{ data: Post[] }>(url);

        return response.data.data;
        console.log(response.data.data)
    } catch (error) {
        console.error('Error fetching feed data:', error);
        throw error;
    }
}


export const filterPosts = (posts: Post[]): Post[] => {
    return posts.filter(post =>
        post.story?.includes('was live') &&
        post.message?.includes('10-09-2024')
    );
};



export const getVideoId = async (posts: Post[]): Promise<PostDetail[]> => {
    const accessToken = await refreshAccessToken();

    const detailRequests = posts.map(post => {
        const detailUrl = `https://graph.facebook.com/v20.0/${post.id}?fields=attachments&access_token=${accessToken}`;

        return axios.get(detailUrl)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error fetching details for post ${post.id}:`, error);
                return null; // Return null or a default value on error
            });
    });

    const postDetails = await Promise.all(detailRequests);
    return postDetails.filter(detail => detail !== null) as PostDetail[];
};



// Fetch Post Details
export async function fetchPostDetails(postId: string): Promise<PostDetails> {

    const accessToken = await refreshAccessToken();
    const url = `https://graph.facebook.com/v20.0/${postId}?fields=views,comments.summary(true),likes.summary(true),picture,title,description,created_time,updated_time,post_views&access_token=${accessToken}`;
    try {
        const response = await axios.get<PostDetails>(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching post details for ${postId}:`, error);
        throw error;
    }
}

// Main Function to Get Facebook Data
// export async function getFacebookData(): Promise<PostDetails[]> {
//     const accessToken = await refreshAccessToken();
//     const feedData = await fetchFeedData(accessToken);
//     const filteredPosts: Post[] = feedData.filter(post =>
//         (post.message && post.message.includes('09-09-2024')) ||
//         (post.story && post.story.includes('was live'))
//     );

//     const detailedPosts: PostDetails[] = [];
//     for (const post of filteredPosts) {
//         const postDetails = await fetchPostDetails(post.id, accessToken);
//         detailedPosts.push(postDetails);
//     }

//     return detailedPosts;
// }
