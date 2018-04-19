/**
 * Created by SF on 2018/4/13.
 */

import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import Proptypes from 'prop-types';

export default class SFCheckbox extends Component {

    /**
     * @param style 不想多说.
     * @param selectedImg 自定义选中图片
     * @param unSelectImg 自定义未选中图片
     * @param iconSize 自定义图片的大小
     * @param fontSize 自定义字体大小
     * @param fontColor 自定义文字颜色 (数组)
     * @param spacing 间距
     * @param edgeInset 边距
     * @param title 文字
     * @param onClick 点击方法
     * */

    static propTypes = {
        style: Proptypes.any,
        selectedImg: Proptypes.number,
        unSelectImg: Proptypes.number,
        onClick: Proptypes.func,
        iconSize: Proptypes.any,
        fontSize: Proptypes.number,
        fontColor: Proptypes.string,
        spacing: Proptypes.number,
        edgeInset: Proptypes.number,
        title: Proptypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
        }
    }

    componentDidMount() {
        this.setState({
            isSelected: this.props.defaultStatus
        })
    }

    setStatus = (state) => {
        this.setState({
            isSelected: state
        })
    }

    render() {
        const {style} = this.props;
        if (this.props.mode == 0) {
            return (
                <View
                    style={[style, {
                        alignItems: 'center',
                        flexDirection: 'row'
                    }]}>
                    {this.setImage()}
                    {this.setText()}
                </View>
            )
        }
        return null;
    }

    setImage = () => {
        const {setLeftImg} = this.props;
        var selectImage = this.props.selectedImg ? this.props.selectedImg : require('./select.png');
        var unSelectImage = this.props.unSelectImg ? this.props.unSelectImg : require('./no_select.png');
        if (setLeftImg) {
            return setLeftImg;
        }
        else {
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={this.props.onClick}>
                    <Image
                        style={{
                            marginLeft: this.props.edgeInset ? this.props.edgeInset  : 0,
                            width: this.props.iconSize ? this.props.iconSize[0] : 20,
                            height: this.props.iconSize ? this.props.iconSize[1] : 20,
                        }}
                        resizeMode={'cover'}
                        source={this.state.isSelected ? selectImage : unSelectImage}/>
                </TouchableOpacity>
            )

        }
    }

    setText = () => {
        const {title, fontSize, fontColor, spacing} = this.props;
        if (title) {
            return (
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: fontSize ? fontSize : 16,
                        color: fontColor ? fontColor : 'rgba(69, 69, 69, 1)',
                        marginLeft: spacing ? spacing : 5,
                    }}>{title}</Text>
            )
        }
        return null;
    }
}