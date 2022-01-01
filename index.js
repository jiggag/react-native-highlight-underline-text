import React, { memo, useState, useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';

const RNHighlightUnderlineText = memo(({ isFixed = false, underlineSize = 0, bottom = 0, ratio = 1, underlineColor = '#ec2', textStyle, text }) => {
  const [layoutHeight, setLayoutHeight] = useState(0);

  const onLayout = useCallback(e => {
    const { height } = e.nativeEvent.layout;
    setLayoutHeight(height);
  }, []);

  const lineStyle = useMemo(() => {
    return {
      backgroundColor: underlineColor,
      position: 'absolute',
      bottom: bottom,
      left: 0,
      right: 0,
      height: isFixed ? underlineSize : (layoutHeight * ratio),
    };
  }, [underlineColor, bottom, isFixed, underlineSize, ratio, layoutHeight]);

  return (
    <View style={styles.wrapper}>
      {[...text].map((v, i) => {
        return (
          <View key={i}>
            <View style={lineStyle} />
            <Text numberOfLines={1} onLayout={onLayout} style={textStyle}>{v}</Text>
          </View>
        )
      })}
    </View>
  );
});

export default RNHighlightUnderlineText;

const styles = {
  wrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
}
