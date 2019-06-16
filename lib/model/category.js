class CategoryModel {
	static process(category) {
		let processedCategory = {
			href: "category/" + category.slug,
			label: category.name
		};

		return processedCategory;
	}
}

export default CategoryModel;
