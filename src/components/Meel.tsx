'use client'

import { IMeel } from '@/constants/data'
import Image from 'next/image'
import React from 'react'
import { BiShekel } from 'react-icons/bi'
import { motion } from 'motion/react'

const BLUR_DATA_URL =
	'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMWExYTFhIi8+PC9zdmc+'

interface MeelProps {
	meel: IMeel
	index: number
}

const Meel: React.FC<MeelProps> = ({ meel }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4 }}
			className="p-3 flex-c gap-4"
		>
			{/* Meel Image */}
			<div className="w-full group overflow-hidden rounded-xl">
				<Image
					loading="lazy"
					src={meel.image}
					alt={meel.name}
					width={200}
					height={200}
					placeholder="blur"
					blurDataURL={BLUR_DATA_URL}
					className="w-full rounded-xl group-hover:scale-110 duration-300"
				/>
			</div>
			{/* Name and Price */}
			<div className="flex items-center justify-between">
				<h2 className="text-lg">{meel.name}</h2>
				<p className="flex items-center gap-0.5">
					<BiShekel />
					<span>{meel.price}</span>
				</p>
			</div>
			{/* Meel Ingredients */}
			{meel.ingredients && (
				<div className="flex items-start flex-wrap gap-1">
					{meel.ingredients?.map((ingredient, index) => (
						<div key={index} className="border border-primary/40 text-primary font-light bg-primary/10 px-2 py-1 backdrop-blur rounded-md text-xs text-center">
							{ingredient}
						</div>
					))}
				</div>
			)}
		</motion.div>
	)
}

export default Meel
