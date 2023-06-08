import { Typography, TypographyElement } from 'shared/ui/Typography';
import style from './style.module.css';
import { Input } from 'shared/ui/Input';
import { Button, ButtonVariants } from 'shared/ui/Button';
import { Link } from 'shared/ui/Link';

export const RegisterFlatPage = () => {
	return (
		<main className={style.main}>
			<div className={style.container}>
				<Typography as={TypographyElement.h1}>Регистрация</Typography>
				<Button
					label="Зарегистрироваться через Google"
					variant={ButtonVariants.primary}
					className={style.googleAuthButton}
				/>
				<Typography as={TypographyElement.h4}>или</Typography>
				<form action="#" className={style.form}>
					<Input label="Почта" type="email" inputMode="email" />
					<Input label="Пароль" type="password" inputMode="text" />
					<Input label="Повторите пароль" type="password" inputMode="text" />
					<Button
						variant={ButtonVariants.primary}
						type="submit"
						label="Зарегистрироваться"
					/>
				</form>
				<div className={style.loginInfo}>
					<Typography as={TypographyElement.h4}>Уже есть аккаунт?</Typography>
					<Link href="/login">Войти</Link>
				</div>
			</div>
		</main>
	);
};
