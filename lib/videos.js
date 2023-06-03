

export async function getCommonVideos(url) {
  
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    try {
    // const BASE_URL = "youtube.googleapis.com/youtube/v3"
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/${url}maxResults=25&key=${YOUTUBE_API_KEY}`)
    const data = await response.json()
    
    if (data?.error) {
      console.error('Youtube API error', data.error)
    } else {
      
      return data?.items.map((item) => {
        return {
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.high.url,
            id: item?.id?.videoId || item.id,
        }
    })
    }
  } catch (error) {
    console.error("Something went wrong with the video library", error)
    return []
  }

}
// export async function getPopularVideos () {
//   const URL = "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&"
//   return getCommonVideos(URL)

// }
export async function getVideos (searchQuery) {
   const URL = `search?part=snippet&q=${searchQuery}&type=video&videoDefinition=high&videoEmbeddable=true&`
   return getCommonVideos(URL)
}
  