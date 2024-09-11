import LiveSwither from '@/components/liveSwither';
import { ThumbnailCard, TitleCard, VideoCard } from '@/components/videoCard';
import { getYouTubeData } from '@/data/youtube';
import { YoutubeData } from '@/types/youtube'

import { DatePicker } from "@nextui-org/date-picker"

const YoutubeLive = async () => {


    const youtubeVideoData = await getYouTubeData();




    return (
        <div className="font-sans">
            <LiveSwither />

            <div className='flex flex-col md:flex-row gap-10 justify-start items-start md:justify-between md:items-center mb-7'>
                <h1 className="text-3xl text-gray-800 font-bold text-start w-full">Youtube Live Satsang</h1>
                <div className='w-full md:justify-end md:flex'>
                    <DatePicker label="Search Date" className="md:max-w-[300px] w-full" />
                </div>
            </div>

            {youtubeVideoData.length && youtubeVideoData.map((video, index) => (
                <VideoCard key={index}>
                    <TitleCard>
                        <div className="col-span-3">
                            <h2 className="text-md font-bold text-gray-800">{video.title}</h2>
                            <h2 className="text-sm font-bold text-gray-800 mb-5">{video.description}</h2>
                            <p className="text-xl font-medium text-gray-600">
                                <span className="font-semibold">Views:</span>   <span className='font-bold  text-black'>{video.views || 'N/A'}</span>
                            </p>
                            <p className="text-xl font-medium text-gray-600">
                                <span className="font-semibold">Likes:</span>  <span className='font-bold  text-black'>{video.likes || 'N/A'} </span>
                            </p>
                            <p className="text-xl font-medium text-gray-600">
                                <span className="font-semibold">Comments:</span> <span className='font-bold  text-black'>{video.comments || 'N/A'}</span>
                            </p>
                        </div>
                    </TitleCard>


                    <ThumbnailCard>

                        {video.thumbnail ? (
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full shadow-md"
                            />
                        ) : (
                            <p className="text-gray-500">No Thumbnail</p>
                        )}

                    </ThumbnailCard>
                </VideoCard>
            ))}
        </div>


    )
}

export default YoutubeLive