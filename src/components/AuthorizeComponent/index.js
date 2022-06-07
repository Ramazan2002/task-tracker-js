import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import useAuthUser from '../../globals/AuthUser'
import DefaultLayout from '../../components/layouts/DefaultLayout'

export default function AuthorizeComponent(
  Component,
  onUserLoggedIn,
  redirectTo
) {
  return function Authorize() {
    const {user, isLoading} = useAuthUser()
    const navigate = useNavigate()
    useEffect(() => {
      if (isLoading === false && (onUserLoggedIn ? user : !user)) {
        navigate(redirectTo, {replace: true})
      }
    }, [user, isLoading, navigate])

    return (
      <DefaultLayout>
        <Component />
      </DefaultLayout>
    )
  }
}
