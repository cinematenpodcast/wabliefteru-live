
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, User, Users } from 'lucide-react';

const TicketReservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservering ingediend:', formData);
    
    toast({
      title: "Reservering Ontvangen!",
      description: "Bedankt voor je interesse. We bevestigen je reservering binnen 24 uur.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      guests: '1'
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
            Reserveer Je Heilige Plaats
          </h2>
          <p className="text-xl text-cathedral-gold max-w-2xl mx-auto">
            Verzeker je plaats bij deze unieke opname-ervaring. Beperkt aantal 
            plaatsen beschikbaar voor de beste akoestiek en sfeer.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="bg-cathedral-stone/10 backdrop-blur-sm p-8 rounded-lg border border-cathedral-gold/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-cathedral-cream flex items-center">
                  <User className="w-4 h-4 mr-2 text-cathedral-gold" />
                  Volledige Naam *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-cathedral-charcoal/60 border-cathedral-gold/30 text-cathedral-cream placeholder:text-cathedral-gold/50 focus:border-cathedral-gold"
                  placeholder="Voer je volledige naam in"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-cathedral-cream flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-cathedral-gold" />
                  E-mailadres *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-cathedral-charcoal/60 border-cathedral-gold/30 text-cathedral-cream placeholder:text-cathedral-gold/50 focus:border-cathedral-gold"
                  placeholder="jouw@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-cathedral-cream flex items-center">
                  <Users className="w-4 h-4 mr-2 text-cathedral-gold" />
                  Aantal Aanwezigen *
                </Label>
                <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                  <SelectTrigger className="bg-cathedral-charcoal/60 border-cathedral-gold/30 text-cathedral-cream focus:border-cathedral-gold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-cathedral-charcoal border-cathedral-gold/30">
                    <SelectItem value="1" className="text-cathedral-cream hover:bg-cathedral-gold/20">1 Persoon</SelectItem>
                    <SelectItem value="2" className="text-cathedral-cream hover:bg-cathedral-gold/20">2 Personen</SelectItem>
                    <SelectItem value="3" className="text-cathedral-cream hover:bg-cathedral-gold/20">3 Personen</SelectItem>
                    <SelectItem value="4" className="text-cathedral-cream hover:bg-cathedral-gold/20">4 Personen</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-cathedral-gold/10 p-4 rounded-lg border border-cathedral-gold/20">
                <p className="text-cathedral-gold text-sm">
                  <strong>Let op:</strong> Dit is een live opnamesessie. Stilte tijdens de opname is essentieel. 
                  Fotografie en opnames door bezoekers zijn niet toegestaan. Bevestiging wordt binnen 24 uur verzonden.
                </p>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-cathedral-gold text-cathedral-charcoal hover:bg-cathedral-gold/90 font-semibold py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                Reservering Indienen
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketReservation;
