import React from 'react'
import {
  Button,
  TextField
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { regexEmail } from '~/utils/regex'
import { connect } from 'react-redux'
// import { useRouter } from 'next/router'
import { loginUser } from "~/store/actions/auth"

const Form = ({dispatch}) => {
  // const router = useRouter()
  const { handleSubmit, errors, control } = useForm() // initialize the hook
  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmit = async (value) => {
    setIsLoading(true)
    try {
      const data = {
        email: value.email,
        password: value.password
      }
      await dispatch(loginUser(data))
      setIsLoading(false)
    } catch (error) {
      console.log(error.response)
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mt-1">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true, pattern: regexEmail }}
          render={({ onChange, value }) => <TextField type="text" placeholder="Alamat Email" onChange={onChange} value={value} />}
        />
      </div>
      <span className="error-form">{errors.email ? errors.email.type=="required" ? "Alamat email harus diisi." : "Masukkan alamat email yang benar." : null}</span>
      <div className="mt-1">
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ onChange, value }) => <TextField type="password" autoComplete="current-password" placeholder="Password" onChange={onChange} value={value} />}
        />
      </div>
      <span className="error-form">{errors.password && "Password harus diisi."}</span>

      <div className="mt-2">
        <Button type="submit" variant="contained" color="primary" disabled={isLoading}>Login</Button>
      </div>
    </form>
  )
}

export default connect(state => state)(Form)
