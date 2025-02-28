import React, { forwardRef } from 'react';
import ProjectTaskDetail from "./ProjectTaskDetail";
import ScriptTaskDetail from "./ScriptTaskDetail";
import JavaTaskDetail from "./JavaTaskDetail";
import ReceiveTaskDetail from "./ReceiveTaskDetail";
import MailTaskDetail from "./MailTaskDetail";
import TimerEventDetail from "./TimerEventDetail";
import SignalEventDetail from "./SignalEventDetail";
import MessageEventDetail from "./MessageEventDetail";
import GatewayDetail from "./GatewayDetail";
import FlowDetail from "./FlowDetail";
import StartEventDetail from "./StartEventDetail";
import EndEventDetail from "./EndEventDetail";
import ProcessDetail from "./ProcessDetail";
import 'antd/lib/input/style';
import 'antd/lib/select/style';
import 'antd/lib/switch/style';
import styles from "./index.less";
import { IDefaultModel, ISelectData } from '../../types';

export interface DetailProps{
  height: number;
  model: IDefaultModel;
  // users: ISelectData[];
  // groups: ISelectData[];
  projects: ISelectData[];
  docs: any;
  messageDefs: ISelectData[];
  signalDefs: ISelectData[];
  onChange: (...args: any[]) => any;
  readOnly: boolean;
  data:any
}
const DetailPanel = forwardRef<any, DetailProps>(({data,height,model,projects,docs,messageDefs,signalDefs,onChange,readOnly = false},ref)=>{
  return (
    <div ref={ref} className={styles.detailPanel} style={{height}}>
      { model.clazz === 'userTask' && <ProjectTaskDetail model={model} data={data} onChange={onChange} readOnly={readOnly} projects={projects} docs={docs} />}
      { model.clazz === 'scriptTask' && <ScriptTaskDetail model={model} onChange={onChange} readOnly={readOnly} /> }
      { model.clazz === 'javaTask' && <JavaTaskDetail model={model} onChange={onChange} readOnly={readOnly} /> }
      { model.clazz === 'receiveTask' && <ReceiveTaskDetail model={model} onChange={onChange} readOnly={readOnly} /> }
      { model.clazz === 'mailTask' && <MailTaskDetail model={model} onChange={onChange} readOnly={readOnly} /> }
      { (model.clazz === 'timerStart' || model.clazz === 'timerCatch') && <TimerEventDetail model={model} onChange={onChange} readOnly={readOnly}/>}
      { (model.clazz === 'signalStart' || model.clazz === 'signalCatch') && <SignalEventDetail model={model} signalDefs={signalDefs} onChange={onChange} readOnly={readOnly}/>}
      { (model.clazz === 'messageStart' || model.clazz === 'messageCatch') && <MessageEventDetail model={model} messageDefs={messageDefs} onChange={onChange} readOnly={readOnly}/>}
      { (model.clazz === 'gateway' || model.clazz === 'exclusiveGateway' || model.clazz === 'parallelGateway' || model.clazz === 'inclusiveGateway') && <GatewayDetail model={model} onChange={onChange} readOnly={readOnly} /> }
      { model.clazz === 'flow' && <FlowDetail model={model} onChange={onChange} readOnly={readOnly} docs={docs} /> }
      { model.clazz === 'start' && <StartEventDetail model={model} onChange={onChange} readOnly={readOnly} /> }
      { model.clazz === 'end' && <EndEventDetail model={model} onChange={onChange} readOnly={readOnly} /> }
      { model.clazz === 'process' && <ProcessDetail model={model} onChange={onChange} readOnly={readOnly} /> }
    </div>
  )
});

export default DetailPanel;
