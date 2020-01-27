import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default () =>
{
    return(
        <div className="card w-50 mx-auto m-3">
            <div className="card-header bg-primary">Call Log
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
            </div>
            <div className="card-body">
                <form>
                   <div className="form-row">
                        <div className="form-group col-md-6">
                           <label for="name">Name</label>
                           <input type="text" className="form-control" id="name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label for="phone">Phone</label>
                            <input type="number" className="form-control" id="name"/>
                        </div>
                   </div>
                   <div className="form-row">
                       <div className="form-group col-md-6">
                         <label for="inputState">Date</label>
                            <div className="w-100 ">
                               <DatePicker className="form-control "  style={{width:'100% !important'}} selected={new Date()}/>
                            </div>
                       </div>
                       <div className="form-group col-md-6">
                           <label for="description">description</label>
                           <textarea className="form-control bg-transparent" rows="3" placeholder="Note" value="Note">
                           </textarea>
                       </div>
                   </div>
                   <div className="form-row">
                       <div className="form-group col-md-6">
                           <label for="next follow up date">Next Follow Up Date</label>
                           <input type="text" className="form-control" id="nfud"/>
                       </div>
                       <div className="form-group col-md-6">
                           <label for="CallDuration">Call Duration</label>
                           <input type="text"  className="form-control" id="callduration"/>
                       </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="note">Note</label>
                            <textarea className="form-control bg-transperent" rows="3" ></textarea>
                        </div>
                        <div className="form-group ml-2">
                        <label for="calltype">Call Type</label>
                        <div className="form-check ">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                            <label class="form-check-label" for="exampleRadios1">Incoming Call</label>
                        </div> 
                        <div className="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                            <label class="form-check-label" for="exampleRadios1">Outgoing Call</label>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}