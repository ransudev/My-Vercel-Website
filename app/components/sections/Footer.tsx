"use client";

import { ArrowUp, Heart } from "lucide-react";
import { SocialLink } from "../ui";
import { socialLinks } from "../../data/socials";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-800">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
            >
              ransu.dev
            </a>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.name}
                  href={social.url}
                  icon={social.icon}
                  label={social.name}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm flex items-center gap-1">
              © {currentYear} Ransu. Made with{" "}
              <Heart size={14} className="text-red-500 fill-red-500" /> All rights reserved.
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors group"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-violet-600 flex items-center justify-center transition-colors">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
