import Image from "next/image";

const Brands = () => {
  const brands = [
    {
      src: "/brand1.png",
      alt: "Knosis",
      width: 188,
      height: 59,
      className: "w-[150px] md:w-[188px]", // Responsive width
    },
    {
      src: "/brand2.png",
      alt: "Doctor",
      width: 126,
      height: 126,
      className: "w-[100px] md:w-[126px]", // Responsive width
    },
    {
      src: "/brand3.png",
      alt: "Airway",
      width: 198,
      height: 93,
      className: "w-[160px] md:w-[198px]", // Responsive width
    },
    {
      src: "/brand4.png",
      alt: "Conspire",
      width: 248,
      height: 81,
      className: "w-[200px] md:w-[248px]", // Responsive width
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto grid md:grid-cols-4 place-items-center space-x-4 md:space-x-12 py-8">
        {brands.map((brand, index) => (
          <div key={brand.alt} className="relative flex-shrink-0 mb-4 md:mb-0">
            <Image
              src={brand.src}
              alt={brand.alt}
              width={brand.width}
              height={brand.height}
              className={`${brand.className} object-contain`}
              priority={index < 2} // Prioritize first two images
              sizes="(max-width: 768px) 100px, 200px"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
