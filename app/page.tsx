import { getYouTubeData } from "@/data/youtube";

export default async function YouTubePage() {
  try {
    const videoData = await getYouTubeData();

    return (
      <div>
        <h1 className="text-3xl text-gray-800 font-bold">YouTube Video Data</h1>
        <ul>
          {videoData.map((video, index) => (
            <li key={index}>
              <h2>{video.title}</h2>
              <p>Views: {video.views}</p>
              <p>Likes: {video.likes}</p>
              <p>Comments: {video.comments}</p>
              <img src={video.thumbnail} alt={video.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error rendering YouTube page:', error);
    return <div>Error fetching YouTube data</div>;
  }
}
