import { FormComponent } from '../components'
import { AuthLayout } from '../layout'

export const Login = () => {
  return (
    <AuthLayout
      title='Login'
      children={<FormComponent isRegister={false} />}
      isRegister={false}
    />
  )
}
