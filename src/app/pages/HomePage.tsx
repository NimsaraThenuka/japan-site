import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import {
  ArrowRight,
  Star,
  Shield,
  Truck,
  Award,
  Gem,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { fetchProducts, Product } from '@/services/api';
import { ProductCard } from '@/app/components/ProductCard';
import { Button } from '@/app/components/ui/button';
import { useTranslation } from 'react-i18next';

/* ✅ REQUIRED slick styles for auto sliding */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* Custom Arrows */
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg"
    >
      <ChevronRight className="h-6 w-6 text-purple-600" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg"
    >
      <ChevronLeft className="h-6 w-6 text-purple-600" />
    </button>
  );
};

export const HomePage = () => {
  const { t } = useTranslation();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((products: Product[]) => {
      setFeaturedProducts(products.slice(0, 8));
    });
  }, []);

  const heroSlides = [
    {
      image:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?fm=jpg&q=80&w=1080',
      title: 'Discover Timeless Elegance',
      subtitle: 'Handcrafted gemstone jewelry that tells your story',
    },
    {
      image:
        'https://images.unsplash.com/photo-1763728483973-8492f3aec84f?fm=jpg&q=80&w=1080',
      title: 'Premium Gemstone Collection',
      subtitle: 'Certified authentic gems from around the world',
    },
    {
      image:
        'https://images.unsplash.com/photo-1758995116121-60090f17ae20?fm=jpg&q=80&w=1080',
      title: 'Luxury Gold Jewelry',
      subtitle: 'Exquisite designs crafted with perfection',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
        <Slider {...sliderSettings}>
          {heroSlides.map((slide) => (
            <div key={slide.title} className="relative h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    {t(slide.title)}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                    {t(slide.subtitle)}
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
                      <Link to="/shop">
                        {t('Shop Now')}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="bg-white/10 text-white"
                    >
                      <Link to="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Premium Quality', description: 'Certified gemstones with authenticity guarantee' },
              { icon: Shield, title: 'Secure Payment', description: 'Your transactions are safe and encrypted' },
              { icon: Truck, title: 'Free Shipping', description: 'On orders over $2000 worldwide' },
              { icon: Star, title: 'Expert Craftsmanship', description: '30+ years of jewelry making excellence' },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t(feature.title)}</h3>
                <p className="text-gray-600 text-sm">{t(feature.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated selection of exquisite gemstones and fine jewelry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/shop?category=gems" className="relative h-96 overflow-hidden rounded-lg shadow-lg">
              <img src={heroSlides[1].image} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white">
                <div className="text-center">
                  <Gem className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold">Gems</h3>
                </div>
              </div>
            </Link>

            <Link to="/shop?category=jewelry" className="relative h-96 overflow-hidden rounded-lg shadow-lg">
              <img src={heroSlides[0].image} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white">
                <div className="text-center">
                  <Star className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold">Jewelry</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Piece</h2>
          <p className="text-xl mb-8">
            Let our experts help you choose the perfect gemstone
          </p>
          <Button size="lg" variant="outline" asChild className="bg-white text-purple-600">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
