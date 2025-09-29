import { useState } from "react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";

const faqData = [
  {
    category: "Tire Services",
    questions: [
      {
        question: "How often should I replace my tires?",
        answer: "Most tires should be replaced every 6 years or when tread depth reaches 2/32 of an inch. However, driving conditions, maintenance, and tire quality affect lifespan. We offer free tire inspections to check tread depth and overall condition."
      },
      {
        question: "Do you offer tire warranties?",
        answer: "Yes! We offer manufacturer warranties on all tire purchases, plus our own workmanship guarantee. Warranty coverage varies by tire brand and type. Ask our team about specific warranty details for your tire selection."
      },
      {
        question: "How long does a tire installation take?",
        answer: "Standard tire installation typically takes 45-60 minutes for a set of four tires, including mounting, balancing, and disposal of old tires. We recommend calling ahead to schedule an appointment for faster service."
      },
      {
        question: "Can you repair my flat tire?",
        answer: "In many cases, yes! If the puncture is in the tread area and less than 1/4 inch, we can usually repair it safely. Sidewall damage typically requires tire replacement. Bring it in for a free inspection."
      }
    ]
  },
  {
    category: "Oil Changes & Maintenance",
    questions: [
      {
        question: "How often should I get an oil change?",
        answer: "Most modern vehicles need oil changes every 5,000-7,500 miles, but this varies by vehicle and oil type. Check your owner's manual for manufacturer recommendations. We use manufacturer-specified service intervals in our digital inspections."
      },
      {
        question: "What's included in your oil change service?",
        answer: "Our oil change includes: up to 5 quarts of quality motor oil, new oil filter, fluid level checks, tire pressure check, and a comprehensive digital vehicle inspection with photos sent to your phone."
      },
      {
        question: "Do you offer synthetic oil?",
        answer: "Yes! We offer conventional, synthetic blend, and full synthetic oil options. We'll recommend the best oil type for your vehicle based on manufacturer specifications and your driving conditions."
      }
    ]
  },
  {
    category: "Brake Services",
    questions: [
      {
        question: "How do I know if I need new brakes?",
        answer: "Warning signs include: squealing or grinding noises, vibration when braking, longer stopping distances, or dashboard brake light. We offer free brake inspections to assess pad thickness, rotor condition, and brake fluid."
      },
      {
        question: "How long do brake pads last?",
        answer: "Brake pad life varies widely—typically 25,000-70,000 miles depending on driving habits, vehicle type, and pad quality. City driving and mountainous terrain wear brakes faster. Regular inspections help catch wear early."
      },
      {
        question: "Should I replace all four brakes at once?",
        answer: "Not always. Front brakes typically wear faster than rear brakes. We'll inspect all four corners and recommend replacement only where needed. However, replacing in axle sets (both front or both rear) ensures even braking."
      }
    ]
  },
  {
    category: "Wheel Alignment",
    questions: [
      {
        question: "How often should I get a wheel alignment?",
        answer: "We recommend checking alignment annually or if you notice uneven tire wear, pulling to one side, or steering wheel vibration. Also get an alignment check after hitting a large pothole or curb."
      },
      {
        question: "What causes alignment problems?",
        answer: "Common causes include: hitting potholes or curbs, worn suspension parts, accidents, and normal wear over time. Poor alignment causes uneven tire wear, reduced fuel economy, and handling issues."
      },
      {
        question: "How long does an alignment take?",
        answer: "A standard 4-wheel alignment typically takes 60-90 minutes. If suspension components need replacement first, additional time may be needed. We'll provide an accurate time estimate after inspection."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        question: "Do you offer financing?",
        answer: "Yes! We accept major credit cards and offer financing options through approved credit applications. Ask our service advisors about current financing promotions and payment plans."
      },
      {
        question: "Do you price match?",
        answer: "We're committed to competitive pricing. While we don't automatically price match, we focus on providing the best value through quality parts, expert service, and warranties. Talk to us about your budget."
      },
      {
        question: "What forms of payment do you accept?",
        answer: "We accept cash, all major credit cards (Visa, MasterCard, Discover, American Express), and debit cards. We also offer financing options for qualified customers."
      }
    ]
  },
  {
    category: "General Questions",
    questions: [
      {
        question: "Do I need an appointment?",
        answer: "While walk-ins are welcome, appointments ensure faster service and guaranteed availability. Call any location or use our online contact form to schedule. Same-day appointments often available."
      },
      {
        question: "How long will repairs take?",
        answer: "Repair time varies by service complexity. Simple services like oil changes take 30-60 minutes, while major repairs may require several hours or days. We'll provide an accurate time estimate with our digital inspection."
      },
      {
        question: "Do you provide loaner vehicles or shuttle service?",
        answer: "Service availability varies by location. Contact your nearest Delta Tire location to ask about shuttle service, loaner vehicles, or nearby amenities while you wait."
      },
      {
        question: "Are you ASE certified?",
        answer: "Yes! Our technicians are ASE (Automotive Service Excellence) certified and receive ongoing training to stay current with the latest automotive technology and repair techniques."
      }
    ]
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Find answers to common questions about our automotive services.
          </p>
        </div>
      </section>

      {/* Search and FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg"
                data-testid="input-faq-search"
              />
            </div>
          </div>

          {/* FAQ Categories */}
          {filteredFAQ.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No questions found. Try a different search term or{" "}
                <a href="/contact" className="text-red-600 hover:text-red-700 font-medium">
                  contact us directly
                </a>
                .
              </p>
            </div>
          ) : (
            filteredFAQ.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`${categoryIndex}-${questionIndex}`}
                      className="bg-white border border-gray-200 rounded-lg px-6"
                      data-testid={`faq-item-${categoryIndex}-${questionIndex}`}
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-600">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          )}

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:505-287-7946"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors"
                data-testid="button-call-faq"
              >
                Call Us: (505) 287-7946
              </a>
              <a
                href="/contact"
                className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                data-testid="button-contact-faq"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
