import React, { memo, useState, useCallback } from 'react';
import { Text, View } from 'react-native';

const RNHighlightUnderlineText = memo(({ isFixed = false, underlineSize = 0, bottom = 0, ratio = 1, underlineColor = '#ec2', textStyle = {}, children }) => {
  const [layout, setLayout] = useState({ width: 0, height: 0 });

  const onLayout = useCallback(e => {
    const { width, height } = e.nativeEvent.layout;
    setLayout({ width, height });
  }, [setLayout]);

  const convertTextStyle = useCallback(style => {
    delete style.backgroundColor;
    return style;
  }, []);

  return (
    <View>
      <View style={{
        backgroundColor: underlineColor,
        position: 'absolute',
        bottom: bottom,
        left: 0,
        width: layout.width,
        height: isFixed ? underlineSize : (layout.height * ratio),
      }} />
      <Text onLayout={onLayout} style={convertTextStyle(textStyle)}>{children}</Text>
    </View>
  );
});

export default RNHighlightUnderlineText;
