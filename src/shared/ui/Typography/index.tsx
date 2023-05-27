import clsx from 'clsx';
import style from './style.module.css';

export enum TypographyElement {
	h1 = 'h1',
	h2 = 'h2',
	h3 = 'h3',
	h4 = 'h4',
	h5 = 'h5',
	h6 = 'h6',
	p = 'p',
	span = 'span',
}

interface Props {
	/**
	 * Applies on root element
	 */
	className?: string;
	/**
	 * One ofTypographyElements
	 */
	as: TypographyElement;
	/**
	 * Any element
	 */
	children: React.ReactNode;
}

export const Typography = ({ className, as, children }: Props) => {
	const Element = as;
	return (
		<Element className={clsx(className, style.root, style.base, style[Element])}>
			{children}
		</Element>
	);
};
