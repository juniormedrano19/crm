import React from 'react';
import { Icon } from '@iconify/react';
import peru from '../../styles/img/peru.png';







export const CrmGestiones = () => {
    return (
        <div>
           
          <div className="crm__gestiones">
              <div className="crm__gestionesContainerBox">
              <div className="crm__gestionesContainer">
              <ul className="crm__gestionesButtons">
                    <li className="crm__menuInactive1">
                    <div><Icon icon="bx:bx-user" className="crm__iconGestiones1" /></div>
                    <div className="crm__fontGestiones1">Datos</div>
                    </li>

                    <li className="crm__menuInactive1">

                    <div><Icon icon="iwwa:dashboard" className="crm__iconGestiones1" /></div>
                        <div className="crm__fontGestiones1"> Gestiones </div>
                    </li>

                    <li className="crm__menuInactive1">
                    <div><Icon icon="fluent:people-20-regular" className="crm__iconGestiones1" /></div>
                        <div className="crm__fontGestiones1"> Cierres </div>
                    </li>

                    <li className="crm__menuInactive1">
                    <div><Icon icon="bi:shield-x" className="crm__iconGestiones1" /></div>
                        <div className="crm__fontGestiones1"> Deudas </div>
                    </li>
                </ul>
                </div>
                  <div className="crm__gestionesTable">
                  <table className="crm__MainTable">
                      <thead className="crm__gestionTop">
                    <tr className="crm__gestionTop1">
                        <th className="crm__gestionEncabezado">EMPRESA</th>
                        <th className="crm__gestionEncabezado">NUMERO</th>
                        <th className="crm__gestionEncabezado">FECHA</th>
                        <th className="crm__gestionEncabezado">ESTADO</th>
                        <th className="crm__gestionEncabezado">RESPUESTA</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="crm__gestionBold">
                        <img src={peru} className="crm__country" />
                            PE_OCC
                            </td>
                        <td className="crm__gestionHistory">958810418</td>
                        <td className="crm__gestionHistory">03/02/2022</td>
                        <td className="crm__gestionHistory">CAUTIVA</td>
                        <td className="crm__gestionHistory">No contesta</td>
                    </tr>
                    <tr>
                    <td className="crm__gestionBold">
                            <img src={peru} className="crm__country" />
                            PE_OCC
                            </td>
                        <td className="crm__gestionHistory">958810418</td>
                        <td className="crm__gestionHistory">03/02/2022</td>
                        <td className="crm__gestionHistory">CAUTIVA</td>
                        <td className="crm__gestionHistory">No contesta</td>
                    </tr>
                    <tr>
                    <td className="crm__gestionBold">
                    <img src={peru} className="crm__country" />
                            PE_OCC
                            </td>
                        <td className="crm__gestionHistory">958810418</td>
                        <td className="crm__gestionHistory">03/02/2022</td>
                        <td className="crm__gestionHistory">CAUTIVA</td>
                        <td className="crm__gestionHistory">No contesta</td>
                    </tr>
                    <tr>
                    <td className="crm__gestionBold">
                    <img src={peru} className="crm__country" />
                            PE_OCC
                            </td>
                        <td className="crm__gestionHistory">958810418</td>
                        <td className="crm__gestionHistory">03/02/2022</td>
                        <td className="crm__gestionHistory">CAUTIVA</td>
                        <td className="crm__gestionHistory">No contesta</td>
                    </tr>
                    <tr>
                    <td className="crm__gestionBold">
                    <img src={peru} className="crm__country" />
                            PE_OCC
                            </td>
                        <td className="crm__gestionHistory">958810418</td>
                        <td className="crm__gestionHistory">03/02/2022</td>
                        <td className="crm__gestionHistory">CAUTIVA</td>
                        <td className="crm__gestionHistory">No contesta</td>
                    </tr>
                    <tr>
                    <td className="crm__gestionBold">
                    <img src={peru} className="crm__country" />
                            PE_OCC
                            </td>
                        <td className="crm__gestionHistory">958810418</td>
                        <td className="crm__gestionHistory">03/02/2022</td>
                        <td className="crm__gestionHistory">CAUTIVA</td>
                        <td className="crm__gestionHistory">No contesta</td>
                    </tr>
                    <tr>
                    <td className="crm__gestionBold">
                    <img src={peru} className="crm__country" />
                            PE_OCC
                            </td>
                        <td className="crm__gestionHistory">958810418</td>
                        <td className="crm__gestionHistory">03/02/2022</td>
                        <td className="crm__gestionHistory">CAUTIVA</td>
                        <td className="crm__gestionHistory">No contesta</td>
                    </tr>
                   
                   
                    
                    </tbody>
                    </table>
                  </div>

                  </div>
          </div>
           
        </div>
    )
}
