import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'motion/react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  Mail,
  ExternalLink,
  Copy,
  Check,
  Building2,
  Globe2,
  ArrowRight
} from 'lucide-react';
import {
  XTwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  IranFlagSvg,
  NigeriaFlagSvg,
  AfricaContinentSvg
} from './SvgIcons';

const businessTypeOptions = [
  "Manufacturer / Supplier",
  "Importer / Distributor",
  "Contractor",
  "Procurement Company",
  "Construction / Interior Business",
  "Hotel / Institution",
  "Project Developer",
  "Other"
];

const serviceRequiredOptions = [
  "International Sourcing",
  "Procurement",
  "Import & Export",
  "Market Development",
  "Trade Facilitation",
  "Business Connection",
  "Other"
];

export default function Contact({ prefilledService, prefilledOpportunity }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    country: '',
    businessType: '',
    serviceRequired: prefilledService || '',
    message: prefilledOpportunity ? `Inquiring regarding opportunity: ${prefilledOpportunity}` : ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastMailto, setLastMailto] = useState('');
  const [lastSummary, setLastSummary] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync if prefilled changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  React.useEffect(() => {
    if (prefilledOpportunity) {
      setFormData(prev => ({
        ...prev,
        message: `Inquiring regarding trade opportunity: ${prefilledOpportunity}`
      }));
    }
  }, [prefilledOpportunity]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.businessType) newErrors.businessType = 'Please select your business category';
    if (!formData.serviceRequired) newErrors.serviceRequired = 'Please select a required service';
    if (!formData.message.trim()) newErrors.message = 'Please provide details of your requirement';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const emailSubject = `Commercial Inquiry: ${formData.serviceRequired} - ${formData.fullName}`;
    const emailBody = `Dear Elfadimey Global Concept Limited,

I am writing to submit a commercial requirement via your official portal:

• Full Name: ${formData.fullName}
• Business Email: ${formData.email}
• Phone / WhatsApp: ${formData.phoneWhatsApp || 'Not specified'}
• Country / Region: ${formData.country}
• Business Category: ${formData.businessType}
• Service Required: ${formData.serviceRequired}

Detailed Requirement & Specifications:
${formData.message}

--
Sent to elfadimey@gmail.com`;

    const mailtoUrl = `mailto:elfadimey@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setLastMailto(mailtoUrl);
    setLastSummary(emailBody);

    // Trigger email client directly
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback handled in success UI
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleCopySummary = () => {
    if (!lastSummary) return;
    navigator.clipboard.writeText(lastSummary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // ignore
    });
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phoneWhatsApp: '',
      country: '',
      businessType: '',
      serviceRequired: '',
      message: ''
    });
    setIsSuccess(false);
    setErrors({});
    setLastMailto('');
    setLastSummary('');
    setCopied(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F9F7F2] dark:bg-[#071F17] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Direct Commercial Engagement"
          title="Start a Business Conversation"
          subtitle="Submit your commercial inquiry, sourcing requirement, or bilateral trade proposal. All inquiries are routed directly to our desk at elfadimey@gmail.com."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Official Contact Context & Direct Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B2E23] dark:text-[#F8F6F0] mb-2.5">
                Commercial Inquiry Desk
              </h3>
              <p className="text-sm sm:text-base text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed">
                Elfadimey Global Concept Limited connects verified suppliers, manufacturers, buyers, and project developers across Iran, Nigeria, and African trade corridors.
              </p>
            </div>

            {/* Official Direct Contact Channels - Exactly Styled Cards */}
            <div className="space-y-3">
              {/* WhatsApp Official Desk: Shows number with +234 */}
              <a
                href="https://wa.me/2348100788978"
                target="_blank"
                rel="noopener noreferrer"
                title="Open WhatsApp: +234 810 078 8978"
                className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6] dark:from-[#09241C] dark:via-[#0D2D23] dark:to-[#071F17] hover:border-[#25D366]/50 border border-[#E5DFC8] dark:border-[#1E4D3C] shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#25D366]/15 text-[#25D366] dark:text-[#52E38B] border border-[#25D366]/30 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#166534] dark:text-[#52E38B]">
                      Direct WhatsApp
                    </span>
                    <div className="text-base font-bold font-mono text-[#0B2E23] dark:text-[#F9F7F2] mt-0.5">
                      +234 810 078 8978
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#166534] dark:text-[#52E38B] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Elfadimey Global Concept Ltd: Facebook Official Page */}
              <a
                href="https://www.facebook.com/share/19SQYsLXSc/"
                target="_blank"
                rel="noopener noreferrer"
                title="Open Elfadimey Global Concept Ltd Official Page"
                className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6] dark:from-[#09241C] dark:via-[#0D2D23] dark:to-[#071F17] hover:border-[#1877F2]/50 border border-[#E5DFC8] dark:border-[#1E4D3C] shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#1877F2]/15 text-[#1877F2] dark:text-[#60A5FA] border border-[#1877F2]/30 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#1877F2] dark:text-[#60A5FA]">
                      Official Facebook
                    </span>
                    <div className="text-base font-bold text-[#0B2E23] dark:text-[#F9F7F2] mt-0.5">
                      Elfadimey Global Concept Ltd
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#1877F2] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Open Elfadimey Global Concept Ltd on X"
                className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6] dark:from-[#09241C] dark:via-[#0D2D23] dark:to-[#071F17] hover:border-neutral-500/50 border border-[#E5DFC8] dark:border-[#1E4D3C] shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-neutral-900/10 dark:bg-white/10 text-[#0B2E23] dark:text-white border border-neutral-900/20 dark:border-white/20 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <XTwitterIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#4E6157] dark:text-[#A6B8AF]">
                      Official X (Twitter)
                    </span>
                    <div className="text-base font-bold text-[#0B2E23] dark:text-[#F9F7F2] mt-0.5">
                      Elfadimey Global Concept Ltd
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#4E6157] dark:text-[#A6B8AF] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Open Elfadimey Global Concept Ltd on Instagram"
                className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6] dark:from-[#09241C] dark:via-[#0D2D23] dark:to-[#071F17] hover:border-[#E1306C]/50 border border-[#E5DFC8] dark:border-[#1E4D3C] shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#E1306C]/15 text-[#E1306C] border border-[#E1306C]/30 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#E1306C]">
                      Official Instagram
                    </span>
                    <div className="text-base font-bold text-[#0B2E23] dark:text-[#F9F7F2] mt-0.5">
                      Elfadimey Global Concept Ltd
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#E1306C] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with Elfadimey Global Concept Ltd on LinkedIn"
                className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6] dark:from-[#09241C] dark:via-[#0D2D23] dark:to-[#071F17] hover:border-[#0A66C2]/50 border border-[#E5DFC8] dark:border-[#1E4D3C] shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#0A66C2]/15 text-[#0A66C2] dark:text-[#38BDF8] border border-[#0A66C2]/30 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#0A66C2] dark:text-[#38BDF8]">
                      Official LinkedIn
                    </span>
                    <div className="text-base font-bold text-[#0B2E23] dark:text-[#F9F7F2] mt-0.5">
                      Elfadimey Global Concept Ltd
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#0A66C2] dark:text-[#38BDF8] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Official Email Desk */}
              <a
                href="mailto:elfadimey@gmail.com"
                title="Send Email to elfadimey@gmail.com"
                className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6] dark:from-[#09241C] dark:via-[#0D2D23] dark:to-[#071F17] hover:border-[#C89D42]/60 border border-[#E5DFC8] dark:border-[#1E4D3C] shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#C89D42]/15 text-[#C89D42] dark:text-[#D4AF37] border border-[#C89D42]/30 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#8A6C28] dark:text-[#D4AF37]">
                      Email Inquiries Desk
                    </span>
                    <div className="text-base font-bold text-[#0B2E23] dark:text-[#F9F7F2] mt-0.5">
                      elfadimey@gmail.com
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8A6C28] dark:text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Official Regional Corridors Card with SVG Flags */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0B2E23] via-[#0E382B] to-[#071F17] text-[#F9F7F2] border border-[#C89D42]/40 shadow-md">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#D4AF37] mb-3">
                Key Bilateral Trade Corridors
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#CAD9D1]">
                <li className="flex items-center gap-3 p-2 rounded-lg bg-[#0F3529]/80 border border-[#164936]">
                  <IranFlagSvg className="w-6 h-4 shrink-0" />
                  <div>
                    <span className="font-bold text-[#F9F7F2]">Iran</span>
                    <span className="text-[#A3B8AD] ml-1.5">— Industrial & Commodity Sourcing Hub</span>
                  </div>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-lg bg-[#0F3529]/80 border border-[#164936]">
                  <NigeriaFlagSvg className="w-6 h-4 shrink-0" />
                  <div>
                    <span className="font-bold text-[#F9F7F2]">Nigeria</span>
                    <span className="text-[#A3B8AD] ml-1.5">— Commercial Buyers & Distribution Gateway</span>
                  </div>
                </li>
                <li className="flex items-center gap-3 p-2 rounded-lg bg-[#0F3529]/80 border border-[#164936]">
                  <AfricaContinentSvg className="w-6 h-6 shrink-0" />
                  <div>
                    <span className="font-bold text-[#F9F7F2]">African Markets</span>
                    <span className="text-[#A3B8AD] ml-1.5">— Regional Cross-Border Expansion</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Commercial Inquiry Form (Sent to elfadimey@gmail.com) */}
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-gradient-to-br from-[#FFFFFF] via-[#FAF8F5] to-[#F5EFE6] dark:from-[#0B221A] dark:via-[#0E2D23] dark:to-[#071F17] rounded-3xl p-6 sm:p-10 border border-[#E5DFC8] dark:border-[#1E4D3C] shadow-xl">
              
              {isSuccess ? (
                <div className="text-center py-8 px-4 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 mb-2">
                      Inquiry Ready & Prepared
                    </span>
                    <h3 className="text-2xl font-bold text-[#0B2E23] dark:text-[#F8F6F0]">
                      Email Prepared for elfadimey@gmail.com
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#4E6157] dark:text-[#BAC9C1] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0B2E23] dark:text-[#F8F6F0]">{formData.fullName}</strong>. Your commercial brief for <strong className="text-[#C89D42]">{formData.serviceRequired}</strong> has been formatted to send directly to <strong className="text-[#0B2E23] dark:text-[#F8F6F0]">elfadimey@gmail.com</strong>.
                  </p>

                  {/* Mail Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={lastMailto}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-md transition-all text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open Email App to Send</span>
                    </a>

                    <button
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-[#DDD7C5] dark:border-[#1E4D3C] text-[#0B2E23] dark:text-[#F9F7F2] hover:bg-[#F2EFE9] dark:hover:bg-[#0F3529] transition-all text-sm"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F9F7F2] dark:bg-[#071913] border border-[#E5DFC8] dark:border-[#194031] text-xs text-[#6F8278] dark:text-[#9FB1A8] max-w-lg mx-auto text-left space-y-1">
                    <p className="font-semibold text-[#0B2E23] dark:text-[#E2ECE7]">
                      Direct Recipient: <span className="font-mono text-[#C89D42]">elfadimey@gmail.com</span>
                    </p>
                    <p>
                      If your default email app did not launch automatically, simply click the button above or copy your formatted brief and email it directly.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-[#8A6C28] dark:text-[#D4AF37] hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#E5DFC8] dark:border-[#194031] pb-4 mb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-[#0B2E23] dark:text-[#F8F6F0]">
                        Commercial Requirement Form
                      </h3>
                      <span className="text-xs font-medium text-[#8A6C28] dark:text-[#D4AF37] flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5" />
                        <span>elfadimey@gmail.com</span>
                      </span>
                    </div>
                    <p className="text-xs text-[#617469] dark:text-[#9FB1A8] mt-1">
                      Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Alireza Rezaei / Aminu Bello"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[#F9F7F2] dark:bg-[#071913] text-[#1F2923] dark:text-[#F8F6F0] border focus:outline-none focus:ring-2 focus:ring-[#C89D42] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#DDD7C5] dark:border-[#1E4D3C]'
                        }`}
                      />
                      {errors.fullName && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.fullName}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="trade@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[#F9F7F2] dark:bg-[#071913] text-[#1F2923] dark:text-[#F8F6F0] border focus:outline-none focus:ring-2 focus:ring-[#C89D42] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-[#DDD7C5] dark:border-[#1E4D3C]'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2: Phone / WhatsApp & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phoneWhatsApp" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phoneWhatsApp"
                        name="phoneWhatsApp"
                        value={formData.phoneWhatsApp}
                        onChange={handleChange}
                        placeholder="+234 / +98 Number"
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-[#F9F7F2] dark:bg-[#071913] text-[#1F2923] dark:text-[#F8F6F0] border border-[#DDD7C5] dark:border-[#1E4D3C] focus:outline-none focus:ring-2 focus:ring-[#C89D42] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                        Country / Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. Nigeria, Iran, Ghana, UAE..."
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[#F9F7F2] dark:bg-[#071913] text-[#1F2923] dark:text-[#F8F6F0] border focus:outline-none focus:ring-2 focus:ring-[#C89D42] transition-colors ${
                          errors.country ? 'border-red-500' : 'border-[#DDD7C5] dark:border-[#1E4D3C]'
                        }`}
                      />
                      {errors.country && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.country}</p>}
                    </div>
                  </div>

                  {/* Row 3: Business Category & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessType" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                        Business Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[#F9F7F2] dark:bg-[#071913] text-[#1F2923] dark:text-[#F8F6F0] border focus:outline-none focus:ring-2 focus:ring-[#C89D42] transition-colors ${
                          errors.businessType ? 'border-red-500' : 'border-[#DDD7C5] dark:border-[#1E4D3C]'
                        }`}
                      >
                        <option value="">Select your business type...</option>
                        {businessTypeOptions.map((type) => (
                          <option key={type} value={type} className="dark:bg-[#071F17]">
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.businessType && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.businessType}</p>}
                    </div>

                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[#F9F7F2] dark:bg-[#071913] text-[#1F2923] dark:text-[#F8F6F0] border focus:outline-none focus:ring-2 focus:ring-[#C89D42] transition-colors ${
                          errors.serviceRequired ? 'border-red-500' : 'border-[#DDD7C5] dark:border-[#1E4D3C]'
                        }`}
                      >
                        <option value="">Select service needed...</option>
                        {serviceRequiredOptions.map((srv) => (
                          <option key={srv} value={srv} className="dark:bg-[#071F17]">
                            {srv}
                          </option>
                        ))}
                      </select>
                      {errors.serviceRequired && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.serviceRequired}</p>}
                    </div>
                  </div>

                  {/* Message / Specifications */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                      Commercial Message & Specifications <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your commodity/product requirements, target volumes, destination port/city, target timeframe, or supplier profile..."
                      className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[#F9F7F2] dark:bg-[#071913] text-[#1F2923] dark:text-[#F8F6F0] border focus:outline-none focus:ring-2 focus:ring-[#C89D42] transition-colors resize-y ${
                        errors.message ? 'border-red-500' : 'border-[#DDD7C5] dark:border-[#1E4D3C]'
                      }`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-lg shadow-[#C89D42]/20 hover:shadow-xl transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Preparing Email Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Email to elfadimey@gmail.com</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="mt-2.5 text-center text-[11px] text-[#788C82] dark:text-[#8E9F97]">
                      * Form submission directly prepares an email to our international trade desk at <strong className="text-[#0B2E23] dark:text-[#E2ECE7]">elfadimey@gmail.com</strong>.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
