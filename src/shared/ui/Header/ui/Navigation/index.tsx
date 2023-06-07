'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import style from './style.module.css';
import Link from 'next/link';

export type Link = {
	name: string;
	href: string;
};

interface Props {
	/**
	 * Array of navigation links
	 */
	links: Link[];
}

export const Navigation = ({ links }: Props) => {
	const pathname = usePathname();

	return (
		<nav>
			<ul className={style.navList}>
				{links.map(({ href, name }: Link) => (
					<li key={name} className={style.navListItem}>
						<Link
							href={href}
							className={clsx(style.navLink, {
								[style.active]: pathname.startsWith(href),
							})}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
