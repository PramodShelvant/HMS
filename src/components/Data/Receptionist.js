export const Receptionist=[
  {
    icon:'fa fa-user',
    name:'Front Office',
    url:'appointment',
    col:['patientName','appointmentNo','date','mobileNumber','gender','doctor','source','appointmentStatus'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#bookappointment',
        name:'Add Appointment',
      },
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#Visitor',
        name:'Visitor Book',
        type:"Link",
        url:'visitorlist',
        col:['purpose','name','phone','date','inTime','outTime','action'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#Visitor',
            name:'Add Visitor'
          }
        ]
 
      },
      {
        className:'btn btn-light btn-sm ml-1',
        id:'#calllog',
        name:'Call Log',
        type:'Link',
        url:'phonecall',
        col:['name','date','phone','description','nextFollowUpDate','callDuration','callType','note'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#calllog',
            name:'Add call log'
          }]
      },
      {
        className:'btn btn-light btn-sm ml-1',
        id:'#PostalRcv',
        name:'Postal Recieve',
        url:'postalrecieve',
        type:'Link',
        col:['fromTitle','referenceNo','toTitle','date','address','attachDocument'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#PostalRcv',
            name:'Add Receive'
          }]
      },
      {
        className:'btn btn-light btn-sm ml-1',
        id:'#PostalDsp',
        name:'Postal Dispatch',
        url:'postaldispatchlist',
        type:'Link',
        col:['fromTitle','referenceNo','toTitle','date','address','attachDocument'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#PostalDsp',
            name:'Add dispatch'
          }]
      },
      {
        className:'btn btn-light btn-sm ml-1',
        id:'#Complain',
        name:'Complain',
        url:'complaintype',
        type:'Link',
       col:['complainBy','source','date','phone','description','actionTaken','assigned','note','attachedDocument'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#Complain',
            name:'Add complain'
          }]
      }
    ]
   },
   {
    icon:'fa fa-stethoscope',
    name:'OPD',
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
    name:'IPD',
    url:'inpatient',
    col:['height','weight','bp','symptoms','note','appointmentDate','caseType','casulity','oldPatient','tpa','creditLimit','consultantDoctor','reference','bedGroup','bedNumber'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#AddipdPatient',
        name:'Add Patient'
      },
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#DishchargedPatient',
        name:'Dishcharge Patient',
        type:'Link',
        col:['name','patientId','gender','phone','consulatant','admissionDate','dischargedDate','charges','otherCharges','tax','discount','paidAmount']
      }

    ]
   },
   {
    icon:'fa fa-medkit',
    name:'Pharmacy',
    url:'medician',
    col:['medicineName','medicineCategory','medicineCompany','medicineComposition','medicineGroup','unit','minLevel','reOrderLevel','vat','packing','note','vatAc','MedicinePhoto'],
    sidebtn:[
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#GenerateBill',
        name:'Generate Bill'
      },
      {
        className:'btn btn-light ml-1 btn-sm',
        id:'#Medicines',
        name:'Medicine Stock',
        type:"Link",
        url:'medician1',
        col:['medicineName','medicineCategory','medicineCompany','medicineComposition','medicineGroup','unit','minLevel','reOrderLevel','vat','packing','note','vatAc','MedicinePhoto'],
         sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#importmedicine',
            name:'Import Medicine'
          },
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#addmedicine',
            name:'Add Medicine',
           
          },
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#DishchargedPatient',
            name:'Purchase',
            type:'Link',
            col:['Name','PatientId','Gender','Phone','Consulatant'],
            sidebtn:[
              {
                className:'btn btn-light ml-1 btn-sm',
                id:'#purchasemedicine',
                name:'Purchase Medicine'
              }]
                        }
 
        ]
      }

    ]

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
        name:'Add Pathology Test'
      },
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
        id:'#AddRadiologyTest',
        name:'Add Radiology Test'
      },
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
   },
 
   {
    icon:'fa fa-ambulance',
    name:'Ambulance',
    url:'ambulanceDetails',
    col:['vehicleno','vehiclemodel','yearmode','drivername','driverlicense','drivercontact','vehicletype']
   },
 
   {
    icon:'fa fa-tint',
    name:'Blood bank',
    url:'bloodBank',
    col:['Blood Group','Status(in bags)','Action']
   }

];
