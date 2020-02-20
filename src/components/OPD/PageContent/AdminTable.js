import React,{useEffect} from 'react'
import ReactDOM from 'react-dom'
export default (prop)=>{
  console.log(prop.col);
 useEffect(()=>{ 
 
  let table=window.$(document).ready(function(){
    window.$('#example').DataTable().destroy();
    window.$('#example').empty();
    window.$.fn.dataTable.ext.errMode='none';
    
  window.$(`#example`).DataTable( {
    data:prop.Datasrc,
    columns:prop.col.map(name=>{return{data:name,title:name.toUpperCase()
    }}),
    columnDefs: [{
      responsivePriority:2,
      targets: -1,
      createdCell: function (td, cellData, rowData, row, col) {
        
        ReactDOM.render(<>
          <button className='btn btn-warning' data-toggle='modal' data-target='#bookappointment'
            onClick={() => prop.setIndex(rowData)}>
            edit
          </button><button className='btn btn-danger'
            onClick={() => alert(JSON.stringify(rowData))}>
            delete
          </button></>, td)
        
      }
    } ],
     dom: '<"d-sm-flex flex-row justify-content-between border-primary m-0 p-0"<l><"btn-group"B><f>>t<"d-sm-flex justify-content-between align-items-center p-2"ip>',
        buttons: [
            {
              extend:'copy',
              text:'COPY',
              className:'btn btn-primary py-0 btn-sm'
            }, 
              {
              extend:'csv',
              text:'CSV',
              className:'btn btn-primary btn-sm py-0'
            },   {
              extend:'excel',
              text:'EXCEL',
              className:'btn btn-primary btn-sm py-0'
            }, 
              {
              extend:'pdf',
              text:'PDF',
              className:'btn btn-primary btn-sm py-0'
            }
            ,   {
              extend:'print',
              text:'PRINT',
              className:'btn btn-primary btn-sm py-0 '
            }
        ],
     responsive: {
           details: {
              display:window.$.fn.dataTable.Responsive.display.modal( {
                header: function ( row ) {
                    var data = row.data();
                    return 'Details for '+prop.url;
                }
            } ),
             renderer: window.$.fn.dataTable.Responsive.renderer.tableAll( {
                 tableClass: 'table'
             } ),
             
            }
        }
     
    

    } )});
} 
 );

  return(

<>

<table id={`example`} className={`table table-striped table-bordered dt-responsive nowrap  `} style={{width:'100%'}}>
  <thead className='p-0'>
           {<tr>
                {prop.col.map(
                    (name)=>{
                    return <th>{name}</th>
                    }
                )}
            </tr>}
        </thead>
        <tbody>
            
          </tbody>
</table>

</>
  )
}