import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Debug: Log the API URL on component mount
  useEffect(() => {
    const apiUrl = (import.meta as any).env?.VITE_API_URL || 
                  (window.location.hostname === 'localhost' ? 'http://localhost:8000' : 'https://jevelon-backend.onrender.com');
    console.log('🔍 Debug - Current API URL:', apiUrl);
    console.log('🔍 Debug - Environment variable VITE_API_URL:', (import.meta as any).env?.VITE_API_URL);
    console.log('🔍 Debug - Current hostname:', window.location.hostname);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      // Get API URL from environment or use fallback
      const apiUrl = (import.meta as any).env?.VITE_API_URL || 
                    (window.location.hostname === 'localhost' ? 'http://localhost:8000' : 'https://jevelon-backend.onrender.com');
      
      console.log('Submitting to API:', `${apiUrl}/api/contact/submit/`);
      console.log('Form data:', formData);
      
      const response = await fetch(`${apiUrl}/api/contact/submit/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        // If not JSON, get the text to see what we're getting
        const textResponse = await response.text();
        console.error('Non-JSON response received:', textResponse.substring(0, 200));
        throw new Error('Server returned non-JSON response. Please check the API URL.');
      }

      const result = await response.json();
      console.log('Response data:', result);

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: "Thank you for your message! We'll get back to you soon."
        });
        // Reset form
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setSubmitStatus({
          type: 'error',
          message: `Error: ${result.error || result.errors || 'Something went wrong'}`
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : "An error occurred while submitting your message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@jevelon.com",
      href: "mailto:hello@jevelon.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-141-13143238",
      href: "tel:+9114113143238"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Jaipur,Rajasthan,India",
      href: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri: 9AM-6PM IST",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your project. Schedule a free consultation to discuss your business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitStatus.type && (
                <div className={`mb-4 p-3 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Name *</label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your Name"
                      className="text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email *</label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="text-black"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2">Phone (Optional)</label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 1234567890"
                    className="text-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-2">Service Interested In</label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend-development">Frontend Development</SelectItem>
                      <SelectItem value="backend-development">Backend Development</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                      <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="other">Other / Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">Message *</label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project..."
                    className="text-black"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule My Free Consultation'}
                </Button>

                <p className="privacy-note text-sm text-gray-600">
                  We respect your privacy. Your information will not be shared.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <IconComponent className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{info.title}</h4>
                          {info.href !== "#" ? (
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-blue-600 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}