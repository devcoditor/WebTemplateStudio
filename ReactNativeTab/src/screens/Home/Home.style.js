import { StyleSheet } from 'react-native';

import appStyles from '../../app.styles';

export const getStyles = (theme) =>
  StyleSheet.create({
    ...appStyles,
    contentCenter: {
      ...appStyles.contentCenter,
      backgroundColor: theme.colors.background,
    },
    text: {
      ...appStyles.text,
      color: theme.colors.text,
    },
  });
