const school: string = "CALPOLY";
let age: number = 10;

age = 12;
type Student = {
    name: string;
    year: number;
    major: string;
    hobbies: string[];
}

const students: Student[] = [
    {name: "bob", major: "CS", year: 10, hobbies: {"running", "hiking"}}
];

function createStudent( name: string, major: string, year: number, hobbies: string[]):
Student {return{ name, major, year, hobbies }};

function getGreeting(name: string): string {
    return `Hi, ${name}`
}

export default function StudentCard(props: Student){
    return (
    <div className="card">
        <h2>{ props.name}</h2>
        <p>
            {props.major}, Year {props.year}
        </p>
        {props}
    </div>);
}