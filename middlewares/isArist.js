
const isArtist = async (req, res, next)=>{
    const role = req.headers["role"]?req.headers["role"]:null

    if(role!=="artist"||role!=="Artist"){
        return res.status(401).json({ msg: "You are not an artist " });
    }
    next();

}
module.exports = isArtist;