import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFormik} from 'formik';
import * as  Yup from 'yup';
import {Getdata,PostFormdata} from '../../../Network/Server'
export default () =>{
    const formik = useFormik({
        initialValues:{
            complainType:'',
            source:'',
            complainBy:'',
            phone:'',
            date:new Date(),
            description:'',
            actionTaken:'',
            assigned:'',
            note:'',
            attachedDocument:null

        },
        onSubmit:values=>{alert(JSON.stringify(values,null,2))
            PostFormdata('complaintype/','POST',values).then(data=>console.log(data))},
            validationSchema:Yup.object().shape({
                complainType:Yup.string().required(),
            source:Yup.string().required(),
            complainBy:Yup.string().required(),
            phone:Yup.number(10).required(),
            date:Yup.date().required(),
            description:Yup.string().required(),
            actionTaken:Yup.string().required(),
            assigned:Yup.string().required(),
            note:Yup.string().required(),
            //attachedDocument:null

            })
     })
return(
    <div class="modal fade" id="Complain" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md" role="document">
         <div class="modal-content" role="document">

    <div className="card ">
        <div className="card-header bg-primary">Add Complain
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
        </div>
        
        <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
                <div className="border bg-light">

                <div className="form-row p-2">

                <div className="form-group col-md-6">
                    <label for="complaintype">Complain Type</label>
                    <select id="input" className={`form-control ${(formik.touched.complainType && formik.errors.complainType)?formik.errors:''}`} name='complainType' {...formik.getFieldProps('complainType')}>
                      <option selected>Choose</option>
                      <option>Food Quality</option>
                      <option>Hospital Services</option>
                    </select>
                    <span className='text-danger'>{(formik.touched.complainType && formik.errors.complainType)?formik.errors.complainType:''}</span>
                </div>
                
                <div className="form-group col-md-6">
                    <label for="source">Source</label>
                    <select id="input" className="form-control" name='source' {...formik.getFieldProps('source')}>
                        <option selected>Choose</option>
                        <option>Online Advertising</option>
                        <option>From Visitors</option>
                    </select>
                    <span className='text-danger'>{(formik.touched.source && formik.errors.source)?formik.errors.source:''}</span>
                </div>
            </div>
            </div>
            <div className="border bg-light mt-2">
                <div className="form-row p-2">
                    <div className="form-group col-md-6">
                        <label for="complainby">Complain By</label>
                        <input type="text" className="form-control" id="complain" placeholder="" name='complainBy' {...formik.getFieldProps('complainBy')}/>
                        <span className='text-danger'>{(formik.touched.complainBy && formik.errors.complainBy)?formik.errors.complainBy:''}</span>
                    </div>
                    
                
                    <div className="form-group col-md-6">
                        <label for="complainby">Phone</label>
                        <input type="Number" className="form-control" id="complain" placeholder="" name='phone' {...formik.getFieldProps('phone')}/>
                        <span className='text-danger'>{(formik.touched.phone && formik.errors.phone)?formik.errors.phone:''}</span>
                    </div>
                </div>
                </div>
                <div className="border bg-light mt-2">
                <div className="form-row p-2">
                    <div class="form-group col-md-6">
                       <label for="inputState">Date</label>
                        <div className="w-100 ">
                           <DatePicker selected={formik.values.date} name='date' onChange={(e)=>formik.setFieldValue('date',e)}/>
                           
                        </div> 
                        <span className='text-danger'>{(formik.touched.date && formik.errors.date)?formik.errors.date:''}</span>
                    </div>  
                    
                
                    <div className="form-group col-md-6">
                        <label for="inputCity">Description</label>
                        <textarea className="form-control " rows="3" placeholder="" value="" name='description' {...formik.getFieldProps('description')}>
                        </textarea>
                        <span className='text-danger'>{(formik.touched.description && formik.errors.description)?formik.errors.description:''}</span>
                    </div>    
                </div>
                </div>

                <div className="border bg-light mt-2">
                <div className="form-row p-2">
                    <div className="form-group col-md-6">
                        <label for="Actiontaken">Action Taken</label>
                        <input type="text" className="form-control" name='actionTaken' {...formik.getFieldProps('actionTaken')}/>
                        <span className='text-danger'>{(formik.touched.actionTaken && formik.errors.actionTaken)?formik.errors.actionTaken:''}</span>
                    </div>
                    
                
                    <div className="form-group col-md-6">
                        <label for="Actiontaken">Assigned</label> 
                        <input type="text" className="form-control" name='assigned' {...formik.getFieldProps('assigned')}/>
                        <span className='text-danger'>{(formik.touched.assigned && formik.errors.assigned)?formik.errors.assigned:''}</span>
                    </div>
                </div>
                </div>

                <div className="border bg-light mt-2">
                <div className="form-row p-2">
                    <div className="form-group col-md-6">
                        <label for="note">Note</label>
                        <textarea className="form-control" row="2" name='note' {...formik.getFieldProps('note')}></textarea>
                        <span className='text-danger'>{(formik.touched.note && formik.errors.note)?formik.errors.note:''}</span>
                    </div>
                    
                
                    <div className="form-group col-md-6">
                        <label for="choose">Attach Document</label>
                        <input type="file" class="form-group-input" id="inputGroupFile01" name='attachedDocument' onChange={(e)=>formik.setFieldValue('attachedDocument',e.target.files[0])}/>
                        <span className='text-danger'>{(formik.touched.attachedDocument && formik.errors.attachedDocument)?formik.errors.attachedDocument:''}</span>
                    </div> 
                    </div>
                    </div>
                <button type="submit" class="btn btn-primary mt-2 ">Save</button>
            </form>
        </div>
    </div>
    </div>
    </div>
    </div>
        
    
)
}