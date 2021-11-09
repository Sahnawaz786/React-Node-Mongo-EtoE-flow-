const stdDataValidation = (data) =>{
   let error={};
   if(!data.name){
       error.name = "Pls Enter the Name";
   }else{
       if(data.name.length < 5){
           error.name = "Pls Enter Name Min 5 character";
       }
   }

   if(!data.rno){
       error.rno = "Pls Enter the RollNo";
   }

   if(!data.address){
       error.address = "Pls Enter the Address";
   }

   return error;
}

export default stdDataValidation;