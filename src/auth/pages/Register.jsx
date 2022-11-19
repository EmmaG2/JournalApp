import { FormComponent } from '../components'
import { AuthLayout } from '../layout'

export const Register = () => {
  return (
    <AuthLayout
      title='Create account'
      children={<FormComponent isRegister={true} />}
      isRegister={true}
    />
  )
}
