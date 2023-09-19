import React ,{useEffect, useState} from 'react';
import { Dimensions, SafeAreaView,TouchableOpacity } from 'react-native';
import {
  Box,
  FlatList,
  Heading,
  Stack,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  AspectRatio,
  Image,
  View,
  Spinner,
} from 'native-base';

const window = Dimensions.get('window');


const CategoryComponent = ({categories,getArticles}) => {
  return (
    <Box
    bg={'gray.100'}
    borderWidth={1}
    borderColor={'gray.200'}
    // shadow={1}
    width={window.width}>
    <FlatList
      data={categories}
      horizontal={true}
      renderItem={({ item,index }) => (
        <TouchableOpacity key={index}  onPress={() => getArticles(item)}>
        <Box
          borderBottomWidth="1"
          _dark={{
            borderColor: 'gray.600',
          }}
          borderColor="coolGray.200"
          pl="4"
          pr="5"
          py="4" >
          <HStack space={3} justifyContent="space-between" >
            <VStack>
              <Text
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.700"
                textTransform={'uppercase'}
                bold>
                {item}
              </Text>
            </VStack>
            <Spacer />
          </HStack>
        </Box>
        </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        />
    </Box>
  );
}

export default CategoryComponent;