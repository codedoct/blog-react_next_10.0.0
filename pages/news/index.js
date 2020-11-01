import React from 'react'
import Typography from '@material-ui/core/Typography'
import { List, ListItemText, ListItem } from '@material-ui/core'
import Layout from '~/layouts/default'
import { API_NEWS } from '~/utils/api-url'
import { apiGetNonAuth } from '~/utils/api'

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />
}

const News = () => {
  const [news, setNews] = React.useState({docs:[]})
  React.useEffect(() => { getNews() }, [])

  const getNews = async () => {
    try {
      const response = await apiGetNonAuth(API_NEWS.LIST)
      setNews(response.data.result)
    } catch (err) {
      console.log(err.response)
    }
  }

  return (
    <Layout meta_title="codedoct-react-nuxt">
      <Typography paragraph>
        List News
        <List component="nav" aria-label="secondary mailbox folders">
          {news.docs.map((data, index) => (
            <ListItemLink href={`news/${data.id}`} key={index}>
              <ListItemText primary={data.title} />
            </ListItemLink>
          ))}
        </List>
      </Typography>
    </Layout>
  )
}

export default News
