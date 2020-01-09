const mongoose=require('mongoose')
require('../model')
let albumDao=require('../dao/AlbumDao');
const assert=require('assert')

describe("测试AlbumDao",function () {
   before(function () {
      mongoose.connect('mongodb://localhost/albums',function (err) {

      })
   })
    after(function () {
        mongoose.disconnect()
    })

    it('测试查询所有专辑',function (done) {
       albumDao.findAllAlbums(function (albums) {
           assert.ok(albums.length>0)
           albums.forEach(album=>console.log(album._id))
           done()
       })
    })
    it("测试删除",function (done) {
        albumDao.deleteAlbum("5e167d1f3f6d4be333994741",function ({}) {
            console.log({})
            done()
        })
    })


})