"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllers = void 0;
const order_service_1 = require("./order.service");
const KB_service_1 = require("../KBS/KB.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.orderServices.createORDERinDB(orderData);
        let orderVerify = yield KB_service_1.KBServices.getOneKBFromDBwith_id(result.productId);
        if (orderVerify === null) {
            res.status(400).json({
                succss: false,
                message: "product doesn't exist :(",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: 'order is created successfully',
                data: result,
            });
        }
        // res.status(200).json({
        //   success: true,
        //   message: 'order is created successfully',
        //   data: result,
        // });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            succss: false,
            message: 'failed to create order :(',
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.query).length === 0) {
        try {
            const result = yield order_service_1.orderServices.getAllORDERSFromDB();
            res.status(200).json({
                success: true,
                message: 'orders shown successfully',
                data: result,
            });
        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                succss: false,
                message: 'failed to get orders :(',
            });
        }
    }
    else {
        try {
            const givenEmail = req.query.email;
            let result = yield order_service_1.orderServices.searchOrderFromDB(givenEmail);
            if (result.length === 0) {
                res.status(200).json({
                    success: false,
                    message: `email not found`,
                });
            }
            else {
                res.status(200).json({
                    success: true,
                    message: `Orders matching the email ${givenEmail} found successfully!`,
                    data: result,
                });
            }
        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                succss: false,
                message: 'failed to get email :(',
            });
        }
    }
});
exports.orderControllers = {
    createOrder,
    getAllOrders,
};
