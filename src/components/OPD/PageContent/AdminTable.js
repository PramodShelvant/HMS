import React,{useEffect} from 'react'
import ReactDOM from 'react-dom'
export default (prop)=>{
  console.log(prop.col);
 useEffect(()=>{ 
 
  let table=window.$(document).ready(function(){
    window.$('#example').DataTable().destroy();
    window.$('#example').empty();
    window.$.fn.dataTable.ext.errMode='none';
   // console.log('sdfg'+prop.id)
  window.$(`#example`).DataTable( {
    data:prop.Datasrc,
    columns:[...prop.col.map(name=>{return{data:name,title:name.toUpperCase()
    }}),{data:'action',title:'ACTION'}],
    columnDefs: [{
      orderable:false,
      responsivePriority:2,
      targets: -1,
      createdCell: function (td, cellData, rowData, row, col) {
        
        ReactDOM.render(<div class="btn-group" role="group" aria-label="Basic example">
          <button className='btn btn-warning' data-toggle='modal' data-target={`${prop.id}`}
            onClick={() => prop.setIndex(rowData)}>
            <i className='fa fa-pencil'></i>
          </button><button className='btn btn-danger'
            onClick={() => alert(JSON.stringify(rowData))}>
            <i className='fa fa-trash'></i>
          </button>
          <button className='btn btn-primary' data-toggle='modal' data-target='#viewDetails'
            onClick={() => prop.setIndex(rowData)}>
            <i className='fa fa-eye'></i>
          </button>
          </div>, td)
        
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
     responsive:{
       details:false
     }
     
    

    } )});
} ,[prop.Datasrc,prop.col]
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