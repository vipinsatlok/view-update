import LiveSwither from '@/components/liveSwither'
import { ThumbnailCard, TitleCard, VideoCard } from '@/components/videoCard'
import { fetchFeedData, fetchPostDetails, filterPosts, getVideoId } from '@/data/facebook'
import React from 'react'

const FacebookLive = async () => {


    const feedData = await fetchFeedData()
    const filterPostData = await filterPosts(feedData)
    const ids = await getVideoId(filterPostData)



    const processPosts = async (ids: Array<{ attachments?: { data: Array<{ target?: { id?: string } }> } }>) => {
        const postDetailsPromises = ids.map(async (post) => {
            const id = post.attachments?.data[0]?.target?.id;
            if (id) {
                return await fetchPostDetails(id);
            }
            return null; // Return null if there is no valid ID
        });

        try {
            const postDetails = await Promise.all(postDetailsPromises);
            // Filter out null values
            return postDetails.filter(detail => detail !== null)
        } catch (error) {
            console.error('Error processing posts:', error);
            throw error;
        }
    };

    const facebookData = await processPosts(ids)


    return (
        <div>
            <LiveSwither />
            <div className="p-5 font-sans">
                {facebookData.map((post, index) => (
                    <VideoCard key={index}>
                        <TitleCard>
                            <div className="col-span-3">
                                <h2 className="text-md font-bold text-gray-800"> {post.title || 'N/A'}</h2>
                                <h2 className="text-sm font-bold text-gray-800 mb-5">{post.description || 'N/A'}</h2>
                                <p className="text-xl font-medium text-gray-600">
                                    <span className="font-semibold">Views:</span>   <span className='font-bold  text-black'>{post.views || 'N/A'}</span>
                                </p>
                                <p className="text-xl font-medium text-gray-600">
                                    <span className="font-semibold">Likes:</span>  <span className='font-bold  text-black'> {post.likes?.summary?.total_count || 'N/A'}</span>
                                </p>
                                <p className="text-xl font-medium text-gray-600">
                                    <span className="font-semibold">Comments:</span> <span className='font-bold text-black'>{post.comments?.summary?.total_count || 'N/A'}</span>
                                </p>
                            </div>
                        </TitleCard>
                        <ThumbnailCard>
                            {post.picture ? (
                                <img
                                    src={post.picture}
                                    alt={post.title}
                                    className="w-full shadow-sm"
                                />
                            ) : (
                                <p className="text-gray-400">No Picture</p>
                            )}
                        </ThumbnailCard>
                    </VideoCard>
                ))}
            </div>
        </div>
    )
}

export default FacebookLive