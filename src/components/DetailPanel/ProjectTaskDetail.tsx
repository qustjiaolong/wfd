import styles from "./index.less";
import {Checkbox, DatePicker, Input, Select} from "antd";
import React, {useContext} from "react";
import moment from "moment";
import DefaultDetail from "./DefaultDetail";
import LangContext from "../../util/context";
import { ISelectData, IProjectModel,IFileData } from '../../types';
import DescriptionsItem from "antd/lib/descriptions/Item";

export interface ProjectProps {
  model: IProjectModel;
  onChange: (...args: any[]) => any;
  readOnly: boolean;
  // users: ISelectData[];
  // groups: ISelectData[];
  projects: ISelectData[];
  docs?: IFileData[];
  data: any;
}
const ProjectTaskDetail: React.FC<ProjectProps> = ({model,data,projects,docs,onChange,readOnly = false,}) => {
  const { i18n } = useContext(LangContext);
  const title = '项目节点';

  let inputDocs = docs.filter(d=>d.nodeNum==="")
  let outputDocs = docs.filter(d=>d.nodeNum===model.nodeNum || d.nodeName.indexOf(model.nodeNum)>-1)

  // 查找前置节点，确认输入列表
  const prevEdges = data.edges.filter(e=>e.target===model.id)
  if(prevEdges && prevEdges.length>0){
    const prevNodeIds = []
    prevEdges.forEach(element => {
      prevNodeIds.push(element.source)
    });
    const prevNodes = data.nodes.filter(node=>prevNodeIds.indexOf(node.id)>-1)
    if(prevNodes){
      let ds=[]
      prevNodes.forEach(element => {
        ds=ds.concat(element.outputDocs)
        ds=ds.concat(element.inputDocs)
      });
      let relateDocs=docs.filter(d=>ds.indexOf(d.fileNo)>-1)
      relateDocs=relateDocs.concat(inputDocs)
      const dsNew = new Set(relateDocs)
      inputDocs = Array.from(dsNew)
    }
  }
  inputDocs.sort((a,b)=>{
    let aNum = 0
    let bNum = 0
    if(a.fileNo.length==4){
      aNum = parseFloat(a.fileNo.substring(1,))*10
    } else {
      aNum = parseFloat(a.fileNo.substring(1,))*100
    }
    if(b.fileNo.length==4){
      bNum = parseFloat(b.fileNo.substring(1,))*10
    } else {
      bNum = parseFloat(b.fileNo.substring(1,))*100
    }
    aNum = aNum + parseInt(a.fileNo.substring(1,2)) * 1000
    bNum = bNum + parseInt(b.fileNo.substring(1,2)) * 1000
    return aNum-bNum
  })

  return (
    <div data-clazz={model.clazz}>
      <div className={styles.panelTitle}>{title}</div>
      <div className={styles.panelBody}>
        <DefaultDetail model={model} onChange={onChange} readOnly={readOnly} />
        <div className={styles.panelRow}>
          <div>选择项目：</div>
          <Select
            // mode="multiple"
            showSearch
            style={{width: '100%', fontSize: 12}}
            placeholder="请选择项目"
            optionFilterProp="children"
            defaultValue={model.projectId}
            onChange={(e) => onChange('projectId', e)}
            filterOption={(input, option) => option.props.children.indexOf(input) >= 0}
            disabled={readOnly}
          >
            {projects && projects.map(proj => (<Select.Option key={proj.id} value={proj.id}>{proj.name}</Select.Option>))}
          </Select>
        </div>

        <div className={styles.panelRow}>
          <div>选择输入文件：</div>
          <Select
            mode="multiple"
            showSearch
            style={{width: '100%', fontSize: 12}}
            placeholder="请选择输入文件"
            optionFilterProp="children"
            defaultValue={model.inputDocs}
            onChange={(e) => onChange('inputDocs', e)}
            filterOption={(input, option) => {
              return option.props.children.indexOf(input) >= 0
            }
          }
            disabled={readOnly}
          >
            {inputDocs && inputDocs.map(doc => (<Select.Option key={doc.fileNo} value={doc.fileNo}>{doc.nodeName}/{doc.fileNo}-{doc.name}</Select.Option>))}
          </Select>
        </div>

        <div className={styles.panelRow}>
          <div>选择输出文件：</div>
          <Select
            mode="multiple"
            showSearch
            style={{width: '100%', fontSize: 12}}
            placeholder="请选择输出文件"
            optionFilterProp="children"
            defaultValue={model.outputDocs}
            onChange={(e) => onChange('outputDocs', e)}
            filterOption={(input, option) => option.props.children.indexOf(input) >= 0}
            disabled={readOnly}
          >
            {outputDocs && outputDocs.map(doc => (<Select.Option key={doc.fileNo} value={doc.fileNo}>{doc.nodeName}/{doc.fileNo}-{doc.name}</Select.Option>))}
          </Select>
        </div>

        {/* <div className={styles.panelRow}>
          <div>{i18n['userTask.assignType']}：</div>
          <Select
            style={{width: '100%', fontSize: 12}}
            placeholder={i18n['userTask.assignType.placeholder']}
            defaultValue={"person"}
            value={model.assignType}
            onChange={(e) => {
              onChange('assignValue', []);
              onChange('assignType', e);
            }}
            disabled={readOnly}
          >
            <Select.Option value="person">{i18n['userTask.assignType.person']}</Select.Option>
            <Select.Option value="persongroup">{i18n['userTask.assignType.persongroup']}</Select.Option>
            <Select.Option value="custom">{i18n['userTask.assignType.custom']}</Select.Option>
          </Select>
        </div>
        {
          model.assignType === 'person' &&
          <div className={styles.panelRow}>
            <div>{i18n['userTask.assignType.person.title']}：</div>
            <Select
              mode="multiple"
              showSearch
              style={{width: '100%', fontSize: 12}}
              placeholder={i18n['userTask.assignType.person.placeholder']}
              optionFilterProp="children"
              defaultValue={model.assignValue}
              onChange={(e) => onChange('assignValue', e)}
              filterOption={(input, option) => option.props.title.indexOf(input) >= 0}
              disabled={readOnly}
            >
              {users && users.map(user => (<Select.Option value={user.id}>{user.name}</Select.Option>))}
            </Select>
          </div>
        }
        {
          model.assignType === 'persongroup' &&
          <div className={styles.panelRow}>
            <div>{i18n['userTask.assignType.persongroup.title']}：</div>
            <Select
              mode="multiple"
              showSearch
              style={{width: '100%', fontSize: 12}}
              placeholder={i18n['userTask.assignType.persongroup.placeholder']}
              optionFilterProp="children"
              defaultValue={model.assignValue}
              onChange={(e) => onChange('assignValue', e)}
              filterOption={(input, option) => option.props.title.indexOf(input) >= 0}
              disabled={readOnly}
            >
              {groups && groups.map(group => (<Select.Option value={group.id}>{group.name}</Select.Option>))}
            </Select>
          </div>
        }
        {
          model.assignType === 'custom' &&
          <div className={styles.panelRow}>
            <div>{i18n['userTask.assignType.custom.title']}：</div>
            <Input style={{width: '100%', fontSize: 12}}
                   value={model.javaClass}
                   onChange={(e) => {
                     onChange('javaClass', e.target.value)
                   }}
                   disabled={readOnly}
            />
          </div>
        }
        <div className={styles.panelRow}>
          <div style={{display: 'inline'}}>{i18n['userTask.dueDate']}：</div>
          <DatePicker defaultValue={model.dueDate ? moment(model.dueDate) : null}
                      disabled={readOnly}
                      placeholder={i18n['userTask.dueDate.placeholder']}
                      showTime
                      style={{width: '100%',minWidth:null}}
                      onChange={(value, dateString) => onChange('dueDate', value)}
          />
        </div>
        <div className={styles.panelRow}>
          <Checkbox onChange={(e) => onChange('isSequential', e.target.checked)}
                    disabled={readOnly}
                    checked={!!model.isSequential}>{i18n['userTask.counterSign']}</Checkbox>
        </div> */}
      </div>
    </div>
  )
};

export default ProjectTaskDetail;
