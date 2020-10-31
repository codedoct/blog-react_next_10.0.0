import styles from './Home.module.scss'
import Layout from '../layouts/default'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout meta_title="codedoct-react-nuxt">
        <h1>First Post</h1>
      </Layout>
    </div>
  )
}
