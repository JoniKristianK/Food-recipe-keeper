class Meal {
	constructor(
		id,
		categoryIds,
		title,
		affordability,
		complexity,
		imageUrl,
		duration,
		ingredients,
		steps,
		isGlutenFree,
		isVega,
		isVegetarian,
		isLactoseFree
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.affordability = affordability;
		this.complexity = complexity;
		this.imageUrl = imageUrl;
		this.duration = duration;
		this.ingredients = ingredients;
		this.steps = steps;
		this.isGlutenFree = isGlutenFree;
		this.isVega = isVega;
		this.isVegetarian = isVegetarian;
		this.isLactoseFree = isLactoseFree;
	}
}

export default Meal;
