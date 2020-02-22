export const Admin=[
  {
    icon:'fa fa-user',
    name:'Registration',
    url:'appointment',
    id:'#addRegistration',
    col:['patientName','appointmentNo','date','mobileNumber','gender','doctor','source','appointmentStatus'],
    submenu:[
      {
        icon:'fa fa-stethoscope',
        name:'Receptionist',
        id:'#bookappointment',
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
        url:'operationtheatre',
      col:['patientId','operationName','operationType','operationDate','appliedCharge','standardCharge','code','height','weight','bp','selectCtegory','tpa','otAssistant','otTechnician','anesthetist','anesthetistType','consultantDoctor','assConsultant1','assConsultant2'],
      id:'#AddOpdPatient',
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
    id:'#AddOpdPatient',
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
    
    id:'#AddipdPatient',
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
    id:'#TestReport',
    col:['testName','shortName','testType','code','categoryName','subCategory','reportDays','chargeCategory','standardCharge'],
 
   }
];



  
