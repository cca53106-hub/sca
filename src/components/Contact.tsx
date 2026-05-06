import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Contact Us (If You Must)",
      subtitle: "Have questions about how we ruin futures? Reach out to our administrative scammers.",
      locTitle: "Our Hidden Spot",
      locDesc: "Near KKKUK Tableghi Markaz Karak, KP, Pakistan",
      phoneTitle: "Useless Numbers",
      emailTitle: "Spam Address",
      hoursTitle: "Sleeping Hours",
      hoursWeek: "Mon - Fri: 8:00 AM - 6:00 PM (Mostly sleeping)",
      hoursSat: "Sat: 9:00 AM - 2:00 PM (Coffee break)",
      formTitle: "Send us a Message (Will ignore)",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address",
      emailPlaceholder: "name@email.com",
      typeLabel: "Enquiry Type",
      typeOptions: ["Admission Scam", "Course Confusion", "Other Problems"],
      msgLabel: "Your Message",
      msgPlaceholder: "How can we waste your time?",
      sendBtn: "Burn Message"
    },
    ur: {
      title: "رابطہ کریں",
      subtitle: "داخلے یا کورسز کے بارے میں سوالات ہیں؟ ہماری انتظامی ٹیم سے رابطہ کریں۔",
      locTitle: "ہمارا مقام",
      locDesc: "Near KKKUK Tableghi Markaz Karak, KP, Pakistan",
      phoneTitle: "فون نمبر",
      emailTitle: "ای میل ایڈریس",
      hoursTitle: "کام کے اوقات",
      hoursWeek: "پیر تا جمعہ: صبح 8:00 بجے سے شام 6:00 بجے تک",
      hoursSat: "ہفتہ: صبح 9:00 بجے سے دوپہر 2:00 بجے تک",
      formTitle: "ہمیں پیغام بھیجیں",
      nameLabel: "پورا نام",
      namePlaceholder: "اپنا نام درج کریں",
      emailLabel: "ای میل ایڈریس",
      emailPlaceholder: "name@email.com",
      typeLabel: "انکوائری کی قسم",
      typeOptions: ["داخلہ انکوائری", "کورس کی تفصیلات", "کیرئیر کے مواقع", "دیگر"],
      msgLabel: "آپ کا پیغام",
      msgPlaceholder: "ہم آپ کی مدد کیسے کر سکتے ہیں؟",
      sendBtn: "پیغام بھیجیں"
    }
  };

  const t = language === 'ur' ? content.ur : content.en;

  return (
    <section id="contact" className="py-24 bg-base-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-white rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/5 flex flex-col lg:flex-row border border-border ${language === 'ur' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Info Side */}
          <div className="lg:w-2/5 bg-primary-dark p-12 md:p-20 text-base">
            <h2 className={`text-4xl font-serif font-bold mb-8 italic ${language === 'ur' ? 'text-right' : 'text-left'}`}>{t.title}</h2>
            <p className={`text-base/70 mb-14 text-lg leading-relaxed ${language === 'ur' ? 'text-right' : 'text-left'}`}>
              {t.subtitle}
            </p>

            <div className="space-y-10">
              <div className={`flex items-start gap-5 ${language === 'ur' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div className="bg-primary p-3 rounded-2xl shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{t.locTitle}</h3>
                  <p className="text-base/80" dir="ltr">{t.locDesc}</p>
                </div>
              </div>

              <div className={`flex items-start gap-5 ${language === 'ur' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div className="bg-primary p-3 rounded-2xl shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{t.phoneTitle}</h3>
                  <p className="text-base/80" dir="ltr">0334-0500131</p>
                  <p className="text-base/80" dir="ltr">0313-9856872</p>
                </div>
              </div>

              <div className={`flex items-start gap-5 ${language === 'ur' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div className="bg-primary p-3 rounded-2xl shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{t.emailTitle}</h3>
                  <p className="text-base/80" dir="ltr">info@scakarak.edu.pk</p>
                </div>
              </div>

              <div className={`flex items-start gap-5 ${language === 'ur' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div className="bg-accent/40 p-3 rounded-2xl shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{t.hoursTitle}</h3>
                  <p className="text-base/80">{t.hoursWeek}</p>
                  <p className="text-base/80">{t.hoursSat}</p>
                </div>
              </div>
            </div>

            <div className={`mt-16 pt-16 border-t border-white/10 flex gap-6 ${language === 'ur' ? 'justify-end' : 'justify-start'}`}>
               <a 
                 href="https://www.instagram.com/musannif.shehzad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all cursor-pointer"
               >
                 <Instagram size={24} />
               </a>
               <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all cursor-pointer">
                 <Facebook size={24} />
               </a>
               <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all cursor-pointer">
                 <Twitter size={24} />
               </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 md:p-20 bg-base">
            <h3 className={`text-3xl font-serif font-bold text-primary-dark mb-10 ${language === 'ur' ? 'text-right' : 'text-left'}`}>{t.formTitle}</h3>
            <form onSubmit={(e) => e.preventDefault()} className={`space-y-8 ${language === 'ur' ? 'text-right' : 'text-left'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-text-muted mb-3 uppercase tracking-widest leading-none">{t.nameLabel}</label>
                  <input 
                    type="text" 
                    placeholder={t.namePlaceholder}
                    className={`w-full px-6 py-4 bg-white border border-border rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-sm font-medium ${language === 'ur' ? 'text-right' : 'text-left'}`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-text-muted mb-3 uppercase tracking-widest leading-none">{t.emailLabel}</label>
                  <input 
                    type="email" 
                    placeholder={t.emailPlaceholder}
                    className={`w-full px-6 py-4 bg-white border border-border rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-sm font-medium ${language === 'ur' ? 'text-right' : 'text-left'}`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-text-muted mb-3 uppercase tracking-widest leading-none">{t.typeLabel}</label>
                <select className={`w-full px-6 py-4 bg-white border border-border rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-sm font-medium appearance-none ${language === 'ur' ? 'text-right' : 'text-left'}`}>
                  {t.typeOptions.map((opt) => <option key={opt}>{opt}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black text-text-muted mb-3 uppercase tracking-widest leading-none">{t.msgLabel}</label>
                <textarea 
                  rows={5}
                  placeholder={t.msgPlaceholder}
                  className={`w-full px-6 py-4 bg-white border border-border rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all text-sm font-medium resize-none ${language === 'ur' ? 'text-right' : 'text-left'}`}
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/20 flex items-center justify-center gap-4 hover:bg-primary-dark transition-all ${language === 'ur' ? 'flex-row-reverse' : ''}`}
              >
                {t.sendBtn}
                <Send size={22} className={language === 'ur' ? 'rotate-180' : ''} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
