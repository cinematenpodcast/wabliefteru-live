
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Mail, User, Users, Loader2 } from 'lucide-react';

const TicketReservation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    guests: '1'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservering ingediend:', formData);
    
    setIsLoading(true);
    
    try {
      const response = await fetch('https://nodemation.dev.icapps-projects.com/webhook/wab-live-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          guests: parseInt(formData.guests),
          timestamp: new Date().toISOString()
        }),
      });

      if (response.status === 501) {
        setIsSoldOut(true);
        setIsSubmitted(false);
        setHasError(false);
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setIsSubmitted(true);
      setHasError(false);
    } catch (error) {
      console.error('Fout bij verzenden reservering:', error);
      setHasError(true);
      setIsSubmitted(false);
      setIsSoldOut(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Reset states when user starts typing again
    if (isSubmitted || hasError || isSoldOut) {
      setIsSubmitted(false);
      setHasError(false);
      setIsSoldOut(false);
    }
    setIsLoading(false);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      guests: '1'
    });
    setIsSubmitted(false);
    setHasError(false);
    setIsLoading(false);
    setIsSoldOut(false);
  };

  return (
    <section id="tickets" className="py-20 bg-cathedral-charcoal/80 relative">
      <div className="stone-texture absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cathedral-cream mb-6">
            Reserveren is verplicht!
          </h2>
          <p className="text-xl text-cathedral-gold max-w-2xl mx-auto">
            Verzeker je plekje bij deze unieke live aflevering van Wabliefteru? <br />Wees snel want er zijn maar een beperkt aantal plaatsen beschikbaar!
            <br />
            <strong>Geen ticket, geen toegang!</strong>
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="bg-cathedral-stone/10 backdrop-blur-sm p-8 rounded-lg border border-cathedral-gold/30">
            {isSubmitted ? (
              <div className="text-center space-y-6">
                <div className="text-cathedral-cream text-lg leading-relaxed">
                  Gefeliciteerd! Jij gaat later aan je kleinkinderen kunnen vertellen over de eerste keer dat Wabliefteru? een live-show heeft gedaan en <strong>jij</strong> was daar bij! Je krijgt nog een bevestiging per e-mail. Check zeker je spam folder!
                </div>
                <a 
                  href="https://stripo.email/storage/ics/2025/6/ics_wabliefteru-live-2025-06-09-113807.ics"
                  download="Wabliefteru-Live-2025.ics"
                  className="inline-block bg-cathedral-gold text-cathedral-charcoal hover:bg-cathedral-gold/90 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Zet het in je Agenda
                </a>
              </div>
            ) : isSoldOut ? (
              <div className="text-center space-y-6">
                <div className="text-cathedral-cream text-lg leading-relaxed">
                  Helaas zijn alle tickets uitverkocht! 😢<br />
                  Maar niet getreurd, de show zal ook opgenomen worden en nadien online te bekijken zijn.
                </div>
              </div>
            ) : hasError ? (
              <div className="text-center space-y-6">
                <div className="text-cathedral-cream text-lg leading-relaxed">
                  OEI! PANIEK! Er ging iets mis, probeer nog een keer...<br />als het dan nog steeds niet lukt probeer ons dan te bereiken via sociale media!
                </div>
                <Button 
                  onClick={() => setHasError(false)}
                  className="bg-cathedral-gold text-cathedral-charcoal hover:bg-cathedral-gold/90 font-semibold"
                >
                  Opnieuw Proberen
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-cathedral-cream flex items-center">
                      <User className="w-4 h-4 mr-2 text-cathedral-gold" />
                      Voornaam *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-cathedral-charcoal/60 border-cathedral-gold/30 text-cathedral-cream placeholder:text-cathedral-gold/50 focus:border-cathedral-gold"
                      placeholder="Je voornaam"
                    />
                  </div>
                  
                <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-cathedral-cream flex items-center">
                    <User className="w-4 h-4 mr-2 text-cathedral-gold" />
                      Achternaam *
                  </Label>
                  <Input
                      id="lastName"
                    type="text"
                    required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="bg-cathedral-charcoal/60 border-cathedral-gold/30 text-cathedral-cream placeholder:text-cathedral-gold/50 focus:border-cathedral-gold"
                      placeholder="Je achternaam"
                  />
                  </div>
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
                
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-cathedral-gold text-cathedral-charcoal hover:bg-cathedral-gold/90 disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 text-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Bezig met reserveren...
                    </>
                  ) : (
                    "Reserveer je plekje!"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketReservation;
