const Album = require("../models/albumschema")
const Song = require("../models/SongSchema")

const getAllAlbums = async (req,res)=>{
    try {
        Album.find((err,Albums)=>{
            if(err){
                res.status(400).json({msg:"something went wrong"})
            }
            res.status(200).json(Albums)
        })
        
    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }

}
const getArtistAlbums = async (req,res)=>{
    const artistId = req.headers["artistid"]
    try {
        Album.find({artistId:artistId},(err,ArtistsAlbum)=>{
            if(err){
                res.status(400).json({msg:"something went wrong"})
            }
            res.status(200).json(ArtistsAlbum)
        })
        
    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }

}
const addAlbum = async(req,res)=>{
    try {
        const newAlbum = new Album({...req.body})
        await newAlbum.save((err)=>{
            if(err){
                res.status(500).json({msg:"something went wrong or some infomatins are missing"})
            } 
            
            })
           
        
        
    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }
    try {
        const songs = req.body.songs
        console.log("hgemmmmmmmmmmmmmmmm")
            songs.forEach(element => {
                const newsong = new Song({...element})
                newsong.save((err)=>{
                    if(err){
                        res.status(500).json({msg:"something went wrong or some infomatins are missing"})
                    }
                    
                })
                res.status(201).json({msg:"album created succesfully"})// i still have problems with the error of sending multiple response to a single rquest 
                
                
                
            })
        
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}
const deleteAlbum = async (req,res)=>{
    const albumId= req.params.albumid
    // const Artistid = req.headers["Artistid"] //i may add a verification middleware to check if its the artist that is sending the request 
    try {
        const findAlbum = Album.findById(albumId)
        if (!findAlbum){
            res.status(400).json({msg:"Album does not exist"})
        }
        console.log(albumId)
        Album.deleteOne({_id: albumId},(err) => {
            if (err) {
              return res.status(500).json({ msg: "Something went wrong" });
            }
            res.status(200).json({ msg: "Album deleted" });
          })    

    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }
}

const addSongToAlbum = async (req,res)=>{
    const songId = req.headers["songid"]
    const albumid = req.params
    try {
        console.log(songId)
        const findSong = Song.findById(songId)
        if (!findSong){
            res.status(400).json({msg:"song does not exist"})
        }
        const findAlbum = Album.findById(albumid)
        if (!findAlbum){
            res.status(400).json({msg:"Album does not exist"})
        }
        Album.updateOne(
            {_id:albumid},{ $push: { songsIds: songId } },(err)=>{
                if (err) {
                  return res.status(500).json({ msg: "Something went wrong " });
                }
                
                res.status(200).json({msg:"song added to the Album"})}
        )

        
    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }
}
const removeSongFromAlbum = async (req,res)=>{
    const songId = req.headers["songid"]
    const albumid = req.params
    try {
        const findSong = Song.findById(songId)
        if (!findSong){
            res.status(400).json({msg:"song does not exist"})
        }
        const findAlbum = Album.findById(albumid)
        if (!findAlbum){
            res.status(400).json({msg:"Album does not exist"})
        }
        Album.updateOne(
            {_id:albumid},{ $pull: { songsIds: songId } },(err)=>{
                if (err) {
                  return res.status(500).json({ msg: "Something went wrong " });
                }
                
                res.status(200).json({msg:"song deleted to the Album"})}
        )

        
    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }
}


module.exports = {
    getAllAlbums,
    getArtistAlbums,// get by user id (artist id)
    addAlbum,
    deleteAlbum,// delete by id
    addSongToAlbum,//here we are working only with the song id // update the Album
    removeSongFromAlbum//here we are working only with the song id 
  };