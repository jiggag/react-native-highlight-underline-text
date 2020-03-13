import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface RNHighlightUnderlineText {
  isFixed?: boolean,
  underlineSize?: number,
  bottom?: number,
  ratio?: number,
  underlineColor?: string,
  textStyle?: StyleProp<ViewStyle>;
  children: ReactNode,
}

export default RNHighlightUnderlineText;