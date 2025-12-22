import { ClassController } from "../../../endpoints/controller/class/classController";

export function Tests() {
  async function fetchh() {
    const controller = new ClassController();
    controller.readAllClasses();
  }

  return (
    <div>
      <button className="bg-amber-600 p-5" onClick={fetchh}>
        Clique aqui
      </button>
    </div>
  );
}
