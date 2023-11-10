class Alumno {
    nombre: string;
    nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    obtenerEstado(): string {
        return this.nota > 7 ? 'Aprobado' : 'Reprobado';
    }
}

class Profesor {
    nombre: string;
    alumnos: Alumno[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.alumnos = [];
    }

    agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    obtenerListadoAlumnos(): string[] {
        return this.alumnos.map(alumno => alumno.nombre);
    }
}

class Escuela {
    alumnosRegistrados: Alumno[];
    profesoresRegistrados: Profesor[];

    constructor() {
        this.alumnosRegistrados = [];
        this.profesoresRegistrados = [];
    }

    matricularAlumno(alumno: Alumno): void {
        this.alumnosRegistrados.push(alumno);
    }

    contratarProfesor(profesor: Profesor): void {
        this.profesoresRegistrados.push(profesor);
    }

    expulsarAlumno(alumno: Alumno): void {
        this.alumnosRegistrados = this.alumnosRegistrados.filter(a => a !== alumno);
    }

    despedirProfesor(profesor: Profesor): void {
        this.profesoresRegistrados = this.profesoresRegistrados.filter(p => p !== profesor);
    }
}


const escuela = new Escuela();

const alumno1 = new Alumno('Juan', 8);
const alumno2 = new Alumno('María', 6);

const profesor1 = new Profesor('Profesor Smith');

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
