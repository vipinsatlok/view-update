import LiveSwither from '@/components/liveSwither';
import { getYouTubeData } from '@/data/youtube';
import { YoutubeData } from '@/types/youtube'

import { DatePicker } from "@nextui-org/date-picker"

const YoutubeLive = async () => {


    const youtubeVideoData = await getYouTubeData();




    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>



            <LiveSwither />
            {/* youtube */}
            <div>
                <div className='flex justify-between items-center mb-7'>
                    <h1 className="text-3xl text-gray-800 font-bold">YouTube Live Satsang</h1>
                    <DatePicker label="Search Date" className="max-w-[300px]" />
                </div>


                <div className="p-5 font-sans bg-gray-100">
                    {youtubeVideoData.length && youtubeVideoData.map((video, index) => (
                        <div
                            key={index}
                            className="mb-5 p-5 bg-white border border-gray-200 shadow-lg grid grid-cols-4"
                        >
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

                            <div className="col-span-1">
                                {video.thumbnail ? (
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full shadow-md"
                                    />
                                ) : (
                                    <p className="text-gray-500">No Thumbnail</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>






            </div>
        </div>



    )
}

export default YoutubeLive