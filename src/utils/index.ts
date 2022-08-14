export const randomHexColour = (): string =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

export const randomNumberBetween = (max: number, min: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getContentType = (item: any): string => {
  //TODO
  return item.sys.contentType.sys.id;
};
