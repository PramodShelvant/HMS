import React from 'react'
export default ()=>{
    return(
        <div className="card w-75 mx-auto m-4">
            <div className="card-header bg-primary">Add Test Details
                <button type="button" class="close" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button>
            </div>
            <div class="card-body">
                <div className="d-flex justify-content-between">
                    
                        <div className="form-group">
                            <div>Test Name <small className="req text-danger">*</small>
                            <input type="text"className="form-inline"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>Short Name <small className="req text-danger">*</small>
                            <input type="text"className="form-inline"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>Test Type<small className="req text-danger">*</small>
                            <input type="text"className="form-inline"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div>Category Name <small className="req text-danger">*</small>
                            <select id="input"className="form-inline">
                          <option selected>Select</option>
                          <option>X-Ray</option>
                          <option>Sonography</option>
                          <option>CT-Scan</option>
                          <option>Molecular Diagnostics</option>
                          <option>MRI</option>
                          <option>ECG</option>
                        </select>                            
                        </div>
                        </div>
                 </div>
                 <div className="d-flex justify-content-between">
                    
                    <div className="form-group">
                        <div>Sub Category <small className="req text-danger">*</small>
                        <input type="text"className="form-inline"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>Report Days <small className="req text-danger">*</small>
                        <input type="text"className="form-inline"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div>Charge Category<small className="req text-danger">*</small>
                        <select id="input"className="form-inline">
                          <option selected>Select</option>
                          <option>Clinical Microbiology</option>
                          <option>Clinical Chemistry</option>
                          <option>Hemotology</option>
                          <option>Molecular Diagnostics</option>
                        </select> 
                        </div>
                    </div>
                    <div className="form-group">
                        <div>Code <small className="req text-danger">*</small>
                        <select id="input"className="form-inline">
                      <option selected>Select</option>
                      <option>Clinical Microbiology</option>
                      <option>Clinical Chemistry</option>
                      <option>Hemotology</option>
                      <option>Molecular Diagnostics</option>
                   </select> 
                                          
                    </div>
                    
                    </div>
                    <div className="form-group">
                        <div>Standard Charge($)<small className="req text-danger">*</small>
                        <input type="number"className="form-inline"/>
                        </div>
                    </div>   
             </div>
             <div className="d-flex float-right">
             <button type="submit"className="form-control bg-primary">Save</button>
            </div>
            </div>
        </div>
    
    )
}