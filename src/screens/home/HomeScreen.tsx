import React from 'react'
import {
  Box,
  FlatList,
  Flex,
  Heading,
  Input,
  Pressable,
  Text,
  VStack
} from 'native-base'
import { SafeAreaView } from '../../components/common-ui'
import { MagnifyingGlass, Plus } from '../../components/svgs'
import { PostGroup } from '../../types'

const MOCK_DATA: PostGroup[] = [
  {
    id: "1",
    title: "All Saved Posts",
    posts: new Array(12).fill({}).map((p, index) => ({ id: `${index}`, title: "", content: "" })),
    background: "#E1E3F2"

  },
  {
    id: "2",
    title: "Watchlist",
    posts: new Array(7).fill({}).map((p, index) => ({ id: `${index}`, title: "", content: "" })),
    background: "#43607F"
  },
  {
    id: "3",
    title: "Playlist",
    posts: new Array(100).fill({}).map((p, index) => ({ id: `${index}`, title: "", content: "" })),
    background: "#9A7F97"
  },
  {
    id: "4",
    title: "Bookshelf",
    posts: new Array(11).fill({}).map((p, index) => ({ id: `${index}`, title: "", content: "" })),
    background: "#FFC080"
  },
  {
    id: "5",
    title: "Destinations",
    posts: new Array(1).fill({}).map((p, index) => ({ id: `${index}`, title: "", content: "" })),
    background: "#FFF3E7"
  }
]

const Header: React.FC = () => {
  return (
    <Flex
      width={"full"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Heading size={"lg"} color={"black"} fontWeight={700}>Lists</Heading>
      <Pressable>
        <Flex
          direction={"row"}
          backgroundColor={"black"}
          rounded={8}
          paddingX={4}
          paddingY={1.5}
        >
          <Plus color={"white"} width={20} height={20} />
          <Text color={"white"} marginLeft={1} fontWeight={700}>New</Text>
        </Flex>
      </Pressable>
    </Flex >
  )
}

const SearchInput: React.FC = () => {
  return (
    <Box
      width={"full"}
      rounded={8}
      backgroundColor={"#F7F7F7"}
      marginTop={5}
      paddingX={4}
      paddingY={2}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <MagnifyingGlass width={20} height={20} color={'#717171'} />
      <Input
        placeholder="Search lists and saved posts"
        flex={1}
        borderWidth={0}
        backgroundColor={"transparent"}
        color={"black"}
        paddingX={1}
      />
    </Box>
  )
}

const List: React.FC = () => {
  return (
    <FlatList
      data={MOCK_DATA}
      renderItem={({ item }) => {
        return (
          <Pressable key={item.id}>
            <Flex
              direction={"row"}
              alignItems={"center"}
            >
              <Box
                rounded={15}
                backgroundColor={item.background}
                width={16}
                height={"88px"}
                marginTop={2}
                marginBottom={2}
              />
              <Flex direction={"column"} flex={1} marginLeft={4}>
                <Text
                  color={"black"}
                  fontSize={14}
                  fontWeight={700}
                >
                  {item.title}
                </Text>
                <Text
                  color={"black"}
                  fontSize={14}
                  fontWeight={200}
                >
                  {`${item.posts.length} post${item.posts.length < 2 ? '' : 's'}`}
                </Text>
              </Flex>
            </Flex>
          </Pressable>
        )
      }}
      marginTop={4}
    />
  )
}

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <VStack width={"full"} height={"full"} paddingX={6} paddingY={1.5}>
        <Header />
        <SearchInput />
        <List />
      </VStack>
    </SafeAreaView >
  )
}