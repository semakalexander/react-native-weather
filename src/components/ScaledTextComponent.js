import React, {PropTypes} from 'react';
import {
    Dimensions,
    Text,
    StyleSheet
} from 'react-native';

const {width, height} = Dimensions.get('window');
const flattenStyle = StyleSheet.flatten;
const realWidth = height > width ? width : height;

export const getScaledFontSize = (fontSize) => {
    return Math.round(fontSize * realWidth / 375)
};

const ScalableText = ({style, children, ...props}) => {
    const fontSize = flattenStyle(style).fontSize || 14;
    const scaledFontSize = getScaledFontSize(fontSize);

    return (
        <Text
            style={
                [
                    style,
                    {fontSize: scaledFontSize}
                ]
            }
            {...props}
        >
            {children}
        </Text>
    );
};

ScalableText.propTypes = {
    style   : Text.propTypes.style,
    children: PropTypes.node.isRequired
};

ScalableText.defaultProps = {
    style: {}
};

export default ScalableText;