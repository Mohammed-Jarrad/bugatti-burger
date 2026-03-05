'use client'
import { navlinks } from '@/constants/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import Container from './common/Container'
import NavLink from './NavLink'

const Header = () => {
	return (
		<header
			className={cn(
				'h-[--header-height] grid fixed w-full top-0 z-50',
				'bg-black/10 backdrop-blur-lg supports-[backdrop-filter]:bg-black/20 supports-[backdrop-filter]:backdrop-blur-lg',
			)}
		>
			<Container className="flex items-center justify-between my-1.5 text-xs md:text-sm">
				<ul className="flex items-center gap-6">
					{navlinks.map(({ href, title, icon }) => (
						<NavLink key={title} href={href} title={title} icon={icon} />
					))}
				</ul>
				<Link dir="ltr" href="/" className="flex flex-row items-stretch gap-2">
					<Image
						src="/assets/Bugatti-icon.svg"
						alt="Bugatti Logo"
						width={50}
						height={50}
						className="size-[35px] md:size-[50px]"
					/>
					<h3 className="max-sm:hidden text-2xl font-bold self-center bg-clip-text text-transparent bg-gradient-to-t from-primary to-primary/50">
						Bugatti Burger
					</h3>
				</Link>
			</Container>
		</header>
	)
}

export default Header
