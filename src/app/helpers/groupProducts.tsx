import type { Category, Product } from "../../data/types";

export function groupProducts(
  categories: Category[],
  products: Product[]
) {
  return categories.map(category => ({
    ...category,

    products: products.filter(
      product => product.categoryId === category.id
    ),
  }));
}