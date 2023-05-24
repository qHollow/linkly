import clsx from 'clsx';
import style from './style.module.css';

export enum ButtonVariants {
	primary = 'primary',
	secondary = 'secondary',
}

interface Props {
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
}: Props) => {
	return (
		<button
			onClick={onPress}
			className={clsx(className, style.root, style.base, {
				[style.primary]: variant == ButtonVariants.primary,
				[style.secondary]: variant == ButtonVariants.secondary,
				[style.disabled]: isDisabled,
			})}
		>
			{label}
		</button>
	);
};
