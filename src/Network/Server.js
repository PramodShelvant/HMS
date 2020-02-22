const Getdata=async(url='')=>{
    try{
     const response= await fetch(url)      
     return await response.json();
      }catch(err){
    console.log(err);
      }
    }
    
    const Postdata=async(url = '', method='POST',data = {})=> {
      alert(JSON.stringify(data))
      const response = await fetch('http://hospitalmanagemapp.gbfpue2n5p.us-east-1.elasticbeanstalk.com/'+url, {
        method:method,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    }
    const PostFormdata=async(url = '', method='POST',data = {})=> {
      
      var formData = new FormData();
      Object.keys(data).map(item=>formData.append(item,data[item]));
     
      const response = await fetch('http://hospitalmanagemapp.gbfpue2n5p.us-east-1.elasticbeanstalk.com/'+url, {
        method:method,
        headers: {
         // 'access-control-allow-origin':'*'
        },
        body: formData
      });
      return await response.json();
    }
    
    export  {Getdata,Postdata,PostFormdata}