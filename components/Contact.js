import { Mail, Phone, MapPin, Github, User } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/mrbagngz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Message sent successfully! I\'ll get back to you soon.');
        e.target.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Sorry, there was an error sending your message. Please try again or email me directly.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-200">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Email</div>
                  <a href="mailto:himeshkaveesha984@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    himeshkaveesha984@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-200">
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mr-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                  <a href="tel:+94781294800" className="text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors">
                    +94 78 129 4800
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-200">
                <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg mr-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Location</div>
                  <div className="text-gray-600 dark:text-gray-300">Sri Lanka 🇱🇰</div>
                </div>
              </div>

              <div className="flex items-center group hover:transform hover:scale-105 transition-all duration-200">
                <div className="bg-teal-100 dark:bg-teal-900 p-4 rounded-lg mr-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
                  <Github className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">GitHub</div>
                  <a href="https://github.com/Himesh-kaveesha" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
                    github.com/Himesh-kaveesha
                  </a>
                </div>
              </div>
            </div>

            {/* Reference Section */}
            <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Reference
              </h4>
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 dark:text-white">Janaka Dissanayaka</div>
                <div className="text-gray-600 dark:text-gray-300">Civil Engineer (SWA)</div>
                <a href="tel:+94702108663" className="text-blue-600 hover:text-blue-700 transition-colors">
                  (+94) 70 210 8663
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden fields for Formspree */}
              <input type="hidden" name="_subject" value="New message from Himesh's Portfolio" />
              <input type="text" name="_gotcha" style={{display: 'none'}} />
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}