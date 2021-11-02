interface ProductImage {
  __typename: string,
  alt: string,
  id: string,
  sortOrder: number,
  url: string,
}

interface ProductVariant {
  __typename: string,
  id: string,
  name: string,
  images: ProductImage[],
}

interface ProductPrice {
  amount: number,
}

interface ProductPricing {
  onSale: boolean,
  priceRange: {
    start: {
      net: ProductPrice,
      gross: ProductPrice,
    },
    stop: {
      net: ProductPrice,
      gross: ProductPrice,
    }
  }
}

interface Product {
  description: string,
  descriptionJson: string,
  isAvailable: boolean,
  defaultVariant: {
    id: string,
  },
  pricing: ProductPricing,
  variants: ProductVariant[],
  name: string,
  id: string,
  images: ProductImage[],
}

export {
  ProductVariant,
  ProductPricing,
  ProductPrice,
  ProductImage,
  Product
}
