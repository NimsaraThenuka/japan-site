import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "Gems & Jewelry": "Gems & Jewelry",
      "Home": "Home",
      "Shop": "Shop",
      "About": "About",
      "Contact": "Contact",
      "Login": "Login",
      "My Orders": "My Orders",
      "Wishlist": "Wishlist",
      "Admin Dashboard": "Admin Dashboard",
      "Logout": "Logout",
      "Discover Timeless Elegance": "Discover Timeless Elegance",
      "Handcrafted gemstone jewelry that tells your story": "Handcrafted gemstone jewelry that tells your story",
      "Shop Now": "Shop Now",
      "Expert Craftsmanship": "Expert Craftsmanship",
      "30+ years of jewelry making excellence": "30+ years of jewelry making excellence",
      "Quality Guarantee": "Quality Guarantee",
      "Premium materials and expert certification": "Premium materials and expert certification",
      "Fast Shipping": "Fast Shipping",
      "Free shipping on orders over $100": "Free shipping on orders over $100",
      "Customer Support": "Customer Support",
      "24/7 support for all your jewelry needs": "24/7 support for all your jewelry needs",
      "Your trusted source for exquisite gemstones and fine jewelry. Quality, elegance, and craftsmanship since 1990.": "Your trusted source for exquisite gemstones and fine jewelry. Quality, elegance, and craftsmanship since 1990.",
      "Phone": "Phone",
      "Email": "Email",
      "Address": "Address",
      "+1 (555) 123-4567": "+1 (555) 123-4567",
      "Mon-Fri 9am-6pm": "Mon-Fri 9am-6pm",
      "info@irodorigems.com": "info@irodorigems.com",
      "24/7 Support": "24/7 Support",
      "123 Jewelry Lane": "123 Jewelry Lane",
      "New York, NY 10001": "New York, NY 10001"
    }
  },
  ja: {
    translation: {
      "Gems & Jewelry": "宝石とジュエリー",
      "Home": "ホーム",
      "Shop": "ショップ",
      "About": "について",
      "Contact": "連絡先",
      "Login": "ログイン",
      "Enter your credentials to access your account": "アカウントにアクセスするための資格情報を入力してください",
      "Email": "メール",
      "Password": "パスワード",
      "Don't have an account?": "アカウントをお持ちではありませんか？",
      "Register here": "ここで登録",
      "Demo Credentials:": "デモ資格情報：",
      "Customer: any email & password": "顧客：任意のメールとパスワード",
      "Admin: admin@example.com & any password": "管理者：admin@example.com & 任意のパスワード",
      "My Orders": "私の注文",
      "Wishlist": "ウィッシュリスト",
      "Admin Dashboard": "管理者ダッシュボード",
      "Logout": "ログアウト",
      "Discover Timeless Elegance": "永遠の優雅さを発見",
      "Handcrafted gemstone jewelry that tells your story": "あなたの物語を語る手作りの宝石ジュエリー",
      "Shop Now": "今すぐ購入",
      "Premium Quality": "プレミアム品質",
      "Certified gemstones with authenticity guarantee": "真正性保証付きの認定宝石",
      "Secure Payment": "安全な支払い",
      "Your transactions are safe and encrypted": "あなたの取引は安全で暗号化されています",
      "Free Shipping": "無料配送",
      "On orders over $2000 worldwide": "世界中で$2000以上の注文で",
      "Premium Gemstone Collection": "プレミアム宝石コレクション",
      "Certified authentic gems from around the world": "世界中から認定された本物の宝石",
      "Luxury Gold Jewelry": "ラグジュアリーゴールドジュエリー",
      "Exquisite designs crafted with perfection": "完璧に作られた優雅なデザイン",
      "Expert Craftsmanship": "専門的な職人技",
      "30+ years of jewelry making excellence": "30年以上のジュエリー製作の卓越性",
      "Quality Guarantee": "品質保証",
      "Premium materials and expert certification": "プレミアム素材と専門家の認証",
      "Fast Shipping": "迅速な配送",
      "注文$100以上の無料配送": "注文$100以上の無料配送",
      "Customer Support": "カスタマーサポート",
      "ジュエリーに関するすべてのニーズに対する24/7サポート": "ジュエリーに関するすべてのニーズに対する24/7サポート",
      "Your trusted source for exquisite gemstones and fine jewelry. Quality, elegance, and craftsmanship since 1990.": "優れた宝石と高級ジュエリーの信頼できるソース。1990年からの品質、優雅さ、職人技。",
      "Phone": "電話",
      "Address": "住所",
      "+1 (555) 123-4567": "+1 (555) 123-4567",
      "Mon-Fri 9am-6pm": "月-金 午前9時-午後6時",
      "info@irodorigems.com": "info@irodorigems.com",
      "24/7 Support": "24/7サポート",
      "123 Jewelry Lane": "123ジュエリーレーン",
      "New York, NY 10001": "ニューヨーク、NY 10001",
      "Register": "登録",
      "Create your account": "アカウントを作成",
      "Name": "名前",
      "Already have an account?": "すでにアカウントをお持ちですか？",
      "Login here": "ここでログイン"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;