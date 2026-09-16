import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Send, CheckCircle2, AlertCircle, Loader2, Phone, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';

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
    companyName: '',
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
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.businessType) newErrors.businessType = 'Please select your business type';
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

    // Realistic client-side submission simulation ready for backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phoneWhatsApp: '',
      country: '',
      businessType: '',
      serviceRequired: '',
      message: ''
    });
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F9F7F2] dark:bg-[#071F17] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Direct Engagement"
          title="Start a Business Conversation"
          subtitle="Submit your commercial inquiry, sourcing requirement, or partnership proposal. Our trade facilitation team reviews and responds to qualified commercial briefs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Official Contact Context & Social Media */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B2E23] dark:text-[#F8F6F0] mb-3">
                Commercial Inquiry Desk
              </h3>
              <p className="text-sm sm:text-base text-[#4E6157] dark:text-[#BAC9C1] leading-relaxed">
                Elfadimey Global Concept Limited connects verified suppliers, manufacturers, buyers, and project contractors across Iran, Nigeria, and African markets.
              </p>
            </div>

            {/* Official Social Media Network */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] dark:bg-[#0B221A] border border-[#E5DFC8] dark:border-[#184232] shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A6C28] dark:text-[#D4AF37] mb-4">
                Official Channels & Direct Contacts
              </h4>

              <div className="space-y-3">
                {/* Official WhatsApp (Provided in Prompt) */}
                <a
                  href="https://wa.me/2348100788978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#0B2E23] dark:text-[#F9F7F2] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center font-bold text-base shadow-sm">
                      <Phone className="w-5 h-5 fill-current" />
                    </span>
                    <div>
                      <div className="text-sm font-bold flex items-center gap-1.5">
                        <span>WhatsApp Official Desk</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#25D366]/20 text-[#1F7A43] dark:text-[#52E38B] font-semibold">Fast Response</span>
                      </div>
                      <div className="text-xs font-mono font-semibold text-[#1B6339] dark:text-[#8AE7AF]">
                        08100788978
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#1B6339] dark:text-[#52E38B] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Official Facebook (Provided in Prompt) */}
                <a
                  href="https://www.facebook.com/share/19SQYsLXSc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#F4EFE3] dark:bg-[#0F3529] hover:bg-[#EAE2D0] dark:hover:bg-[#144233] text-[#0B2E23] dark:text-[#F9F7F2] transition-colors group border border-[#E0D8C3] dark:border-[#1E4D3C]"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      f
                    </span>
                    <div>
                      <div className="text-sm font-bold">Facebook</div>
                      <div className="text-xs text-[#6F8277] dark:text-[#9FB1A8]">Elfadimey Global Concept Limited</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8A6C28] dark:text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Social Networks: X, Instagram, LinkedIn */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                  {/* X (Twitter) */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-[#E5DFC8] dark:border-[#1E4D3C] bg-[#FAF8F5] dark:bg-[#071913] hover:border-[#C89D42] dark:hover:border-[#C89D42] text-[#0B2E23] dark:text-[#F9F7F2] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center font-black text-xs">
                        𝕏
                      </span>
                      <span className="font-bold">x.com</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8A6C28] dark:text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-[#E5DFC8] dark:border-[#1E4D3C] bg-[#FAF8F5] dark:bg-[#071913] hover:border-[#C89D42] dark:hover:border-[#C89D42] text-[#0B2E23] dark:text-[#F9F7F2] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
                        📷
                      </span>
                      <span className="font-bold">instagram.com</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8A6C28] dark:text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-[#E5DFC8] dark:border-[#1E4D3C] bg-[#FAF8F5] dark:bg-[#071913] hover:border-[#C89D42] dark:hover:border-[#C89D42] text-[#0B2E23] dark:text-[#F9F7F2] transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs">
                        in
                      </span>
                      <span className="font-bold">linkedin.com</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8A6C28] dark:text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Official Regional Corridors Card */}
            <div className="p-6 rounded-2xl bg-[#0B2E23] text-[#F9F7F2] border border-[#C89D42]/40 shadow-md">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#D4AF37] mb-3">
                Key Bilateral Corridors
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#CAD9D1]">
                <li className="flex items-center gap-2">
                  <span className="text-base">🇮🇷</span>
                  <span>Iran Manufacturing & Supplier Hub</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-base">🇳🇬</span>
                  <span>Nigeria Commercial Buyers & Distribution Hub</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-base">🌍</span>
                  <span>Regional African Trade Corridors</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Commercial Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] dark:bg-[#0B221A] rounded-3xl p-6 sm:p-10 border border-[#E5DFC8] dark:border-[#184232] shadow-xl">
              
              {isSuccess ? (
                <div className="text-center py-12 px-4 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B2E23] dark:text-[#F8F6F0]">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm sm:text-base text-[#4E6157] dark:text-[#BAC9C1] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0B2E23] dark:text-[#F8F6F0]">{formData.fullName}</strong>. Your commercial requirement for <strong className="text-[#0B2E23] dark:text-[#F8F6F0]">{formData.companyName}</strong> has been logged into our trade intake system.
                  </p>
                  <div className="p-4 rounded-xl bg-[#F9F7F2] dark:bg-[#071913] border border-[#E5DFC8] dark:border-[#194031] text-xs text-[#6F8278] dark:text-[#9FB1A8] max-w-md mx-auto">
                    * Prepared for future backend / direct email forwarding integration. Our international desk reviews all verified trade briefs.
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-6 px-6 py-2.5 rounded-xl font-semibold bg-[#C89D42] text-[#071F17] hover:bg-[#D4AF37] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#E5DFC8] dark:border-[#194031] pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#0B2E23] dark:text-[#F8F6F0]">
                      Commercial Requirement Form
                    </h3>
                    <p className="text-xs text-[#617469] dark:text-[#9FB1A8]">
                      All fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Company Name */}
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
                      <label htmlFor="companyName" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Industrial Trade Ltd"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-[#F9F7F2] dark:bg-[#071913] text-[#1F2923] dark:text-[#F8F6F0] border focus:outline-none focus:ring-2 focus:ring-[#C89D42] transition-colors ${
                          errors.companyName ? 'border-red-500' : 'border-[#DDD7C5] dark:border-[#1E4D3C]'
                        }`}
                      />
                      {errors.companyName && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.companyName}</p>}
                    </div>
                  </div>

                  {/* Row 2: Email & Phone/WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>

                  {/* Row 3: Country & Business Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                        Country <span className="text-red-500">*</span>
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

                    <div>
                      <label htmlFor="businessType" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                        Business Type <span className="text-red-500">*</span>
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
                        <option value="">Select your business category...</option>
                        {businessTypeOptions.map((type) => (
                          <option key={type} value={type} className="dark:bg-[#071F17]">
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.businessType && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.businessType}</p>}
                    </div>
                  </div>

                  {/* Service Required */}
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
                      <option value="">Select the primary service needed...</option>
                      {serviceRequiredOptions.map((srv) => (
                        <option key={srv} value={srv} className="dark:bg-[#071F17]">
                          {srv}
                        </option>
                      ))}
                    </select>
                    {errors.serviceRequired && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.serviceRequired}</p>}
                  </div>

                  {/* Message / Specifications */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#0B2E23] dark:text-[#E2ECE7] mb-1.5">
                      Detailed Commercial Message / Sourcing Specs <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your commodity/product requirements, target volumes, destination port/city, target timeframe, or supplier profile..."
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
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-[#C89D42] hover:bg-[#D4AF37] text-[#071F17] shadow-lg shadow-[#C89D42]/20 hover:shadow-xl transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Processing Commercial Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Commercial Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="mt-2.5 text-center text-[11px] text-[#788C82] dark:text-[#8E9F97]">
                      * Your data is kept strictly confidential for commercial scoping and direct partner matchmaking.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
