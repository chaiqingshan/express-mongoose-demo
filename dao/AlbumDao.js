const mogoose=require('mongoose')

let albumModel=mogoose.model("Album")
function addAlbum(album,callback) {
  let b=  albumModel.create(album,function (err,newAlbumDoc) {
        if(!err) callback(newAlbumDoc.toObject())
    })
}

function findAllAlbums(callback) {
    albumModel.find({}).exec(function (err,albums) {
        if(!err) callback(albums)
    })
}

function deleteAlbum(id,callback) {
   albumModel.findByIdAndRemove(id,function (err) {
       if(!err) callback({})
   })
}

module.exports={addAlbum,deleteAlbum,findAllAlbums}
