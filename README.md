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
            state: false,
         
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                    <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'red'
                    }}
                    onPress={() => {
                        alert( this.refs['box'].getChecked());
                        this.refs['box'].setChecked(this.state.states);

                        this.setState({
                            states: !this.state.states
                        })
                    }}/>


                <SFListCheckBox
                    style={{
                        marginLeft: 10,
                        marginTop: 10
                    }}
                    direction={'column'}
                    texts={['这是第一个', '第二个选项']}
                    isSingle={true}
                    spacing={20}
                    selectedIndex={1}
                    iconSize={[15, 15]}
                    titleSize={15}
                    titleColor={'blue'}
                    onChange={(data) =>{

                    }}
                />

                <SFCheckbox
                    style={{
                        marginTop: 10,
                        marginLeft: 10
                    }}
                    ref={'box'}
                    title={'男'}
                    defaultStatus={false}
                    iconSize={[15, 15]}
                    titleSize={14}
                />
            </View>
        );
    }
}



```

# Props  

* 单选模式  

|  parameter  |  type  |  required  |  description  |  default  |
|:-----|:-----|:-----|:-----|:-----|
|style|style|no|样式|null|
|selectedImg|number|no|自定义选中图片|null|   
|unSelectImg|number|no|自定义未选中图片|null|  
|onChange|array or number|no|返回选中下标|null|     
|iconSize|array|no|size数组|null|    
|titleSize|number|no|字体大小|null|    
|titleColor|String|no|字体颜色|null|    
|spacing|number|no|间距|null|     
|title|string|no|标题|null|

* 多选模式    

|  parameter  |  type  |  required  |  description  |  default  |
|:-----|:-----|:-----|:-----|:-----|
|direction|string('column','row')|no|横竖显示|null|
|texts|array|no|名称数组|null|
|isSingle|bool|no|是否为单选模式|null|
|defaultColor|string|no|默认字体颜色|null|
|selectColor|string|no|选中字体颜色|null|
|style|style|no|样式|null|
|selectedImg|number|no|自定义选中图片|null|   
|unSelectImg|number|no|自定义未选中图片|null|  
|onChange|array or number|no|返回选中下标|null|     
|iconSize|array|no|size数组|null|    
|titleSize|number|no|字体大小|null|    
|titleColor|String|no|字体颜色|null|    
|spacing|number|no|间距|null|     
             

                 
             
            
