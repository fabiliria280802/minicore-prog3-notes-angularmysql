import { Request, Response } from "express";
import Period from "../Models/period";

export const getPeriod =async (req:Request, res: Response) => {
    try {
        const period = await Period.findByPk(req.params.id);
        if (!period) {
          return res.status(404).json({ message: 'Period not found' });
        }
        res.json(period);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const getPeriods =async (req:Request, res: Response) =>{
    try {
        const periods = await Period.findAll();
        res.json(periods);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const postPeriod =async(req:Request, res: Response) =>{
    try {
        const period = await Period.create(req.body);
        res.status(201).json(period);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const putPeriod =async(req:Request, res: Response) =>{
    try {
        const period = await Period.findByPk(req.params.id);
        if (!period) {
          return res.status(404).json({ message: 'Period not found' });
        }
        await period.update(req.body);
        res.json(period);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const deletePeriod =async(req:Request, res: Response) =>{
    try {
        const period = await Period.findByPk(req.params.id);
        if (!period) {
          return res.status(404).json({ message: 'Period not found' });
        }
        await period.destroy();
        res.status(204).json({ message: 'Period deleted' });
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}