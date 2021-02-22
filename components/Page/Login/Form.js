import React from 'react'
import {
  Button,
  TextField
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { regexEmail } from '~/utils/regex'
import { loginUser } from "~/store/actions/auth"

const Form = () => {
  const { handleSubmit, errors, control } = useForm() // initialize the hook
  const [isLoading, setIsLoading] = React.useState(false)
  const [openAlert, setOpenAlert] = React.useState({
    status: false,
    message: null
  })

  const onSubmit = async (value) => {
    setIsLoading(true)
    try {
      const data = {
        email: value.email,
        password: value.password
      }
      await loginUser(data)
      location.reload()
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      error.data && setOpenAlert({status:true, message:error.data.message})
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      {openAlert.status && <span className="error-form">{openAlert.message}</span>}
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

export default Form
