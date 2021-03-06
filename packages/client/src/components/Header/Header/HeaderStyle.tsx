import { useScreenWidth } from '@Src/utils/hooks/screenWidth';
import responsive from '@Src/utils/responsive';
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export default function useHeaderStyle() {
  const { colors } = useTheme();
  const screenWidth = useScreenWidth();

  const styles = StyleSheet.create({
    container: {
      minHeight: 1, // Header component need a height to be display
      paddingTop: 2,
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: colors.border,
      backgroundColor: colors.primary,
    },
    grow: {
      flexGrow: 1,
    },
    infoContainer: {
      flexDirection: responsive(screenWidth, 'column', 'row', 'row'),
      display: responsive(screenWidth, 'none', 'flex', 'flex'),
      alignItems: 'center',
      width: responsive(screenWidth, '98%', '98%', '75%'),
      maxWidth: 1300,
    },
  });
  return styles;
}
