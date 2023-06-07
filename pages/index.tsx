import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import Banner from '@/components/banner/banner';
import NavBar from '@/components/nav/navbar';

export default function Home() {
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
          videoId="4zH5iYM4wJo"
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />

        {/* <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
          <SectionCards
            title="Watch it again"
            videos={watchItAgainVideos}
            size="small"
          />
          <SectionCards title="Travel" videos={travelVideos} size="small" />
          <SectionCards
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
        </div> */}
      </div>

		</div>
	);
}
