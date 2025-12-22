import { TeacherController } from "../../../endpoints/controller/teacher/teacherController";


export function Tests (){

async function fetchh() {
const controller=new TeacherController();
controller.readAllTeachers();
}

return (
<div>
<button className="bg-amber-600 p-5" onClick={fetchh}>Clique aqui</button>
</div>
);
}