type CardItemProp = {
  img: string;
  title: string;
};

export default function CardItem({ img, title }: CardItemProp) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow flex flex-col justify-center items-center">
      <div className="px-4 py-5 sm:p-6 w-[50%] h-[30%]">
        <img src={img} alt="image" className="w-full" />
      </div>
      <div className="px-4 py-5 sm:px-6">
        <h4 className="font-bold text-2xl">{title}</h4>
      </div>
    </div>
  );
}
