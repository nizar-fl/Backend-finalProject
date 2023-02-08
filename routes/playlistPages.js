const express = require("express");

const{
    getArtistAlbums,
    addAlbum,
    deleteAlbum,
    updateAlbum,
} = require("../controllers/AlbumsControllers");

const{
    getUserPlaylists,
    addPlaylist,
    deletePlaylist,
    updatePlaylist,
} = require("../controllers/PlaylistsControllers");


const router = express.Router();
const isAuth = require("../middlewares/isAuth");

router.post("/addPlaylist", isAuth, addPlaylist);
router.get("/getUserPlaylists/:userID", getUserPlaylists);
router.delete("/deletePlaylist/:playlistId" , deletePlaylist)
router.put("/updatePlaylist/:playlistId", updatePlaylist)
router.get("/getPlaylist/:playlistID" , getplaylist)
module.exports = router;











    


  
