import React from 'react'
import { Container, Heading } from 'native-base'
import { SafeAreaView } from '../../components/common-ui'

export const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <Heading>Profile</Heading>
      </Container>
    </SafeAreaView>
  )
}