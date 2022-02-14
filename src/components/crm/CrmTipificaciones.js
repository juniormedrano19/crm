import React, { useEffect } from 'react';
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
               {/*  <div className="crm__inputGroup">
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
                </div> */}
                {/* <div className="crm__inputGroup">
                <input
                className="crm__inputTip"
                type="text"
                placeholder="Tipificación 3"
                autoComplete="off"
                name="tipificacion"
                id="tipificacion"
                
                />
                </div> */}


{/* DropDown */}


<div className="crm__inputGroup">
<select name='options'>
<option value='option-0' className="crm__fontSelectionFont">Tipificación 1</option>
  <option value='option-1' className="crm__fontSelectionFont">Option 1</option>
  <option value='option-2' className="crm__fontSelectionFont">Option 2</option>
  <option value='option-3' className="crm__fontSelectionFont">Option 3</option>
  
</select>

</div>

<div className="crm__inputGroup">
<select name='options'>
<option value='option-0' className="crm__fontSelectionFont">Tipificación 2</option>
  <option value='option-1' className="crm__fontSelectionFont">Option 1</option>
  <option value='option-2' className="crm__fontSelectionFont">Option 2</option>
  <option value='option-3' className="crm__fontSelectionFont">Option 3</option>
  
</select>

</div>

<div className="crm__inputGroup">
<select name='options'>
<option value='option-0' className="crm__fontSelectionFont">Tipificación 3</option>
  <option value='option-1' className="crm__fontSelectionFont">Option 1</option>
  <option value='option-2' className="crm__fontSelectionFont">Option 2</option>
  <option value='option-3' className="crm__fontSelectionFont">Option 3</option>
  
</select>

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
