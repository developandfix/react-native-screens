import * as React from 'react';
import {
  ScreenStackHeaderConfig,
  ScreenStackHeaderRightView,
} from 'react-native-screens';
import { Route, useTheme } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '../types';

type Props = NativeStackNavigationOptions & {
  route: Route<string>;
};

export default function HeaderConfig(props: Props) {
  const { colors } = useTheme();
  const {
    route,
    title,
    headerRight,
    headerTitle,
    headerBackTitle,
    headerBackTitleVisible = true,
    headerHideBackButton,
    headerHideShadow,
    headerLargeTitleHideShadow,
    headerTintColor,
    headerLargeTitle,
    headerTranslucent,
    headerStyle = {},
    headerLargeStyle = {},
    headerTitleStyle = {},
    headerLargeTitleStyle = {},
    headerBackTitleStyle = {},
    headerShown,
  } = props;

  return (
    <ScreenStackHeaderConfig
      hidden={headerShown === false}
      translucent={headerTranslucent === true}
      hideShadow={headerHideShadow}
      largeTitleHideShadow={headerLargeTitleHideShadow}
      hideBackButton={headerHideBackButton}
      title={
        headerTitle !== undefined
          ? headerTitle
          : title !== undefined
            ? title
            : route.name
      }
      titleFontFamily={headerTitleStyle.fontFamily}
      titleFontSize={headerTitleStyle.fontSize}
      titleColor={
        headerTitleStyle.color !== undefined
          ? headerTitleStyle.color
          : headerTintColor !== undefined
            ? headerTintColor
            : colors.text
      }
      backTitle={headerBackTitleVisible ? headerBackTitle : ' '}
      backTitleFontFamily={headerBackTitleStyle.fontFamily}
      backTitleFontSize={headerBackTitleStyle.fontSize}
      color={headerTintColor !== undefined ? headerTintColor : colors.primary}
      largeTitle={headerLargeTitle}
      largeTitleFontFamily={headerLargeTitleStyle.fontFamily}
      largeTitleFontSize={headerLargeTitleStyle.fontSize}
      largeTitleColor={headerLargeTitleStyle.color}
      backgroundColor={
        headerStyle.backgroundColor !== undefined
          ? headerStyle.backgroundColor
          : colors.card
      }
      largeTitleBackgroundColor={headerLargeStyle.backgroundColor}>
      {headerRight !== undefined ? (
        <ScreenStackHeaderRightView>{headerRight()}</ScreenStackHeaderRightView>
      ) : null}
    </ScreenStackHeaderConfig>
  );
}