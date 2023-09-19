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
import { WebView } from 'react-native-webview';
// import PostDetailComponent from '../../components/PostDetail';

const PostDetailScreen = ({ route, navigation }) => {
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { articleDetail } = route.params;

  useEffect(() => {
    // Update the document title using the browser API
    console.log(articleDetail.url)
  },[]);


  return (
      <WebView
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onLoad={() => setLoading(false)}
        originWhitelist={['*']}
        source={{ uri: articleDetail.url }}
        startInLoadingState={true}
        renderLoading={() => <HStack position={'absolute'} top={'40%'} left={'40%'} flex={1} justifyContent="center" alignItems="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>}
        style={{flex:1}}
      />
  );
}

export default PostDetailScreen;
