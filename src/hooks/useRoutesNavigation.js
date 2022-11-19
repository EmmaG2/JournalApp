import { useNavigate } from 'react-router-dom'

export const useRouteNavigation = () => {
  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/auth', {
      preventScrollReset: false,
      replace: true,
    })
  }

  const onLogin = () => {
    navigate('/journal', {
      replace: true,
      preventScrollReset: false,
    })
  }

  const onNavigateTo = (route) => {
    navigate('/journal/' + route, {
      preventScrollReset: false,
    })
  }

  const onNavigateBack = () => {
    navigate(-1)
  }

  return {
    onLogout,
    onLogin,
    onNavigateTo,
    onNavigateBack,
  }
}
