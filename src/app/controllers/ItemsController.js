class ItemsController {
    //[Get] /items/:slug
    async store(req, res, next) {
        return res.json({status: "success", url: `localhost:3000/photo/item/${req.imagename}`})
    }

    //[Get] /items/create
    async get(req, res, next) {
        const id = req.params.id;
        console.log(__dirname + "/storage/" + id);
        return res.sendFile(__dirname + "/storage/" + id);
        //return res.sendFile(`storage/data/${id}`);
    }
}

module.exports = new ItemsController();
