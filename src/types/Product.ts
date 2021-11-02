declare interface ProductImage {
  __typename: string,
  alt: string,
  id: string,
  sortOrder: number,
  url: string,
}

declare interface ProductVariant {
  __typename: string,
  id: string,
  name: string,
  images: ProductImage[],
}

declare interface ProductPrice {
  amount: number,
}

declare interface ProductPricing {
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

declare interface Product {
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
