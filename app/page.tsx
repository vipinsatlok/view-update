import LiveSwither from "@/components/liveSwither";
import YoutubeLive from "@/components/youtubeLive";
import { fetchFeedData, fetchPostDetails, filterPosts, getVideoId, refreshAccessToken } from "@/data/facebook";
import Link from "next/link";


export default async function YouTubePage() {
  try {


    // const feedData = await fetchFeedData()
    // const filterPostData = await filterPosts(feedData)
    // const ids = await getVideoId(filterPostData)



    // const processPosts = async (ids: Array<{ attachments?: { data: Array<{ target?: { id?: string } }> } }>) => {
    //   const postDetailsPromises = ids.map(async (post) => {
    //     const id = post.attachments?.data[0]?.target?.id;
    //     if (id) {
    //       return await fetchPostDetails(id);
    //     }
    //     return null; // Return null if there is no valid ID
    //   });

    //   try {
    //     const postDetails = await Promise.all(postDetailsPromises);
    //     // Filter out null values
    //     return postDetails.filter(detail => detail !== null)
    //   } catch (error) {
    //     console.error('Error processing posts:', error);
    //     throw error;
    //   }
    // };

    // const facebookData = await processPosts(ids)




    return (
      <div>


        {/* facebook */}

        {/* <div>
          <h1 className="text-3xl text-gray-800 font-bold">Facebook Video Data</h1>



          <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {facebookData.map((post, index) => (
              <div key={index} style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginBottom: '20px',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                backgroundColor: '#f9f9f9'
              }}>
                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
                  <div style={{ flex: '2', marginRight: '15px' }}>
                    <p><strong>ID:</strong> {post.id || 'N/A'}</p>
                    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
                      <strong>Views:</strong> {post.views || 'N/A'}
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
                      <strong>Comments Count:</strong> {post.comments?.summary?.total_count || 'N/A'}
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
                      <strong>Likes Count:</strong> {post.likes?.summary?.total_count || 'N/A'}
                    </p>
                  </div>
                  <div style={{ flex: '3', marginRight: '15px' }}>
                    <p><strong>Title:</strong> {post.title || 'N/A'}</p>
                    <p><strong>Description:</strong> {post.description || 'N/A'}</p>
                    <p><strong>Created Time:</strong> {post.created_time || 'N/A'}</p>
                    <p><strong>Updated Time:</strong> {post.updated_time || 'N/A'}</p>
                    <p><strong>Post Views:</strong> {post.post_views || 'N/A'}</p>
                  </div>
                  <div style={{ flex: '2' }}>
                    {post.picture ? (
                      <img
                        src={post.picture}
                        alt={post.title}
                        style={{
                          maxWidth: '100%',
                          borderRadius: '8px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      />
                    ) : (
                      <p style={{ color: '#aaa' }}>No Picture</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div> */}



        {/* switcher */}
        <LiveSwither />
        <YoutubeLive />

      </div>

    );
  } catch (error) {
    // console.error('Error rendering YouTube page:', error);
    return <div>Error fetching YouTube data</div>;
  }
}
