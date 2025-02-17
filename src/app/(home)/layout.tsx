import React from 'react';

type Props = {
	children: React.ReactNode;
	createmodal: React.ReactNode;
};

export default function Layout({ children, createmodal }: Props) {
	return (
		<main className='px-4 md:px-6 lg:px-[106px] bg-white mx-auto max-w-[1200px] py-10'>
			{createmodal}
			{children}
		</main>
	);
}
