import React from 'react'
import Typography from '@material-ui/core/Typography'
import Layout from '~/layouts/default'
import { API_NEWS } from '~/utils/api-url'
import { apiGetNonAuth } from '~/utils/api'

const NewsDetail = ({newsId}) => {
  const [newsDetail, setNewsDetail] = React.useState({})
  React.useEffect(() => { getNewsDetail() }, [])

  const getNewsDetail = async () => {
    try {
      const response = await apiGetNonAuth(API_NEWS.DETAIL(newsId))
      setNewsDetail(response.data.result)
    } catch (err) {
      console.log(err.response)
    }
  }

  return (
    <Layout meta_title="codedoct-react-nuxt">
      <h3>{newsDetail.title}</h3>
      <Typography paragraph>
        {newsDetail.content}
      </Typography>
    </Layout>
  )
}

NewsDetail.getInitialProps = async ctx => ({newsId: ctx.query.id})

export default NewsDetail
