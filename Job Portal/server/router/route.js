import  express from "express";
import testing from "../controller/controller.js";
const route = express.Router()
route.get('/',testing)

export default route
