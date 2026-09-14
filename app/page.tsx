import styles from "./page.module.css";

const schoolName: string = "CALPOLY";
let maxStudents: number = 10;

type Student = {
    name: string;
    year: number;
    major: string;
    hobbies: string[];
}

function getGreeting(name: string): string {
    return `Hi, ${name}`
}

function createStudent( 
    name: string, 
    major: string, 
    year: number, 
    hobbies: string[]
): Student {
    return{ name, major, year, hobbies };
}

type StudentCardProps = {
    student: Student;
}

function StudentCard({ student }: StudentCardProps) {
    return (
        <div className="card">
            <h2>{student.name}</h2>
            <p>{student.major}, Year {student.year}</p>
            <p>Hobbies: {student.hobbies.join(", ")}</p>
        </div>
    );
}

const students: Student[] = [
  createStudent("John", "CS", 1, ["soccer", "guitar"]),
  createStudent("Maya", "Bio", 2, ["hiking", "Volleyball"]),
];

export default function Home() {
  return (
    <div>
      <h1>{schoolName} - Profile Cards</h1>
      <p>{getGreeting("Class")}</p>
      <p>Showing {students.length} of {maxStudents} students</p>
      {students.map((s) => (
        <StudentCard key={s.name} student={s} />
      ))}
    </div>
  );
}
