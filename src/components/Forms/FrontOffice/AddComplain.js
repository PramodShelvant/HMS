import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default () =>{
return(
    <div className="card w-50 mx-auto m-3">
        <div className="card-header bg-primary">Add Complain
          <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
        <div className="card-body">
            <form>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="complaintype">Complain Type</label>
                    <select id="input" className="form-control">
                      <option selected>Choose</option>
                      <option>Food Quality</option>
                      <option>Hospital Services</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label for="source">Source</label>
                    <select id="input" className="form-control">
                        <option selected>Choose</option>
                        <option>Online Advertising</option>
                        <option>From Visitors</option>
                    </select>
                </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="complainby">Complain By</label>
                        <input type="text" className="form-control" id="complain" placeholder=""/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="complainby">Phone</label>
                        <input type="Number" className="form-control" id="complain" placeholder=""/>
                    </div>
                </div>
                <div className="form-row">
                    <div class="form-group col-md-6">
                       <label for="inputState">Date</label>
                        <div className="w-100 ">
                           <DatePicker className="form-control "  style={{width:'100% !important'}} selected={new Date()}/>
                        </div> 
                    </div>  
                    <div className="form-group col-md-6">
                        <label for="inputCity">Description</label>
                        <textarea className="form-control bg-transparent" rows="3" placeholder="" value="">
                        </textarea>
                    </div>    
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="Actiontaken">Action Taken</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="Actiontaken">Assigned</label> 
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="note">Note</label>
                        <textarea className="form-control" row="2"></textarea>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="choose">Attatch Document</label>
                        <input type="file" class="form-group-input" id="inputGroupFile01"/>
                    </div>   
                </div>
                <button type="submit" class="btn btn-outline-primary form-control ">Save</button>
            </form>
        </div>
    </div>
        
    
)
}