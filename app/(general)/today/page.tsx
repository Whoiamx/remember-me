export default function TodayPage() {
  return (
    <>
      <h2>Recordatorios de Hoy</h2>
      <div className="justify-center items-center mt-10 p-4 bg-white rounded-2xl shadow-lg">
        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-xl">
          <input className="text-black" placeholder="Agregar recordatorio" />
          <button>Agregar</button>
        </div>
      </div>
    </>
  );
}
