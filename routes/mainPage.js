const express = require("express");

const{
    getArtistAlbums,
    addAlbum,
    deleteAlbum,
    updateAlbum,
} = require("../controllers/AlbumsControllers");

const{
    getUserPlaylists,//filter 
    addPlaylist,
    deletePlaylist,//findoneandDelete
    updatePlaylist,//findoneandupdate
} = require("../controllers/PlaylistsControllers");


const router = express.Router();
const isAuth = require("../middlewares/isAuth");

router.post("/addPlaylist",  addPlaylist);
router.get("/getPlaylists/:uID", getUserPlaylists);
module.exports = router;











    // const {
//     getAllMusic,
//     getMusicByName,
// } = require("../controllers/MusicControllers");

// const {
//     addProduct,
//     deleteProduct,
//     updateProduct,
//     getProductById,
//     getProducts,
//   } = require("../controllers/productsControllers");
    
  
//   router.delete("/deleteProduct/:productId", isAuth, deleteProduct);
  
//   router.put("/updateProduct/:productId", isAuth, updateProduct);
  
//   router.get("/getProductById/:productId", isAuth, getProductById);
  
//   router.get("/", getProducts);
  
//   module.exports = router;