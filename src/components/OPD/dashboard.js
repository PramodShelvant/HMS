import React from 'react';
import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/Navbar'
import { Receptionist,Patient} from './Data'
import PageContent from './PageContent/PageContent';

export default (prop) =>{
    const [breadcrum,setBreadcrum]=React.useState('Receptionist');
    const [url,seturl]=React.useState('opdDetails');
    const [col,setcol]=React.useState(['Patient Name','Appointment No','Date','Phone','Gender','Doctor','Source','Status']);
    return(
        
        <div className="wrapper">
            
<Navbar />
<Sidebar items={prop.data} setBreadcrum={setBreadcrum} seturl={seturl} setcol={setcol}/>
<PageContent breadcrum={breadcrum} url={url} col={col}/>
</div>
    )
}
