import Typography from '@material-ui/core/Typography'
import Layout from '~/layouts/default'
import { connect } from 'react-redux'
// import {wrapper} from '~/store'
import { registerUser } from "~/store/actions/auth"
import Form from '~/components/Page/Register/Form'

// export const getStaticProps = wrapper.getStaticProps( // server side
//   ({store}) => {
//     store.dispatch({type: 'TICK', payload: 'was set in other page '})
//   }
// )

const Register = ({auth}) => {
  console.log(auth)
  return (
    <Layout meta_title="codedoct-react-nuxt">
      <Typography paragraph className="font-title">Register</Typography>
      <Form />
    </Layout>
  )
}

Register.getInitialProps = async ({store}) => {
  await store.dispatch(registerUser()) // The component can read from the store's state when rendered
}

export default connect(state => state)(Register)
