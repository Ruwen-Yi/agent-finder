export default function AboutUs() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            About Us
          </h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            We are committed to making immigration processes smooth and
            hassle-free. Our team of experienced professionals is dedicated to
            providing personalized assistance to help you navigate through
            complex immigration procedures.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">John Doe</h3>
            <p className="text-blue-600">Founder & CEO</p>
            <p className="text-gray-600 mt-2">
              John has over 15 years of experience in immigration law and has
              helped thousands of clients achieve their goals.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">Jane Smith</h3>
            <p className="text-blue-600">Chief Operating Officer</p>
            <p className="text-gray-600 mt-2">
              Jane oversees all operations, ensuring that our clients receive
              the highest quality service.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">
              Emily Johnson
            </h3>
            <p className="text-blue-600">Lead Immigration Specialist</p>
            <p className="text-gray-600 mt-2">
              Emily has a passion for helping people and specializes in visa and
              residency applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
