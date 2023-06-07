import Card from './card';
import Link from 'next/link';
import clsx from 'classnames';
import styles from './section-cards.module.css';

interface Video {
  id: string,
  imgUrl: string
}

interface SectionCardProps {
	title: string;
	videos: Video[];
	size: 'large' | 'medium' | 'small';
	shouldScale: boolean;
	shouldWrap: boolean;
}

const SectionCards = (props: SectionCardProps) => {
	const { title, videos = [], size, shouldWrap = false, shouldScale } = props;
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}>
				{videos.map((video, idx) => {
					return (
						<Link href={`/video/${video.id}`} key={video.id}>
							<a>
								<Card
									id={idx}
									imgUrl={video.imgUrl}
									size={size}
									shouldScale={shouldScale}
								/>
							</a>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default SectionCards;
