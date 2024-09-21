import React from "react";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

    
export default function OetLandingPage() {
    const faqs = [
        {
          question: "What is OET? Who needs to take it?",
          answer: "The Occupational English Test (OET) is an international English language test that assesses the language skills of healthcare professionals who wish to work abroad. The test is available for 12 professions: dentistry, dietetics, medicine, nursing, occupational therapy, optometry, pharmacy, physiotherapy, podiatry, radiography, speech pathology, and veterinary science. OET is recognised by relevant regulatory healthcare agencies in Australia, New Zealand, UK, Ireland, USA, Canada, New Zealand, Dubai, Singapore, Namibia and Ukraine. For more on OET, see https://www.occupationalenglishtest.org."
        },
        {
          question: "I need to do OET. Where do I start?",
          answer: "Very important: start preparing early for your OET. Do not make the mistake of waiting until the last minute! A good idea is to do your preparation FIRS, then book your test date when you are confident of passing and are more likely to pass the FIRST TIME. But it’s okay to book he test first. In this case, we recommend a date one two to three months away. This allows time to prepare properly without panic."
        },
        {
          question: "What is the format of the OET exam?",
          answer: "The OET exam consists of four language skills: Listening, Reading, Writing, and Speaking, tailored for healthcare settings."
        },
        {
            question: "How much time does it take to prepare for the OET?",
            answer: "It takes about 40 hours to prepare for the OET. You should focus on the following areas: Listening, Reading, Writing, and Speaking. Start with your preparation FIRS and then work your way up to the more advanced skills. There are many resources available online to help you with this preparation."
        },
        {
            question: "What is the passing score for the OET?",
            answer: "The passing score for the OET is 75% on each language skill. If you pass all four skills, you will be eligible for the OET."
        }
        
      ];

       // State to manage which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close FAQ
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if it's already open
    } else {
      setOpenIndex(index); // Open the clicked question
    }
  };

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      feedback: ""
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Feedback:", formData);
      // Here, you can send the form data to a backend API or handle it as needed
  
      // Close the form after submission
      setIsFormOpen(false);
    };
    
  return (
    <div>
      <header
        className="relative bg-cover bg-center h-[300px] sm:h-[300px] md:h-[400px] lg:h-[400px]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4226764/pexels-photo-4226764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="relative z-10 text-center py-10 sm:py-16 md:py-20 lg:py-24 mx-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-700">
            OET Preparation for Healthcare Professionals
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-sky-600 mt-4">
            Master your OET exam with expert guidance tailored for healthcare
            professionals.
          </p>
          <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition duration-300">
            Enroll Now
          </button>
        </div>
      </header>

      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-sky-600">
          What are the four OET subtests?
        </h2>
        <p className="font-medium text-base sm:text-lg md:text-xl mx-5 mt-5 ">
          OET Reading and Listening are common to all professions and test your
          ability to find detailed information fast and understand more complex
          meaning of communication in real clinical and non-clinical settings.
          OET Speaking and Writing are profession-specific and look in detail at
          language structure and if you can communicate effectively, accurately,
          and safely without causing strain on patients, caregivers, and
          colleagues.
        </p>

        <div className="mt-12 px-5 md:px-16 lg:px-32">
          <h3 className="text-3xl font-extrabold text-center mb-8 text-sky-600">
            OET Success: a Step-By-Step Guide
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-green-600  text-3xl font-bold ">
                1.
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold">
                Do a{" "}
                <span className="font-bold text-sky-600">
                  30-MINUTE PRE-OET SKILLS ASSESSMENT
                </span>{" "}
                to check your strengths & weaknesses.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-green-600 text-3xl font-bold">
                2.
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold">
                Download a{" "}
                <span className="font-bold text-sky-600">
                  FREE STUDY PLANNER
                </span>
                .
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-green-600 text-3xl font-bold">
                3.
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold">
                Pick the right OET course, materials or tutor from our list and{" "}
                <span className="font-bold text-sky-600">REGISTER</span>.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-green-600 text-3xl font-bold">
                4.
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold">
                Download more{" "}
                <span className="font-bold text-sky-600">FREE MATERIALS</span>{" "}
                to boost your self-study.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-sky-600">
          Course Structure: OET Preparation
        </h2>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for the timeline */}
          <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {/* Module 1 */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-semibold">
                  Module 1: Introduction to OET
                </h3>
                <p className="text-gray-700 mt-2">
                  Overview of OET and how to prepare effectively for all
                  subtests.
                </p>
              </div>
              <div className="w-10 h-10 bg-yellow-400 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>
            </div>

            {/* Module 2 */}
            <div className="relative flex items-center">
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-xl font-semibold">Module 2: OET Reading</h3>
                <p className="text-gray-700 mt-2">
                  Learn techniques to excel in the reading section, with a focus
                  on scanning and detailed comprehension.
                </p>
              </div>
              <div className="w-10 h-10 bg-yellow-400 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>
            </div>

            {/* Module 3 */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-semibold">Module 3: OET Writing</h3>
                <p className="text-gray-700 mt-2">
                  Writing tips and practice for profession-specific letters and
                  reports in the OET exam.
                </p>
              </div>
              <div className="w-10 h-10 bg-yellow-400 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>
            </div>

            {/* Module 4 */}
            <div className="relative flex items-center">
              <div className="w-1/2 pl-8 text-left">
                <h3 className="text-xl font-semibold">
                  Module 4: OET Speaking
                </h3>
                <p className="text-gray-700 mt-2">
                  Improve your speaking skills with role-plays and
                  profession-specific scenarios.
                </p>
              </div>
              <div className="w-10 h-10 bg-yellow-400 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>
            </div>

            {/* Module 5 */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-xl font-semibold">
                  Module 5: OET Listening
                </h3>
                <p className="text-gray-700 mt-2">
                  Sharpen your listening skills by practicing with audio from
                  real healthcare settings.
                </p>
              </div>
              <div className="w-10 h-10 bg-yellow-400 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-sky-600">
            Popular Learning Resources
          </h2>

          <div className="space-y-8 mx-5">
            {/* First Card: Teacher-Led In-class Course */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl p-6 sm:p-16 bg-gradient-to-r from-blue-400 to-blue-700 rounded-lg shadow-lg text-white flex flex-col lg:flex-row">
                {/* Left Side: OET Success */}
                <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                  <h3 className="text-3xl font-bold">OET Success</h3>

                  {/* Buttons */}
                  <div className="space-x-2">
                    <button className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition duration-300">
                      Medicine
                    </button>
                    <button className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition duration-300">
                      Nursing
                    </button>
                  </div>

                  {/* Price Tag */}
                  <div className="text-3xl font-bold mt-4">$330</div>
                </div>

                {/* Right Side: Course Details */}
                <div className="lg:w-1/2 mt-6 lg:mt-0 text-left">
                  <h4 className="text-xl font-semibold mb-4">
                    Teacher-Led In-class Course
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>80 hours / 10 weeks live in-class teaching</li>
                    <li>18 complete listening & reading practice tests</li>
                    <li>800+ Practice Questions</li>
                    <li>20 video tutorials</li>
                    <li>Full Writing Course (Nurse, Med, Pharm)</li>
                    <li>Speaking classes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Second Card: Private & Self-Study Course */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl p-6 sm:p-16  bg-gradient-to-r from-blue-700 to-blue-400 rounded-lg shadow-lg text-white flex flex-col lg:flex-row">
                {/* Left Side: Private & Self-Study Course Details */}
                <div className="lg:w-1/2 mt-6 lg:mt-0 text-left">
                  <h4 className="text-xl font-semibold mb-4">
                    Private & Self-Study course
                  </h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>2 Private 1:1 Classes (any topic)</li>
                    <li>2 Speaking 1:1 Practice sessions</li>
                    <li>18 complete listening & reading practice tests</li>
                    <li>800+ Practice Questions</li>
                    <li>20 video tutorials</li>
                    <li>6 Writing Assessments + Feedback</li>
                    <li>1 Full Mock Test</li>
                  </ul>
                </div>

                {/* Right Side: Premium OET Preparation */}
                <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                  <h3 className="text-3xl font-bold">
                    Premium OET Preparation
                  </h3>

                  {/* Buttons */}
                  <div className="space-x-2">
                    <button className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition duration-300">
                      Medicine
                    </button>
                    <button className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition duration-300">
                      Nursing
                    </button>
                  </div>

                  {/* Price Tag */}
                  <div className="text-3xl font-bold mt-4">$350</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 text-center">
        <h2 className="text-3xl font-bold mb-5 text-sky-600">Short Courses</h2>

        <div className="flex flex-wrap justify-center gap-5 mx-5">
          <img
            src={"/doc1.png"}
            alt="Doctor"
            className=" w-full max-w-xs"
          />
          {/* First Card */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white p-5 rounded-lg shadow-lg w-full sm:w-80 text-left">
            <h3 className="text-xl font-semibold mb-2">
              OET Intensive Writing Course
            </h3>
            <div className="text-2xl font-bold mb-3 ml-5">$199</div>
            <ul className="list-disc list-inside space-y-2">
              <li>Guided course</li>
              <li>10 Video Tutorials</li>
              <li>10 Modules with skills exercises</li>
              <li>3 Writing Corrections</li>
              <li>Language tips</li>
              <li>OET Group Class</li>
              <li>Writing Samples with grades & explanations</li>
            </ul>
          </div>

          {/* Second Card */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white p-5 rounded-lg shadow-lg w-full sm:w-80 text-left">
            <h3 className="text-xl font-semibold mb-2">
              OET Writing Corrections
            </h3>
            <div className="text-lg font-bold mb-3">$99</div>
            <ul className="list-disc list-inside space-y-2">
              <li>Expert tutor feedback & support</li>
              <li>Case Notes immediately accessible</li>
              <li>Sample letters with grade and feedback</li>
              <li>Personalized learning strategies</li>
              <li>Access to additional resources</li>
              <li>Regular progress tracking</li>
              <li>Flexible scheduling for sessions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        {/* Testimonial Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-sky-600">Student Testimonials</h3>
          
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 mx-5">

            {/* Testimonial 1 */}
            <div className="w-full lg:w-1/3 p-6 bg-white shadow-lg rounded-lg text-center">
              <p className="text-gray-700 italic">
                "The OET course was incredible! The teachers were very supportive, and the practice materials were excellent. I passed the exam on my first try!"
              </p>
              <p className="mt-4 font-semibold text-gray-800">- John Doe, Nurse</p>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full lg:w-1/3 p-6 bg-white shadow-lg rounded-lg text-center">
              <p className="text-gray-700 italic">
                "Thanks to the private classes and detailed feedback, I was able to improve my weak areas and feel confident going into the OET exam."
              </p>
              <p className="mt-4 font-semibold text-gray-800">- Jane Smith, Doctor</p>
            </div>

            {/* Testimonial 3 */}
            <div className="w-full lg:w-1/3 p-6 bg-white shadow-lg rounded-lg text-center">
              <p className="text-gray-700 italic">
                "I would highly recommend this course to anyone preparing for the OET. The mock tests and video tutorials were especially helpful!"
              </p>
              <p className="mt-4 font-semibold text-gray-800">- Alice Johnson, Pharmacist</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    <section className="py-12 bg-gray-100">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-sky-600">What Our Students Say</h2>

    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Testimonial 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="italic">"This course helped me ace my OET exam!"</p>
        <h3 className="mt-4 font-bold">- Jane Doe</h3>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="italic">
          "The instructors were very knowledgeable, and the material was spot on."
        </p>
        <h3 className="mt-4 font-bold">- John Smith</h3>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="italic">
          "Thanks to this course, I passed the OET with flying colors."
        </p>
        <h3 className="mt-4 font-bold">- Emily Johnson</h3>
      </div>

      {/* Testimonial 4 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="italic">
          "I loved the hands-on practice tests and the detailed feedback."
        </p>
        <h3 className="mt-4 font-bold">- Mark Williams</h3>
      </div>

      {/* Testimonial 5 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="italic">
          "The course content was exactly what I needed to prepare for the OET."
        </p>
        <h3 className="mt-4 font-bold">- Sarah Davis</h3>
      </div>

      {/* Testimonial 6 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="italic">
          "Great experience! I felt confident during my exam after this course."
        </p>
        <h3 className="mt-4 font-bold">- Olivia Brown</h3>
      </div>
      
    </div>
  </div>
</section>

<section className="py-12 bg-gray-100">
<div className="text-center">
      {/* Button to open the form */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsFormOpen(true)}
      >
        Share Your Feedback
      </button>

      {/* Modal with feedback form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setIsFormOpen(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-6">Share Your Feedback</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-left text-gray-700 font-bold mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-left text-gray-700 font-bold mb-2">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Feedback Text Area */}
              <div className="mb-6">
                <label htmlFor="feedback" className="block text-left text-gray-700 font-bold mb-2">
                  Your Feedback:
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  placeholder="Share your thoughts about the course"
                  rows="5"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
</section>



<section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-sky-600">FAQ OET</h2>
        <div className="mt-8 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              {/* Question Button */}
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none py-4 text-gray-800 font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer Section */}
              {openIndex === index && (
                <div className="mt-2 text-gray-600 transition-all duration-500 ease-in-out">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


    <footer className="bg-teal-600 py-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Impressum</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions for Clients</a></li>
              <li><a href="#" className="hover:underline">BPME Course Brochure</a></li>
            </ul>
          </div>

          {/* Affiliate Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Affiliate</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#" className="hover:underline">Affiliate Login</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-lg" />
                <span>+49 4454 968 8083</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-lg" />
                <span>info@promedicalenglish.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-lg" />
                <span>+886 928 729 860</span>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Instruction Videos</a></li>
              <li><a href="#" className="hover:underline">FAQ OET</a></li>
              <li><a href="#" className="hover:underline">FAQ Medical English</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-teal-500 pt-6 text-center">
          <p>&copy; 2024 Pro Medical English. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}
