import Designer from "../../dist";
import React, {Component} from "react";
import {Button,Modal,Dropdown,Menu} from 'antd'
import 'antd/dist/antd.less'

const events = require('events');
const emitter = new events.EventEmitter();

class Demo extends Component {
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
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "1.1 模组基板",
              "type": "user-task-node",
              "x": 326.6666564941406,
              "y": 51.0868034362793,
              "id": "userTask1662103064619",
              "style": {},
              "depth": 0,
              "outputDocs": [{id:'d1.1',name:'基板设计 checklist',processName:"模组基板"},{id:'d1.2',name:'基板验证 checklist',processName:"模组基板"},{id:'d1.3',name:'LGA Pin定义',processName:"模组基板"}]
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "1.2 IC验证",
              "type": "user-task-node",
              "x": 550.6666564941406,
              "y": 51.0868034362793,
              "id": "userTask1662103068461",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "1.3 IC配置",
              "type": "user-task-node",
              "x": 550.6666564941406,
              "y": 146.0868034362793,
              "id": "userTask1662103071003",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "1.4 针卡",
              "type": "user-task-node",
              "x": 84.22915649414062,
              "y": 222.5868034362793,
              "id": "userTask1662104348476",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "1.5 加速卡",
              "type": "user-task-node",
              "x": 244.66665649414062,
              "y": 221.5868034362793,
              "id": "userTask1662104352034",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "1.6 FT测试版",
              "type": "user-task-node",
              "x": 410.2291564941406,
              "y": 221.5868034362793,
              "id": "userTask1662104403025",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "1.7 MT测试版",
              "type": "user-task-node",
              "x": 707.2291564941406,
              "y": 221.5868034362793,
              "id": "userTask1662104418887",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "1.8 CP程序",
              "type": "user-task-node",
              "x": 327.12152099609375,
              "y": 340.8090286254883,
              "id": "userTask1662104473523",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "1.9 FT固件",
              "type": "user-task-node",
              "x": 550.1215209960938,
              "y": 338.25347900390625,
              "id": "userTask1662104490465",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "1.10 MT固件",
              "type": "user-task-node",
              "x": 788.2291564941406,
              "y": 334.47570037841797,
              "id": "userTask1662104519577",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "2.1 FT软件",
              "type": "user-task-node",
              "x": 550.6666564941406,
              "y": 444.36458334326744,
              "id": "userTask1662105627318",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "2.2 MT软件",
              "type": "user-task-node",
              "x": 788.1215209960938,
              "y": 444.36458334326744,
              "id": "userTask1662105646296",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "2.3 整机软件",
              "type": "user-task-node",
              "x": 969.1215209960938,
              "y": 444.36458334326744,
              "id": "userTask1662105648772",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "3.1 封装",
              "type": "user-task-node",
              "x": 252.12152099609375,
              "y": 553.3645833432674,
              "id": "userTask1662105727914",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "4.1 模组设计",
              "type": "user-task-node",
              "x": 559.1215209960938,
              "y": 652.3645833432674,
              "id": "userTask1662105749334",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "4.2 模组试产",
              "type": "user-task-node",
              "x": 788.1215209960938,
              "y": 652.3645833432674,
              "id": "userTask1662105754670",
              "style": {},
              "depth": 0
          },
          {
              "clazz": "userTask",
              "hideIcon": true,
              "size": [
                  80,
                  44
              ],
              "label": "5.1 极限模组验证",
              "type": "user-task-node",
              "x": 970.1215209960938,
              "y": 730.0868034362793,
              "id": "userTask1662105800094",
              "style": {},
              "depth": 0
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
              "style": {},
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
    console.log(this.viewRef)
    emitter.on('onClickItem',(item)=>{
      console.log(this.wfdRef.current.props.data)
      console.log(item)
    })
  }
  handleSave = () => {
    const data = this.wfdRef.current.graph.save();
    this.setState({data})
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
    const docs = [{id:'d1.1',name:'基板设计 checklist',processName:"模组基板"},{id:'d1.2',name:'基板验证 checklist',processName:"模组基板"},{id:'d1.3',name:'LGA Pin定义',processName:"模组基板"}]
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
        <Designer ref={this.wfdRef} data={data} height={height} mode={"edit"} projects={projects} users={candidateUsers} groups={candidateGroups} lang={selectedLang} emitter={emitter} isView={false} />
        <Modal title="查看流程图" visible={modalVisible} onCancel={()=>this.handleModalVisible(false)} width={1000} maskClosable={false} footer={null} destroyOnClose bodyStyle={{height}} >
          <Designer ref={this.viewRef} data={data} height={height-40} isView mode={"default"} emitter={emitter} />
        </Modal>
      </div>
    );
  }
}

export default Demo;
