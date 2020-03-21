import { StyleProp, ViewStyle } from 'react-native';

interface RNHighlightUnderlineText {
  isFixed?: boolean,
  underlineSize?: number,
  bottom?: number,
  ratio?: number,
  underlineColor?: string,
  textStyle?: StyleProp<ViewStyle>;
  text: String,
}

export default RNHighlightUnderlineText;