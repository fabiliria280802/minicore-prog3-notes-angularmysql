import { Request, Response } from "express";
import Student from "../Models/student";

export const getStudent =async (req:Request, res: Response) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
          return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const getStudents =async (req:Request, res: Response) =>{
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const postStudent =async(req:Request, res: Response) =>{
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const putStudent =async(req:Request, res: Response) =>{
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
          return res.status(404).json({ message: 'Student not found' });
        }
        await student.update(req.body);
        res.json(student);
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}

export const deleteStudent =async(req:Request, res: Response) =>{
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
          return res.status(404).json({ message: 'Student not found' });
        }
        await student.destroy();
        res.status(204).json({ message: 'Student deleted' });
    } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({ error: error.message });
        } else {
          res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
}