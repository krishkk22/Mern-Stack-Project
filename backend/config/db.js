import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://kkapadia0202:Cuckoo02@crave.a0zij.mongodb.net/?retryWrites=true&w=majority&appName=Crave/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
