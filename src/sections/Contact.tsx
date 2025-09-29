type ContactProps = {
  email: string;
  linkedin: string;
  github: string;
};

export default function Contact({ email, linkedin, github }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-8 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h2>
      <p className="text-lg text-gray-600 mb-6">
        Feel free to reach out via email or connect with me on social media.
      </p>
      <div className="flex justify-center space-x-6 text-lg">
        <a href={`mailto:${email}`} className="text-primary hover:underline">
          Email
        </a>
        <a href={linkedin} target="_blank" className="text-primary hover:underline">
          LinkedIn
        </a>
        <a href={github} target="_blank" className="text-primary hover:underline">
          GitHub
        </a>
      </div>
    </section>
  );
}
