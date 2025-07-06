import React from 'react';
import { View, SafeAreaView } from 'react-native';
import NewsDetail from '../components/NewsDetail';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Colors } from '../styles/globalStyles';

// Define navigation types
export type RootStackParamList = {
  Home: undefined;
  NewsDetail: {
    title: string;
    description: string;
    time: string;
    image: any;
    tag: string;
  };
};

type NewsDetailScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;
type NewsDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewsDetail'>;

type Props = {
  route: NewsDetailScreenRouteProp;
  navigation: NewsDetailScreenNavigationProp;
};

const NewsDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { title, description, time, image, tag } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        <NewsDetail
          title={title}
          description={description}
          time={time}
          image={image}
          tag={tag}
          onBack={() => navigation.goBack()}
          containerStyle={{ marginHorizontal: 0, paddingTop: 0 }}
          imageStyle={{ borderRadius: 12 }}
        />
      </SafeAreaView>
    </View>
  );
};

export default NewsDetailScreen;
