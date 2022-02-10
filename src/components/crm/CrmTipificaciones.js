import React from 'react';
import { Icon } from '@iconify/react';







export const CrmTipificaciones = () => {
    return (
        <div >
            <div className="crm__tipificaciones">
            <div className="crm__tipificacionesContainer">

            <div className="crm__fontTipificaciones">
                <div className="crm__fontTip">Tipificaciones</div>
               
            </div>
            <div className="crm__inputsTipificaciones">
                <div className="crm__inputGroup">
                <input
                className="crm__inputTip"
                type="text"
                placeholder="Tipificación 1"
                autoComplete="off"
                name="tipificacion"
                id="tipificacion"
                
                />
                </div>
                <div className="crm__inputGroup">
                <input
                className="crm__inputTip"
                type="text"
                placeholder="Tipificación 2"
                autoComplete="off"
                name="tipificacion"
                id="tipificacion"
                
                />
                </div>
                <div className="crm__inputGroup">
                <input
                className="crm__inputTip"
                type="text"
                placeholder="Tipificación 3"
                autoComplete="off"
                name="tipificacion"
                id="tipificacion"
                
                />
                </div>

               
               
            </div>
            <div className="crm__tipifacionButtons">

            <div className="crm__inputGroup1">
                <input
                className="crm__inputTip1"
                type="text"
                placeholder="Escribe alguna observación"
                autoComplete="off"
                name="tipificacion"
                id="tipificacion"
                
                />
                </div>

                <div className="crm__buttonsSaveClean"> 
                    <div className="crm__Blue"><Icon icon="ant-design:save-filled" className="crm__saveBlue" /></div>
                    <div className="crm__Red"><Icon icon="fluent:eraser-24-regular"  className="crm__eraseRed" /></div>
                </div>


            </div>


            </div>
            </div>
          
           
        </div>
    )
}
