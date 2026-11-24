export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-white">

      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <form className="max-w-lg mx-auto flex flex-col gap-5 px-5">

        <input
          type="text"
          placeholder="Your Name"
          className="p-4 bg-gray-800 rounded-lg outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-4 bg-gray-800 rounded-lg outline-none"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-4 bg-gray-800 rounded-lg outline-none"
        />

        <button className="bg-purple-600 p-4 rounded-lg hover:bg-purple-700">
          Send Message
        </button>

      </form>

    </section>
  );
}