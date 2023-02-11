const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const isArtist = require("../middlewares/isArist")

const{
    getAllAlbums,
    getArtistAlbums,// get by user id (artist id)
    addAlbum,
    getAlbumById,
    deleteAlbum,// delete by id
    addSongToAlbum,//here we are working only with the song id 
    removeSongFromAlbum//here we are working only with the song id 
} = require("../controllers/AlbumsControllers");

router.get("/getAllAlbums",isAuth,isArtist, getAllAlbums);//doesn't need nothing
router.get("/getArtistAlbums",isAuth,isArtist, getArtistAlbums)//the request headers needs a artistid as a key and artist id as its value 
router.post("/addAlbum",isAuth,isArtist, addAlbum)// the request body needs an albumName and the artistId and needs a songs array that contains one or multiple songs as the example below 
router.get("/getAlbumById/:albumid",isAuth,isArtist, getAlbumById)
router.delete("/deleteAlbum/:albumid",isAuth,isArtist, deleteAlbum)
router.put("/addSongToAlbum/:albumid",isAuth,isArtist, addSongToAlbum)
router.put("/removeSongFromAlbum/:albumid",isAuth,isArtist, removeSongFromAlbum)

module.exports = router;


// {
//     "albumName":"example",
//     "artistId":"°0439814random",
//     "songs":[
//         {}
//     ]
// } // to be completed


