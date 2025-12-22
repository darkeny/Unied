import { ClassTeacherController } from "../../../endpoints/controller/classTeacher/classTeacherController";


export function Tests() {
  async function fetchh() {
    const controller = new ClassTeacherController();
    controller.readAllClassTeachers();
  }

  return (
    <div>
      <button className="bg-amber-600 p-5" onClick={fetchh}>
        Clique aqui
      </button>
    </div>
  );
}
