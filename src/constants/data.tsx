import { NavLinkProps } from '@/components/NavLink'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { FaHouse } from 'react-icons/fa6'

export type ICategoryTitle =
	| 'بورجر كلاسيكي'
	| 'بورجر سبيشال'
	| 'بورجر أطفال'
	| 'بورجر كرسبي'
	| 'وجبات تورتيلا'
	| 'وجبات جبيتا'
	| 'وجبات ستيك'
	| 'وجبات ريزو Fitness'
	| 'سلطات'
	| 'إضافات'
	| 'مقبلات'
	| 'مشروبات'

export type ICategory = { id: number; title: ICategoryTitle; image: string }

export const categories: ICategory[] = [
	{
		id: 1,
		title: 'بورجر كلاسيكي',
		image: '/meels/',
	},
	{
		id: 2,
		title: 'بورجر سبيشال',
		image: '/meels/',
	},
	{
		id: 3,
		title: 'بورجر أطفال',
		image: '/meels/',
	},
	{
		id: 4,
		title: 'بورجر كرسبي',
		image: '/meels/',
	},
	{
		id: 5,
		title: 'وجبات تورتيلا',
		image: '/meels/',
	},
	{
		id: 6,
		title: 'وجبات جبيتا',
		image: '/meels/',
	},
	{
		id: 7,
		title: 'وجبات ستيك',
		image: '/meels/',
	},
	{
		id: 8,
		title: 'سلطات',
		image: '/meels/',
	},
	// {
	//     id: 9,
	//     title: "إضافات",
	//     image: "/meels/",
	// },
	{
		id: 10,
		title: 'مقبلات',
		image: '/meels/',
	},
	{
		id: 11,
		title: 'مشروبات',
		image: '/meels/',
	},
	{
		id: 12,
		title: 'وجبات ريزو Fitness',
		image: '/meels/',
	},
] as const

export type IMeel = {
	categoryId: number
	name: string
	image: string
	price: number
	ingredients?: string[]
}

