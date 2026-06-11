interface Props {
  name: string;
  description: string;
  image: string;
  reverse?: boolean;
}

function Project({ name, description, image, reverse }: Props) {
  return (
    <div
      className={`flex flex-col md:flex-row w-full my-8 overflow-hidden rounded-2xl bg-white shadow-[0px_6px_64px_0px_rgba(112,144,176,0.1)] ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Texte */}
      <div className="flex flex-col justify-center p-12 text-[#828282] md:w-1/2">
        <h4 className="text-3xl font-bold text-[#25282B] font-playfair">{name}</h4>

        <p className="mt-4">{description}</p>

        <button className="mt-6 w-fit rounded-full border border-[#25282B] px-6 py-2 text-[#25282B] font-bold">
          View Project
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 h-[300px] md:h-[520px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Project;