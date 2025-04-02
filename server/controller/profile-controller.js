
const Profile = require('../model/ProfileSchema');


const addProfile = async( req, res)=>{
    const {name , email , location , photo , description} = req.body;
    try {
        const newProfile = new Profile({
            name , email , location , photo, description
        });
        await newProfile.save();
        res.status(201).json({ message: "Profile added successfully", profile: newProfile });
    } 
    catch (error) {
         console.log(error);
         res.status(500).json({message:"server error, please try again later"});
    }
}


const removeProfile = async (req,res)=>{
  const  profile = await Profile.findById({_id:req.params.id});
  if(!profile){
    return req.send(404).send("not found");
  }
  const deletedProfile =  await Profile.findByIdAndDelete(req.params.id);
  res.send("something went wrong");
}


const updateProfile = async(req, res)=>{
    try {
        const updateProf = await Profile.updateOne({
            _id:req.params.id
        },{
            $set: req.body
        })
        res.send(updateProf)
    } catch (error) {
       console.log(error);
       res.send('cannot update');        
    }
}

const getAllProfile = async(req,res)=>{
   
    try {
         const profiles = await Profile.find({});
         res.send(profiles);
    } catch (error) {
        res.send(error);
    }

}

const profile = async(req, res)=>{
    try {
        const userProfiles = await Profile.findById({ _id: req.params.id})
        res.send(userProfiles);
    } catch (error) {
        res.send(error);
    }
}
module.exports = {addProfile ,removeProfile , updateProfile , getAllProfile , profile};