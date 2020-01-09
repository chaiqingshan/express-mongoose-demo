var express = require('express');
var router = express.Router();
var albumDao=require('../dao/AlbumDao')
/* GET users listing. */
router.get('/', function(req, res) {
  albumDao.findAllAlbums(function (albums) {
    res.json(albums)
  })
});

router.post('/',function (req,res) {
    let album=req.body
    albumDao.addAlbum(album,function (nb) {
      res.json(nb)
    })
})
router.delete('/:id',function (req,res) {
    let id=req.params.id;
    albumDao.deleteAlbum(id,function (obj) {
        res.json(obj)
    })
})

module.exports = router;
