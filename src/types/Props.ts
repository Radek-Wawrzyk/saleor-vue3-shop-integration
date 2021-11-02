declare interface RadioOption {
  value: number|string|boolean,
  label: string,
};

declare interface IntersectionOption {
  root: HTMLElement,
  rootMargin: string|undefined,
};

declare interface SelectOption {
  value: number|string|boolean,
  label: string,
};

export {
  RadioOption,
  SelectOption,
  IntersectionOption,
};
