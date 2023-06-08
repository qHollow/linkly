import { type InputHTMLAttributes, useId } from 'react';
import clsx from 'clsx';
import styles from './style.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Applies on root element
	 */
	className?: string;
	/**
	 * Input label
	 */
	label: React.ReactNode;
	/**
	 * Is input disabled
	 */
	isDisabled?: boolean;
	/**
	 *	Error messsage
	 */
	error?: React.ReactNode;
}

export const Input = ({
	className,
	label,
	isDisabled,
	error,
	...props
}: Props) => {
	const id = useId();
	return (
		<div className={styles.container}>
			{!!label && (
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			)}
			<input
				className={clsx(className, styles.root, styles.base, {
					[styles.inputError]: !!error,
					[styles.disabled]: isDisabled,
				})}
				disabled={isDisabled}
				id={id}
				{...props}
			/>
			{!!error && <span className={styles.error}>{error}</span>}
		</div>
	);
};
