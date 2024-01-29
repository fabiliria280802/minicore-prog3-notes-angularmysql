import Student from './student';
import Grade from './grade';

Student.hasMany(Grade, { foreignKey: 'idStudent' });
Grade.belongsTo(Student, { foreignKey: 'idStudent' });

export {Grade}