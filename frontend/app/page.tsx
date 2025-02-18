'use client';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Integrate with Mailchimp/ConvertKit here
    console.log('Email submitted:', email);
    alert('Thank you for joining the waitlist!');
    setEmail('');
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Digital Storytelling Village that Bridges Generations and Cultures
          </h1>
          <p className="text-xl text-gray-500 mb-8">
            A digital storytelling village where you can listen to and share
            folktales, myths, and oral traditions in audio format.
          </p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-l-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600 transition-colors"
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎧',
                title: 'Listen',
                description:
                  'Discover engaging stories in different languages.',
              },
              {
                icon: '🗣️',
                title: 'Tell Stories',
                description: 'Share your own stories with a global audience.',
              },
              {
                icon: '🔴',
                title: 'Live Storytelling',
                description:
                  'Participate in interactive storytelling sessions.',
              },
              {
                icon: '💰',
                title: 'Earn & Support',
                description:
                  'Tip storytellers or get rewarded for storytelling.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <span className="text-4xl mb-4">{step.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browse Stories by Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Tribes',
                description:
                  'Explore stories from various African tribes like Yoruba, Zulu, Maasai, and more.',
              },
              {
                title: 'Regions',
                description:
                  'Discover tales from different regions such as West Africa, East Africa, and Southern Africa.',
              },
              {
                title: 'Themes',
                description:
                  'Find stories based on themes like folklore, myths, legends, and moral lessons.',
              },
              {
                title: 'Languages',
                description:
                  'Listen to stories in local languages like Swahili, Hausa, Xhosa, and more.',
              },
              {
                title: 'Historical Events',
                description:
                  'Learn about historical events and figures through oral storytelling.',
              },
              {
                title: 'Modern Adaptations',
                description:
                  'Enjoy contemporary retellings of traditional stories.',
              },
            ].map((category, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why It Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cultural Preservation',
                description: 'Keeping traditional stories alive.',
              },
              {
                title: 'Multilingual Support',
                description: 'Listen to stories in local languages.',
              },
              {
                title: 'Community & Interaction',
                description:
                  'Engage with storytellers and shape stories together.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Features Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              '🎙 Audio-Based Storytelling',
              '🔴 Live Story Sessions',
              '🌍 Multilingual & Offline Access',
              '💰 Monetization for Storytellers',
              '🎭 Collaborative Storytelling & Challenges',
              '🎭 Language Translation',
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md"
              >
                <p className="text-xl">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Interest Counter */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join 500+ early adopters preserving oral traditions
          </h2>
          <p className="text-gray-600 mb-8">
            Be part of a growing community dedicated to cultural preservation.
          </p>
          <div className="text-4xl font-bold text-orange-500">500+</div>
        </div>
      </section>

      {/* Email Signup Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Early Access</h2>
          <p className="text-gray-600 mb-8">
            Sign up to be notified when we launch.
          </p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-l-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600 transition-colors"
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-orange-500">
              Facebook
            </a>
            <a href="#" className="hover:text-orange-500">
              Twitter
            </a>
            <a href="#" className="hover:text-orange-500">
              Instagram
            </a>
          </div>
          <p className="text-gray-400">
            Contact us:{' '}
            <a
              href="mailto:info@africanstorytelling.com"
              className="text-orange-500"
            >
              info@nkane.com
            </a>
          </p>
          <p className="text-gray-400 mt-2">
            © 2025 Nkane Africa Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
