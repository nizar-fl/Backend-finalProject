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
    getplaylist
} = require("../controllers/PlaylistsControllers");

// get a playlist 
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const isArtist = require("../middlewares/isArist")

router.post("/addPlaylist", addPlaylist);
router.get("/getUserPlaylists/:userID", getUserPlaylists);
router.delete("/deletePlaylist/:playlistId" , deletePlaylist)
router.put("/updatePlaylist/:playlistId", updatePlaylist)
router.get("/getPlaylist/:playlistID" , getplaylist)
module.exports = router;











    


  
