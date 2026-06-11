function Home() {
  return (
    <section className="py-20 pr-190 pb-50">
      <div>
        <div className="font-bold text-[#FDC435] pb-3">
          UI/UX DESIGNER
        </div>

        <h2 className="m-0 font-poppins text-[64px] font-extrabold leading-none text-[#25282B]">
          Hello, my name is Madelyn Torff
        </h2>

        <p className="text-[24px] text-[#828282] text-justify pt-8 pb-5">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>

        <div className="flex gap-4">
          <button className="rounded-[10px] bg-[#FDC435] px-4 py-2 font-roboto text-[18px] shadow-md">
            Projects
          </button>

          <button className="rounded-[10px] border border-[#25282B] bg-white px-4 py-2 font-roboto text-[18px] shadow-md">
            Linkedin
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;