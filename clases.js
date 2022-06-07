//objetos literales
const amor ={
    name: "bri",
    edad: 21,
    caracteristicas:[
        "Hermosa",
        "Encantadora"
    ],
    masCaractericticas(nueva){
        this.caracteristicas.push(nueva);
    },
};
//prototipos con instancia
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
  
  const brissa = new Student(
    "Brissa Jhulianne",
    21,
    [
      "Curso de Enamoramiento",
      "Curso de Creación de amor",
    ],
  );

  class Student2{
    constructor({
      name,
      age,
      cursosAprobados,
      email
    }){
      this.name = name;
      this.age = age;
      this.email = email;
      this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursito){
      this.cursosAprobados.push(nuevoCursito);
    }
  }
  const waltercito = new Student2({
    name:"Waltercito",
    age:29,
    cursosAprobados: ["Curso del POO", "Curso Practico POO"]
  }  
  )
  class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  })
  
  class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
  }
  
  const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc"
  });
  
  const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz"
  });