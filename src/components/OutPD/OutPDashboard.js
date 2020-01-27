import React from 'react'
import Navbar from '../OPD/navbar/Navbar'
import {OPD} from '../OPD/Data'
import PageContent from '../OPD/PageContent/PageContent'
import Sidebar from '../OPD/sidebar/sidebar'



export default (prop) =>{
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar items={OPD} />
           <PageContent />
      
        </div>
    )
}