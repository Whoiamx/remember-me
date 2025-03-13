interface Props {
  title: string;
}

export const GridItemRecordatory = ({ title }: Props) => {
  return (
    <div className="justify-center items-center mt-10 p-4 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-xl">
        <input className="text-black" placeholder="Agregar recordatorio" />
        <button>Agregar</button>
      </div>
    </div>
  );
};
