import Category from '@/components/Category'
import Container from '@/components/common/Container'
import { categories } from '@/constants/data'

const MenuPage = () => {
	return (
		<Container className="py-12 flex-center overflow-hidden">
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-5 size-full overflow-hidden p-1">
				{categories.map((category, index) => (
					<Category key={category.id} category={category} index={index} />
				))}
			</div>
		</Container>
	)
}

export default MenuPage
