import Link from 'next/link';
import { Navigation } from './ui/Navigation';
import style from './style.module.css';

const NAV_LINKS = [
	{
		name: 'Главная',
		href: '/',
	},
	{
		name: 'Цены',
		href: '/price',
	},
	{
		name: 'FAQ',
		href: '/faq',
	},
];

export const Header = () => {
	return (
		<header className={style.header}>
			<Link href="/" className={style.logo}>
				Linkly
			</Link>
			<Navigation links={NAV_LINKS} />
			<div className={style.loginBlock}>
				<Link href="/login" className={style.loginLink}>
					Войти
				</Link>
				<Link href="/register" className={style.registerLink}>
					Зарегистрироваться
				</Link>
			</div>
		</header>
	);
};
