import React from 'react'
export default ()=>{
    return(
        <div class="card w-50 mx-auto m-3">
           <h5 class="card-header bg-primary">Add Medicine Details
               <button type="button" class="close" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>
            </h5>
         <div class="card-body">
              <div className="d-flex justify-content-between ">
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Name</label>
                 <input type="text" name="" className="form-control" />
                </div>
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Category</label><small className="req ml-2 text-danger">*</small>
                     <select id="input" className="form-control " >
                     <option selected>Select</option>
                     <option>Syrup</option>
                     <option>Capsule</option>
                     <option>Injectio</option>
                     <option>Ointment</option>
                     <option>Cream</option>
                     <option>Surgicals</option>
                     <option>Drops</option>
                     <option>Inhalers</option>
                     <option>Implants/Patches</option>
                     <option>Liquids</option>
                     <option>Preparations</option>
                     <option>Diaper</option>
                     <option>Tablets</option>
                 </select>
                 </div>
                 <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Company</label>
                 <input type="text" className="form-control" />
                </div>
             </div>
             <div className="d-flex justify-content-between">
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Composition</label>
                 <input type="text" name="" className="form-control" />
                </div>
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Medicine Group</label><small className="req ml-2 text-danger">*</small>
                 <input type="text" name="" className="form-control" />
                 </div>
                 <div className="form-group">
                 <label for="ExampleInputMedicineName">Unit</label>
                 <input type="text" className="form-control" />
                </div>
             </div>
             <div className="d-flex justify-content-between">
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Min Level</label>
                 <input type="text" name="" className="form-control" />
                </div>
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Re-Order Level</label><small className="req ml-2 text-danger">*</small>
                 <input type="text" name="" className="form-control" />
                 </div>
                 <div className="form-group">
                 <label for="ExampleInputMedicineName">Vat (%)</label>
                 <input type="text" className="form-control" />
                </div>
             </div>
             <div className="d-flex justify-content-between">
                <div className="form-group">
                 <label for="ExampleInputMedicineName">Unit / Packing</label>
                 <input type="text" name="" className="form-control"/>
                </div>
                <div className="form-group ml-4">
                 <label for="ExampleInputMedicineName">Vat A/C</label><small className="req ml-2 text-danger">*</small>
                     <input type="text" name="" className="form-control "/>
                 </div>
                 <div className="form-group ml-4">
                 <label for="ExampleInputMedicineName">Medicine Photo</label>
                 <div>
                 <input type="file" className=" " placeholder="( JPG | JPEG | PNG )"/></div>
                </div>
             </div>
             <div className="form-group">
                 <label for="note">Note</label>
                 <textarea className="form-control" rows="2"></textarea>
             </div>
             <button type="submit" className="form-control col-sm-2 float-right bg-primary">Save</button>
          </div>
        </div>
    )
}