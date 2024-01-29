//rutas
import routesStudents from "../Routes/student.routes";
import routesGrades from "../Routes/grade.routes";
import routesPeriod from "../Routes/period.routes";

//config relaciones
import { Period, Student, Grade } from './index';

//conexion db
import connection from "../DB/connection";

//adicionales
import express, { Application } from "express";
import cors from "cors";

class Server {
    private app: Application;
    private port: string;
    constructor() {
      this.app = express();
      this.port = process.env.PORT ?? "4000";
      this.middlewares();
      this.routes();
      this.connectDB();
    }
    listen() {
      this.app.listen(this.port, () => {
        console.log("Servidor corriendo en puerto " + this.port);
      });
    }
    middlewares() {
        this.app.use(express.json());
        //frontend de la application
        /*this.app.use(cors({
            origin: 'localhost:3000'
        }));*/
    }
    routes() {
      this.app.use("/api/students", routesStudents);
      this.app.use("/api/grades", routesGrades);
      this.app.use("/api/periods", routesPeriod);
    }
    async connectDB() {
      try {
        await Period.sync();
        await Student.sync();
        await Grade.sync();
        console.log("Base de datos online");
      } catch (error) {
        console.log("No se pudo conectar");
      }
    }
  }

  export default Server;
