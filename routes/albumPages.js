const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const isArtist = require("../middlewares/isArist")
// get album by id 
const{
    getAllAlbums,
    getArtistAlbums,// get by user id (artist id)
    addAlbum,
    deleteAlbum,// delete by id
    addSongToAlbum,//here we are working only with the song id 
    removeSongFromAlbum//here we are working only with the song id 
} = require("../controllers/AlbumsControllers");

router.get("/getAllAlbums", getAllAlbums);
router.get("/getArtistAlbums",getArtistAlbums)
router.post("/addAlbum",addAlbum)
router.delete("/deleteAlbum/:albumid",deleteAlbum)
router.put("/addSongToAlbum/:albumid",addSongToAlbum)
router.put("/removeSongFromAlbum/:albumid",removeSongFromAlbum)

module.exports = router;




