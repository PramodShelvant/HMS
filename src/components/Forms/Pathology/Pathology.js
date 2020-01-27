import React from 'react'
export default ()=>{
    return(
        <div class="card w-75 mx-auto m-4">
            <div class="card-header bg-primary"> Add Test Details
              <button type="button" class="close " aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>
            </div>
           <div class="card-body">
               <div className="d-flex justify-content-between">
                  <div className="form-group">
                      <div>Test Name <small className="req text-danger">*</small></div>
                      <input type="text" class="form-inline"/>
                  </div>
                  <div className="form-group">
                      <div>Short Name <small className="req text-danger">*</small></div>
                      <input type="text" class="form-inline"/>
                  </div>
                  <div className="form-group">
                      <div>Test type<small className="req text-danger">*</small></div>
                      <input type="text" class="form-inline"/>
                  </div>
                  <div className="form-group">
                      <div>Category Name<small className="req text-danger">*</small></div>
                      <select id="input"className="form-inline">
                          <option selected>Select</option>
                          <option>Clinical Microbiology</option>
                          <option>Clinical Chemistry</option>
                          <option>Hemotology</option>
                          <option>Molecular Diagnostics</option>
                        </select>  
                  </div>
              </div>
              <div className="d-flex justify-content-between">
                  <div className="form-group">
                      <div>Unit</div>
                      <input type="text" class="form-inline"/>
                  </div>
                  <div className="form-group">
                      <div>Sub Category</div>
                      <input type="text" class="form-inline"/>
                  </div>
                  <div className="form-group">
                      <div>Method</div>
                      <input type="text" class="form-inline"/>
                  </div>
                  <div className="form-group">
                      <div>Report Days</div>
                      <input type="text" class="form-inline"/>
                  </div>
              </div>
              <div className="d-flex justify-content-between ">
              <div className="form-group">
                      <div>Charge Category<small className="req text-danger">*</small></div>
                      <select id="input"className="form-inline">
                          <option selected>Select</option>
                          <option>Clinical Microbiology</option>
                          <option>Clinical Chemistry</option>
                          <option>Hemotology</option>
                          <option>Molecular Diagnostics</option>
                        </select>  
                  </div>
                  <div className="form-group">
                      <div>Code <small className="req text-danger">*</small></div>
                      <select id="input"className="form-inline">
                          <option selected>Select</option>
                          <option>Clinical Microbiology</option>
                          <option>Clinical Chemistry</option>
                          <option>Hemotology</option>
                          <option>Molecular Diagnostics</option>
                        </select>
                  </div>
                  <div className="form-group ">
                      <div>Standard Charge ($)<small className="req text-danger">*</small></div>
                      <input type="text" class="form-inline"/>
                  </div>
                  <div className="form-group " style={{opacity:0}}>
                      <div>Test Name</div>
                      <input type="text" class="form-inline"/>
                  </div>
              </div>
              <div className="form-group float-right ">
                      <button type="submit"className="form-control bg-primary ">Save</button>
                  </div>
         </div>
     </div>
    )
}