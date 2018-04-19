# react-native-sf-checkbox

# checkbox 选择器

# 安装
> npm install react-native-sf-checkbox

# 例子
```

import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import {
    SFCheckbox,
    SFListCheckBox
}from 'react-native-sf-checkbox';

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            statu: false,
            color: ['red', 'blue'],
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <SFListCheckBox
                    style={{
                        marginLeft: 10,
                        marginTop: 10
                    }}
                    type={'column'}
                    count={2}
                    nickArray={['这是第一个', '第二个选项']}
                    isSingle={true}
                    spacing={20}
                    edgeInset={10}
                    selectedIndex={1}
                    iconSize={[15, 15]}
                    fontSize={15}
                    fontColor={this.state.color}
                />
                <SFCheckbox
                    style={{
                        marginTop: 10,
                        marginLeft: 10
                    }}
                    ref={'box'}
                    title={'男'}
                    defaultStatus={false}
                    mode={0}
                    iconSize={[15, 15]}
                    fontSize={14}
                    onClick={() => {
                        this.refs['box'].setStatus(true);
                    }}
                />
            </View>
        );
    }
}



```

# Props
|  parameter  |  type  |  required  |   description  |  default  |
|:-----|:-----|:-----|:-----|:-----|
|isShowAni|boolean|no|是否显示展示动画|true|
|isShowShare|boolean|no|是否显示分享按钮|true|
|onShare|function<br>()=>(index)=>{}|no|点击分享事件|()=>null|
