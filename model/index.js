const mongoose=require('mongoose')
let BookSchema={name:String,price:Number}
let Customer={name:String,password:String,score:Number}
let Album={album_name:String,price:Number,singers:Array}

mongoose.model("Book",BookSchema)
mongoose.model("Customer",Customer)
mongoose.model("Album",Album)