export const meels: IMeel[] = [
	// سلطات
	{
		name: 'سلطة جرجير',
		image: '/meels/salad-arugula.jpg',
		categoryId: 8,
		price: 12,
		ingredients: ['جرجير', 'شيري', 'بصل أحمر', 'سمّاك', 'ليمون'],
	},
	{
		name: 'سلطة جمبري',
		image: '/meels/salad-shrimp.jpg',
		categoryId: 8,
		price: 27,
		ingredients: ['جمبري', 'جرجير', 'سمّاك', 'شرائح الليمون', 'شيري'],
	},
	{
		name: 'سلطة حلوم',
		image: '/meels/salad-halloumi.jpg',
		categoryId: 8,
		price: 28,
		ingredients: [
			'ملفوف أبيض',
			'ملفوف أحمر',
			'بصل أحمر',
			'خس',
			'جرجير',
			'فطر',
			'شيري',
			'فلفل حلو',
			'جزر',
			'خبز مقلي',
			'حلوم',
		],
	},
	{
		name: 'سلطة سيزر',
		image: '/meels/salad-caesar.jpg',
		categoryId: 8,
		price: 30,
		ingredients: ['خس', 'شيري', 'بصل أحمر', 'صوص سيزر', 'خبز مقلي', 'جبنة بارميزان'],
	},
	{
		name: 'سلطة شنيتسل',
		image: '/meels/salad-schnitzel.jpg',
		categoryId: 8,
		price: 25,
		ingredients: [
			'ملفوف أبيض',
			'ملفوف أحمر',
			'بصل أحمر',
			'خس',
			'جرجير',
			'فطر',
			'شيري',
			'فلفل حلو',
			'جزر',
			'خبز مقلي',
			'شنيتسل',
		],
	},
	{
		name: 'سلطة كريسبي',
		image: '/meels/salad-crispy.jpg',
		categoryId: 8,
		price: 25,
		ingredients: [
			'ملفوف أبيض',
			'ملفوف أحمر',
			'بصل أحمر',
			'خس',
			'جرجير',
			'فطر',
			'شيري',
			'فلفل حلو',
			'جزر',
			'خبز مقلي',
			'كريسبي',
		],
	},
	{
		name: 'سلطة انتريكوت',
		image: '/meels/salad-entrecote.jpg',
		categoryId: 8,
		price: 30,
		ingredients: [
			'ملفوف أبيض',
			'ملفوف أحمر',
			'بصل أحمر',
			'خس',
			'جرجير',
			'فطر',
			'شيري',
			'فلفل حلو',
			'جزر',
			'خبز مقلي',
			'انتريكوت',
		],
	},
	{
		name: 'سلطة صدر دجاج',
		image: '/meels/salad-chicken.jpg',
		categoryId: 8,
		price: 25,
		ingredients: [
			'ملفوف أبيض',
			'ملفوف أحمر',
			'بصل أحمر',
			'خس',
			'جرجير',
			'فطر',
			'شيري',
			'فلفل حلو',
			'جزر',
			'خبز مقلي',
			'صدر دجاج',
		],
	},
	{
		name: 'سلطة بوجاتي',
		image: '/meels/salad-bugatti.jpg',
		categoryId: 8,
		price: 20,
		ingredients: [
			'ملفوف أبيض',
			'ملفوف أحمر',
			'بصل أحمر',
			'خس',
			'جرجير',
			'فطر',
			'شيري',
			'فلفل حلو',
			'جزر',
			'خبز مقلي',
		],
	},
	// مقبلات
	{
		name: 'أجنحة دجاج',
		image: '/meels/chicken-wings.jpg',
		categoryId: 10,
		price: 18,
		ingredients: ['7 قطع أجنحة', 'شيلي بامبا', 'صوص شيلي حلو', 'باربكيو'],
	},
	{
		name: 'أصابع كريسبي',
		image: '/meels/fingers-crispy.jpg',
		categoryId: 10,
		price: 20,
		ingredients: ['5 قطع كريسبي', 'صوص شيلي حلو', 'صوص شيلي حار', 'باربكيو'],
	},
	{
		name: 'لحمة ع الشيبس',
		image: '/meels/meat-on-fries.jpg',
		categoryId: 10,
		price: 25,
		ingredients: ['شيبس', 'لحمة مفرومة', 'جبنة شيدر سائل', 'صوصات'],
	},
	{
		name: 'عرايس',
		image: '/meels/arayes.jpg',
		categoryId: 10,
		price: 8,
	},
	{
		name: 'أصابع موزاريلا',
		image: '/meels/mozzarella-sticks.jpg',
		categoryId: 10,
		price: 20,
		ingredients: ['6 أصابع', 'شيلي حلو'],
	},
	{
		name: 'حلقات بصل',
		image: '/meels/onion-rings.jpg',
		categoryId: 10,
		price: 10,
		ingredients: ['6 حلقات'],
	},
	{
		name: 'مكس',
		image: '/meels/mix.jpg',
		categoryId: 10,
		price: 22,
		ingredients: ['4 حلقات بصل', '4 كرات بطاطا', 'بطاطا حلوة', 'هوم فرايز', 'صوص شيلي حلو', 'جبنة شيدر سائل'],
	},
	{
		name: 'شيبس صغير',
		image: '/meels/fries.jpg',
		categoryId: 10,
		price: 5,
	},
	{
		name: 'بوتيتو ودجيز',
		image: '/meels/potato-wedges.jpg',
		categoryId: 10,
		price: 10,
	},
	{
		name: 'هوم فرايز',
		image: '/meels/home-fries.jpg',
		categoryId: 10,
		price: 10,
	},
	{
		name: 'كرات بطاطا',
		image: '/meels/potato-balls.jpg',
		categoryId: 10,
		price: 10,
		ingredients: ['6 كرات بطاطا', 'جبنة شيدر سائل'],
	},
	{
		name: 'بطاطا حلوة',
		image: '/meels/sweet-potato.jpg',
		categoryId: 10,
		price: 11,
	},
	{
		name: 'أصابع حلوم',
		image: '/meels/halloumi-fingers.jpg',
		categoryId: 10,
		price: 18,
		ingredients: ['6 أصابع'],
	},
	{
		name: 'جمبري',
		image: '/meels/shrimp.jpg',
		categoryId: 10,
		price: 17,
		ingredients: ['6 قطع جمبري', 'دايموند صوص'],
	},
	// ستيكات
	{
		name: 'ستيك تيبون',
		image: '/meels/steak-tbone.jpg',
		categoryId: 7,
		price: 40,
		ingredients: ['160 غم تيبون', 'سلطة جرجير', 'وايت صوص', 'شيري', 'بروكلي', 'فطر', 'بطاطا حلوة'],
	},
	{
		name: 'ستيك انتريكوت',
		image: '/meels/steak-entrecote.jpg',
		categoryId: 7,
		price: 35,
		ingredients: ['160 غم انتريكوت', 'سلطة جرجير', 'وايت صوص', 'شيري', 'بروكلي', 'فطر', 'بطاطا حلوة'],
	},
	{
		name: 'توما هوك',
		image: '/meels/steak-tomahawk.jpg',
		categoryId: 7,
		price: 35,
		ingredients: ['160 غم توما هوك', 'سلطة جرجير', 'وايت صوص', 'شيري', 'بروكلي', 'فطر', 'بطاطا حلوة'],
	},
	{
		name: 'ريش خاروف',
		image: '/meels/lamb-ribs.jpg',
		categoryId: 7,
		price: 40,
		ingredients: ['160 غم ريش', 'سلطة جرجير', 'وايت صوص', 'شيري', 'بروكلي', 'فطر', 'بطاطا حلوة'],
	},
	// ريزو
	{
		name: 'Fitness - ريزو أسادو',
		image: '/meels/fitness-risotto-asado.jpg',
		categoryId: 12,
		price: 35,
		ingredients: ['200 غم رز', 'بروكلي', 'فطر', 'بصل', 'ثوم', 'فلفل حلو', '130 غم أسادو'],
	},
	{
		name: 'Fitness - ريزو صدر دجاج',
		image: '/meels/fitness-risotto-chicken.jpg',
		categoryId: 12,
		price: 26,
		ingredients: ['200 غم رز', 'بروكلي', 'فطر', 'بصل', 'ثوم', 'فلفل حلو', '160 غم صدر دجاج'],
	},
	{
		name: 'Fitness - ريزو انتريكوت',
		image: '/meels/fitness-risotto-entrecote.jpg',
		categoryId: 12,
		price: 30,
		ingredients: ['200 غم رز', 'بروكلي', 'فطر', 'بصل', 'ثوم', 'فلفل حلو', '150 غم انتريكوت'],
	},
	{
		name: 'Fitness - ريزو شنيتسل',
		image: '/meels/fitness-risotto-schnitzel.jpg',
		categoryId: 12,
		price: 26,
		ingredients: ['200 غم رز', 'بروكلي', 'فطر', 'بصل', 'ثوم', 'فلفل حلو', '160 غم شنيتسل'],
	},
	// تورتيلا
	{
		name: 'تورتيلا انتريكوت',
		image: '/meels/tortilla-entrecote.jpg',
		categoryId: 5,
		price: 28,
		ingredients: ['أفوكادو', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'جبنة شيدر'],
	},
	{
		name: 'تورتيلا كريسبي',
		image: '/meels/tortilla-crispy.jpg',
		categoryId: 5,
		price: 25,
		ingredients: ['أفوكادو', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'صوص شيلي حلو'],
	},
	{
		name: 'تورتيلا أسادو',
		image: '/meels/tortilla-asado.jpg',
		categoryId: 5,
		price: 30,
		ingredients: ['جرجير', 'بصل', 'مخلل', 'هليبينو', 'جبنة شيدر', 'صوص شوبوتلي'],
	},
	{
		name: 'تورتيلا شنيتسل',
		image: '/meels/tortilla-schnitzel.jpg',
		categoryId: 5,
		price: 25,
		ingredients: ['أفوكادو', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'صوص شيلي حلو'],
	},
	{
		name: 'تورتيلا صدر دجاج',
		image: '/meels/tortilla-chicken.jpg',
		categoryId: 5,
		price: 25,
		ingredients: ['أفوكادو', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي'],
	},
	// جبيتا
	{
		name: 'جبيتا أبيض صدر دجاج',
		image: '/meels/ciabatta-chicken.jpg',
		categoryId: 6,
		price: 28,
		ingredients: ['أفوكادو', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي'],
	},
	{
		name: 'جبيتا أسمر صدر دجاج',
		image: '/meels/ciabatta-chicken.jpg',
		categoryId: 6,
		price: 28,
		ingredients: ['أفوكادو', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي'],
	},
	{
		name: 'جبيتا أبيض انتريكوت',
		image: '/meels/ciabatta-entrecote.jpg',
		categoryId: 6,
		price: 35,
		ingredients: ['أفوكادو', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'جبنة شيدر'],
	},
	{
		name: 'جبيتا أسمر انتريكوت',
		image: '/meels/ciabatta-entrecote.jpg',
		categoryId: 6,
		price: 35,
		ingredients: ['أفوكادو', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'جبنة شيدر'],
	},
	{
		name: 'جبيتا أبيض فيلي جو',
		image: '/meels/ciabatta-philly-joe.jpg',
		categoryId: 6,
		price: 35,
		ingredients: ['أفوكادو', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'جبنة جاودا'],
	},
	{
		name: 'جبيتا أسمر فيلي جو',
		image: '/meels/ciabatta-philly-joe.jpg',
		categoryId: 6,
		price: 35,
		ingredients: ['أفوكادو', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'جبنة جاودا'],
	},
	// بورجر
	{
		name: 'بورجر سماش',
		image: '/meels/burger-smash.jpg',
		categoryId: 2,
		price: 33,
		ingredients: ['160 غم', 'خس', 'بندورة', 'بصل', 'مخلل', 'مربى البصل', 'صوص شوبوتلي'],
	},
	{
		name: 'بورجر شنيتسل',
		image: '/meels/burger-schnitzel.jpg',
		categoryId: 4,
		price: 22,
		ingredients: ['أيولي خردل مثوم', 'خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'صوص شيلي حلو'],
	},
	{
		name: 'بورجر ببروني',
		image: '/meels/burger-pepperoni.jpg',
		categoryId: 2,
		price: 32,
		ingredients: ['150 غم', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'جرجير', 'ببروني', 'جبنة موزاريلا'],
	},
	{
		name: 'بورجر تريبل',
		image: '/meels/burger-triple.jpg',
		categoryId: 2,
		price: 35,
		ingredients: ['150 غم', 'خس', 'بندورة', 'مخلل', 'صوص أيولي', '3 أصابع موزاريلا', 'شيدر سائل'],
	},
	{
		name: 'بورجر صدر وز',
		image: '/meels/burger-goose-breast.jpg',
		categoryId: 2,
		price: 35,
		ingredients: ['160 غم', 'جرجير', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'مربى بصل', 'جبنة جاودا'],
	},
	{
		name: 'بورجر بوجاتي',
		image: '/meels/burger-bugatti.jpg',
		categoryId: 2,
		price: 35,
		ingredients: ['160 غم', 'جرجير', 'بندورة', 'بصل', 'هليبينو', 'صوص رويال حار', 'مربى بصل', 'جبنة شيدر'],
	},
	{
		name: 'بورجر أناناس',
		image: '/meels/burger-pineapple.jpg',
		categoryId: 2,
		price: 31,
		ingredients: ['150 غم', 'خس', 'بندورة', 'مخلل', ' صوص ايولي خردل مثوم', 'أناناس'],
	},
	{
		name: 'بورجر بورجريتوس',
		image: '/meels/burger-burgitos.jpg',
		categoryId: 2,
		price: 32,
		ingredients: ['150 غم', 'خس', 'بندورة', 'بصل', 'هليبينو', 'أفوكادو', 'دوريتوس', 'جبنة بيستو'],
	},
	{
		name: 'بورجر بورجريانو',
		image: '/meels/burger-burgiriano.jpg',
		categoryId: 2,
		price: 32,
		ingredients: ['150 غم', 'خس', 'بندورة', 'مخلل', 'جبنة حمرة', 'مربى بصل'],
	},
	{
		name: 'بورجر دبل كريسبي',
		image: '/meels/burger-double-crispy.jpg',
		categoryId: 4,
		price: 22,
		ingredients: ['خس', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'صوص فلوريدا', 'جبنة جاودا'],
	},
	{
		name: 'بورجر محشي بالجبن',
		image: '/meels/burger-cheese-stuffed.jpg',
		categoryId: 2,
		price: 32,
		ingredients: ['160 غم', 'جرجير', 'بندورة', 'بصل', 'مخلل', 'صوص شوبوتلي', 'مربى بصل'],
	},
	{
		name: 'بورجر اطفال',
		image: '/meels/burger-kids.jpg',
		categoryId: 3,
		price: 18,
		ingredients: ['100 غم', 'صوص كيتشوب', 'بندورة', 'مخلل', 'عصير أطفال'],
	},
	{
		name: 'بورجر شنيتسل أطفال',
		image: '/meels/burger-schnitzel-kids.jpg',
		categoryId: 3,
		price: 18,
		ingredients: ['صوص فلوريدا', 'بندورة', 'مخلل', 'عصير أطفال'],
	},
	{
		name: 'بورجر كريسبي أطفال',
		image: '/meels/burger-crispy-kids.jpg',
		categoryId: 3,
		price: 18,
		ingredients: ['صوص فلوريدا', 'بندورة', 'مخلل', 'عصير أطفال'],
	},
	//
	{
		name: 'بورجر مشروم',
		image: '/meels/burger-mushroom.jpg',
		categoryId: 2,
		price: 31,
		ingredients: ['خس', 'بندورة', 'بصل', 'مخلل', 'وايت صوص', 'صوص أيولي خردل مثوم'],
	},
	{
		name: 'بورجر كلاسيكي 150 غم',
		image: '/meels/burger-classic-150g.jpg',
		categoryId: 1,
		price: 28,
		ingredients: ['خس', 'صوص فلوريدا', 'بندورة', 'بصل', 'مخلل'],
	},
	{
		name: 'بورجر كلاسيكي 200 غم',
		image: '/meels/burger-classic-200g.jpg',
		categoryId: 1,
		price: 32,
		ingredients: ['خس', 'صوص فلوريدا', 'بندورة', 'بصل', 'مخلل'],
	},
	{
		name: 'بورجر كلاسيكي 300 غم',
		image: '/meels/burger-classic-300g.jpg',
		categoryId: 1,
		price: 38,
		ingredients: ['خس', 'صوص فلوريدا', 'بندورة', 'بصل', 'مخلل'],
	},
	{
		name: 'بورجر كلاسيكي 400 غم',
		image: '/meels/burger-classic-400g.jpg',
		categoryId: 1,
		price: 45,
		ingredients: ['خس', 'صوص فلوريدا', 'بندورة', 'بصل', 'مخلل'],
	},
	{
		name: 'بورجر أسادو',
		image: '/meels/burger-asado.jpg',
		categoryId: 2,
		price: 35,
		ingredients: ['150 غم أسادو', 'جرجير', 'بصل', 'مخلل', 'هليبينو', 'صوص شوبوتلي', 'جبنة شيدر'],
	},
	// مشروبات
	{
		name: 'كوكا كولا 330 مل',
		categoryId: 11,
		image: '/meels/cola-330ml.jpg',
		price: 3,
	},
	{
		name: 'كوكا كولا زيرو 330 مل',
		categoryId: 11,
		image: '/meels/cola-zero.jpg',
		price: 3,
	},
	{
		name: 'كوكا كولا زجاج',
		categoryId: 11,
		image: '/meels/cola-glass.jpg',
		price: 4,
	},
	{
		name: 'سبرايت 330 مل',
		categoryId: 11,
		image: '/meels/sprite.jpg',
		price: 3,
	},
	{
		name: 'فانتا 330 مل',
		categoryId: 11,
		image: '/meels/fanta.jpg',
		price: 3,
	},
	{
		name: 'فريش توت',
		categoryId: 11,
		image: '/meels/fresh-berries.jpg',
		price: 3,
	},
	{
		name: 'فريش ليمون',
		categoryId: 11,
		image: '/meels/fresh-lemon.jpg',
		price: 3,
	},
	{
		name: 'صودا',
		categoryId: 11,
		image: '/meels/soda.jpg',
		price: 4,
	},
	{
		name: 'ماء صغير',
		categoryId: 11,
		image: '/meels/water-small.jpg',
		price: 3,
	},
	{
		name: 'ماء كبير',
		categoryId: 11,
		image: '/meels/water-large.jpg',
		price: 4,
	},
	{
		name: 'عصير عنب',
		categoryId: 11,
		image: '/meels/juice-grape.jpg',
		price: 3,
	},
	{
		name: 'عصير برتقال',
		categoryId: 11,
		image: '/meels/juice-orange.jpg',
		price: 3,
	},
	{
		name: 'عصير أطفال',
		categoryId: 11,
		image: '/meels/juice-kids.jpg',
		price: 2,
	},
	{
		name: 'كولا كبير',
		categoryId: 11,
		image: '/meels/cola-large.jpg',
		price: 5,
	},
	{
		name: 'XL',
		categoryId: 11,
		image: '/meels/xl-drink.jpg',
		price: 5,
	},
	{
		name: 'قهوة سيبريسو',
		categoryId: 11,
		image: '/meels/espresso.jpg',
		price: 4,
	},
]

export const navlinks: NavLinkProps[] = [
	{
		href: '/',
		title: 'الرئيسية',
		icon: <FaHouse className="size-5 mix-blend-exclusion" />,
	},
	{
		href: '/menu',
		title: 'المنيو',
		icon: <BiSolidFoodMenu className="size-5 mix-blend-exclusion" />,
	},
]

export const socials = {
	instagram: 'https://www.instagram.com/bugattiburger1/',
	facebook: 'https://www.facebook.com/profile.php?id=61558583174459',
	location: 'طولكرم - تحت مبنى البلدية مقابل مدرسة بنات جمال عبد الناصر',
	phone: '0593999913',
}
