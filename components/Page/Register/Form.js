import React from 'react'
import {
  Button,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { regexEmail } from '~/utils/regex'
import { useRouter } from 'next/router'
import { registerUser } from "~/store/actions/auth"

const Form = () => {
  const router = useRouter()
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
        name: value.name,
        address: value.address,
        gender: value.gender,
        email: value.email,
        password: value.password
      }
      await registerUser(data)
      setIsLoading(false)
      router.push("/auth/login")
    } catch (error) {
      setOpenAlert({status:true, message:error.data.message})
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      {openAlert.status && <span className="error-form">{openAlert.message}</span>}
      <div className="mt-1">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ onChange, value }) => <TextField type="text" placeholder="Nama" onChange={onChange} value={value} />}
        />
      </div>
      <span className="error-form">{errors.name && "Nama harus diisi."}</span>
      <div className="mt-1">
        <Controller
          name="address"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ onChange, value }) => <TextField type="text" placeholder="Alamat" onChange={onChange} value={value} />}
        />
      </div>
      <span className="error-form">{errors.address && "Alamat harus diisi."}</span>
      <div>
        <Controller 
          as={
            <RadioGroup row aria-label="position">
              <FormControlLabel 
                value="male" 
                control={<Radio color="primary" />} 
                label="Laki-laki" 
              />
              <FormControlLabel 
                value="female" 
                control={<Radio color="primary" />} 
                label="Perempuan" 
              />
            </RadioGroup>
          }
          name="gender"
          control={control}
          defaultValue="male"
          rules={{ required: true }}
        />
      </div>
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
        <Button type="submit" variant="contained" color="primary" disabled={isLoading}>Register</Button>
      </div>
    </form>
  )
}

export default Form
