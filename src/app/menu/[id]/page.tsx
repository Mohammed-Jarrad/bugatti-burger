'use client'

import BackButton from '@/components/BackButton'
import Meel from '@/components/Meel'
import Container from '@/components/common/Container'
import { categories, meels } from '@/constants/data'
import { cn } from '@/lib/utils'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { useParams } from 'next/navigation'
import { useMemo, useState } from 'react'

const MeelsWithCategory = () => {
	const [isScrolled, setIsScrolled] = useState(false)

	const id: string = String(useParams().id)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 50) {
			setIsScrolled(true)
		} else {
			setIsScrolled(false)
		}
	})

	const category = useMemo(() => categories.find((category) => category.id === Number(id)), [id])
	const categoryMeels = useMemo(() => meels.filter((meel) => meel.categoryId === Number(id)), [id])

	return (
		<div className="">
			<div
				className={cn(
					'flex-center gap-4 my-5 py-2 sticky top-[--header-height] z-50',
					isScrolled && 'bg-black/50 backdrop-blur-lg',
				)}
			>
				<BackButton />
				<h1 className="text-xl md:text-3xl font-bold">{category?.title}</h1>
			</div>
			<Container className="my-12 overflow-hidden">
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
					{categoryMeels.map((meel, index) => (
						<Meel key={meel.name} meel={meel} index={index} />
					))}
				</div>
			</Container>
		</div>
	)
}

export default MeelsWithCategory
