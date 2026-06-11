function About() {
  return (
    <main className="flex-1 w-full flex items-center justify-center pt-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6 order-2 md:order-1 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block font-playfair">
            About me
          </h1>
          
          <p className="font-nunito text-[24px] text-[#828282] text-justify pt-5 pb-5 m-0">
            Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque 
            auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. 
            Aliquet risus posuere aliquet imperdiet sit.
          </p>
          
          <div className="pt-2">
            <button className="rounded-[10px] bg-[#FDC435] px-4 py-2 font-roboto text-[18px] shadow-md hover:bg-[#e5b02f] transition-colors">
              Resume
            </button>
          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-[#FDC435] overflow-hidden flex items-center justify-center">
                <img 
                src="/assets/about/woman-face.png" 
                alt="Madelyn Torff" 
                className="w-full h-full object-cover object-top filter grayscale"
                />
            </div>
        </div>

      </div>
    </main>
  );
}

export default About;