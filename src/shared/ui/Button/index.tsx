import clsx from 'clsx';
import style from './style.module.css';
import { ButtonHTMLAttributes } from 'react';

export enum ButtonVariants {
	primary = 'primary',
	secondary = 'secondary',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Applies on root element
	 */
	className?: string;
	/**
	 * Button variant
	 */
	variant: ButtonVariants;
	/**
	 * Button label
	 */
	label: string;
	/**
	 * Is button loading
	 */
	isLoading?: boolean;
	/**
	 * Is button disabled
	 */
	isDisabled?: boolean;
	/**
	 * Called when button pressed
	 */
	onPress?: () => void;
}

export const Button = ({
	label,
	variant,
	className,
	isLoading = false,
	isDisabled = false,
	onPress,
	...props
}: Props) => {
	return (
		<button
			className={clsx(className, style.root, style.base, {
				[style.primary]: variant == ButtonVariants.primary,
				[style.secondary]: variant == ButtonVariants.secondary,
				[style.disabled]: isDisabled,
			})}
			onClick={onPress}
			disabled={isDisabled}
			{...props}
		>
			{label}
		</button>
	);
};
