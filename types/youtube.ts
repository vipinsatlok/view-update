export interface YoutubeData {
    title: string;
    views: number;
    likes: number;
    comments: number;
    thumbnail: string;
    description: string
}

export interface VideoSnippet {
    title: string;
    description: string;
    thumbnails: {
        medium: {
            url: string;
        };
    };
}

export interface VideoItem {
    id: {
        videoId: string;
    };
    snippet: VideoSnippet;
}

export interface VideoStatistics {
    viewCount: number;
    likeCount: number;
    commentCount: number;
}

export interface VideoStatisticsResponse {
    items: [{
        statistics: VideoStatistics;
    }];
}