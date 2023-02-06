import React from 'react'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

interface SafeAreaViewProps {
  children: React.ReactNode
}

const SafeAreaView: React.FC<SafeAreaViewProps> = ({ children }) => {
  return (
    <RNSafeAreaView
      mode="padding"
      style={{ flex: 1, backgroundColor: "white" }}
      edges={['top']}
    >
      {children}
    </RNSafeAreaView>
  )
}

export default SafeAreaView;