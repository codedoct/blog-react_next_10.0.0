import Head from 'next/head'

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.meta_title}</title>
      </Head>
      <div>{props.children}</div>
    </>
  )
}

export default Layout
