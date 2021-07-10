const Category = require("./../models/category-model")

exports.loadCategory = async (req, res) => {
    try {
        res.status(200).json({ category: await Category.findAll({
            attributes: ["id", "name"],
            raw: true
        }) });
    } catch (error) {
        console.log(error);
    }   
}

exports.addCategory = async (req, res) => {
    const {name} = req.body;
    try {
        await Category.create({
            name,
        });
        res.status(200).json({ category: await Category.findAll({
            attributes: ["id", "name"],
            raw: true
        }) });
    } catch (error) {
        console.log(error);
    }
}