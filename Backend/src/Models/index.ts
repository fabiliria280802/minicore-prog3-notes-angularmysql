//se importan los models
import Student from './student';
import Grade from './grade';

//enlace de relaciones
Student.hasMany(Grade, { foreignKey: 'idStudent' });
Grade.belongsTo(Student, { foreignKey: 'idStudent' });

export {Grade}