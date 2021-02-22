import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Person, Subject } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { isLoginClient } from '~/utils/auth'
import { logoutUser } from "~/store/actions/auth"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  }
}))

const GlobalDrawer = ({handleDrawerClose, open}) => {
  const router = useRouter()
  const classes = useStyles()
  const theme = useTheme()

  const handleLogoutUser = async () => {
    await logoutUser()
    location.reload()
  }
  
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        { isLoginClient() ? (
          <ListItem button onClick={handleLogoutUser}>
            <ListItemIcon><Person /></ListItemIcon>
            Logout
          </ListItem>
        ) : (
          <ListItem button onClick={() => router.push("/auth/login")}>
            <ListItemIcon><Person /></ListItemIcon>
            Login
          </ListItem>
        )} 
        <ListItem button onClick={() => router.push("/news")}>
          <ListItemIcon><Subject /></ListItemIcon>
          <ListItemText primary="News" />
        </ListItem>
        <ListItem button onClick={() => router.push("/news-withredux")}>
          <ListItemIcon><Subject /></ListItemIcon>
          <ListItemText primary="News With Redux" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default GlobalDrawer
