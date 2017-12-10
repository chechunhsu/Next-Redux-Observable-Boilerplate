import Document, { Head, Main, NextScript } from 'next/document'

import locale from '~/constants/locale'

export default class DpickDocument extends Document {
  render = () => (
    <html>
      <Head>
        <title>{locale('title.default')}</title>
        <link rel='shortcut icon' type='image/png' href='/favicon.png'/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </html>
  )
}
