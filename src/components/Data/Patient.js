export const Patient=[
    {
      icon:'fa fa-user',
      name:'My Appointments',
      url:'appointment',
      col:['patientName','appointmentNo','date','mobileNumber','gender','doctorId','source','appointmentStatus'],
      
      sidebtn:[
        {
          className:'btn btn-light ml-1 btn-sm',
          id:'#bookappointment',
          name:'Add Appointment',
        },]
     },
     {
      icon:'fa fa-stethoscope',
      name:'OPD',
      url:'opdoutpatient',
      col:['opdId','appointmentDate','caseType','casuality','symptoms','consDoctor','standardCharge','appliedCharge','paymentMode','note'],
      sidebtn:[
        {
          className:'btn btn-light ml-1 btn-sm',
          id:'#AddOpdPatient',
          type:"Link",
          name:'Visits'
        },
        {
            className:'btn btn-light ml-1 btn-sm',
            id:'#AddOpdPatient',
            type:"Link",
            name:'Diagnosis'
          },
        

      ]
  
     },
     {
      icon:'fa fa-bed',
      name:'IPD',
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
      icon:'fa fa-flask',
      name:'Pathology',
      url:'pathology',
      col:['testName','shortName','testType','categoryName','unit','subCategory','method','reportDays','chargeCategory','code','standardCharge'],
      sidebtn:[
        {
          className:'btn btn-light ml-1 btn-sm',
          id:'#AddPathologyTest',
          name:'Test Report',
          type:'Link',
          col:['testname','shortname','testtype','category','subcategory','method','reportdays','charge']
        }]
     },
     {
      icon:'fas fa-microscope',
      name:'Radiology',
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
     },
     {
      icon:'fa fa-cut',
      name:'Operation Theatre',
      url:'operationtheatre',
      col:['patientId','operationName','operationType','operationDate','appliedCharge','standardCharge','code','height','weight','bp','selectCtegory','tpa','otAssistant','otTechnician','anesthetist','anesthetistType','consultantDoctor','assConsultant1','assConsultant2'],
      sidebtn:[
        {
          className:'btn btn-light ml-1 btn-sm',
          id:'#AddOTPatient',
          name:'Add Patient'
        }]
     }
  ];
    
  