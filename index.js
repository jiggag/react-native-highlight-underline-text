import React, { useState } from 'react';
import { Text, View } from 'react-native';

const RNHighlightUnderlineText = ({ isFixed = false, size = 0, bottom = 0, ratio = 1, color = '#ec2', children }) => {
  const [layout, setLayout] = useState({ width: 0, height: 0 });

  const onLayout = e => {
    const { width, height } = e.nativeEvent.layout;
    setLayout({ width, height });
  };

  return (
    <View>
      <View style={{
        backgroundColor: color,
        position: 'absolute',
        bottom: bottom,
        left: 0,
        width: layout.width,
        height: isFixed ? size : (layout.height * ratio),
      }} />
      <Text onLayout={onLayout}>{children}</Text>
    </View>
  );
};

export default RNHighlightUnderlineText;
