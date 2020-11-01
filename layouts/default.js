import React from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import HeaderDefault from '../components/Header/Default'
import Drawer from '../components/Global/Drawer'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}))

const Layout = (props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Head>
        <title>{props.meta_title}</title>
      </Head>
      <div className={classes.root}>
        <HeaderDefault handleDrawerOpen={handleDrawerOpen} open={open}/>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <div>{props.children}</div>
        </main>
        <Drawer handleDrawerClose={handleDrawerClose} open={open}/>
      </div>
    </>
  )
}

export default Layout
