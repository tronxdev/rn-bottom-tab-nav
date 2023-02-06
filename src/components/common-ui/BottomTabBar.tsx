import React from 'react'
import { Box, Pressable, Text } from 'native-base'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'

const BottomTabBar: React.FC<BottomTabBarProps> =
  ({ state, descriptors, navigation }) => {
    return (
      <Box
        flexDir={"row"}
        bgColor={"white"}
        paddingBottom={12}
        paddingTop={2.5}
        paddingX={5}
        borderTopColor={"muted.400"}
        borderTopWidth={0.5}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]

          const isFocused = state.index === index;

          function renderIcon() {
            if (options.tabBarIcon) {
              if (typeof options.tabBarIcon) {
                return options.tabBarIcon({
                  focused: isFocused,
                  size: 24,
                  color: "#737373"
                })
              }
            }
            return <></>
          }

          function renderLabel() {
            if (options.tabBarLabel) {
              if (typeof options.tabBarLabel === 'string') {
                return <Text>{options.tabBarLabel}</Text>
              }
              return options.tabBarLabel({
                focused: isFocused,
                color: "#737373",
                position: "below-icon",
                children: ""
              })
            }
            return <Text>{options.title || route.name}</Text>
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}} accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              flex={1}
              flexDirection={"column"}
              alignItems={"center"}
              // bgColor={"blue.500"}
              height={"9"}
            >
              {renderIcon()}
              {renderLabel()}
            </Pressable>
          )
        })}
      </Box>
    )
  }

export default BottomTabBar;