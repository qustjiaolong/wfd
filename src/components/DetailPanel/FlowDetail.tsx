import styles from "./index.less";
import {Checkbox, Input,Select} from "antd";
import React, {useContext} from "react";
import DefaultDetail from './DefaultDetail';
import LangContext from "../../util/context";
import { IFlowModel, ISelectData,IFileData } from '../../types';
import { filter } from "@antv/util";

export interface FlowProps {
  model: IFlowModel;
  onChange: (...args: any[]) => any;
  readOnly: boolean;
  // data: any;
  docs:IFileData[]
}
const FlowDetail: React.FC<FlowProps> = ({model, docs, onChange,readOnly = false,}) => {
  const { i18n } = useContext(LangContext);
  const title = i18n['sequenceFlow'];
  // let sourceNode = undefined
  // let filteredDocs = []
  // if(data && data.nodes){
  //   const filterNodes = data.nodes.filter(node=>node.id===model.source)
  //   if(filterNodes){
  //     sourceNode = filterNodes[0]
  //     filteredDocs=docs.filter(doc=>sourceNode.outputDocs.indexOf(doc.id)>-1)
  //   }
  // }
  // console.log(sourceNode)

  return (
    <div data-clazz={model.clazz}>
      <div className={styles.panelTitle}>{title}</div>
      <div className={styles.panelBody}>
        <DefaultDetail model={model} onChange={onChange} readOnly={readOnly} />
        {/* {sourceNode&&<div className={styles.panelRow}>
          <div>选择依赖文件：</div>
          <Select
            mode="multiple"
            showSearch
            style={{width: '100%', fontSize: 12}}
            placeholder="请选择依赖文件"
            optionFilterProp="children"
            defaultValue={model.relatedDocs}
            onChange={(e) => onChange('relatedDocs', e)}
            filterOption={(input, option) => option.props.children.indexOf(input) >= 0}
            disabled={readOnly}
          >
            {filteredDocs&&filteredDocs.map(doc => (<Select.Option key={doc.id} value={doc.id}>{doc.nodeName}/{doc.name}</Select.Option>))}
          </Select>
        </div>
        } */}
        {/* <div className={styles.panelRow}>
          <div>{i18n['sequenceFlow.expression']}：</div>
          <Input.TextArea style={{width: '100%', fontSize: 12}}
                          rows={4}
                          value={model.conditionExpression}
                          onChange={(e) => {
                            onChange('conditionExpression', e.target.value)
                          }}
                          disabled={readOnly}
          />
        </div>
        */}
        {/* <div className={styles.panelRow}>
          <div>{i18n['sequenceFlow.seq']}：</div>
          <Input style={{width: '100%', fontSize: 12}}
                 value={model.seq}
                 onChange={(e) => {
                   onChange('seq', e.target.value)
                 }}
                 disabled={readOnly}
          />
        </div> 
        <div className={styles.panelRow}>
          <Checkbox onChange={(e) => onChange('reverse', e.target.checked)}
                    disabled={readOnly}
                    checked={!!model.reverse}>{i18n['sequenceFlow.reverse']}</Checkbox>
        </div> */}
      </div>
    </div>
  )
};

export default FlowDetail;
