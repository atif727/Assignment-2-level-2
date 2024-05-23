import { Request, Response } from 'express';
import { KBServices } from './order.service';

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
    res.status(400).json({
      succss: false,
      message: 'failed to create data :(',
    });
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
    res.status(400).json({
      succss: false,
      message: 'failed to get data :(',
    });
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
    res.status(400).json({
      succss: false,
      message: 'failed to get data :(',
    });
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
    res.status(400).json({
      succss: false,
      message: 'failed to delete data :(',
    });
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
    res.status(400).json({
      succss: false,
      message: 'failed to update data :(',
    });
  }
};

const querySearchingKB = async (req: Request, res: Response) => {
  try {
    const searchTerm: string | number = req.query.searchTerm as string;
    // console.log(searchTerm)

    const request: Request = req;
    const result = await KBServices.searchKBFromDB(searchTerm);
    res.status(200).json({
      success: true,
      message: `keyboard Products matching the term ${searchTerm} found successfully!`,
      data: result,
    });
    if (!searchTerm) {
      res.status(400).json({
        succss: false,
        message: 'Search Term is missing in the searchTerm query field',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      succss: false,
      message: 'failed to get data :(',
    });
  }
};

export const KBControllers = {
  createKB,
  getAllKBs,
  getOneKB,
  deleteKB,
  UpdateKB,
  querySearchingKB,
};
