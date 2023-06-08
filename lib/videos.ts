import { items } from '@/data/videos.json';

const data = items.map((item) => {
    const id = item.id?.videoId || item.id;
    const snippet = item.snippet;
    return {
      title: snippet?.title,
      imgUrl: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      id,
      description: snippet.description,
      publishTime: snippet.publishedAt,
      channelTitle: snippet.channelTitle,
      statistics: item.statistics ? item.statistics : { viewCount: 0 },
    };
  });

const getVideos = (topic: string) => {
	return data;
};

const getPopularVideos = () => {
	return getVideos('poplar');
};

const getWatchItAgainVideos = () => {};

interface Video {
	id: string;
	imgUrl: string;
}

export { getVideos, getPopularVideos, getWatchItAgainVideos };
