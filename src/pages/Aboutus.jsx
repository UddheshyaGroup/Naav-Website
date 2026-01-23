import React from 'react'
import { GraduationCap, Users, Award, Target, BookOpen, Heart } from 'lucide-react'

const Aboutus = () => {
  const values = [
    {
      icon: <GraduationCap className="w-12 h-12 text-[#ffa239]" />,
      title: "Excellence in Education",
      description: "We strive for academic excellence and holistic development of every student."
    },
    {
      icon: <Users className="w-12 h-12 text-[#ffa239]" />,
      title: "Community Focus",
      description: "Building a strong community of learners, teachers, and parents working together."
    },
    {
      icon: <Award className="w-12 h-12 text-[#ffa239]" />,
      title: "Recognition & Achievement",
      description: "Celebrating every achievement and milestone in our student's journey."
    },
    {
      icon: <Target className="w-12 h-12 text-[#ffa239]" />,
      title: "Clear Vision",
      description: "Preparing students for a bright future with modern education and values."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-[#ffa239]" />,
      title: "Comprehensive Curriculum",
      description: "Offering a well-rounded education that nurtures both mind and character."
    },
    {
      icon: <Heart className="w-12 h-12 text-[#ffa239]" />,
      title: "Care & Support",
      description: "Providing a nurturing environment where every child feels valued and supported."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primaygreen text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NAAV</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Nepal Adarsha Awasiya Vidyalaya - Shaping Future Leaders
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 text-[#ffa239] mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To provide quality education that empowers students with knowledge, skills, and values 
              necessary to become responsible global citizens. We are committed to creating a nurturing 
              environment that fosters academic excellence, personal growth, and social responsibility.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Award className="w-10 h-10 text-[#ffa239] mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a leading educational institution in Nepal, recognized for excellence in academics, 
              character development, and innovation. We envision creating future leaders who are 
              knowledgeable, compassionate, and equipped to make positive contributions to society.
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our School</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Nepal Adarsha Awasiya Vidyalaya (NAAV) is a premier residential educational institution 
              dedicated to providing world-class education to students from across Nepal. Established 
              with the vision of creating a center of excellence in education, we combine traditional 
              values with modern teaching methodologies.
            </p>
            <p>
              Our residential school offers a unique opportunity for students to live, learn, and grow 
              in a supportive and structured environment. We believe that education extends beyond the 
              classroom, and our residential program is designed to develop independence, discipline, 
              and life skills in our students.
            </p>
            <p>
              With state-of-the-art facilities, experienced faculty, and a comprehensive curriculum, 
              we ensure that every student receives personalized attention and the resources they need 
              to excel. Our campus provides a safe, nurturing environment where students can explore 
              their potential, develop their talents, and build lasting friendships.
            </p>
            <p>
              At NAAV, we are committed to holistic development. In addition to academic excellence, 
              we emphasize sports, arts, cultural activities, and community service. We believe in 
              nurturing well-rounded individuals who are prepared to face the challenges of the 
              21st century with confidence and integrity.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-primaygreen rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus