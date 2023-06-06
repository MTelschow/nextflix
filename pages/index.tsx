import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import Banner from '@/components/banner/banner';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Nextflix</title>
				<meta name='description' content='Video streaming with next.js' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1>Nextflix</h1>

      {/* <NavBar /> */}
      <Banner />

      {/* <Card />  */}
		</div>
	);
}
