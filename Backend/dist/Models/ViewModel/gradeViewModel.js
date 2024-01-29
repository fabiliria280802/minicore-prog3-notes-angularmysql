"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GradeViewModel = /** @class */ (function () {
    function GradeViewModel() {
        this.start = new Date(2023, 8, 27); // Los meses en JavaScript comienzan en 0
        this.end = new Date(2024, 0, 30);
        // Inicializa las demás propiedades según sea necesario
    }
    return GradeViewModel;
}());
exports.default = GradeViewModel;
