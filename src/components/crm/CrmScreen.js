import React from 'react';
import { CrmNavbar } from './CrmNavbar';
import { CrmSidebar } from './CrmSidebar';






export const CrmScreen = () => {
    return (
        <div className="crm__Main">
            <CrmSidebar />
            <CrmNavbar />
          
           
        </div>
    )
}
