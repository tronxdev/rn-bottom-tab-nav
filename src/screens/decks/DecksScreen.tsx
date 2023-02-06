import React from 'react'
import { Container, Heading } from 'native-base'
import { SafeAreaView } from '../../components/common-ui'

export const DecksScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <Heading>Decks</Heading>
      </Container>
    </SafeAreaView>
  )
}