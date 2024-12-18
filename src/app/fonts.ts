import localFont from 'next/font/local';

export const ubuntuMono = localFont({
  src: [
    {
      path: './fonts/UbuntuMono-R.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-ubuntu-mono',
});

export const josefinSans = localFont({
  src: './fonts/JosefinSans-VariableFont_wght.ttf',
  variable: '--font-josefin-sans',
});
