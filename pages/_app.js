import React from 'react'
import { wrapper } from '../store'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import '../styles/globals.scss'
import PropTypes from 'prop-types'
import { isLoginServer } from '~/utils/auth'
import { redirectTo } from '~/utils/handling-url'

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

  if (ctx.req) {
    if (!isLoginServer(ctx.req)) {
      if (ctx.pathname == "/" || ctx.pathname == "/auth/login" || ctx.pathname == "/auth/register") {
        return { pageProps }
      } else {
        redirectTo('/auth/login', { res: ctx.res, status: 301 })
      }
    } else {
      if (ctx.pathname == "/" || ctx.pathname == "/auth/login" || ctx.pathname == "/auth/register")  {
        redirectTo('/dashboard', { res: ctx.res, status: 301 })
      } else {
        return { pageProps }
      }
    }
  }

  return { pageProps }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired
}

export default wrapper.withRedux(MyApp)
