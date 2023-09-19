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
import moment from 'moment';

const window = Dimensions.get('window');
const defaultImg = require('../../assets/images/default.jpg');

const PostComponent = ({navigation,articles,isLoading}) => {
  return (
    <Box alignItems="center" width={window.width} mt={2} mb={100} >
      <FlatList
        data={articles}
        renderItem={({ item,index }) => (
          <Box
            key={index}
            mb={2}
            maxW={window.width - 20}
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.800"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: 'gray.50',
            }}>
            <Box>
              <>
              {item.urlToImage
              ?<>
              <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: item.urlToImage?item.urlToImage:defaultImg,
                }}
                alt="image"
                fallbackSource={defaultImg}
              />
              </AspectRatio>
              </>
              :<>
              <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={defaultImg}
                alt="image"
                fallbackSource={defaultImg}
              />
              </AspectRatio>
              </>
              }
              </>
             
              <Center
                bg="violet.500"
                _dark={{
                  bg: 'violet.400',
                }}
                _text={{
                  color: 'warmGray.50',
                  fontWeight: '700',
                  fontSize: 'xs',
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5">
                {item.author?item.author:item.source.name}
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <TouchableOpacity 
                onPress={() => {
                  navigation.navigate('Detail', {
                   articleDetail: item,
                  });
                }}>
                <Heading size="md" ml="-1">
                  {item.title?item.title:''}
                </Heading>
                </TouchableOpacity>
                
                <Text
                  fontSize="xs"
                  _light={{
                    color: 'violet.500',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1">
                  {item.source.name}
                </Text>
              </Stack>
              <Text fontWeight="400">
              {item.description
              ?<>
              {item.description && item.description.length < 200
                ? `${item.description}`
                : `${item.description.substring(0, 200)}...`}
              </>
              :''
              }
              
              </Text>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                    fontWeight="400">
                    {moment(item.publishedAt).fromNow()}
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => {
          return (
            <Box
            maxW={window.width - 20}
            w={window.width - 20}
            rounded="lg"
            overflow="hidden"
            >
              <HStack mt={'20%'} justifyContent="center">
              <Center flex={1} >
                <Text>{isLoading? <Spinner color={'#000'} accessibilityLabel="Loading " />:'No data found'}</Text>
              </Center>
              </HStack>
            
              </Box>
          )
        }}
      />

    </Box>
  );
}

export default PostComponent;
