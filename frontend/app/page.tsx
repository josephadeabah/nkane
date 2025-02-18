'use client';
import { useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// Custom Arrow Components
const PrevArrow = (props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-opacity ml-3"
    >
      <FaChevronLeft className="w-6 h-6 text-white" />
    </button>
  );
};

const NextArrow = (props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-opacity mr-3"
    >
      <FaChevronRight className="w-6 h-6 text-white" />
    </button>
  );
};

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert('Thank you for joining the waitlist!');
    setEmail('');
  };

  const carouselSettings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 images at a time
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: <PrevArrow onClick={() => {}} />, // Custom previous arrow
    nextArrow: <NextArrow onClick={() => {}} />, // Custom next arrow
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set the time for each slide to change (5000ms = 5 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 2 images on tablets
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Show 1 image on mobile
        },
      },
    ],
  };

  const regions = [
    {
      title: 'West Africa',
      image: '/hero-bg.jpg',
      description:
        'Explore stories from West African countries like Nigeria, Ghana, and Senegal.',
    },
    {
      title: 'East Africa',
      image: '/hero-bg.jpg',
      description:
        'Discover tales from East African regions such as Kenya, Tanzania, and Ethiopia.',
    },
    {
      title: 'Southern Africa',
      image: '/hero-bg.jpg',
      description:
        'Listen to stories from Southern Africa, including South Africa, Zimbabwe, and Botswana.',
    },
    {
      title: 'North Africa',
      image: '/hero-bg.jpg',
      description:
        'Learn about the rich oral traditions of North African countries like Egypt, Morocco, and Algeria.',
    },
    {
      title: 'Central Africa',
      image: '/hero-bg.jpg',
      description:
        'Discover stories from Central African countries like Cameroon, Congo, and Gabon.',
    },
    {
      title: 'Horn of Africa',
      image: '/hero-bg.jpg',
      description:
        'Explore the vibrant cultures of the Horn of Africa, including Somalia, Eritrea, and Djibouti.',
    },
    {
      title: 'Sahel',
      image: '/hero-bg.jpg',
      description:
        'Learn about the semi-arid region of the Sahel, spanning countries like Mali, Niger, and Chad.',
    },
    {
      title: 'Indian Ocean Islands',
      image: '/hero-bg.jpg',
      description:
        'Uncover the stories from the island nations of the Indian Ocean, including Madagascar, Mauritius, and Seychelles.',
    },
    {
      title: 'Saharan Africa',
      image: '/hero-bg.jpg',
      description:
        'Delve into the nomadic traditions and desert cultures of Saharan countries like Libya, Tunisia, and Mauritania.',
    },
  ];

  const tribes = [
    {
      title: 'Yoruba',
      image: '/hero-bg.jpg',
      description:
        'Explore the rich mythology and folklore of the Yoruba people from Nigeria.',
    },
    {
      title: 'Zulu',
      image: '/hero-bg.jpg',
      description:
        'Discover the vibrant traditions and stories of the Zulu nation in Southern Africa.',
    },
    {
      title: 'Maasai',
      image: '/hero-bg.jpg',
      description:
        'Learn about the Maasai warriors and their oral traditions from Kenya and Tanzania.',
    },
    {
      title: 'Hausa',
      image: '/hero-bg.jpg',
      description:
        'Listen to the tales of the Hausa people, one of the largest ethnic groups in West Africa.',
    },
    {
      title: 'Xhosa',
      image: '/hero-bg.jpg',
      description:
        'Experience the storytelling traditions of the Xhosa people from South Africa.',
    },
    {
      title: 'Berber',
      image: '/hero-bg.jpg',
      description:
        'Uncover the ancient stories of the Berber people from North Africa.',
    },
    {
      title: 'Igbo',
      image: '/hero-bg.jpg',
      description:
        'Explore the myths and legends of the Igbo people from Nigeria.',
    },
    {
      title: 'San',
      image: '/hero-bg.jpg',
      description:
        'Discover the ancient storytelling traditions of the San people of Southern Africa.',
    },
    {
      title: 'Fulani',
      image: '/hero-bg.jpg',
      description:
        'Learn about the nomadic Fulani people and their oral traditions across West Africa.',
    },
    {
      title: 'Ashanti',
      image: '/hero-bg.jpg',
      description:
        'Delve into the rich history and traditions of the Ashanti people from Ghana.',
    },
    {
      title: 'Nzema',
      image: '/hero-bg.jpg',
      description:
        'Delve into the rich history and traditions of the Nzema people from Ghana.',
    },
    {
      title: 'Fanste',
      image: '/hero-bg.jpg',
      description:
        'Delve into the rich history and traditions of the Ashanti people from Ghana.',
    },
    {
      title: 'Dagbani',
      image: '/hero-bg.jpg',
      description:
        'Delve into the rich history and traditions of the Dagbani people from Ghana.',
    },
    {
      title: 'Tutsi',
      image: '/hero-bg.jpg',
      description:
        'Explore the culture, history, and traditions of the Tutsi people from Rwanda and Burundi.',
    },
    {
      title: 'Shona',
      image: '/hero-bg.jpg',
      description:
        'Learn about the Shona people and their ancient history from Zimbabwe.',
    },
    {
      title: 'Tuareg',
      image: '/hero-bg.jpg',
      description:
        'Uncover the tales and traditions of the Tuareg people, nomads of the Sahara.',
    },
    {
      title: 'Wolof',
      image: '/hero-bg.jpg',
      description:
        'Discover the language, culture, and traditions of the Wolof people in Senegal and The Gambia.',
    },
    {
      title: 'Ndebele',
      image: '/hero-bg.jpg',
      description:
        'Explore the traditions and vibrant art of the Ndebele people from Zimbabwe and South Africa.',
    },
  ];

  const themes = [
    {
      title: 'Folklore',
      image: '/hero.jpg',
      description:
        'Explore traditional stories passed down through generations.',
    },
    {
      title: 'Myths',
      image: '/hero-bg.jpg',
      description:
        'Discover ancient myths that explain the origins of the world and natural phenomena.',
    },
    {
      title: 'Legends',
      image: '/hero-bg.jpg',
      description:
        'Listen to legendary tales of heroes, warriors, and mythical creatures.',
    },
    {
      title: 'Moral Lessons',
      image: '/hero-bg.jpg',
      description:
        'Learn valuable life lessons through stories with moral teachings.',
    },
    {
      title: 'Adventure',
      image: '/hero-bg.jpg',
      description:
        'Embark on thrilling adventures with stories of exploration and discovery.',
    },
    {
      title: 'Romance',
      image: '/hero-bg.jpg',
      description: 'Experience tales of love, passion, and heartbreak.',
    },
    {
      title: 'Historical Events',
      image: '/hero-bg.jpg',
      description: 'Relive significant historical events through storytelling.',
    },
    {
      title: 'Modern Adaptations',
      image: '/hero-bg.jpg',
      description: 'Enjoy contemporary retellings of traditional stories.',
    },
    {
      title: 'Spiritual',
      image: '/hero-bg.jpg',
      description: 'Explore stories with spiritual and religious themes.',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#1b4d3e] bg-cover bg-center py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            A Storytelling Village Bridging Generations & Cultures
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Welcome to the{' '}
            <span className="font-semibold text-cyan-500">
              Nkane (The Olden Days)
            </span>
            —a modern space where the rich traditions of African storytelling
            meet the digital age. Here, you can immerse yourself in captivating
            folktales, ancient myths, and time-honored oral traditions, passed
            down through generations. These stories are brought to life in
            high-quality audio, transporting you back to those magical nights
            when stories were shared around the fire.
          </p>
          <p className="text-xl text-gray-200 mb-8">
            Reconnect with your roots and explore the continent's vibrant
            storytelling heritage. From Ananse’s clever tales to the wisdom of
            elders, this platform brings Africa’s oral traditions to life.
            Share, listen, and engage in stories that connect generations and
            preserve cultures.
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
              className="bg-cyan-800 text-white px-6 py-2 rounded-r-lg hover:bg-cyan-600 transition-colors"
            >
              Join the Waitlist
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

      {/* Category by Regions Carousel */}
      <section className="py-20 overflow-hidden relative">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-left px-6 mb-4">
            Category by Regions
          </h2>
          <Slider {...carouselSettings}>
            {regions.map((region, index) => (
              <div key={index} className="px-2">
                <div className="relative">
                  <Image
                    src={region.image}
                    alt={region.title}
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                    <h3 className="text-xl font-bold">{region.title}</h3>
                    <p className="text-sm">{region.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Category by Tribes Carousel */}
      <section className="py-20 overflow-hidden relative">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-left px-6 mb-4">
            Category by Tribes
          </h2>
          <Slider {...carouselSettings}>
            {tribes.map((tribe, index) => (
              <div key={index} className="px-2">
                <div className="relative">
                  <Image
                    src={tribe.image}
                    alt={tribe.title}
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                    <h3 className="text-xl font-bold">{tribe.title}</h3>
                    <p className="text-sm">{tribe.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Category by Themes Carousel */}
      <section className="py-20 overflow-hidden relative">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-left px-6 mb-4">
            Category by Themes
          </h2>
          <Slider {...carouselSettings}>
            {themes.map((theme, index) => (
              <div key={index} className="px-2">
                <div className="relative">
                  <Image
                    src={theme.image}
                    alt={theme.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                    <h3 className="text-xl font-bold">{theme.title}</h3>
                    <p className="text-sm">{theme.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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
              '🌐 Language Translation',
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
          <div className="text-4xl font-bold text-cyan-800">500+</div>
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
              className="bg-cyan-800 text-white px-6 py-2 rounded-r-lg hover:bg-cyan-600 transition-colors"
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
            <a href="#" className="hover:text-cyan-800">
              Facebook
            </a>
            <a href="#" className="hover:text-cyan-800">
              Twitter
            </a>
            <a href="#" className="hover:text-cyan-800">
              Instagram
            </a>
          </div>
          <p className="text-gray-400">
            Contact us:{' '}
            <a
              href="mailto:info@africanstorytelling.com"
              className="text-cyan-600"
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
