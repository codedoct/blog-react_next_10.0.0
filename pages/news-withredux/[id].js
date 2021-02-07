import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Layout from '~/layouts/default'
import { getNewsDetail } from "~/store/actions/news"

const NewsDetail = ({dispatch, newsId, news}) => {
  React.useEffect(() => { initData() }, [])

  const initData = async () => {
    try {
      await getNewsDetail(dispatch, newsId)
    } catch (err) {
      console.log('masuk error', err)
    }
  }

  return (
    <Layout meta_title="codedoct-react-nuxt">
      <h3>{news.newsDetail.title}</h3>
      <Typography paragraph>
        {news.newsDetail.content}
      </Typography>
    </Layout>
  )
}

NewsDetail.getInitialProps = async ctx => ({newsId: ctx.query.id})

export default connect(state => state)(NewsDetail)
