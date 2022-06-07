import React from 'react'
import {PageWrapper, PageContent} from './components'
import Header from '../../Header'
import RightSideNavBar from '../../RightSideNavBar'
import Button from '../../Buttons'
import NavigationBar from '../../NavigationBar'
import useSignOut from '../../../hooks/mutations/auth/useSignOut'
import {useNavigate} from 'react-router-dom'
import useAuthUser from '../../../globals/AuthUser'

export default function DefaultLayout({children}) {
  const {user} = useAuthUser()
  const {signOut} = useSignOut()
  const navigate = useNavigate()

  function handleSignOut() {
    signOut(false)
    navigate('/login')
  }

  return (
    <PageWrapper>
      {user && (
        <NavigationBar>
          <Header
            display={'inline-block'}
            color={'#8b475d'}
            fontSize={'2em'}
            float={'left'}
          >
            Task-Tracker
          </Header>
          <Header
            display={'inline-block'}
            color={'#8b475d'}
            fontSize={'1.1em'}
            float={'left'}
          >
            Home page
          </Header>
          <RightSideNavBar>
            <Button margin={'7.5% auto'} onClick={handleSignOut}>
              Logout
            </Button>
          </RightSideNavBar>
        </NavigationBar>
      )}
      {<PageContent>{children}</PageContent>}
    </PageWrapper>
  )
}
