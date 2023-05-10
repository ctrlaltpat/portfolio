import { parseISO, format } from 'date-fns'
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { remark } from 'remark';
import html from 'remark-html';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export const formatDate = (dateString : string): string => {
  const date = parseISO(dateString)
  return format(date, 'd LLLL, yyyy')
}

export const randomHexColour = (): string =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);