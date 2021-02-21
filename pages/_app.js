import React from 'react'
import { wrapper } from '../store'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import '../styles/globals.scss'
import PropTypes from 'prop-types'
import { isLogin } from '~/utils/auth'

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Put your title here</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Component {...pageProps} />
        </StylesProvider>
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {}
  
  if (!isLogin) {
    if (ctx.pathname == "/" || ctx.pathname == "/auth/login" || ctx.pathname == "/auth/register") {
      return { pageProps }
    } else {
      ctx.res.writeHead(301, { Location: '/auth/login' })
      ctx.res.end()
    }
  } else {
    if (ctx.pathname == "/" || ctx.pathname == "/auth/login" || ctx.pathname == "/auth/register")  {
      ctx.res.writeHead(301, { Location: '/dashboard' })
      ctx.res.end()
    } else {
      return { pageProps }
    }
  }

  return { pageProps }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default wrapper.withRedux(MyApp)
