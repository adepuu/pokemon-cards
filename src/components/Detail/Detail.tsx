interface DetailCardProps {
  health?: number;
  attack?: number;
  defense?: number;
}

const DetailCard: React.FC<DetailCardProps> = ({ health, attack, defense }) => {
  const healthWidth = health;

  return (
    <div className="p-4 bg-[#05091B] flex flex-col rounded-lg">
      <div className="flex flex-col font-lato text-[#97A0CC] text-lg gap-1 border-b-2 border-solid border-gray-700 pb-3">
        <p>Health</p>
        <div className="bg-[#3D4466] h-[6px] rounded-md">
          <div
            className="bg-[#6CF0A1] from-[#6CF0A1] to-[#2AE3B7] h-[6px] rounded-md"
            style={{ width: `${healthWidth}%` }}></div>
        </div>
        <div className="flex gap-3 font-lato text-white items-center">
          <p className="text-2xl font-semibold">{health}</p>
          <p className="text-lg">from 1000</p>
        </div>
      </div>
      <div className="flex gap-[81px] pt-4">
        <div className="flex flex-col font-lato">
          <p className="text-lg text-[#97A0CC]">Attack</p>
          <p className="text-2xl text-white">{attack}</p>
        </div>
        <div className="flex flex-col font-lato">
          <p className="text-lg text-[#97A0CC]">Defense</p>
          <p className="text-2xl text-white">{defense}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
