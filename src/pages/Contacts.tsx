import { useState } from "react";
import { contactSchema, type ContactFormData } from "../services/validation";

function Contacts() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ContactFormData;
        formattedErrors[path] = issue.message;
      });
      setErrors(formattedErrors);
    } else {
      setErrors({});
      console.log("Données valides envoyées :", result.data);
      
      setFormData({ name: '', email: '', message: '' });
      alert("Message envoyé avec succès !");
    }
  };

  return (
    <main id="contacts" className="flex-1 w-full flex flex-col items-center justify-center min-h-0 py-6">
      <div className="flex flex-col items-center">
        <h3 className="text-[48px] font-bold text-[#25282B] font-playfair">
          Contacts
        </h3>
        <div className="w-25 h-1 bg-[#FDC435] mt-2 mb-10" />
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-5 px-6">
        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-[16px] font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full h-10 px-3 bg-white border rounded-md focus:outline-none ${
              errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#FDC435]'
            }`}
          />
          {errors.name && <span className="text-red-500 text-sm font-nunito">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-[16px] font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-10 px-3 bg-white border rounded-md focus:outline-none ${
              errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#FDC435]'
            }`}
          />
          {errors.email && <span className="text-red-500 text-sm font-nunito">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-[16px] font-semibold text-gray-700">
            Message
          </label>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 bg-white border rounded-md resize-none focus:outline-none ${
              errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#FDC435]'
            }`}
          />
          {errors.message && <span className="text-red-500 text-sm font-nunito">{errors.message}</span>}
        </div>

        <div className="flex justify-end pt-2">
          <button 
            type="submit"
            className="rounded-[10px] bg-[#FDC435] px-4 py-2 font-roboto text-[18px] shadow-md hover:bg-[#e5b02f] transition-colors">
            Send
          </button>
        </div>
      </form>
    </main>
  );
}

export default Contacts;