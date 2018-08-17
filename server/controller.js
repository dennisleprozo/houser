module.exports = {

    getAllHouses: (req, res, next) => {
        const dbInstance = req.app.get("db");
    
        dbInstance.getAll_houses()
        .then(response => res.status(200)
        .send(response))
    },
    createHouse: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const {name, address, city, state, zip, img, mortgage, rent}=req.body;
        console.log(req.body);
    
        dbInstance.create_houses(
            [name, address, city, state, zip, img, mortgage, rent])
        .then(response => res.send[0])
    },
    deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { id } = req.params;
    
        dbInstance.delete_houses([id])
        .then(response => res.send[0])
    }
    }