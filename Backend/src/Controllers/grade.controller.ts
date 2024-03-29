import { Request, Response } from "express";
import Grade from "../Models/grade";

export const getGrade =async (req:Request, res: Response) => {
    try {
        const grade = await Grade.findByPk(req.params.id);
        if (!grade) {
          return res.status(404).json({ message: 'Grade not found' });
        }
        res.json(grade);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const getGrades =async (req:Request, res: Response) =>{
    try{
        const grades = await Grade.findAll();
        res.json(grades);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const postGrade =async(req:Request, res: Response) =>{
    try{
        const grade = await Grade.create(req.body);
        res.status(201).json(grade);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const putGrade =async(req:Request, res: Response) =>{
    try{
        const grade = await Grade.findByPk(req.params.id);
        if (!grade) {
          return res.status(404).json({ message: 'Grade not found' });
        }
        await grade.update(req.body);
        res.json(grade);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const deleteGrade =async(req:Request, res: Response) =>{
    try{
        const grade = await Grade.findByPk(req.params.id);
        if (!grade) {
          return res.status(404).json({ message: 'Grade not found' });
        }
        await grade.destroy();
        res.status(204).json({ message: 'Grade deleted' });
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}