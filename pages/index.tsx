import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import Banner from '@/components/banner/banner';
import NavBar from '@/components/nav/navbar';
import SectionCards from '@/components/card/section-cards';

import {
	getVideos,
	getPopularVideos,
	getWatchItAgainVideos,
} from '@/lib/videos';

interface Video {
	id: string;
	imgUrl: string;
}
interface Libary {
	[key: string]: Video[];
}

export async function getServerSideProps(context: any) {
	// const { userId, token } = await redirectUser(context);

	// if (!userId) {
	//   return {
	//     props: {},
	//     redirect: {
	//       destination: "/login",
	//       permanent: false,
	//     },
	//   };
	// }
	// const watchItAgainVideos = await getWatchItAgainVideos(userId, token);

	// Remove once finished
	const watchItAgainVideos = await getVideos('demo');

	const disneyVideos = await getVideos('disney trailer');
	const productivityVideos = await getVideos('Productivity');

	const chessVideos = await getVideos('chess');

	const popularVideos = await getPopularVideos();
	return {
		props: {
			disneyVideos,
			chessVideos,
			productivityVideos,
			popularVideos,
			watchItAgainVideos,
		},
	};
}

export default function Home(props: Libary) {
	const {
		disneyVideos,
		chessVideos,
		productivityVideos,
		popularVideos,
		watchItAgainVideos,
	} = props;

	return (
		<div className={styles.container}>
			<Head>
				<title>Nextflix</title>
				<meta name='description' content='YouTube streaming with next.js' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className={styles.main}>
				<NavBar />
				<Banner
					videoId='4zH5iYM4wJo'
					title='Clifford the red dog'
					subTitle='a very cute dog'
					imgUrl='/static/clifford.webp'
				/>

				<div className={styles.sectionWrapper}>
					<SectionCards title='Disney' videos={disneyVideos} size='large' />
					<SectionCards
						title='Watch it again'
						videos={watchItAgainVideos}
						size='small'
					/>
					<SectionCards title='Chess' videos={chessVideos} size='small' />
					<SectionCards
						title='Productivity'
						videos={productivityVideos}
						size='medium'
					/>
					<SectionCards title='Popular' videos={popularVideos} size='small' />
				</div>
			</div>
		</div>
	);
}
