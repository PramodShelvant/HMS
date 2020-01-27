import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default () =>{
    return(
        <div className="card w-75 mx-auto m-3">
            <div className="card-header bg-primary aligh-item-center pb-0">
               <button type="button" class="close" aria-label="Close">
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
               <div className="form-group col-md-6 ml-4">
               <button type="submit"class=" form-control col-md-6"><i class="fas fa-plus"></i>New Patient</button>
                </div>
               </div>
               </div>
              <div className="card-body">
                <form >
                    <div className="row">
                        <div className="col-md-8 ">
                        <div className="form-row ">
                        <div className="form-group col-md-4  ">
                            <label for="hight">Hieght</label>
                            <input type="number" className="form-control "/>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="hight">Wieght</label>
                            <input type="number" className="form-control"/>
                        </div>
                        <div className="form-group col-md-4 ">
                            <label for="hight">BP</label>
                            <input type="number" className="form-control "/>
                        </div>
                        </div>  
                     <div className="form-row ">
                        <div className="form-group col-md-12">
                            <label for="hight">Symptoms</label>
                            <input type="number" className="form-control"/>
                        </div>
                        </div>  
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label for="inputCity">Note</label>
                               <textarea className="form-control bg-transparent" rows="2" placeholder="" >
                               </textarea>
                           </div>  
                           </div> 
                           </div>


                           <div className="col-md-4 bg-light">
                               <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputState">Admission Date</label>
                                <div className="w-100 ">
                                   <DatePicker className="form-control"style={{width:'100% !important'}} selected={new Date()}/>
                                </div> 
                            </div>
                            <div className="form-group col-md-6">
                                 <label for="case">Case</label>
                                 <input type="text" className="form-control"/>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Casualty</label>
                                 <select id="input" className="form-control">
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">Old Patient</label>
                                 <select id="input" className="form-control">
                                 <option>Yes</option>
                                 <option>No</option>
                                 </select>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="case">TPA</label>
                                 <select id="input" className="form-control">
                                 <option>CGHS</option>
                                 <option>IDBI Federal</option>
                                 <option>Star Health Insurance</option>
                                 </select>
                             </div>
                             <div className="from-group col-md-6">
                                 <label for="refrence">Credit Limit($)</label>
                                 <input type="text" className="form-control"/>
                             </div>
                             <div className="from-group col-md-6">
                                 <label for="doctor">Consultant Doctor</label>
                                 <select id="input " className="form-control">
                                     <option>Dr.Thapa</option>
                                     <option>Dr.Soniya</option>
                                     <option>Dr.Amit</option>
                                     </select>
                             </div>
                             <div className="form-group col-md-6">
                                 <label for="stdcharge">Referenece</label>
                                 <input type="text" className="form-control"/>
                             </div>
                             <div className="form-group col-md-12">
                                 <label for="stdcharge">Bed Group</label>
                                 <select id="input" className="form-control">
                                 <option selected="select">Select</option>
                                 <option>VIP Ward-1st Floor</option>
                                 <option>Private Ward-2nd Floor</option>
                                 <option>Generic Ward Male-3rd Floor</option>
                                 <option>Generic Ward Female-3rd Floor</option>
                                 <option>ICU-Ground Floor</option>
                                 <option>NICU-1st Floor</option>
                                 </select>
                             </div>
                             <div className="from-group col-md-12">
                                 <label for="doctor">Bed Number</label>
                                 <select id="input " className="form-control">
                                     <option>1</option>
                                     <option>2</option>
                                     <option> 3</option>
                                     <option>4</option>
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