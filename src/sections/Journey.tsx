

type JourneyProps = {
  image: string;
  text: string;
};

export default function Journey({ image, text }: JourneyProps) {
  return (
    <section id="journey" className="py-20 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        My Journey 🚀
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <p className="text-lg text-gray-700 leading-relaxed">{text}</p>

        {/* Image */}
        <img
          src={image}
          alt="Journey"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
}
