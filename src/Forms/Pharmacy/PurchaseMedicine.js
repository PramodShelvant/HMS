import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik ,FieldArray} from 'formik';
import * as Yup from 'yup'
export default () =>{
    
const schema=Yup.object().shape({

    supplierId:Yup.string().required(),
    billNo:Yup.string().required(),
    date:Yup.date().required(),
    //docter:Yup.string().required(),
   // hospitalDocter:Yup.string().required(),
    note:Yup.string().required(),
    medicine:Yup.array().of(Yup.object().shape({
    medicineCategory:Yup.string().required('required'),
    medicineName:Yup.string().required('required'),
    batchNum:Yup.number().required('required'),
    expiryDate:Yup.string().required('required'),
    mrp:Yup.number().required('required'),
    batchamt:Yup.number().required('required'),
    quantity:Yup.number().required('required'),
    packingqty:Yup.number().required('required'),
    purchasePrice:Yup.number().required('required'),
    saleprice:Yup.number().required('required'),
    amount:Yup.number().required('required'),
    })),discount:Yup.number().required('required'),
    tax:Yup.number().required('required'),
    netamount:Yup.number().required('required'),
    //attachDocument:'',
    total:Yup.number().required('required')
 })

   return(
    <Formik initialValues={
        {
            supplierId:'',
            billNo:'',
            date:new Date(),
            docter:'',
            hospitalDocter:'',
            note:'',
            medicine:[{
                    medicineCategory:'',
                    medicineName:'',
                    batchNum:'',
                    expiryDate:'',
                    mrp:'',
                    batchamt:'',
                    quantity:'',
                    packingqty:'',
                    purchasePrice:'',
                    saleprice:'',
                    amount:0,
                }],
                discount:0,
                tax:0,
                netamount:0,
                attachDocument:'',
                total:0,
            }

        }
        validationSchema={schema}
        onSubmit={(values)=>console.log(values)}           > 
        {({values,handleChange,setFieldValue,handleSubmit,errors,touched})=>(   
        <div class="modal fade" id="purchasemedicine" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content" role="document">
        <div className="card ">
        <div class=" card-header form-inline bg-primary p-1  border-0">
        <select id="input" class="form-inline col-md-3 ml-2"  onChange={(e)=>setFieldValue('supplierId',e.target.value)}>
        <option selected>Select supplier</option>
        <option>Asdf</option>
        <option>Bfgh</option>
        <option>Cfgh</option>
        <option>Dfgh</option>
        </select>
        <span className='text-danger'>{touched.supplierId ?errors.supplierId:''}</span>
        <label class="form-check-label ml-auto " for="inlineFormCheck">Purchase Date</label>
        <div className="m-2">
         <DatePicker  style={{width:'100% !important'}} className='form-control'  selected={values.date} onChange={(e)=>setFieldValue('date',e)}/>
         <span className='text-danger'>{touched.date ?errors.date:''}</span>
         <button type="button" class="close mx-4" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> 
        </div> 
        </div>
        <div className="card-body p-0 m-0 bg-light  ">
         <div className="container-fluid ">
         <FieldArray name='medicine'>{arrayhelper=>(
             <table id="myTable" class="table  ">
                 <thead>
                      <tr>
                         <td>Medicine category</td>
                         <td >Medicine Name </td>
                         <td>Batch No</td>
                         <td>Expiry Date</td>
                         <td>MRP($)</td>
                         <td>Batch Amt</td>
                         <td>Sale Price($) </td>
                         <td>Packing Qty</td>
                         <td>Quantity</td>
                         <td>Purchase Price($)</td>
                         <td>Amount</td>
                         <td>
                         <button onClick={()=>arrayhelper.push(
                             {
                                medicineCategory:'',
                                medicineName:'',
                                batchNum:'',
                                expiryDate:'',
                                mrp:'',
                                batchamt:'',
                                quantity:'',
                                packingqty:'',
                               purchasePrice:'',
                                saleprice:'',
                                amount:0,
                              }
                         )}><i class="fas fa-plus text-primary border-0"></i></button></td>
                     </tr>
                 </thead>
                 <tbody className="border-bottom">
                     {
                         values.medicine.map((item,index)=> <tr>
                         <td className=" " >
                            <select id="input" name='medicineCategory' value={values.medicine[index].medicineCategory} onChange={(e)=>setFieldValue(`medicine.${index}.medicineCategory`,e.target.value)} className="form-inline" style={{ width: "120px" }}>
                            <option selected>Select</option>
                            <option>Syrup</option>
                            <option>Capsule</option>
                            <option>Injection</option>
                            <option>Ointment</option>
                            <option>Cream</option>
                            <option>surgical</option>
                            <option>Drops</option>
                            <option>Inhalers</option>
                            </select>
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].medicineCategory:'':''}</span>     
                       
                         </td>
                         <td className="">
                            <select id="input" name='medicineName' class="form-inline" value={values.medicine[index].medicineName} onChange={(e)=>setFieldValue(`medicine.${index}.medicineName`,e.target.value)} style={{ width: "60px" }}>
                                <option selected>Select</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].medicineName:'':''}</span>     
                       
                         </td>
                         <td className="">
                            <select id="input" name='batchNum' className="form-inline " style={{ width: "60px" }} value={values.medicine[index].batchNum} onChange={(e)=>setFieldValue(`medicine.${index}.batchNum`,e.target.value)}>
                                <option selected></option>
                                <option></option>
                            </select>
                            <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].batchNum:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='expiryDate'  className="form-inline" style={{ width: "60px" }} value={values.medicine[index].expiryDate} onChange={(e)=>setFieldValue(`medicine.${index}.expiryDate`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].expiryDate:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='MRP'  className="form-inline" style={{ width: "50px" }} value={values.medicine[index].mrp} onChange={(e)=>setFieldValue(`medicine.${index}.mrp`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].mrp:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='batchamt'  className="form-inline" style={{ width: "70px" }} value={values.medicine[index].batchamt} onChange={(e)=>setFieldValue(`medicine.${index}.batchamt`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].batchamt:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='saleprice' className="form-inline" style={{ width: "60px" }} value={values.medicine[index].saleprice} onChange={(e)=>setFieldValue(`medicine.${index}.saleprice`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].saleprice:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='pckqty' className="form-inline" style={{ width: "60px" }} value={values.medicine[index].packingqty} onChange={(e)=>setFieldValue(`medicine.${index}.packingqty`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].packingqty:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='quantity' className="form-inline" style={{ width: "60px" }} value={values.medicine[index].quantity} onChange={(e)=>setFieldValue(`medicine.${index}.quantity`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].quantity:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='purchaseprice' className="form-inline" style={{ width: "60px" }} value={values.medicine[index].purchasePrice} onChange={(e)=>setFieldValue(`medicine.${index}.purchasePrice`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].purchasePrice:'':''}</span>     
                       
                         </td>
                         <td className="">
                         <input type="text" name='amount' className="form-inline" style={{ width: "60px" }} value={values.medicine[index].amount} onChange={(e)=>setFieldValue(`medicine.${index}.amount`,e.target.value)}/>
                         <span className='text-danger'>{errors.medicine?errors.medicine[index]?errors.medicine[index].amount:'':''}</span>     
                       
                         </td>
                         <td>
                             <button value={item} onClick={()=>arrayhelper.remove(index)}><i class="fas fa-minus-circle text-danger"></i></button>
                         </td>


                     </tr>
                    
                    )
                     }
                 </tbody>
                 </table>
         )}</FieldArray>
         </div>
         <div className="row ">
             <div className="col-sm-6  ">
                  
                <div className="form-group ml-4">
                        <lable className="">Note</lable>
                        <textarea className="form-control my-2" rows="3" value={values.note} onChange={(e)=>setFieldValue('note',e.target.value)}></textarea>
                        <span className='text-danger'>{touched.note ?errors.note:''}</span>
                    </div>
                    
                   <div className="form-group ml-4">
                        <lable className="">Attach Document</lable>
                        <input type="file" className="form-control "  onChange={(e)=>setFieldValue('attachDocument',e.target.files[0])}/>
                    </div>
             </div>
             <div className="col-sm-6">
                <div className="d-flex justify-content-between">
                    <div class="ml-4 ">
                     Total($)
                     </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}} value={values.total} onChange={(e)=>setFieldValue('total',e.target.value)}/>
                    <span className='text-danger'>{touched.total ?errors.total:''}</span>
                     </div>
               </div>
               <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Discount($)
                   </div>
                   <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black',width:'89px'}} placeholder="Discount%" value={values.discount} onChange={(e)=>setFieldValue('discount',e.target.value)}/>
                    <span className='text-danger'>{touched.discount ?errors.discount:''}</span>
                   </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}}  />
                </div>
                </div>
                <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Tax($)
                   </div>
                   <div class="d-flex ">
                      <input type="number" value={values.tax} onChange={(e)=>setFieldValue('tax',e.target.value)} className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black',width:'50px'}} placeholder="tax%"/>
                      <span className='text-danger'>{touched.tax ?errors.tax:''}</span>
                    </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}}/>
                   </div>
                </div>
                <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Net Amount($)
                   </div>
                    <div class="d-flex ">
                    <input type="number" value={values.netamount} onChange={(e)=>setFieldValue('netamount',e.target.value)} className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}}/>
                    <span className='text-danger'>{touched.netamount ?errors.netamount:''}</span>
                   </div>
                </div>
                <div className="d-flex float-right p-2">
                <button onClick={handleSubmit} class="btn btn-outline-primary">Calculate</button>
                </div>
               </div>
</div>
</div>
</div>
    </div>
    </div>
    </div>
    
    )} 
      </Formik>
   )
}