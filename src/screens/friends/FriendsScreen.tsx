import React from 'react'
import { Container, Heading } from 'native-base'
import { SafeAreaView } from '../../components/common-ui'

export const FriendsScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <Heading>Friends</Heading>
      </Container>
    </SafeAreaView>
  )
}