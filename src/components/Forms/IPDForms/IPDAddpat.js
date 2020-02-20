import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import * as  Yup from 'yup';
 import {Getdata,Postdata,PostFormdata} from '../../../Network/Server'

export default () =>{
    const formik=useFormik({
    initialValues:
    {
        reference:'',
        height:'',
        weight:'',
        bp:'',
        symptoms:'',
        note:'',
        appointmentDate:'',
        caseType:'',
        casulity:'',
        tpa:'',
        consDoctor:'',
        creditLimit:'',
        bedGroup:'',
        bedNumber:'',
        oldpatient:''
    },
       onSubmit:values=>{alert(JSON.stringify(values,null,2))
         Postdata('inpatient/','POST',values).then(data=>console.log(data))},
         validationSchema:Yup.object().shape({
             
        reference:Yup.string().required(),
        height:Yup.number().required(),
        weight:Yup.number().required(),
        bp:Yup.number().required(),
        symptoms:Yup.string().required(),
        note:Yup.string().required(),
        appointmentDate:Yup.date().required(),
        caseType:Yup.string().required(),
        casulity:Yup.string().required(),
        tpa:Yup.string().required(),
        consDoctor:Yup.string().required(),
        creditLimit:Yup.string().required(),
        bedGroup:Yup.string().required(),
        bedNumber:Yup.number().required(),
        oldpatient:Yup.string().required()

         })
     })

    return(
        <div class="modal fade" id="AddipdPatient" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">
       
        <div className="card">
            <div className="card-header bg-primary aligh-item-center pb-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>   
               <div className="form-row">
               <select id="input" className="form-group col-md-4">
                  <option selected>Select Patient</option>
                  <option>Abhishek</option>
                  <option>BAsavaraj</option>
                  <option>Charan</option>
                  <option>Devegouda</option>
               </select>
               
               <div className="form-group col-md-3 ml-4">
               <button class=" form-inline ml-2" data-toggle='modal' data-target='#addnewpatient'><i class="fas fa-plus "></i>New Patient</button>
                </div>
               </div>
               </div>
              <div className="card-body ">
                <form onSubmit={formik.handleSubmit}>
                    
                    <div className="row">
                        <div className="col-md-8 ">
                        <div className="form-row ">
                        <div className="form-group col-md-4  ">
                            <label for="hight">Hieght</label>
                            <input type="number" className="form-control" onChange={(e)=>formik.setFieldValue('height',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.height && formik.errors.height)?formik.errors.height:''}</span>
                        </div>
                        
                
                        <div className="form-group col-md-4">
                            <label for="hight">Weight</label>
                            <input type="number" className="form-control" onChange={(e)=>formik.setFieldValue('weight',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.weight && formik.errors.weight)?formik.errors.weight:''}</span>
                        </div>
                        
                
                        <div className="form-group col-md-4 ">
                            <label for="hight">BP</label>
                            <input type="number" className="form-control" onChange={(e)=>formik.setFieldValue('bp',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.bp && formik.errors.bp)?formik.errors.bp:''}</span>
                        </div>
                        </div>  
                        <div className="form-row ">
                        <div className="form-group col-md-12">
                            <label for="hight">Symptoms</label>
                            <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('symptoms',e.target.value)}/>
                            <span className='text-danger'>{(formik.touched.symptoms && formik.errors.symptoms)?formik.errors.symptoms:''}</span>
                        </div>
                        
               
                        </div>  
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label for="inputCity">Note</label>
                               <textarea className="form-control bg-transparent" rows="2" onChange={(e)=>formik.setFieldValue('note',e.target.value)}>
                               </textarea>
                               <span className='text-danger'>{(formik.touched.note && formik.errors.note)?formik.errors.note:''}</span>
                           </div> 
                            
                
                           </div> 

                           
                           </div>
                           


                           <div className="col-md-4 bg-light">
                               <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputState">Admission Date</label>
                                <div className="w-100 ">
                                   <DatePicker className="form-control"style={{width:'100% !important'}} selected={formik.values.appointmentDate} customInput={<input className="form-control"/>}  onChange={(data)=>formik.setFieldValue('appointmentDate',data)}/>
                                </div> 
                              <span className='text-danger'>{(formik.touched.appointmentDate && formik.errors.appointmentDate)?formik.errors.appointmentDate:''}</span>
                            </div>
                            <div className="form-group col-md-6">
                                 <label for="case">Case</label>
                                 <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('caseType',e.target.value)}/>
                                 <span className='text-danger'>{(formik.touched.caseType && formik.errors.caseType)?formik.errors.caseType:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Casualty</label>
                                 <select id="input" className="form-control" onChange={(e)=>formik.setFieldValue('casulity',e.target.value)}>
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                                 <span className='text-danger'>{(formik.touched.casulity && formik.errors.casulity)?formik.errors.casulity:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Old Patient</label>
                                 <select id="input" className="form-control" onChange={(e)=>formik.setFieldValue('oldPatient',e.target.value)}>
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                                 <span className='text-danger'>{(formik.touched.oldpatient && formik.errors.oldpatient)?formik.errors.oldpatient:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">TPA</label>
                                 <select id="input" className="form-control" onChange={(e)=>formik.setFieldValue('tpa',e.target.value)}>
                                 <option>CGHS</option>
                                 <option>IDBI Federal</option>
                                 <option>Star Health Insurance</option>
                                 </select>
                                 <span className='text-danger'>{(formik.touched.tpa && formik.errors.tpa)?formik.errors.tpa:''}</span>
                             </div>
                             <div className="from-group col-md-6">
                                 <label for="refrence">Credit Limit($)</label>
                                 <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('creditLimit',e.target.value)}/>
                                 <span className='text-danger'>{(formik.touched.creditLimit && formik.errors.creditLimit)?formik.errors.creditLimit:''}</span>
                             </div>
                             <div className="from-group col-md-6">
                                 <label for="doctor">Consultant Doctor</label>
                                 <select id="input " className="form-control" onChange={(e)=>formik.setFieldValue('consDoctor',e.target.value)}>
                                     <option>Dr.Thapa</option>
                                     <option>Dr.Soniya</option>
                                     <option>Dr.Amit</option>
                                     </select>
                                     <span className='text-danger'>{(formik.touched.consDoctor && formik.errors.consDoctor)?formik.errors.consDoctor:''}</span>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="stdcharge">Referenece</label>
                                 <input type="text" className="form-control" onChange={(e)=>formik.setFieldValue('reference',e.target.value)}/>
                                 <span className='text-danger'>{(formik.touched.reference && formik.errors.reference)?formik.errors.reference:''}</span>
                             </div>
                             <div className="form-group col-md-12">
                                 <label for="stdcharge">Bed Group</label>
                                 <select id="input" className="form-control" onChange={(e)=>formik.setFieldValue('bedGroup',e.target.value)}>
                                 <option selected="select">Select</option>
                                 <option>VIP Ward-1st Floor</option>
                                 <option>Private Ward-2nd Floor</option>
                                 <option>Generic Ward Male-3rd Floor</option>
                                 <option>Generic Ward Female-3rd Floor</option>
                                 <option>ICU-Ground Floor</option>
                                 <option>NICU-1st Floor</option>
                                 </select>
                                 <span className='text-danger'>{(formik.touched.bedGroup && formik.errors.bedGroup)?formik.errors.bedGroup:''}</span>
                             </div>
                             <div className="from-group col-md-12">
                                 <label for="doctor">Bed Number</label>
                                 <select id="input " className="form-control" onChange={(e)=>formik.setFieldValue('bedNumber',e.target.value)}>
                                     <option>1</option>
                                     <option>2</option>
                                     <option> 3</option>
                                     <option>4</option>
                                     </select>
                                     <span className='text-danger'>{(formik.touched.bedNumber && formik.errors.bedNumber)?formik.errors.bedNumber:''}</span>
                                      </div>
                            </div> 
                            <div className="from-group col-md-12 m-4">
                            <button type="submit" class="col-md-6 btn btn-outline-primary  btn-sm form-control">Save & Print</button>
                             <button type="submit" class="col-md-4 ml-4 btn btn-outline-primary form-control">Save</button>
                            </div>
                             </div>
                             
                             </div>   
                      </form>
                 </div>
                 </div>
            
            </div>
            </div>
        </div>
    )
}