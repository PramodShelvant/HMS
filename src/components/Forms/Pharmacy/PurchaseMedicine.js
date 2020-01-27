import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default () =>{
    const [medicine,setMedicine]=useState([{
        id:Math.floor(Math.random()*100+1),
medicineCategory:'',
medicineName:'',
batchNum:''
    }])
    const remove=(index)=>{
        //medicine.splice(index,1)
        console.log(medicine.splice(index,1));
        
    }






    return(
        <>
        <div className="card  mx-4 mt-4 bg-primary">
        <div class=" card-header form-inline  p-1 my-1 border-0">
        <select id="input" class="form-inline col-md-3 ml-2">
        <option selected>Select Patient</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        </select>
        
       <label class="form-check-label ml-auto" for="inlineFormCheck">Purchase Date</label>
       <div className="mx-4">
         <DatePicker className="form-control"style={{width:'100% !important'}} selected={new Date()}/>
         <button type="button" class="close ml-3" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div> 
     </div>
     <div className="card-body p-0 m-0 bg-light  ">
         <div className="container-fluid ">
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
                         <button onClick={()=>setMedicine([...medicine,{
                         id:Math.floor(Math.random()*100+1),
                          medicineCategory:'',
                          medicineName:'',
                         batchNum:''
                         }])}><i class="fas fa-plus text-primary border-0"></i></button></td>
                     </tr>
                 </thead>
                 <tbody className="border-bottom">
                     {
                         medicine.map((item,index)=> <tr>
                         <td className=" " >
                            <select id="input" name='medicineCategory' value={item.medicineCategory} className="form-inline" style={{ width: "120px" }}>
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
                         </td>
                         <td className="">
                            <select id="input" name='medicineName' class="form-inline" style={{ width: "130px" }}>
                                <option selected>Select</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                         </td>
                         <td className="">
                            <select id="input" name='batchNum' className="form-inline " style={{ width: "70px" }}>
                                <option selected></option>
                                <option></option>
                            </select>
                         </td>
                         <td className="">
                         <input type="text" name='expiryDate'  className="form-inline" style={{ width: "80px" }}/>
                         </td>
                         <td className="">
                         <input type="text" name='MRP'  className="form-inline" style={{ width: "50px" }}/>
                         </td>
                         <td className="">
                         <input type="text" name='batchamt'  className="form-inline" style={{ width: "70px" }}/>
                         </td>
                         <td className="">
                         <input type="text" name='saleprice' className="form-inline" style={{ width: "90px" }}/>
                         </td>
                         <td className="">
                         <input type="text" name='pckqty' className="form-inline" style={{ width: "90px" }}/>
                         </td>
                         <td className="">
                         <input type="text" name='quantity' className="form-inline" style={{ width: "90px" }}/>
                         </td>
                         <td className="">
                         <input type="text" name='purchaseprice' className="form-inline" style={{ width: "90px" }}/>
                         </td>
                         <td className="">
                         <input type="text" name='amount' className="form-inline" style={{ width: "90px" }}/>
                         </td>
                         <td>
                             <button value={item} onClick={(e)=>setMedicine(medicine=>medicine.filter((name)=>name!=item))}><i class="fas fa-minus-circle text-danger"></i></button>
                         </td>


                     </tr>
                    
                    )
                     }
                 </tbody>
                 </table>
                 
         </div>
         <div className="row ">
             <div className="col-sm-6 ">
                  
                <div className="form-group ml-4">
                        <lable className="">Note</lable>
                        <textarea className="form-control my-2" rows="3"></textarea>
                    </div>
                    
                <div className="form-group ml-4">
                        <lable className="">Attach Document</lable>
                        <input type="file" className="form-control my-2"/>
                    </div>
             </div>
             <div className="col-sm-6">
                <div className="d-flex justify-content-between">
                    <div class="ml-4 ">
                     Total($)
                     </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}}/>
                     </div>
               </div>
              <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Discount($)
                   </div>
                   <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black',width:'89px'}} placeholder="Discount%"/>
                   </div>
                    <div class="d-flex ">
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}}/>
                </div>
                </div>
               <div className="d-flex justify-content-between my-4">
                   <div class=" ml-4 ">
                      Tax($)
                   </div>
                   <div class="d-flex ">
                      <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black',width:'50px'}} placeholder="tax%"/>
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
                    <input type="number" className=" bg-light border-top-0 border-left-0 border-right-0" style={{border:'1px solid black'}}/>
                   </div>
                </div>
                <div className="d-flex float-right p-2">
                <button type="submit" class="btn btn-outline-primary">Calculate</button>
                </div>
             </div>
</div>
</div>
</div>
    
    
      </>
      
   )
}