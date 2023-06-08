const getVideos = (topic: string) => {
	const video = {
		id: '12',
		imgUrl: '/static/clifford.webp',
	};
    return new Array(3).fill(video);
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
