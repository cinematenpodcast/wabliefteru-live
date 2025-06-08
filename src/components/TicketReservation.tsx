
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, User, Phone, Users } from 'lucide-react';

const TicketReservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    
    toast({
      title: "Reservation Submitted!",
      description: "Thank you for your interest. We'll confirm your reservation within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '1',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="tickets" className="py-20 bg-cathedral-charcoal/80 relative">
      <div className="stone-texture absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cathedral-cream mb-6">
            Reserve Your Sacred Seat
          </h2>
          <p className="text-xl text-cathedral-gold max-w-2xl mx-auto">
            Secure your place at this unique recording experience. Limited seats available 
            to ensure intimate acoustics and atmosphere.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-cathedral-stone/10 backdrop-blur-sm p-8 rounded-lg border border-cathedral-gold/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-cathedral-cream flex items-center">
                    <User className="w-4 h-4 mr-2 text-cathedral-gold" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-cathedral-charcoal/60 border-cathedral-gold/30 text-cathedral-cream placeholder:text-cathedral-gold/50 focus:border-cathedral-gold"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cathedral-cream flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-cathedral-gold" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-cathedral-charcoal/60 border-cathedral-gold/30 text-cathedral-cream placeholder:text-cathedral-gold/50 focus:border-cathedral-gold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-cathedral-cream flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-cathedral-gold" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-cathedral-charcoal/60 border-cathedral-gold/30 text-cathedral-cream placeholder:text-cathedral-gold/50 focus:border-cathedral-gold"
                    placeholder="+32 xxx xxx xxx"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-cathedral-cream flex items-center">
                    <Users className="w-4 h-4 mr-2 text-cathedral-gold" />
                    Number of Guests *
                  </Label>
                  <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                    <SelectTrigger className="bg-cathedral-charcoal/60 border-cathedral-gold/30 text-cathedral-cream focus:border-cathedral-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-cathedral-charcoal border-cathedral-gold/30">
                      <SelectItem value="1" className="text-cathedral-cream hover:bg-cathedral-gold/20">1 Person</SelectItem>
                      <SelectItem value="2" className="text-cathedral-cream hover:bg-cathedral-gold/20">2 People</SelectItem>
                      <SelectItem value="3" className="text-cathedral-cream hover:bg-cathedral-gold/20">3 People</SelectItem>
                      <SelectItem value="4" className="text-cathedral-cream hover:bg-cathedral-gold/20">4 People</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-cathedral-cream">
                  Special Requests or Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-cathedral-charcoal/60 border-cathedral-gold/30 text-cathedral-cream placeholder:text-cathedral-gold/50 focus:border-cathedral-gold resize-none"
                  placeholder="Any special requests or messages for the hosts..."
                  rows={4}
                />
              </div>
              
              <div className="bg-cathedral-gold/10 p-4 rounded-lg border border-cathedral-gold/20">
                <p className="text-cathedral-gold text-sm">
                  <strong>Please note:</strong> This is a live recording session. Silence during recording is essential. 
                  Photography and recording by attendees is not permitted. Confirmation will be sent within 24 hours.
                </p>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-cathedral-gold text-cathedral-charcoal hover:bg-cathedral-gold/90 font-semibold py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                Submit Reservation Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketReservation;
