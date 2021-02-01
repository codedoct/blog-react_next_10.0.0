import { Typography } from '@material-ui/core'
import Link from 'next/link'
import Layout from '~/layouts/default'
import Form from '~/components/Page/Login/Form'

const Login = () => {
  return (
    <Layout meta_title="codedoct-react-nuxt">
      <Typography paragraph className="font-title">Login</Typography>
      <Form />
      <div className="mt-2">
        Belum punya akun silahkan regoister <Link href="/auth/register">Register</Link>
      </div>
    </Layout>
  )
}

export default Login
