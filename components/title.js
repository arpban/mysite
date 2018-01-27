// Components
import Head from 'next/head'

const suffix = 'Arpit Bansal'

export default ({ value }) => (
  <Head>
    <title>{value ? `${value} — ${suffix}` : suffix}</title>
  </Head>
)
