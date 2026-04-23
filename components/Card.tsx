type Props = {
  image: string;
  title: string;
  location: string;
  price: string;
};

export default function Card({ image, title, location, price }: Props) {
  return (
    <div
      className="
      min-w-[250px] bg-white rounded-xl p-3
      shadow-sm border border-transparent
      hover:border-blue-500
      hover:shadow-[0_4px_20px_rgba(59,130,246,0.25)]
      hover:-translate-y-1
      transition duration-300 cursor-pointer group
    "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
          h-36 w-full object-cover rounded-lg mb-3
          group-hover:brightness-110 transition
        "
      />

      {/* TITLE */}
      <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600 transition">
        {title}
      </h3>

      {/* RATING */}
      <div className="text-orange-400 text-sm mb-1">★★★★☆</div>

      {/* LOCATION */}
      <p className="text-gray-500 text-sm">{location}</p>

      {/* PRICE */}
      <p className="text-red-500 font-bold mt-2">{price}</p>

      {/* NOTE */}
      <p className="text-gray-400 text-xs">Belum termasuk pajak</p>
    </div>
  );
}