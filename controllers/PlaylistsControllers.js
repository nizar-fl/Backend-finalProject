const playlist = require("../models/playlistSchema");

const getUserPlaylists = async (req ,res )=>{
  const { userID } = req.params
  console.log(userID)
  try {
    playlist.find((err, playlists) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error accessing collection");
      } else {
        res.send(playlists);
      }
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

const addPlaylist = async (req , res)=>{
    try {
    const newPlaylist = new playlist({ ...req.body});
    newPlaylist.save((err) => {
      if (err) {
        return res.status(500).json({ msg: "Something went wrong or some informations are missing" });
      }
      res.status(201).json({ msg: "newPlaylist created successfully" });
    });
        
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }

}
module.exports = {
  addPlaylist,
  getUserPlaylists
};