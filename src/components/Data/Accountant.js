
const Accountant=[
    {
        name:"Front Office",
        icon:"fa fa-building",
        url:"appointment",
        col:['patientName','appointmentNo','date','mobileNumber','gender','doctor','source','appointmentStatus'],
        sidebtn:[
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#bookappointment',
            name:'Add Appointment',
          } ]       
    },
    {
        name:"OPD-Out Patient",
        icon:"fa fa-stethoscope",
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
        name:"IPD - In Patient",
        icon:"fa fa-bed",
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
        name:"Pharmacy",
        icon:"fa fa-medkit",
        url:'medician',
       col:['medicineName','medicineCategory','medicineCompany','medicineComposition','medicineGroup','unit','minLevel','reOrderLevel','vat','packing','note','vatAc','MedicinePhoto'],
        sidebtn:[
          {
            
            className:'btn btn-light ml-1 btn-sm',
            id:'#Medicines',
            name:'Medicine',
            type:"Link",
            col:['Name','PatientId','Gender','Phone','Consulatant'],
            sidebtn:[
              
              {
                className:'btn btn-light ml-1 btn-sm',
                id:'#DishchargedPatient',
                type:'Link',
                name:'Purchase',
                col:['Name','PatientId','Gender','Phone','Consulatant']
              }]
            }
            ]
    
        
    },
    {
        name:"Pathology",
        icon:"fa fa-flask",
        url:'pathology',
        col:['testName','shortName','testType','categoryName','unit','subCategory','method','reportDays','chargeCategory','code','standardCharge'],
        sidebtn:[
         
          {
            className:'btn btn-light ml-1 btn-sm',
            id:'#AddPathologyTest',
            type:'Link',
            name:'Test Report',
            col:['testname','shortname','testtype','category','subcategory','method','reportdays','charge']
          }]
       
    },
    {
        name:"Radiology",
        icon:'fas fa-microscope',
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
        name:"Operation Theatre",
        icon:'fa fa-cut',
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
        name:"Blood Bank",
        icon:"fa fa-tint",
        url:"",
        col:["Blood Group","Status(in bags)"],
        
    }
] 
export {Accountant};