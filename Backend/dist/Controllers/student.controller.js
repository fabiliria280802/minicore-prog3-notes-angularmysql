"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.putStudent = exports.postStudent = exports.getStudents = exports.getStudent = void 0;
var student_1 = __importDefault(require("../Models/student"));
var getStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var student, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, student_1.default.findByPk(req.params.id)];
            case 1:
                student = _a.sent();
                if (!student) {
                    return [2 /*return*/, res.status(404).json({ message: 'Student not found' })];
                }
                res.json(student);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                if (error_1 instanceof Error) {
                    res.status(500).json({ error: error_1.message });
                }
                else {
                    res.status(500).json({ error: "An unexpected error occurred" });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getStudent = getStudent;
var getStudents = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var students, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, student_1.default.findAll()];
            case 1:
                students = _a.sent();
                res.json(students);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                if (error_2 instanceof Error) {
                    res.status(500).json({ error: error_2.message });
                }
                else {
                    res.status(500).json({ error: "An unexpected error occurred" });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getStudents = getStudents;
var postStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name_1, student, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                name_1 = req.body.name;
                //Validaciones
                if (!name_1) {
                    return [2 /*return*/, res.status(400).json({ error: 'The name field is required.' })];
                }
                if (name_1.length > 80) {
                    return [2 /*return*/, res.status(400).json({ error: 'The name is too long.' })];
                }
                return [4 /*yield*/, student_1.default.create({ name: name_1 })];
            case 1:
                student = _a.sent();
                res.status(201).json(student);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                if (error_3 instanceof Error) {
                    if (error_3.name === 'SequelizeUniqueConstraintError') {
                        res.status(400).json({ error: 'The provided name is already in use.' });
                    }
                    else if (error_3.name === 'SequelizeValidationError') {
                        res.status(400).json({ error: error_3.message });
                    }
                    else {
                        res.status(500).json({ error: error_3.message });
                    }
                }
                else {
                    res.status(500).json({ error: 'An unexpected error occurred.' });
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postStudent = postStudent;
var putStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var student, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, student_1.default.findByPk(req.params.id)];
            case 1:
                student = _a.sent();
                if (!student) {
                    return [2 /*return*/, res.status(404).json({ message: 'Student not found' })];
                }
                return [4 /*yield*/, student.update(req.body)];
            case 2:
                _a.sent();
                res.json(student);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                if (error_4 instanceof Error) {
                    res.status(500).json({ error: error_4.message });
                }
                else {
                    res.status(500).json({ error: "An unexpected error occurred" });
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.putStudent = putStudent;
var deleteStudent = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var student, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, student_1.default.findByPk(req.params.id)];
            case 1:
                student = _a.sent();
                if (!student) {
                    return [2 /*return*/, res.status(404).json({ message: 'Student not found' })];
                }
                return [4 /*yield*/, student.destroy()];
            case 2:
                _a.sent();
                res.status(204).json({ message: 'Student deleted' });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                if (error_5 instanceof Error) {
                    res.status(500).json({ error: error_5.message });
                }
                else {
                    res.status(500).json({ error: "An unexpected error occurred" });
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteStudent = deleteStudent;
