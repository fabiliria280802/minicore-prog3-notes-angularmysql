import { Request, Response } from "express";
import Student from "../Models/student";
import { ValidationError } from "sequelize";

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

export const postStudent = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    //Validaciones
    if (!name) {
      return res.status(400).json({ error: 'The name field is required.' });
    }
    if (name.length > 80) {
      return res.status(400).json({ error: 'The name is too long.' });
    }
    const student = await Student.create({ name });
    res.status(201).json(student);
  }  catch (error) {
    if (error instanceof Error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({ error: 'The provided name is already in use.' });
      } else if (error.name === 'SequelizeValidationError') {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  }
};


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