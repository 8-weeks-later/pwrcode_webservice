import localFont from 'next/font/local';

export const ubuntu = localFont({
  src: [
    {
      path: '../../public/font/en/Ubuntu-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../public/font/en/Ubuntu-BoldItalic.woff2',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: '../../public/font/en/Ubuntu-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/font/en/Ubuntu-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/font/en/Ubuntu-LightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/font/en/Ubuntu-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/en/Ubuntu-MediumItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/font/en/Ubuntu-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
