import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageSquare, Copy, Check, Send, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const email = "tariqahmadnengroo9622@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#121215] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/60 font-medium">Get in Touch</span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight hero-heading mt-1">
                Let's Build Together
              </h3>
              <p className="text-sm text-[#D7E2EA]/70 mt-2 font-light">
                Have a 3D design, web development, or creative visual project in mind? Reach out directly.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {/* Mailto Direct */}
              <a
                href={`mailto:${email}?subject=Project%20Inquiry%20-%20Sahil%20Tariq`}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#BBCCD7]/40 hover:bg-white/10 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-[#7621B0]/30 flex items-center justify-center text-[#BBCCD7]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider font-medium">Send Email</div>
                  <div className="text-xs text-white font-medium truncate">Direct Mail</div>
                </div>
              </a>

              {/* Copy Email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#BBCCD7]/40 hover:bg-white/10 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-[#B600A8]/30 flex items-center justify-center text-[#BBCCD7]">
                  {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider font-medium">
                    {copied ? "Copied!" : "Copy Address"}
                  </div>
                  <div className="text-xs text-white font-medium truncate">{email}</div>
                </div>
              </button>
            </div>

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Message Sent</h4>
                <p className="text-sm text-[#D7E2EA]/70 mt-1">Thanks for reaching out! Sahil will respond shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#BBCCD7]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#BBCCD7]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1 font-medium">
                    Project Message
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Sahil about your vision, timeline, and requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#BBCCD7] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-medium uppercase tracking-widest text-white text-sm transition-all duration-200 mt-2 flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25)',
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
