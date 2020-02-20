export const Admin=[
  {
    icon:'fa fa-user',
    name:'Registration',
    url:'appointment',
    id:'#Add',
    col:['patientName','appointmentNo','date','mobileNumber','gender','doctor','source','appointmentStatus'],
    submenu:[
      {
        icon:'fa fa-stethoscope',
        name:'Receptionist',
        url:'appointment',
        col:['patientName','appointmentNo','date','mobileNumber','gender','doctor','source','appointmentStatus'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#addRegistration',
            name:'New Registration'
          }
        ]
    
       },
       {
        icon:'fa fa-stethoscope',
        name:'Docter',
        url:'opdoutpatient',
        col:['name','appointmentDate','caseType','casuality','symptoms','bp','height','weight','tpa','consDoctor','standardCharge','appliedCharge','paymentMode','note'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#addRegistration',
            name:'new Registration'
          }
        ]
    
       }
     ]
   },
   {
    icon:'fa fa-stethoscope',
    name:'Add Service',
    url:'opdoutpatient',
    col:['name','appointmentDate','caseType','casuality','symptoms','bp','height','weight','tpa','consDoctor','standardCharge','appliedCharge','paymentMode','note'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#AddOpdPatient',
        name:'Add Patient'
      }
    ]

   },
   {
    icon:'fa fa-bed',
    name:'Docter Details',
    url:'inpatient',
    col:['height','weight','bp','symptoms','note','appointmentDate','caseType','casulity','oldPatient','tpa','creditLimit','consultantDoctor','reference','bedGroup','bedNumber'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#AddipdPatient',
        name:'Add Patient'
      },]
   },
   {
    icon:'fas fa-microscope',
    name:'track receptinist',
    url:'rediology',
    col:['testName','shortName','testType','code','categoryName','subCategory','reportDays','chargeCategory','standardCharge'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#TestReport',
        name:'Test Report',
        type:'Link',
        col:['testname','shortname','testtype','category','subcatagory','method','reportdays','charge']
      }]
 
   }
];



  
