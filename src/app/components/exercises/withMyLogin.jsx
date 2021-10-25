import React, { useState } from 'react'
import CardWrapper from '../common/Card'

export const withMyLogin = (Component) => (props) => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('user'))

  const onLogin = () => {
    localStorage.setItem('user', true)
    setIsAuth(localStorage.getItem('user'))
  }
  const onLogOut = () => {
    localStorage.removeItem('user')
    setIsAuth(localStorage.getItem('user'))
  }
  
  return (
    <CardWrapper>
      <Component 
        textButton={isAuth ? 'Выйти из системы' : 'Войти'}
        onPressButton={isAuth ? onLogOut : onLogin}
        {...props}
      />
    </CardWrapper>)
}
