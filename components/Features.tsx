import { FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Features = () => {
	return (
		<section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
			<div className="max-container padding-container relative w-full flex justify-end">
				<div className="flex flex-1 min-h-[900px]">
					<Image
						src="/phone.png"
						alt="phone"
						width={440}
						height={1000}
						className="feature-phone"
					/>
				</div>

				<div className="z-20 flex w-full flex-col lg:w-[60%]">
					<div className="relative">
						<Image
							src="/camp.svg"
							width={50}
							height={50}
							className="absolute top-[-28px] left-[-5px] w-10 lg:w-[50px]"
							alt="camp"
						/>
						<h2 className="bold-40 lg:bold-64">Our Features</h2>
					</div>
					<ul className="mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:mt-20 lg:gap-20">
						{FEATURES.map((feature) => (
							<FeatureItem
								{...feature}
								key={feature.title}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Features;

type FeatureItem = {
	title: string;
	icon: string;
	description: string;
};

const FeatureItem = ({ title, description, icon }: FeatureItem) => {
	return (
		<li className="flex w-full flex-1 flex-col items-start">
			<div className="rounded-full p-4 lg:p-7 bg-green-50">
				<Image
					src={icon}
					width={28}
					alt="map"
					height={28}
					className="bg-green-50"
				/>
			</div>
			<h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
			<p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
				{description}
			</p>
		</li>
	);
};
