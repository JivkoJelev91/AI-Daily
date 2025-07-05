import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TitleText, BodyText, SmallText } from './StyledText';
import { Colors } from '../styles/globalStyles';

interface NewsProps {
  title: string;
  description: string;
  time: string;
  image: any;
  tag: string;
}

const News: React.FC<NewsProps> = ({ title, description, time, image, tag }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />    
    <View style={styles.rightContent}>
      <TitleText style={styles.title} numberOfLines={2} ellipsizeMode="tail">{title}</TitleText>
      <BodyText style={styles.description} numberOfLines={2} ellipsizeMode="tail">{description}</BodyText>
      <View style={styles.bottomRow}>
        <SmallText style={styles.time}>Source • {time}</SmallText>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SmallText style={styles.tag}>{tag}</SmallText>
          <SmallText style={styles.shareTag}>📎</SmallText>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({  card: {
    backgroundColor: Colors.cardBackground,
    marginVertical: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: Colors.imageBackground,
    flexShrink: 0,
    marginRight: 12,
  },
  rightContent: {
    flex: 1,
    minWidth: 0,
    flexBasis: 0,  },  title: {
    fontSize: 16,
    flexShrink: 1,
    flexWrap: 'wrap',
  },  
  tag: {
    backgroundColor: Colors.tagBackground,
    fontSize: 12,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
    marginRight: 4,
  },
  description: {
    fontSize: 13,
    marginBottom: 4,
    flexWrap: 'wrap',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,  },  time: {
    fontSize: 11,
  },
  shareTag: {
    backgroundColor: Colors.tagBackground,
    fontSize: 12,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 0,
    marginRight: 0,
    color: Colors.primary,
  },
});

export default News;
