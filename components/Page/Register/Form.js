import { Button, TextField } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { regexEmail } from '~/utils/regex'

const Form = () => {
  const { handleSubmit, errors, control } = useForm() // initialize the hook

  const onSubmit = async (value) => {
    console.log('masuk', value)
    // try {
    //   await apiPostNonAuth(API_LEADS.CREATE, {
    //     product_id: value.listProduct,
    //     name: value.fullname,
    //     dob: dateString(dob),
    //     email: value.email,
    //     phone: value.phone,
    //     i_am_using: value.listCard,
    //     description: value.message
    //   })
    //   Swal.fire({icon: 'success', title: 'Success', text: "Kami akan menghubungi kamu."})
    // } catch (err) {
    //   console.log(err.response)
    // }
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
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </div>
    </form>
  )
}

export default Form
