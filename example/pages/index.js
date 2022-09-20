import Designer from "../../dist";
import React, {PureComponent} from "react";
import {Button,Modal,Dropdown,Menu} from 'antd'
import 'antd/dist/antd.less'

const events = require('events');
const emitter = new events.EventEmitter();

class Demo extends PureComponent {
  constructor(props){
    super(props);
    this.wfdRef = React.createRef();
    this.viewRef = React.createRef();
  }

  state = {
    modalVisible: false,
    selectedLang: 'zh',
    data: {
        "nodes": [
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "1.1 模组基板",
                "x": 326.6666564941406,
                "y": 51.0868034362793,
                "id": "userTask1662103064619",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "outputDocs": [
                    "d1.1",
                    "d1.3",
                    "d1.2"
                ],
                "inputDocs": [
                    "d0.1",
                    "d0.7"
                ],
                "nodeNum": "p1.1",
                status:"finish"
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "1.2 IC验证",
                "x": 550.6666564941406,
                "y": 51.0868034362793,
                "id": "userTask1662103068461",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p1.2",
                "inputDocs": [
                    "d0.3",
                    "d0.8",
                    "d1.3"
                ],
                "outputDocs": [
                    "d1.4",
                    "d1.5"
                ],
                status:"pending"
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "1.3 IC配置",
                "x": 550.6666564941406,
                "y": 146.0868034362793,
                "id": "userTask1662103071003",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p1.3",
                "inputDocs": [
                    "d0.3",
                    "d0.8",
                    "d1.3",
                    "d1.5"
                ],
                "outputDocs": [
                    "d1.6"
                ],
                active:true
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "1.4 针卡",
                "x": 84.22915649414062,
                "y": 222.5868034362793,
                "id": "userTask1662104348476",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p1.4",
                "inputDocs": [
                    "d0.4",
                    "d0.9",
                    "d0.10",
                    "d0.11",
                    "d0.12"
                ],
                "outputDocs": [
                    "d1.7"
                ],
                status:"pending"
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "1.5 加速卡",
                "x": 244.66665649414062,
                "y": 221.5868034362793,
                "id": "userTask1662104352034",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p1.5",
                "outputDocs": [
                    "d1.8",
                    "d1.9"
                ]
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "1.6 FT测试版",
                "x": 410.2291564941406,
                "y": 221.5868034362793,
                "id": "userTask1662104403025",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p1.6",
                "outputDocs": [
                    "d1.10",
                    "d1.11"
                ]
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "1.7 MT测试版",
                "x": 707.2291564941406,
                "y": 221.5868034362793,
                "id": "userTask1662104418887",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p1.7",
                "outputDocs": [
                    "d1.12",
                    "d1.13"
                ],
                status:"reopen"
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "1.8 CP程序",
                "x": 327.12152099609375,
                "y": 340.8090286254883,
                "id": "userTask1662104473523",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p1.8",
                "inputDocs": [
                    "d0.4",
                    "d1.5",
                    "d1.8"
                ],
                "outputDocs": [
                    "d1.14",
                    "d1.15",
                    "d1.16",
                    "d1.17",
                    "d1.18"
                ],
                status:"reopen"
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "1.9 FT固件",
                "x": 550.1215209960938,
                "y": 338.25347900390625,
                "id": "userTask1662104490465",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p1.9",
                "inputDocs": [
                    "d0.5",
                    "d1.5",
                    "d1.10"
                ],
                "outputDocs": [
                    "d1.19",
                    "d1.20",
                    "d1.21"
                ]
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "1.10 MT固件",
                "x": 788.2291564941406,
                "y": 334.47570037841797,
                "id": "userTask1662104519577",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p1.10",
                "outputDocs": [
                    "d1.22",
                    "d1.23",
                    "d1.24"
                ],
                "inputDocs": [
                    "d0.6",
                    "d1.5",
                    "d1.12"
                ]
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "2.1 FT软件",
                "x": 550.6666564941406,
                "y": 444.36458334326744,
                "id": "userTask1662105627318",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p2.1",
                "outputDocs": [
                    "d2.1"
                ],
                "inputDocs": [
                    "d1.19",
                    "d1.21"
                ]
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "2.2 MT软件",
                "x": 788.1215209960938,
                "y": 444.36458334326744,
                "id": "userTask1662105646296",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p2.2",
                "outputDocs": [
                    "d2.2"
                ],
                "inputDocs": [
                    "d1.22",
                    "d1.24"
                ]
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "2.3 整机软件",
                "x": 969.1215209960938,
                "y": 444.36458334326744,
                "id": "userTask1662105648772",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p2.3",
                "outputDocs": [
                    "d2.3"
                ],
                "inputDocs": [
                    "d0.13",
                    "d1.6"
                ]
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "3.1 封装",
                "x": 252.12152099609375,
                "y": 553.3645833432674,
                "id": "userTask1662105727914",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p3.1",
                "outputDocs": [
                    "d3.1",
                    "d3.2",
                    "d3.3",
                    "d3.4"
                ],
                "inputDocs": [
                    "d0.2",
                    "d0.14"
                ]
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "4.1 模组设计",
                "x": 559.1215209960938,
                "y": 652.3645833432674,
                "id": "userTask1662105749334",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p4.1",
                "outputDocs": [
                    "d4.1",
                    "d4.2",
                    "d4.3",
                    "d4.4"
                ],
                "inputDocs": [
                    "d0.15"
                ]
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "4.2 模组试产",
                "x": 788.1215209960938,
                "y": 652.3645833432674,
                "id": "userTask1662105754670",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "nodeNum": "p4.2",
                "outputDocs": [
                    "d4.5"
                ],
                "inputDocs": [
                    "d0.15",
                    "d2.2",
                    "d3.1",
                    "d3.2",
                    "d4.1",
                    "d4.2",
                    "d4.3",
                    "d4.4"
                ]
            },
            {
                "type": "user-task-node",
                "clazz": "userTask",
                "hideIcon": true,
                "size": [
                    80,
                    44
                ],
                "label": "5.1 极限模组验证",
                "x": 970.1215209960938,
                "y": 730.0868034362793,
                "id": "userTask1662105800094",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "depth": 0,
                "inputDocs": [
                    "d2.3"
                ],
                "nodeNum": "p5.1",
                "outputDocs": [
                    "d5.1"
                ]
            }
        ],
        "edges": [
            {
                "clazz": "flow",
                "source": "userTask1662103064619",
                "target": "userTask1662103068461",
                "sourceAnchor": 1,
                "targetAnchor": 3,
                "type": "flow-polyline-round",
                "id": "edge1",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 367.1666564941406,
                    "y": 51.0868034362793,
                    "index": 1
                },
                "endPoint": {
                    "x": 510.1666564941406,
                    "y": 51.0868034362793,
                    "index": 3
                },
                "depth": 0,
                "seq": "1111",
                "relatedDocs": [
                    "d1.1",
                    "d1.2"
                ]
            },
            {
                "clazz": "flow",
                "source": "userTask1662103068461",
                "target": "userTask1662103071003",
                "sourceAnchor": 2,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge3",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 550.6666564941406,
                    "y": 73.5868034362793,
                    "index": 2
                },
                "endPoint": {
                    "x": 550.6666564941406,
                    "y": 123.5868034362793,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662103071003",
                "target": "userTask1662104473523",
                "sourceAnchor": 3,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge4",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 510.1666564941406,
                    "y": 146.0868034362793,
                    "index": 3
                },
                "endPoint": {
                    "x": 327.12152099609375,
                    "y": 318.3090286254883,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662104352034",
                "target": "userTask1662104473523",
                "sourceAnchor": 2,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge5",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 244.66665649414062,
                    "y": 244.0868034362793,
                    "index": 2
                },
                "endPoint": {
                    "x": 327.12152099609375,
                    "y": 318.3090286254883,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662104348476",
                "target": "userTask1662104473523",
                "sourceAnchor": 2,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge6",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 84.22915649414062,
                    "y": 245.0868034362793,
                    "index": 2
                },
                "endPoint": {
                    "x": 327.12152099609375,
                    "y": 318.3090286254883,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662104403025",
                "target": "userTask1662104490465",
                "sourceAnchor": 1,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge7",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 450.7291564941406,
                    "y": 221.5868034362793,
                    "index": 1
                },
                "endPoint": {
                    "x": 550.1215209960938,
                    "y": 315.75347900390625,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662103071003",
                "target": "userTask1662104490465",
                "sourceAnchor": 2,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge8",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 550.6666564941406,
                    "y": 168.5868034362793,
                    "index": 2
                },
                "endPoint": {
                    "x": 550.1215209960938,
                    "y": 315.75347900390625,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662103071003",
                "target": "userTask1662104519577",
                "sourceAnchor": 1,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge10",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 591.1666564941406,
                    "y": 146.0868034362793,
                    "index": 1
                },
                "endPoint": {
                    "x": 788.2291564941406,
                    "y": 311.97570037841797,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662104418887",
                "target": "userTask1662104519577",
                "sourceAnchor": 2,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge11",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 707.2291564941406,
                    "y": 244.0868034362793,
                    "index": 2
                },
                "endPoint": {
                    "x": 788.2291564941406,
                    "y": 311.97570037841797,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662104490465",
                "target": "userTask1662105627318",
                "sourceAnchor": 2,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge12",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 550.1215209960938,
                    "y": 360.75347900390625,
                    "index": 2
                },
                "endPoint": {
                    "x": 550.6666564941406,
                    "y": 421.86458334326744,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662104519577",
                "target": "userTask1662105646296",
                "sourceAnchor": 2,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge13",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 788.2291564941406,
                    "y": 356.97570037841797,
                    "index": 2
                },
                "endPoint": {
                    "x": 788.1215209960938,
                    "y": 421.86458334326744,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662103071003",
                "target": "userTask1662105648772",
                "sourceAnchor": 1,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge14",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 591.1666564941406,
                    "y": 146.0868034362793,
                    "index": 1
                },
                "endPoint": {
                    "x": 969.1215209960938,
                    "y": 421.86458334326744,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662105727914",
                "target": "userTask1662105754670",
                "sourceAnchor": 1,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge15",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 292.62152099609375,
                    "y": 553.3645833432674,
                    "index": 1
                },
                "endPoint": {
                    "x": 788.1215209960938,
                    "y": 629.8645833432674,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662105646296",
                "target": "userTask1662105754670",
                "sourceAnchor": 2,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge16",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 788.1215209960938,
                    "y": 466.86458334326744,
                    "index": 2
                },
                "endPoint": {
                    "x": 788.1215209960938,
                    "y": 629.8645833432674,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662105749334",
                "target": "userTask1662105754670",
                "sourceAnchor": 1,
                "targetAnchor": 3,
                "type": "flow-polyline-round",
                "id": "edge17",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 599.6215209960938,
                    "y": 652.3645833432674,
                    "index": 1
                },
                "endPoint": {
                    "x": 747.6215209960938,
                    "y": 652.3645833432674,
                    "index": 3
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662105754670",
                "target": "userTask1662105800094",
                "sourceAnchor": 1,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge18",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 828.6215209960938,
                    "y": 652.3645833432674,
                    "index": 1
                },
                "endPoint": {
                    "x": 970.1215209960938,
                    "y": 707.5868034362793,
                    "index": 0
                },
                "depth": 0
            },
            {
                "clazz": "flow",
                "source": "userTask1662105648772",
                "target": "userTask1662105800094",
                "sourceAnchor": 2,
                "targetAnchor": 0,
                "type": "flow-polyline-round",
                "id": "edge19",
                "style": {
                    "0": "{",
                    "1": "}"
                },
                "startPoint": {
                    "x": 969.1215209960938,
                    "y": 466.86458334326744,
                    "index": 2
                },
                "endPoint": {
                    "x": 970.1215209960938,
                    "y": 707.5868034362793,
                    "index": 0
                },
                "depth": 0
            }
        ],
        "combos": [],
        "groups": []
    }
  };

  componentDidMount (){
    emitter.on('onClickItem',(item)=>{
      this.handleSave()
      console.log(item)
    })
  }
  handleSave = () => {
    const {data} = this.state
    const newData = this.wfdRef.current.graph.save();

    this.setState({data:newData})
    console.log(data)
  }

  langMenu = (
    <Menu onClick={(lang)=>{this.changeLang(lang)}}>
      <Menu.Item key="zh">
            <span role="img" >
              {"🇨🇳"}
            </span>
        {" 简体中文"}
      </Menu.Item>
      <Menu.Item key="en">
            <span role="img" >
              {"🇬🇧"}
            </span>
        {" English"}
      </Menu.Item>
    </Menu>
  );

  handleModalVisible(modalVisible){
    this.handleSave()
    this.setState({modalVisible})
  }

  changeLang({key}){
    this.setState({selectedLang:key})
  }

  render(){
    const {data} = this.state

    const candidateUsers = [{id:'1',name:'Tom'},{id:'2',name:'Steven'},{id:'3',name:'Andy'}];
    const projects = [{id:'1',name:'Project1'},{id:'2',name:'Project2'},{id:'3',name:'Project3'}];
    const candidateGroups = [{id:'1',name:'Manager'},{id:'2',name:'Security'},{id:'3',name:'OA'}];
    const docs = [
      {"department":"封装厂","id":"d0.1","name":"封装厂基板原理图","nodeNum":"","nodeName":"无"},
      {"department":"封装厂","id":"d0.2","name":"封装厂工程批生产数据","nodeNum":"","nodeName":"无"},
      {"department":"模组厂","id":"d0.3","name":"FPC信息","nodeNum":"","nodeName":"无"},
      {"department":"针卡厂","id":"d0.4","name":"针卡原理图","nodeNum":"","nodeName":"无"},
      {"department":"转接板厂","id":"d0.5","name":"FT 转接板接口原理图","nodeNum":"","nodeName":"无"},
      {"department":"转接板厂","id":"d0.6","name":"MT 转接板接口原理图","nodeNum":"","nodeName":"无"},
      {"department":"IC设计","id":"d0.7","name":"IC pad 信息","nodeNum":"","nodeName":"无"},
      {"department":"IC设计","id":"d0.8","name":"IC Spec","nodeNum":"","nodeName":"无"},
      {"department":"IC设计","id":"d0.9","name":"Die Information","nodeNum":"","nodeName":"无"},
      {"department":"IC设计","id":"d0.10","name":"schematics","nodeNum":"","nodeName":"无"},
      {"department":"IC设计","id":"d0.11","name":"晶圆尺寸","nodeNum":"","nodeName":"无"},
      {"department":"IC设计","id":"d0.12","name":"site 数量","nodeNum":"","nodeName":"无"},
      {"department":"手机客户","id":"d0.13","name":"整机软件接口","nodeNum":"","nodeName":"无"},
      {"department":"手机客户","id":"d0.14","name":"LGA封装规格要求及图纸","nodeNum":"","nodeName":"无"},
      {"department":"手机客户","id":"d0.15","name":"手机Pin定义","nodeNum":"","nodeName":"无"},
      {"department":"硬件","id":"d1.1","name":"基板设计 checklist","nodeNum":"p1.1","nodeName":"模组基板"},
      {"department":"硬件","id":"d1.2","name":"基板验证 checklist","nodeNum":"p1.1","nodeName":"模组基板"},
      {"department":"硬件","id":"d1.3","name":"LGA Pin定义","nodeNum":"p1.1","nodeName":"模组基板"},
      {"department":"硬件","id":"d1.4","name":"IC 验证 checklist","nodeNum":"p1.2","nodeName":"IC验证"},
      {"department":"硬件","id":"d1.5","name":"IC配置伪码","nodeNum":"p1.2","nodeName":"IC验证"},
      {"department":"硬件","id":"d1.6","name":"手机驱动配置代码","nodeNum":"p1.3","nodeName":"IC配置方案"},
      {"department":"硬件","id":"d1.7","name":"针卡设计 checklist","nodeNum":"p1.4","nodeName":"针卡"},
      {"department":"硬件","id":"d1.8","name":"加速卡原理图，PCB和设计checklist","nodeNum":"p1.5","nodeName":"加速卡"},
      {"department":"硬件","id":"d1.9","name":"加速卡验证 checklist","nodeNum":"p1.5","nodeName":"加速卡"},
      {"department":"硬件","id":"d1.10","name":"FT测试板卡原理图、PCB和设计checklist","nodeNum":"p1.6","nodeName":"FT测试板"},
      {"department":"硬件","id":"d1.11","name":"FT测试板卡验证 checklist","nodeNum":"p1.6","nodeName":"FT测试板"},
      {"department":"硬件","id":"d1.12","name":"MT测试板卡原理图、PCB和设计checklist","nodeNum":"p1.7","nodeName":"MT测试板"},
      {"department":"硬件","id":"d1.13","name":"MT测试板卡验证 checklist","nodeNum":"p1.7","nodeName":"MT测试板"},
      {"department":"硬件","id":"d1.14","name":"CP Test Plan","nodeNum":"p1.8","nodeName":"CP程序"},
      {"department":"硬件","id":"d1.15","name":"CP程序设计 checklist","nodeNum":"p1.8","nodeName":"CP程序"},
      {"department":"硬件","id":"d1.16","name":"CP测试用例","nodeNum":"p1.8","nodeName":"CP程序"},
      {"department":"硬件","id":"d1.17","name":"CP测试结果","nodeNum":"p1.8","nodeName":"CP程序"},
      {"department":"硬件","id":"d1.18","name":"coralation结果","nodeNum":"p1.8","nodeName":"CP程序"},
      {"department":"硬件","id":"d1.19","name":"FT Test Plan","nodeNum":"p1.9","nodeName":"FT固件"},
      {"department":"硬件","id":"d1.20","name":"FT固件设计 checklist","nodeNum":"p1.9","nodeName":"FT固件"},
      {"department":"硬件","id":"d1.21","name":"FT固件，及测试用例和结果","nodeNum":"p1.9","nodeName":"FT固件"},
      {"department":"硬件","id":"d1.22","name":"MT Test Plan","nodeNum":"p1.10","nodeName":"MT固件"},
      {"department":"硬件","id":"d1.23","name":"MT固件设计 checklist","nodeNum":"p1.10","nodeName":"MT固件"},
      {"department":"硬件","id":"d1.24","name":"MT固件，及测试用例和结果","nodeNum":"p1.10","nodeName":"MT固件"},
      {"department":"软件","id":"d2.1","name":"FT 软件包（包含阈值表，测试报告）","nodeNum":"p2.1","nodeName":"FT软件"},
      {"department":"软件","id":"d2.2","name":"MT软件包（包含阈值表，测试报告）","nodeNum":"p2.2","nodeName":"MT软件"},
      {"department":"软件","id":"d2.3","name":"整机集成包（包含阈值表和APK，测试报告）","nodeNum":"p2.3","nodeName":"整机软件"},
      {"department":"器件","id":"d3.1","name":"unit 封装方案","nodeNum":"p3.1","nodeName":"封装"},
      {"department":"器件","id":"d3.2","name":"strip 封装方案","nodeNum":"p3.1","nodeName":"封装"},
      {"department":"器件","id":"d3.3","name":"电容指纹封装方案check list","nodeNum":"p3.1","nodeName":"封装"},
      {"department":"器件","id":"d3.4","name":"RD-F-2022-002 电容指纹封装管控items and spec V1","nodeNum":"p3.1","nodeName":"封装"},
      {"department":"模组","id":"d4.1","name":"RD-S-0004F004 指纹模组方案设计报告","nodeNum":"p4.1","nodeName":"模组设计"},
      {"department":"模组","id":"d4.2","name":"RD-I-0007 电容指纹模组MT测试治具设计指南","nodeNum":"p4.1","nodeName":"模组设计"},
      {"department":"模组","id":"d4.3","name":"Sensor POD/Sensor Strip","nodeNum":"p4.1","nodeName":"模组设计"},
      {"department":"模组","id":"d4.4","name":"模组2D/3D/原理图/layout/Bom list","nodeNum":"p4.1","nodeName":"模组设计"},
      {"department":"模组","id":"d4.5","name":"RD-S-0004F003 指纹模组试产量产总结","nodeNum":"p4.2","nodeName":"模组试产"},
      {"department":"测试","id":"d5.1","name":"极限模组验证报告","nodeNum":"p5.1","nodeName":"极限模组验证"}
      ]
    const height = 800;
    const { modalVisible,selectedLang } = this.state;
    return (
      <div>
        {/* <Button style={{float:'right',marginTop:6,marginRight:6}} onClick={()=>this.wfdRef.current.graph.saveXML()}>导出XML</Button> */}
        <Button style={{float:'right',marginTop:6,marginRight:6}} onClick={()=>this.handleSave()}>保存</Button>
        <Button style={{float:'right',marginTop:6,marginRight:6}} onClick={()=>this.handleModalVisible(true)}>查看流程图</Button>
        {/* <Dropdown overlay={this.langMenu} trigger={['click']}>
          <Button style={{float:'right',marginTop:6,marginRight:10}} >语言</Button>
        </Dropdown> */}
        <Designer ref={this.wfdRef} data={data} height={height} mode={"edit"} projects={projects} docs={docs} users={candidateUsers} groups={candidateGroups} lang={selectedLang} emitter={emitter} isView={false} />
        <Modal title="查看流程图" visible={modalVisible} onCancel={()=>this.handleModalVisible(false)} width={1000} maskClosable={false} footer={null} destroyOnClose bodyStyle={{height}} >
          <Designer ref={this.viewRef} data={data} height={height-40} isView mode={"default"} emitter={emitter} />
        </Modal>
      </div>
    );
  }
}

export default Demo;
