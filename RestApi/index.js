const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set('strictQuery', true);
const app = express();

mongoose.connect('mongodb://localhost:27017/someRandomDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connect to mongodb")
}).catch((err) => {
    console.log(err);
})

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json());

// Create A Schema
const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});

// Create A Model
const Product = new mongoose.model("Product", ProductSchema);

app.post("/api/v1/product/new", async (req, res) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        product
    })
})

// Read Product
app.get("/api/v1/product", async (req, res) => {
    const product = await Product.find();
    res.status(200).json({
        success: true,
        product
    })
})

// Update Product
app.put("/api/v1/product/:id", async (req, res) => {
    let product = await Product.findById(req.params.id);

    product = await product.findByIdAndUpdate(req.params.id, req.body, {
        New: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
})


// Delete Product
app.delete("/api/v1/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        res.status(200).json({
            success: true,
            message: "product Not Found"
        })
    }

    await product.remove()

    res.status(200).json({
        success: true,
        message: "product delete"
    })
})

app.listen(4500, () => {
    console.log("server on");
})