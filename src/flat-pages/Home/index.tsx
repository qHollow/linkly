import { Typography, TypographyElement } from 'shared/ui/Typography';
import style from './style.module.css';

export const HomeFlatPage = () => {
	return (
		<main className={style.main}>
			<section className={style.mainInfo}>
				<div className={style.tip}>
					<Typography as={TypographyElement.span}>
						Давай сделаем всё проще в один клик 👈
					</Typography>
				</div>
				<Typography as={TypographyElement.h1} className="srOnly">
					Линкли - платформа для сокращения ссылок
				</Typography>
				<Typography as={TypographyElement.h2} className={style.title}>
					всё нужное для ваших ссылок<br /> в одном месте
				</Typography>
				<Typography as={TypographyElement.p} className={style.description}>
					На одной платформе вы найдете все инструменты, необходимые для
					подключения аудитории по всему миру, управления ссылками и QR-кодами,
					а так же многое многое другое.
				</Typography>
			</section>
			<section className={style.preview}>
				<div className={style.previewImage}>Image was here later</div>
			</section>
		</main>
	);
};
