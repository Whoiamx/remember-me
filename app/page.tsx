import { GridItemRecordatory } from "./components/GridItemRecordatory";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">
          Remember <span className="text-blue-600 font-semibold">Me</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 ">
        <GridItemRecordatory title="Programado" />
        <GridItemRecordatory title="Hoy" />
        <GridItemRecordatory title="Todo" />
        <GridItemRecordatory title="Con indicador" />
      </div>
    </>
  );
}
