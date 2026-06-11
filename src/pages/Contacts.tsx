function Contacts() {
  return (
    <main id="contacts" className="flex-1 w-full flex flex-col items-center justify-center min-h-0 py-6">
      <div className="flex flex-col items-center">
        <h3 className="text-[48px] font-bold text-[#25282B] font-playfair">
          Contacts
        </h3>

        <div className="w-25 h-1 bg-[#FDC435] mt-2 mb-10" />
      </div>

      <form className="w-full max-w-xl flex flex-col gap-5 px-6">
        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-[16px] font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="w-full h-10 px-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#FDC435]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-[16px] font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full h-10 px-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#FDC435]"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-[16px] font-semibold text-gray-700">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full p-3 bg-white border border-gray-200 rounded-md resize-none focus:outline-none focus:border-[#FDC435]"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button 
            type="submit"
            className="rounded-[10px] bg-[#FDC435] px-4 py-2 font-roboto text-[18px] shadow-md">
            Send
          </button>
        </div>
      </form>
    </main>
  );
}

export default Contacts;