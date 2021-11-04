import { ProductDescriptionBlock, ProductDescriptionJSON } from '@/types/Product';

const uuid = ():string => (Math.random().toString(16).slice(2));

const formatPrice = (price:number, currency:string = '') => {
  return `${price} ${currency}`;
};

const getHTML = (payload: string): string => {
  const rawData = <ProductDescriptionJSON>JSON.parse(payload);
  let finalString = '';

  const getTagName = (type: string) => {
    switch (type) {
      case 'parapgraph': {
        return 'p';
      };
      case 'header': {
        return 'h2';
      };
      case 'list': {
        return 'ul';
      };
      default: {
        return 'p';
      }
    }
  }

  const transformer = (block: ProductDescriptionBlock) => {
    const tag = getTagName(block.type);
    const textValue = block.data.text;

    if (block.type === 'list') {
      return `
        <ul>
          ${block.data.items?.map((item:string) =>`<li>${item}</li>`).join('')}
        </ul>`;
    } else {
      return `<${tag}>${textValue}</${tag}>`;
    }
  }

  rawData.blocks.forEach((block: ProductDescriptionBlock) => {
    finalString = finalString + transformer(block);
  });

  return finalString;
}

export {
  uuid,
  formatPrice,
  getHTML,
};
