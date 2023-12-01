import Nav from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Next.js 14 Tutorial',
	description: 'Build awesome stuff with Next.js!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Nav />
				<main className='px-8 py-20 max-w-6xl mx-auto'>{children}</main>
			</body>
		</html>
	);
}
