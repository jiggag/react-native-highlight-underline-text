## Installation
```
npm install react-native-highlight-underline-text
yarn add react-native-highlight-underline-text
```

## Usage
```jsx
import HighlightText from 'react-native-highlight-underline-text';

<HighlightText>
  Hightlight Underline Text
</HighlightText>

<HighlightText
  isFixed={false}
  size={0}
  bottom={4}
  ratio={0.3}
  color='#ec2'
>
  Custom Highlight Underline Text
</HighlightText>
```

## Props
| Property | Type    | Description |
|:---------|:-------:|:------------|
| isFixed  | Boolean | 텍스트 크기에 영향받지 않는 밑줄 사이즈 고정 여부 |
| size     | Number  | isFixed=true 일때 밑줄 사이즈 |
| bottom   | Number  | 밑줄이 시작되는 텍스트 영역 |
| ratio    | Number  | isFixed=false 일때 텍스트 크기에 대한 밑줄이 차지하는 비율 |
| color    | String  | 밑줄 색상 |