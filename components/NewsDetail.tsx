import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { TitleText, BodyText, SmallText } from './StyledText';
import { Colors } from '../styles/globalStyles';

interface NewsDetailProps {
  title: string;
  description: string;
  time: string;
  image: any;
  tag: string;
  onBack?: () => void;
  // Optional style overrides
  containerStyle?: any;
  imageStyle?: any;
}

const screenWidth = Dimensions.get('window').width;

const NewsDetail: React.FC<NewsDetailProps> = ({ title, description, time, image, tag, onBack, containerStyle, imageStyle }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={[styles.detailContainer, { width: screenWidth, paddingTop: 32 }, containerStyle]}>
        <View style={styles.headerRow}>
          {onBack && (
            <TouchableOpacity onPress={onBack} style={styles.backBtn}>
              <SmallText style={styles.backIcon}>{'<'} </SmallText>
            </TouchableOpacity>
          )}
          <TitleText style={styles.headerTitle}>AI News</TitleText>
          <View style={{ width: 40 }} />
        </View>
        <Image source={image} style={[styles.image, imageStyle]} />
        <View style={styles.topRow}>
          <SmallText style={styles.tag}>{tag}</SmallText>
          <SmallText style={styles.shareTag}>📎</SmallText>
          <SmallText style={styles.time}>Source • {time}</SmallText>
        </View>
        <TitleText style={styles.title}>{title}</TitleText>
        <BodyText style={styles.description}>{description}</BodyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    alignSelf: 'center',
    margin: 0,
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.background,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backBtn: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: Colors.cardBackground,
  },
  backIcon: {
    fontSize: 22,
    color: Colors.primary,
  },
  headerTitle: {
    fontSize: 22,
    color: Colors.primary,
    textAlign: 'center',
    flex: 1,
  },
  image: {
    width: '95%',
    height: 140,
    borderRadius: 12,
    backgroundColor: Colors.imageBackground,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 16,
    marginTop: 8,
    alignSelf: 'center', 
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  title: {
    fontSize: 20,
    color: Colors.primary,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  time: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  tag: {
    backgroundColor: Colors.tagBackground,
    fontSize: 13,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: Colors.primary,
    marginLeft: 8,
  },
  shareTag: {
    backgroundColor: Colors.tagBackground,
    fontSize: 13,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: Colors.primary,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default NewsDetail;
