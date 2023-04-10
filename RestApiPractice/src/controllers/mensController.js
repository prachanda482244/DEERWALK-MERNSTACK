import { MensModule } from "../model/mensModel.js";

export const createMens = async (req, res) => {
    try {
        const newMens = await MensModule.create(req.body)
        res.status(201).send(newMens)
    } catch (err) {
        res.status(400).send(err.message)
    }
}
export const getALlMens = async (req, res) => {
    try {
        const getmens = await MensModule.find()
        res.status(201).send(getmens)
    } catch (e) { console.log(e.message) }
}
export const getOneMen = async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MensModule.findById(_id)
        !getMen ? res.status(404).send("Not found") : res.status(200).send(getMen)
    } catch (err) { res.status(400).send(err.message) }
}
export const updateMens = async (req, res) => {
    try {
        const _id = req.params.id
        const updateMen = await MensModule.findByIdAndUpdate(_id, req.body, { new: true })
        res.status(200).send(updateMen)
    } catch (err) { res.status(400).send(err.message) }
}
export const deleteMens = async (req, res) => {
    try {
        const _id = req.params.id
        const deleteMen = await MensModule.findByIdAndDelete(_id)
        deleteMen === null ? res.status(200).send("No data already deleted") : res.status(200).send(deleteMen)
    } catch (err) { res.status(500).send(err.message) }
}