import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Clock, Award, GraduationCap, ChefHat } from 'lucide-react';

const CourseCard = ({ title, description, image, icon: Icon, features, duration, students, navigate }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            {Icon && <Icon className="w-6 h-6" />}
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          )}
          {students && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{students} students</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 flex items-center gap-2">
            <Award className="w-4 h-4 text-green-500" />
            Key Features:
          </h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={() => navigate('/contact')}
          className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const Courses = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      title: "Pre-School Education",
      description: "A nurturing foundation for young learners aged 3-5 years. Our pre-school program focuses on holistic development through play-based learning, creative activities, and social interaction in a safe and caring environment.",
      image: "/Preschool.jpeg",
      icon: BookOpen,
      duration: "3-5 years",
      students: "200+",
      features: [
        "Play-based learning methodology",
        "Creative arts and craft activities",
        "Early literacy and numeracy skills",
        "Social and emotional development",
        "Safe and nurturing environment",
        "Experienced early childhood educators"
      ]
    },
    {
      title: "Basic Level Education",
      description: "Comprehensive education from Grade 1-8 following the national curriculum. We provide a strong academic foundation combined with character development, critical thinking skills, and extracurricular activities.",
      image: "/basiceducation.jpg",
      icon: GraduationCap,
      duration: "Grade 1-8",
      students: "800+",
      features: [
        "National curriculum aligned",
        "Interactive and engaging teaching methods",
        "Focus on critical thinking and problem-solving",
        "Regular assessments and parent-teacher meetings",
        "Sports and extracurricular activities",
        "Computer literacy programs",
        "Science and math labs"
      ]
    },
    {
      title: "+2 Computer Science & Management",
      description: "Higher secondary education specializing in Computer Science and Management streams. Prepare for university and career success with modern curriculum, practical training, and industry exposure.",
      image: "/plus2.jpg",
      icon: GraduationCap,
      duration: "2 years",
      students: "300+",
      features: [
        "NEB approved curriculum",
        "Computer programming and applications",
        "Business management fundamentals",
        "Practical lab sessions and projects",
        "Career counseling and guidance",
        "University entrance preparation",
        "Industry visits and internships"
      ]
    },
    {
      title: "Hospitality Management",
      description: "Professional training in hospitality and tourism management. Gain hands-on experience in hotel operations, food service, customer relations, and tourism industry practices with industry-standard facilities.",
      image: "/hospitality.png",
      icon: ChefHat,
      duration: "1-2 years",
      students: "150+",
      features: [
        "Industry-relevant curriculum",
        "Hands-on training facilities",
        "Food and beverage management",
        "Hotel operations and management",
        "Customer service excellence",
        "Internship opportunities in top hotels",
        "Professional certification programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
            Excellence in education from early childhood to professional training. 
            Discover the right path for your educational journey at NAAV.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} navigate={navigate} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of students who have chosen NAAV for quality education and holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Apply Now
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;