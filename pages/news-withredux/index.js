import React from 'react'
import Typography from '@material-ui/core/Typography'
import { List, ListItemText, ListItem } from '@material-ui/core'
import Layout from '~/layouts/default'
import { connect } from 'react-redux'
import { getNews } from "~/store/actions/news"

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />
}

const News = ({dispatch, news}) => {
  React.useEffect(() => { initData() }, [])
  const initData = async () => {
    try {
      await getNews(dispatch)
    } catch (err) {
      console.log('masuk error', err)
    }
  }

  return (
    <Layout meta_title="codedoct-react-nuxt">
      <Typography paragraph className="font-title">List News</Typography>
      <List component="nav" aria-label="secondary mailbox folders">
        {news.news.docs.map((data, index) => (
          <ListItemLink href={`news-withredux/${data.id}`} key={index}>
            <ListItemText primary={data.title} />
          </ListItemLink>
        ))}
      </List>
    </Layout>
  )
}

export default connect(state => state)(News)
