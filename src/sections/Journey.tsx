import journey1 from "../assets/journey/account1.jpeg";

export default function Journey() {
  return (
    <section id="journey" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heading mb-12 text-center text-primary">
          My Journey 🚀
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
     
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              From Accounting to Software Development
            </h3>
           <p className="text-gray-700 leading-relaxed mb-4">
  From <span className="font-bold">2015 to 2021</span>, I worked as an 
  <span className="italic"> Accountant in Iran</span>. During these six years, 
  I gained deep expertise in financial management, bookkeeping, and preparing 
  accurate monthly and annual reports. 
</p>

<p className="text-gray-700 leading-relaxed mb-4">
  My role required <span className="font-medium">precision, attention to detail, 
  and structured problem-solving</span>, as I handled tasks such as tax 
  calculations, financial systems organization, and compliance with strict 
  regulations.
</p>

<p className="text-gray-700 leading-relaxed">
  These experiences shaped my ability to think critically, stay organized, and 
  work under pressure — qualities that I now apply to my career in 
  <span className="font-bold"> software development</span>, where I combine 
  logical thinking with creativity to build clean and user-friendly applications.
</p>

          </div>

       
          <div className="flex justify-center">
            <img
              src={journey1}
              alt="Accounting work in Iran"
              className="rounded-lg shadow-lg max-w-sm hover:scale-105 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
