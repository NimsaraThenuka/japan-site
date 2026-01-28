import { Link } from 'react-router-dom';
import { Diamond, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Diamond className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white"> {t("Harita")}</span>
            </div>
            <p className="text-sm mb-4">
              {t("Your trusted source for exquisite gemstones and fine jewelry. Quality, elegance, and craftsmanship since 1990.")}
            </p>
            <div className="flex gap-3">
              {/* Social media links can be added here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="hover:text-purple-400 transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-purple-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shipping" className="hover:text-purple-400 transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-purple-400 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/care" className="hover:text-purple-400 transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>{t("123 Jewelry Lane")}, {t("New York, NY 10001")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{t("+1 (555) 123-4567")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@gems.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Irodori Gems. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="px-3 py-1 text-sm border border-gray-600 rounded-md bg-gray-800 text-white"
            >
              <option value="en">EN</option>
              <option value="ja">JA</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};
