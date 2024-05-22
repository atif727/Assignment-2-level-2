import { Request, Response } from 'express';
import { KBServices } from './KB.service';

const createKB = async (req: Request, res: Response) => {
  try {
    const KBData = req.body;
    const result = await KBServices.createKBinDB(KBData);
    // send response
    res.status(200).json({
      success: true,
      message: 'KB is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllKBs = async (req: Request, res: Response) => {
  try {
    const result = await KBServices.getAllKBsFromDB();
    res.status(200).json({
      success: true,
      message: 'KBs shown successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneKB = async (req: Request, res: Response) => {
  try {
    const KBId = req.params.id;
    const result = await KBServices.getOneKBFromDB(KBId);
    res.status(200).json({
      success: true,
      message: 'specific KB shown successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteKB = async (req: Request, res: Response) => {
  try {
    const KBId = req.params.id;
    const result = await KBServices.deleteOneKBFromDB(KBId);
    res.status(200).json({
      success: true,
      message: 'specific KB Deleted successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const UpdateKB = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedKB = req.body;
    const result = await KBServices.updateKBFromDB(id, updatedKB);
    res.status(200).json({
      success: true,
      message: 'specific KB updated successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const KBControllers = {
  createKB,
  getAllKBs,
  getOneKB,
  deleteKB,
  UpdateKB,
};
