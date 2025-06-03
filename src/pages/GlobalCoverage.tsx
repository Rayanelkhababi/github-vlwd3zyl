import React, { useState } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { motion } from 'framer-motion';
import { Globe, Users, Building, Trophy, X } from 'lucide-react';

const CountryModal = ({ country, onClose }) => {
  const countryData = {
    NL: {
      name: "Netherlands",
      industries: [
        {
          name: "Logistics & Transportation",
          examples: ["DHL Netherlands", "Port of Rotterdam"],
          solutions: [
            "Automated route optimization",
            "Real-time shipment tracking",
            "Predictive maintenance"
          ]
        },
        {
          name: "Agriculture & Food",
          examples: ["FrieslandCampina", "Wageningen Agritech"],
          solutions: [
            "Crop yield prediction",
            "Supply chain automation",
            "Quality control automation"
          ]
        },
        {
          name: "Financial Services",
          examples: ["ING Bank", "Rabobank"],
          solutions: [
            "Automated risk assessment",
            "Fraud detection",
            "Customer service automation"
          ]
        }
      ]
    },
    DE: {
      name: "Germany",
      industries: [
        {
          name: "Manufacturing",
          examples: ["Siemens", "BMW Group"],
          solutions: [
            "Production line optimization",
            "Quality control automation",
            "Predictive maintenance"
          ]
        },
        {
          name: "Automotive",
          examples: ["Volkswagen", "Mercedes-Benz"],
          solutions: [
            "Supply chain automation",
            "Assembly line optimization",
            "Inventory management"
          ]
        },
        {
          name: "Chemical Industry",
          examples: ["BASF", "Bayer"],
          solutions: [
            "Process automation",
            "Safety monitoring",
            "Research & development automation"
          ]
        }
      ]
    },
    GB: {
      name: "United Kingdom",
      industries: [
        {
          name: "Financial Services",
          examples: ["HSBC", "Barclays"],
          solutions: [
            "Trading automation",
            "Risk management",
            "Compliance monitoring"
          ]
        },
        {
          name: "Retail",
          examples: ["Tesco", "Marks & Spencer"],
          solutions: [
            "Inventory optimization",
            "Customer service automation",
            "Supply chain management"
          ]
        },
        {
          name: "Healthcare",
          examples: ["NHS Digital", "Private Healthcare UK"],
          solutions: [
            "Patient care automation",
            "Administrative tasks",
            "Medical records management"
          ]
        }
      ]
    },
    US: {
      name: "United States",
      industries: [
        {
          name: "Technology",
          examples: ["Microsoft", "Apple"],
          solutions: [
            "Development automation",
            "Customer support",
            "Quality assurance"
          ]
        },
        {
          name: "Healthcare",
          examples: ["UnitedHealth Group", "CVS Health"],
          solutions: [
            "Patient management",
            "Claims processing",
            "Medical records automation"
          ]
        },
        {
          name: "E-commerce",
          examples: ["Amazon", "Walmart"],
          solutions: [
            "Inventory management",
            "Order processing",
            "Customer service automation"
          ]
        }
      ]
    },
    CA: {
      name: "Canada",
      industries: [
        {
          name: "Natural Resources",
          examples: ["Suncor Energy", "Canadian Natural Resources"],
          solutions: [
            "Resource optimization",
            "Environmental monitoring",
            "Safety automation"
          ]
        },
        {
          name: "Financial Services",
          examples: ["Royal Bank of Canada", "TD Bank"],
          solutions: [
            "Risk assessment",
            "Fraud detection",
            "Investment automation"
          ]
        },
        {
          name: "Technology",
          examples: ["Shopify", "OpenText"],
          solutions: [
            "E-commerce automation",
            "Content management",
            "Customer engagement"
          ]
        }
      ]
    },
    FR: {
      name: "France",
      industries: [
        {
          name: "Luxury Goods",
          examples: ["LVMH", "L'Oréal"],
          solutions: [
            "Supply chain optimization",
            "Customer experience",
            "Inventory management"
          ]
        },
        {
          name: "Aviation",
          examples: ["Airbus", "Air France"],
          solutions: [
            "Maintenance prediction",
            "Flight optimization",
            "Customer service"
          ]
        },
        {
          name: "Energy",
          examples: ["EDF", "Total"],
          solutions: [
            "Grid management",
            "Energy optimization",
            "Predictive maintenance"
          ]
        }
      ]
    },
    ES: {
      name: "Spain",
      industries: [
        {
          name: "Tourism",
          examples: ["Meliá Hotels", "NH Hotel Group"],
          solutions: [
            "Booking automation",
            "Customer service",
            "Revenue optimization"
          ]
        },
        {
          name: "Banking",
          examples: ["Santander", "BBVA"],
          solutions: [
            "Risk management",
            "Customer service",
            "Fraud detection"
          ]
        },
        {
          name: "Telecommunications",
          examples: ["Telefónica", "Orange Spain"],
          solutions: [
            "Network optimization",
            "Customer support",
            "Service automation"
          ]
        }
      ]
    },
    IT: {
      name: "Italy",
      industries: [
        {
          name: "Fashion",
          examples: ["Gucci", "Prada"],
          solutions: [
            "Supply chain management",
            "Inventory optimization",
            "Customer experience"
          ]
        },
        {
          name: "Automotive",
          examples: ["Ferrari", "Fiat"],
          solutions: [
            "Production automation",
            "Quality control",
            "Supply chain optimization"
          ]
        },
        {
          name: "Food & Beverage",
          examples: ["Barilla", "Lavazza"],
          solutions: [
            "Production automation",
            "Quality control",
            "Distribution optimization"
          ]
        }
      ]
    },
    AU: {
      name: "Australia",
      industries: [
        {
          name: "Mining",
          examples: ["BHP", "Rio Tinto"],
          solutions: [
            "Operations automation",
            "Safety monitoring",
            "Resource optimization"
          ]
        },
        {
          name: "Banking",
          examples: ["Commonwealth Bank", "ANZ"],
          solutions: [
            "Risk assessment",
            "Fraud detection",
            "Customer service"
          ]
        },
        {
          name: "Agriculture",
          examples: ["Australian Agricultural Company", "Elders"],
          solutions: [
            "Crop management",
            "Weather prediction",
            "Supply chain optimization"
          ]
        }
      ]
    },
    JP: {
      name: "Japan",
      industries: [
        {
          name: "Electronics",
          examples: ["Sony", "Panasonic"],
          solutions: [
            "Production automation",
            "Quality control",
            "Supply chain optimization"
          ]
        },
        {
          name: "Automotive",
          examples: ["Toyota", "Honda"],
          solutions: [
            "Manufacturing automation",
            "Quality assurance",
            "Supply chain management"
          ]
        },
        {
          name: "Robotics",
          examples: ["Fanuc", "Yaskawa"],
          solutions: [
            "Process automation",
            "Quality control",
            "Production optimization"
          ]
        }
      ]
    },
    SG: {
      name: "Singapore",
      industries: [
        {
          name: "Banking",
          examples: ["DBS Bank", "OCBC"],
          solutions: [
            "Transaction processing",
            "Risk assessment",
            "Customer service"
          ]
        },
        {
          name: "Logistics",
          examples: ["PSA International", "Singapore Airlines"],
          solutions: [
            "Port operations automation",
            "Fleet management",
            "Cargo tracking"
          ]
        },
        {
          name: "Manufacturing",
          examples: ["Singapore Manufacturing Federation", "Flex"],
          solutions: [
            "Production automation",
            "Quality control",
            "Supply chain optimization"
          ]
        }
      ]
    },
    AE: {
      name: "United Arab Emirates",
      industries: [
        {
          name: "Banking & Finance",
          examples: ["Emirates NBD", "Abu Dhabi Commercial Bank"],
          solutions: [
            "Digital banking automation",
            "Risk management",
            "Customer service"
          ]
        },
        {
          name: "Tourism & Hospitality",
          examples: ["Emirates Group", "Jumeirah Group"],
          solutions: [
            "Customer experience",
            "Booking automation",
            "Service optimization"
          ]
        },
        {
          name: "Real Estate",
          examples: ["Emaar Properties", "Aldar Properties"],
          solutions: [
            "Property management",
            "Customer service",
            "Maintenance automation"
          ]
        }
      ]
    }
  };

  if (!countryData[country]) return null;

  const data = countryData[country];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">{data.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8">
            {data.industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Leading Companies</h4>
                    <ul className="list-disc list-inside text-gray-300">
                      {industry.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">AI Solutions</h4>
                    <ul className="list-disc list-inside text-gray-300">
                      {industry.solutions.map((solution, i) => (
                        <li key={i}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GlobalCoverage = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Countries where we currently operate
  const activeCountries = {
    NL: 100, // Netherlands
    DE: 80,  // Germany
    GB: 90,  // United Kingdom
    FR: 70,  // France
    ES: 60,  // Spain
    IT: 65,  // Italy
    US: 85,  // United States
    CA: 75,  // Canada
    AU: 70,  // Australia
    JP: 80,  // Japan
    SG: 85,  // Singapore
    AE: 75   // UAE
  };

  // Countries with success stories
  const successStories = {
    NL: {
      company: "TechNL Solutions",
      result: "75% reduction in customer response time"
    },
    GB: {
      company: "UK Digital Services",
      result: "300% increase in lead generation"
    },
    US: {
      company: "American Innovation Corp",
      result: "50% cost reduction in customer service"
    },
    SG: {
      company: "Singapore Tech Hub",
      result: "90% automation of routine tasks"
    }
  };

  const stats = [
    {
      icon: Globe,
      value: "12+",
      label: "Countries Served"
    },
    {
      icon: Users,
      value: "500+",
      label: "Satisfied Clients"
    },
    {
      icon: Building,
      value: "1000+",
      label: "Implementations"
    },
    {
      icon: Trophy,
      value: "98%",
      label: "Success Rate"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Global Coverage</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering AI automation excellence across the globe, helping businesses transform their operations and achieve unprecedented efficiency.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 text-center"
            >
              <stat.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* World Map */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-16">
          <div className="h-[500px]">
            <VectorMap
              map={worldMill}
              backgroundColor="transparent"
              zoomOnScroll={false}
              containerStyle={{
                width: '100%',
                height: '100%'
              }}
              regionStyle={{
                initial: {
                  fill: '#2a2a2a',
                  "fill-opacity": 1,
                  stroke: 'none',
                  "stroke-width": 0,
                  "stroke-opacity": 1
                },
                hover: {
                  fill: '#3b82f6',
                  "fill-opacity": 0.8,
                  cursor: 'pointer'
                }
              }}
              series={{
                regions: [{
                  values: activeCountries,
                  scale: ['#3b82f6', '#1d4ed8'],
                  normalizeFunction: 'polynomial'
                }]
              }}
              onRegionClick={(e, code) => {
                if (activeCountries[code]) {
                  setSelectedCountry(code);
                }
              }}
              onRegionTipShow={(e, label, code) => {
                if (successStories[code]) {
                  label.html(
                    `${label.html()}<br/>Success Story:<br/>${successStories[code].company}<br/>${successStories[code].result}`
                  );
                }
              }}
            />
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Object.entries(successStories).map(([country, story], index) => (
            <motion.div
              key={country}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">{story.company}</h3>
              <p className="text-gray-300">{story.result}</p>
            </motion.div>
          ))}
        </div>

        {/* Trustpilot Section */}
        <div className="text-center mb-16">
          <div className="bg-gray-900 rounded-2xl p-8 inline-block">
            <img 
              src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Trustpilot Certificate"
              className="h-24 object-contain mb-4"
            />
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-green-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-xl font-bold mt-4">Excellent</p>
            <p className="text-gray-400">Based on 500+ reviews</p>
          </div>
        </div>

        {selectedCountry && (
          <CountryModal
            country={selectedCountry}
            onClose={() => setSelectedCountry(null)}
          />
        )}
      </div>
    </div>
  );
};

export default GlobalCoverage;