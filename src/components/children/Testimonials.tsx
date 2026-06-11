import React from 'react';
import { mockTestimonials } from '../../data/mockData';

export default function Testimonials() {
  return (
    <div className="w-full max-w-4xl mt-32 px-6 flex flex-col items-center">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-[48px] font-bold text-[#25282B] font-playfair m-0">
          Testimonials
        </h2>
        <div className="w-16 h-1 bg-[#FDC435] mt-2 rounded" />
      </div>

      <div className="grid grid-cols-1 gap-8 w-full">
        {mockTestimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-[#F9FAFF] p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center"
          >
            <p className="font-nunito text-lg italic text-[#828282] max-w-2xl mb-6">
              "{testimonial.text}"
            </p>
            <div className="flex flex-col items-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-16 h-16 rounded-full bg-gray-200 mb-2 object-cover"
              />
              <h4 className="font-bold text-gray-900 font-nunito">{testimonial.name}</h4>
              <span className="text-sm text-gray-500 font-nunito">{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}