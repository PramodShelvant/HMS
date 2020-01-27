import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default () =>{
    const [Patient,setPatient]=useState({
        hieght:0,
        wieght:'',
        bp:'',
        symptoms:'',
        note:'',
        mdate:new Date(),
        case:'',
        casuality:'',
        oldPatient:'',
        tpa:'',
        reference:'',
        consultantDoctor:'',
        standardCharge:'',
        appliedCharge:'',
        paymentMode:''
       })


const handlChange=(e)=>{
setPatient({...Patient,[e.target.name]:e.target.value})
}
const changedate=(date)=>{
    alert(date);
    setPatient({...Patient,mdate:date})
}
const handleSubmit=(e)=>{
    e.preventDefault();
    alert(JSON.stringify(Patient))
}
    return(
        
        <div className="card w-75  mx-auto m-3">
            <div className="card-header bg-primary align-item-center pb-0">
               <button type="button" class="close" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button>
               <div className="form-row">
               <select id="input" className="form-group col-md-4 ">
                  <option selected>Select Patient</option>
                  <option>Abhishek</option>
                  <option>BAsavaraj</option>
                  <option>Charan</option>
                  <option>Devegouda</option>
               </select>
               <div className="form-group ml-4">
               <button type="submit"class=" form-inline ml-2"><i class="fas fa-plus "></i>New Patient</button>
                </div>
               </div>
               </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-8 ">
                        <div className="form-row ">
                        <div className="form-group col-md-4  ">
                            <label for="hight">Height</label>
                            <input type="number" name="hieght"onChange={handlChange}
                            value={Patient.hieght} className="form-control "/>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="hight">Weight</label>
                            <input type="number" name="wieght" onChange={handlChange} value={Patient.wieght}  className="form-control"/>
                        </div>
                        <div className="form-group col-md-4 ">
                            <label for="hight">BP</label>
                            <input type="number" name="bp" onChange={handlChange} value={Patient.bp} className="form-control "/>
                        </div>
                        </div>  
                     <div className="form-row ">
                        <div className="form-group col-md-12">
                            <label for="hight">Symptoms</label>
                            <input type="text" name="symptoms" onChange={handlChange} value={Patient.symptoms} className="form-control"/>
                        </div>
                        </div>  
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label for="inputCity">Note</label>
                               <textarea className="form-control bg-transparent" name="note" onChange={handlChange} value={Patient.note} rows="2" placeholder="" >
                               </textarea>
                           </div>  
                           </div> 
                           </div>


                           <div className="col-md-4 bg-light">
                               <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputState">Date</label>
                                <div className="w-100 ">
                                   <DatePicker className="form-control" name="date" onChange={handlChange} selected={Patient.mdate} onChange={changedate} style={{width:'100% !important'}} selected={new Date()}/>
                                </div> 
                            </div>
                            <div className="form-group col-md-6">
                                 <label for="case">Case</label>
                                 <input type="text" name="case" onChange={handlChange} value={Patient.case} className="form-control ml-2"/>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Casuality</label>
                                 <select id="input" name="casuality" onChange={handlChange} value={Patient.casuality}className="form-control">
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Old Patient</label>
                                 <select id="input" name="oldPatient" onChange={handlChange} value={Patient.oldPatient}className="form-control">
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">TPA</label>
                                 <select id="input" name="tpa" onChange={handlChange} value={Patient.tpa} className="form-control">
                                 <option>CGHS</option>
                                 <option>IDBI Federal</option>
                                 <option>Star Health Insurance</option>
                                 </select>
                             </div>
                             <div className="from-group col-md-6">
                                 <label for="refrence">Reference</label>
                                 <input type="text" name="reference" onChange={handlChange} value={Patient.reference} className="form-control"/>
                             </div>
                             <div className="from-group col-md-12">
                                 <label for="doctor">Consultant Doctor</label>
                                 <select id="input " name="consultantDoctor"onChange={handlChange} value={Patient.consultantDoctor} className="form-control">
                                     <option>Dr.Thapa</option>
                                     <option>Dr.Soniya</option>
                                     <option>Dr.Amit</option>
                                     </select>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="stdcharge">Standard Charge ($)</label>
                                 <input type="number" name="standardCharge" onChange={handlChange} value={Patient.standardCharge}className="form-control"/>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="stdcharge">Applied Charge ($)</label>
                                 <input type="number" name="appliedCharge" onChange={handlChange} value={Patient.appliedCharge} className="form-control"/>
                             </div>
                             <div className="from-group col-md-12">
                                 <label for="doctor">Payment Mode</label>
                                 <select id="input " name="paymentMode" onChange={handlChange} value={Patient.paymentMode} className="form-control">
                                     <option>Cash</option>
                                     <option>Check</option>
                                     <option>Net Banking</option>
                                     <option>Other</option>
                                     </select>
                                      </div>
                             
                            </div> 
                            <div className="from-group col-md-12 m-4">
                            <button type="submit" class="col-md-6 btn btn-outline-primary form-control">Save & Print</button>
                             <button type="submit" class="col-md-4 ml-4 btn btn-outline-primary form-control">Save</button>
                            </div>
                             </div>
                             
                             </div>   
                      </form>
                 </div>
            
        </div>
    )
}