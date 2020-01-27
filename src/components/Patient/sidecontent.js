import React from 'react';
export default () =>
<React.Fragment>
<div class="card p-0">

    <div className='d-flex justify-content-between p-2 border-bottom'>
      <div scope="col" colspan='4'>My Appointments</div>
      <div><button className='btn btn-primary ml-auto btn-sm'><i className='fa fa-plus m-1'></i>Add Appointmentment</button></div>
    </div>
<table class="table table-hover m-0 text-start table-borderless">
  <thead className='border-bottom'>
    <tr>
     <th>Date</th>
      <th>Doctor</th>
                                    <th>Status</th> 
                                    <th>Message</th>
                                    <th>Action</th>
                                    </tr>
  </thead>
  <tbody>
      <tr class="">
                                            <td>11/10/2019 11:30 AM</td>
                                            <td>Amit Singh  </td>                                          
                                            <td><small class='label label-success'>Approved</small></td> 
                                            <td>Injury treatment</td>
                                            <td>
                                            
                                               
                                                    <a href="#" class="btn btn-default btn-xs" data-toggle="tooltip" title="Delete" onclick="delete_recordById('https://demo.smart-hospital.in/patient/dashboard/deleteappointment/11', 'Record Deleted Successfully')" >
                                                        <i class="fa fa-trash"></i>
                                                    </a>                  
                                            </td>
                                        </tr>
                                                                                <tr class="">
                                            <td>08/11/2019 04:59 PM</td>
                                            <td>Sonia Bush  </td>                                          <td><small class='label label-warning'>Pending</small></td> 
                                            <td>injury treatment</td>
                                            
                                            <td>
                                                 
                                                    <a href="#" class="btn btn-default btn-xs" data-toggle="tooltip" title="Delete" onclick="delete_recordById('https://demo.smart-hospital.in/patient/dashboard/deleteappointment/11', 'Record Deleted Successfully')" >
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                                 
                                            </td>
                                        </tr>
  </tbody>
</table>
</div>
</React.Fragment>