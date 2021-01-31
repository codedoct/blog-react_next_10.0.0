import Typography from '@material-ui/core/Typography'
import Layout from '~/layouts/default'
import Form from '~/components/Page/Register/Form'

const Register = () => {
  return (
    <Layout meta_title="codedoct-react-nuxt">
      <Typography paragraph className="font-title">Register</Typography>
      <Form />
    </Layout>
  )
}

export default Register
