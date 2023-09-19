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

const PostDetailComponent = ({article,isLoading}) => {
  console.log('article',article)
  return (
    <Box alignItems="center" width={window.width} mt={2} mb={100} >
          <Box
            mb={2}
            maxW={window.width - 20}
            h={window.height - 120}
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
              {article.urlToImage
              ?<>
              <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: article.urlToImage?article.urlToImage:defaultImg,
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
                {article.author?article.author:article.source.name}
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {article.title?article.title:''}
                </Heading>
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
                  {article.source.name}
                </Text>
              </Stack>
              <Text fontWeight="400">
              {article.description}
              </Text>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                    fontWeight="400">
                    {moment(article.publishedAt).fromNow()}
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>

    </Box>
  );
}

export default PostDetailComponent;
