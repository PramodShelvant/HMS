import React from 'react';
const departments= [
   {
     name:'ENT',
     icon:'https://www.omhospital.org/wp-content/uploads/2016/02/ENT.jpg'
   },
   {
     name:'General Surgery',
     icon:'https://college.mayo.edu/media/mccms/content-assets/academics/residencies-and-fellowships/general-surgery-residency-florida/6c3afd388fbd4963b50840def879c6ba.jpg'
   },
   {
     name:'Dermatalogy',
     icon:'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1705506.jpg'
   },
   {
     name:'Urology',
     icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpata5N2OQPaE6C-5UX_aOk9cSIGg5QQ7wGl3AyMuyUQuxNVCQDg&s'
   },
   {
     name:'Radiology',
     icon:'https://www.bcmch.org/uploads/photo/radiology-img.jpg'
   },
   {
     name:'Nueclear Medicine',
     icon:'https://aerb.gov.in/images/2018/09/10/pet-ct.jpg'
   },
   {
     name:'Cosmetology',   
     icon:'https://uploads.sarvgyan.com/2016/04/Cosmetology.jpg'
   },
   {
     name:'Dental Surgery',
     icon:'https://www.interdent.com/gentle-dental/wp-content/uploads/sites/2/2017/10/bigstock-Shot-of-a-young-woman-with-den-13183415.jpg'
   },

   {
     name:'Heart Center',
     icon:'https://www.imeche.org/images/default-source/pe-news/shutterstock_1037094721-copy.jpg?sfvrsn=0'
   },
   {
     name:'Cancer',
     icon:'https://www.cancertodaymag.org/PublishingImages/issues/2018%20Summer/3-from-cold-virus-to-cancer-fighter-1500-WEB.jpg'
   },
   {
     name:'Nuero Science',
     icon:'https://www.mcgill.ca/neuroscience/files/neuroscience/images/iStock_5809739_403px.jpg'
   },
   {
     name:'Bones & Joints',
     icon:'https://www.hindikhabar.com/photo/180408022938.jpg'
   }
   
 ];
 export default ()=>
<React.Fragment>
<div class="bg-white container pb-5" style={{paddingTop:90+'px'}}  id="department">
 <div class="h1 text-center pb-4">Our Departments</div>
  
 <div class="row pl-md-5">
 {departments.map((item)=>
  <div class="col-sm-12 col-md-6 col-lg-4 h4 m-0 p-0" style={{minWidth:300+'px'}}><img class="img-fluid m-3" src={item.icon} style={{height:50+'px',width:50+'px',borderRadius:50+'%'}} alt='no img'/>{item.name.toUpperCase()}</div>)}
 </div>
 </div>
 
</React.Fragment>