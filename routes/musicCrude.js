const express = require("express");
const router = express.Router();
// add a song to a playlist 
// remove a song from a playlist 
// get song by id
// get all songs
// removeSongFromPlaylist,
//     getSongById,
//     getAllSongs

const {
    addSongToPlaylist,
    removeSongFromPlaylist,
    getSongById,
    getAllSongs
    
}= require("../controllers/MusicControllers")
const isAuth = require("../middlewares/isAuth");

router.put("/addSongToPlaylist"  ,addSongToPlaylist)
router.put("/removeSongFromPlaylist",removeSongFromPlaylist)
router.get("/getSong/:songid",getSongById)
router.get("/getAllSongs",getAllSongs)
module.exports = router;
