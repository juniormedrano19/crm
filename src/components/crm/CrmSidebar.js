import React from 'react';
import { Icon } from '@iconify/react';


export const CrmSidebar = () => {
    return (
        <div>
            <div className='crm__sidebarContainer'>
                <div className="crm__sidebar1">
                    <div className="crm__circle">
                   
                    </div>
                </div>
                <div className="crm__sidebar2">
                    <div> <Icon icon="ph:suitcase" className="crm__active"/></div>
                    <div> <Icon icon="feather:bar-chart" className="crm__inactive" /></div>
                    <div><Icon icon="carbon:calendar" className="crm__inactive" /></div>
                    <div> <Icon icon="bx:bxs-pencil" className="crm__inactive" /></div>
                    <div> <Icon icon="ant-design:message-outlined" className="crm__inactive"/></div>
                </div>
                <div className="crm__sidebar3">
                    <div><Icon icon="iconoir:bell" className="crm__inactive"/></div>
                    <div><Icon icon="octicon:gear-24" className="crm__inactive"/>
                </div>
                </div>
                <div className="crm__sidebar4">
                     <div><Icon icon="ant-design:question-circle-outlined" className="crm__inactive" /></div>
                </div>
            </div>
        </div>
    )
}
