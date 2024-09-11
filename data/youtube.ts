import axios from 'axios';
import { VideoItem, VideoStatistics, VideoStatisticsResponse, YoutubeData, VideoSnippet } from '@/types/youtube';



// const API_KEY = 'AIzaSyChYwvuZFZOyiBM1OkPA7Fimu1XfI0d5SA';
const API_KEY = 'AIzaSyAPfS0kmoUVn_xREJPI8QMNbZL5jj7-6QE';
const CHANNEL_ID = 'UCtb33Ciysb6TEkXaORcVmpg'; // Sant Rampal Ji Maharaj


// Get yesterday's date in DD-MM-YYYY format
function getYesterdayDate(): string {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const day = String(yesterday.getDate()).padStart(2, '0');
    const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = yesterday.getFullYear();
    return `${day}-${month}-${year}`;
}


// Fetch video details from YouTube
async function fetchYouTubeVideos(searchKeyword: string): Promise<VideoItem[]> {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&q=${searchKeyword}&key=${API_KEY}&maxResults=10`;
    try {
        const response = await axios.get<{ items: VideoItem[] }>(url);
        return response.data.items;
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
        throw error;
    }
}

// Fetch video statistics
async function fetchVideoStatistics(videoId: string): Promise<VideoStatistics> {
    const statsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`;
    try {
        const response = await axios.get<VideoStatisticsResponse>(statsUrl);
        return response.data.items[0].statistics;
    } catch (error) {
        console.error('Error fetching video statistics:', error);
        throw error;
    }
}

// Main function to get YouTube data
export async function getYouTubeData() {
    const searchKeyword = getYesterdayDate();
    const videoDataArray: YoutubeData[] = [];

    try {
        const videos = await fetchYouTubeVideos(searchKeyword);

        for (const video of videos) {
            const videoId = video.id.videoId;
            const videoTitle = video.snippet.title;
            const videoDescription = video.snippet.description;
            const videoThumbnail = video.snippet.thumbnails.medium.url;

            try {
                const stats = await fetchVideoStatistics(videoId);
                const videoData = {
                    title: videoTitle,
                    views: stats.viewCount,
                    likes: stats.likeCount,
                    comments: stats.commentCount,
                    thumbnail: videoThumbnail,
                    description: videoDescription
                };

                // Add video data to the array
                videoDataArray.push(videoData);
            } catch (error) {
                console.error(`Error fetching statistics for video ${videoId}:`, error);
            }
        }
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
    }

    return videoDataArray;
}
