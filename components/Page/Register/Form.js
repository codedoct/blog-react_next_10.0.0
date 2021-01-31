import { Button, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { regexEmail } from '~/utils/regex'

const Form = () => {
  const { register, handleSubmit, errors } = useForm() // initialize the hook

  const onSubmit = async (value) => {
    console.log('masuk', value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mt-1">
        <TextField name="email" type="text" required defaultValue="" placeholder="Alamat Email" ref={register({ required: true, pattern: regexEmail })} />
        <span className="error-form">{errors.email ? errors.email.type=="required" ? "Alamat email harus diisi." : "Masukkan alamat email yang benar." : null}</span>
      </div>
      <div className="mt-1">
        <TextField name="password" type="password" autoComplete="current-password" required defaultValue="" placeholder="Password" ref={register({ required: true })} />
        <span className="error-form">{errors.password ? errors.email.type=="required" ? "Alamat email harus diisi." : "Masukkan alamat email yang benar." : null}</span>
      </div>

      <div className="mt-2">
        <Button variant="contained" color="primary">Register</Button>
      </div>
    </form>
  )
}

export default Form
