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
  quantityAvailable: number,
  metadata: ProductMetaData[],
}

declare interface ProductPrice {
  amount: number,
  currency: string,
}

declare interface ProductPricing {
  onSale: boolean,
  discount?: {
    [key: string]: {
      net: ProductPrice,
      gross: ProductPrice,
    }
  }
  priceRangeUndiscounted: {
    [key: string]: {
      net: ProductPrice,
      gross: ProductPrice,
    }
  }
  priceRange: {
    [key: string]: {
      net: ProductPrice,
      gross: ProductPrice,
    }
  }
}

declare interface ProductMetaData {
  key: string,
  value: string,
};

declare interface ProductDescriptionBlock {
  type: string,
  data: {
    text?: string,
    style?: string,
    items?: string[],
  }
}

declare interface ProductDescriptionJSON {
  blocks: ProductDescriptionBlock[],
  time?: number,
  version?: string,
};

declare interface Product {
  description: string,
  isAvailable: boolean,
  defaultVariant: {
    id: string,
  },
  pricing: ProductPricing,
  variants: ProductVariant[],
  name: string,
  id: string,
  images: ProductImage[],
  metadata: ProductMetaData[],
}


export {
  ProductVariant,
  ProductPricing,
  ProductPrice,
  ProductImage,
  ProductMetaData,
  ProductDescriptionJSON,
  ProductDescriptionBlock,
  Product
}
