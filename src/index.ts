import { Student } from "./Student";
import { Internship } from "./Internship";
import { CustomMap } from "./CustomMap";

const map = new CustomMap("map");
const fakeStudent = new Student();
const fakeInternship = new Internship();
map.addMarker(fakeStudent);
map.addMarker(fakeInternship);
