import type { ProductProps } from '../types';

export function applyDiscount(
  products: ProductProps[],
  category: string,
  percentage: number
): ProductProps[] {
  return products.map(product => {
    const isTargetCategory = product.category === category;

    if (isTargetCategory) {
      const originalPrice = product.price;
      const discountedPrice = +(originalPrice * (1 - percentage / 100)).toFixed(
        2
      );

      return {
        ...product,
        priceOriginal: originalPrice,
        price: discountedPrice,
        discountApplied: true,
      };
    }

    return {
      ...product,
      priceOriginal: product.price,
    };
  });
}

export function applyDiscountToProduct(
  product: ProductProps,
  category: string,
  percentage: number
): ProductProps {
  const isTargetCategory = product.category === category;

  if (isTargetCategory) {
    const originalPrice = product.price;
    const discountedPrice = +(originalPrice * (1 - percentage / 100)).toFixed(
      2
    );

    return {
      ...product,
      priceOriginal: originalPrice,
      price: discountedPrice,
      discountApplied: true,
    };
  }

  return {
    ...product,
    priceOriginal: product.price,
  };
}
