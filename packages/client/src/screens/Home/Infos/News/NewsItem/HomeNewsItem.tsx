import Text from '@Src/components/Text';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { News } from '@squiz/shared';
import React from 'react';
import { View } from 'react-native';

import styles from './HomeNewsItemStyle';

type HomeNewsItemProps = {
  item: News;
};

export default function HomeNewsItem({ item }: HomeNewsItemProps) {
  const { colors } = useTheme();

  return (
    <>
      <View style={styles.dateContainer}>
        <FontAwesome5 style={styles.dateIcon} name="calendar-alt" size={15} color={colors.text} />
        <Text style={styles.dateText}>
          {new Date((item.createdAt as unknown) as string).toLocaleDateString('FR')}
        </Text>
      </View>
      <Text style={styles.content}>{item.content}</Text>
    </>
  );
}
