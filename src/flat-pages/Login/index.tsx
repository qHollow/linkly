import { Input } from 'shared/ui/Input';
import style from './style.module.css';
import { Typography, TypographyElement } from 'shared/ui/Typography';
import { Link } from 'shared/ui/Link';
import { Button, ButtonVariants } from 'shared/ui/Button';

export const LoginFlatPage = () => {
	return (
		<main className={style.main}>
			<div className={style.container}>
				<Typography as={TypographyElement.h1} className={style.title}>
					Вход
				</Typography>
				<form action="#" className={style.form}>
					<Input label="Почта" type="email" inputMode="email" />
					<Input label="Пароль" type="password" inputMode="text" />
					<Button
						variant={ButtonVariants.primary}
						type="submit"
						label="Войти"
					/>
				</form>
				<div className={style.registerInfo}>
					<Typography as={TypographyElement.h4}>
						Ещё не зарегистрированы?
					</Typography>
					<Link href="/register">Регистрация</Link>
				</div>
			</div>
		</main>
	);
};
