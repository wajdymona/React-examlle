// app/contact/page.tsx
const Contact = () => {
    return (
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          If you have any questions, feel free to reach out to us. We are here to assist you!
        </p>
  
        <form className="space-y-4">
          <div>
            <label className="block text-lg text-gray-600">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>
  
          <div>
            <label className="block text-lg text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
  
          <div>
            <label className="block text-lg text-gray-600">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your message"
            />
          </div>
  
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  