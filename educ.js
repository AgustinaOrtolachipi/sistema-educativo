var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    Alumno.prototype.obtenerEstado = function () {
        return this.nota > 7 ? 'Aprobado' : 'Reprobado';
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
    }
    Profesor.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Profesor.prototype.obtenerListadoAlumnos = function () {
        return this.alumnos.map(function (alumno) { return alumno.nombre; });
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela() {
        this.alumnosRegistrados = [];
        this.profesoresRegistrados = [];
    }
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnosRegistrados.push(alumno);
    };
    Escuela.prototype.contratarProfesor = function (profesor) {
        this.profesoresRegistrados.push(profesor);
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        this.alumnosRegistrados = this.alumnosRegistrados.filter(function (a) { return a !== alumno; });
    };
    Escuela.prototype.despedirProfesor = function (profesor) {
        this.profesoresRegistrados = this.profesoresRegistrados.filter(function (p) { return p !== profesor; });
    };
    return Escuela;
}());
var escuela = new Escuela();
var alumno1 = new Alumno('Juan', 8);
var alumno2 = new Alumno('María', 6);
var profesor1 = new Profesor('Profesor Smith');
escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.contratarProfesor(profesor1);
profesor1.agregarAlumno(alumno1);
profesor1.agregarAlumno(alumno2);
console.log(alumno1.obtenerEstado()); // Aprobado
console.log(alumno2.obtenerEstado()); // Reprobado
console.log(profesor1.obtenerListadoAlumnos()); // ['Juan', 'María']
escuela.expulsarAlumno(alumno2);
console.log(profesor1.obtenerListadoAlumnos()); // ['Juan']
escuela.despedirProfesor(profesor1);
