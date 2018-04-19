/**
 * Created by SF on 2018/4/19.
 */

import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import SFCheckbox from './SFCheckbox';

export default class SFListCheckBox extends Component {

    /**
     * @param isSingle 是否为单选模式(单选或多选, 默认是多选)
     * @param type 模式(横/竖) 'row' 'column'
     * @param style 不想多说.
     * @param count 选项个数
     * @param nickArray 选项名字 (数组)
     * @param selectedIndex 默认选中的坐标 (单选可以是number,也可以是数组, 多选必须为数组)
     * @param selectedImg 自定义选中图片
     * @param unSelectImg 自定义未选中图片
     * @param iconSize 自定义图片的大小
     * @param fontSize 自定义字体大小
     * @param fontColor 自定义文字颜色 (数组)
     * @param spacing 间距
     * @param edgeInset 边距
     * */

    static propTypes = {
        isSingle: PropTypes.bool,
        type:PropTypes.string,
        style:PropTypes.any,
        count: PropTypes.number,
        nickArray: PropTypes.array,
        selectedIndex: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number
        ]),
        selectedImg:PropTypes.number,
        unSelectImg:PropTypes.number,
        iconSize:PropTypes.any,
        fontSize:PropTypes.number,
        fontColor: PropTypes.array,
        spacing: PropTypes.number,
        edgeInset: PropTypes.number,
    }

    componentWillMount() {
        var temp = [];
        for (var i = 0; i < this.props.count; i++) {
            temp.push(false);
        }
        if (Array.isArray(this.props.selectedIndex)) {
            for (var i = 0; i < this.props.selectedIndex.length; i++) {
                var index = this.props.selectedIndex[i];
                temp[index] = true;
            }
        }
        else {
            temp[this.props.selectedIndex] = true;
        }
        this.setState({
            statusArr: temp,
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            statusArr: [],
        }
    }

    render() {
        return (
            <View
                style={[this.props.style, {flexDirection: this.props.type}]}
                overflow={true}>
                {this.content()}
            </View>
        )
    }

    content = () => {
        var countArray = [];
        for (var i = 0; i < this.props.count; i++) {
            countArray.push(
                <SFCheckbox
                    ref={'box' + i}
                    key={i}
                    title={this.props.nickArray[i]}
                    defaultStatus={this.state.statusArr[i]}
                    mode={0}
                    onClick={this.clickBox.bind(this, i)}
                    style={{
                        marginTop: i == 0 && this.props.type == 'column' ? this.props.edgeInset : this.props.spacing,
                        marginLeft: i == 0 && this.props.type == 'row' ? this.props.edgeInset : this.props.spacing
                    }}
                    selectedImg={this.props.selectedImg}
                    unSelectImg={this.props.unSelectImg}
                    iconSize={this.props.iconSize}
                    fontSize={this.props.fontSize}
                    fontColor={this.props.fontColor ? this.props.fontColor[i] : 'rgba(69, 69, 69, 1)'}
                    selectState={(state) => {
                        console.log(state);
                    }}/>
            )
        }
        return countArray;
    }

    clickBox = (tag) => {
        if (this.props.isSingle) {
            var temp = this.state.statusArr;
            for (var i = 0; i < temp.length; i++) {
                if (i == tag) {
                    temp[i] = true;
                }
                else {
                    temp[i] = false;
                }
                this.refs['box' + i].setStatus(temp[i])
            }
        }
        else {
            var temp = this.state.statusArr;
            temp[tag] = !temp[tag];
            this.refs['box' + tag].setStatus(temp[tag])

        }
    }
}