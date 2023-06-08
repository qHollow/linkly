import { Header } from 'shared/ui/Header';

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default LandingLayout;
