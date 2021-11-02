interface RadioOption {
  value: number|string|boolean,
  label: string,
};

interface IntersectionOption {
  root: HTMLElement,
  rootMargin: string|undefined,
};

interface SelectOption {
  value: number|string|boolean,
  label: string,
};

export {
  RadioOption,
  SelectOption,
  IntersectionOption,
};
