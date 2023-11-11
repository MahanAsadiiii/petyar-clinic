import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html dir='rtl'>
      <Head />
      <body className='flex-col max-w-[1920px] mx-auto pt-5'>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}
