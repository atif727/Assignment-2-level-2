import { Request, Response } from 'express';
import { orderServices } from './order.service';
import { KBServices } from '../KBS/KB.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderServices.createORDERinDB(orderData);
    let orderVerify = await KBServices.getOneKBFromDBwith_id(result.productId);
    if (orderVerify === null) {
      res.status(400).json({
        succss: false,
        message: "product doesn't exist :(",
      });
    } else {
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
  } catch (err) {
    console.log(err);
    res.status(400).json({
      succss: false,
      message: 'failed to create order :(',
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  if (Object.keys(req.query).length === 0) {
    try {
      const result = await orderServices.getAllORDERSFromDB();
      res.status(200).json({
        success: true,
        message: 'orders shown successfully',
        data: result,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        succss: false,
        message: 'failed to get orders :(',
      });
    }
  } else {
    try {
      const givenEmail: string = req.query.email as string;
      let result = await orderServices.searchOrderFromDB(givenEmail);
      if (result.length === 0) {
        res.status(200).json({
          success: false,
          message: `email not found`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `Orders matching the email ${givenEmail} found successfully!`,
          data: result,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({
        succss: false,
        message: 'failed to get email :(',
      });
    }
  }
};

export const orderControllers = {
  createOrder,
  getAllOrders,
};
