import { StyleProp, TextStyle } from 'react-native';

interface RNHighlightUnderlineText {
  isFixed?: boolean,
  underlineSize?: number,
  bottom?: number,
  ratio?: number,
  underlineColor?: string,
  textStyle?: StyleProp<TextStyle>;
  text: String,
}

export default RNHighlightUnderlineText;
