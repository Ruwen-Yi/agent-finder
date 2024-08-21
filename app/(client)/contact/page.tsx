export default function Contact() {
  return (
    <div className="bg-blue-600 text-white py-16 px-8" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="mb-12">
          Have any questions or need more information? We'd love to hear from
          you. Fill out the form below and we'll get back to you as soon as
          possible.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              className="input-field"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              className="input-field"
              placeholder="Your Email"
              required
            />
          </div>
          <input
            type="text"
            className="input-field"
            placeholder="Subject"
            required
          />
          <textarea
            className="input-field h-32"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
