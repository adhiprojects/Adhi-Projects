import React from 'react';
import { Camera, Video, Palette, Share2, Facebook, Instagram, Youtube, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function AadiProjectsPortfolio() {
  const socialLinks = {
    facebook: "https://facebook.com/share/1DwKZ3PXNo",
    instagram: "https://instagram.com/adhiprojects.weddings?obrf=Znd0dnN2cXk0MDFh",
    youtube: "https://youtube.com/@adhiprojects.weddings?si=TkponBDuMu0YLSFb",
    tiktok: "https://tiktok.com/@adhiprojects.weddings?_r=1&_t=ZS-9Avq3bj57wM",
    whatsapp: "https://wa.me/94722205100"
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider text-amber-400">AADI PROJECTS</h1>
        <div className="flex items-center gap-4">
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition"><Facebook size={20} /></a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition"><Instagram size={20} /></a>
          <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition"><Youtube size={20} /></a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-green-500 transition">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <span className="text-amber-400 uppercase tracking-widest text-sm font-semibold">Media & Creative Agency</span>
        <h2 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 leading-tight">Capturing Moments, Creating Masterpieces.</h2>
        <p className="text-neutral-400 text-lg mb-8">We specialize in Professional Photography, Videography, Graphic Design, and Social Media Marketing.</p>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-neutral-950 font-bold px-8 py-3 rounded-full hover:bg-amber-400 transition inline-block">
          Book Your Date Now
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-neutral-800">
        <h3 className="text-2xl font-bold text-center mb-12 text-amber-400">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 text-center">
            <Camera className="mx-auto text-amber-400 mb-4" size={36} />
            <h4 className="font-bold text-lg mb-2">Photography</h4>
            <p className="text-neutral-400 text-sm">Weddings, events, portraits, and commercial shoots captured with perfection.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 text-center">
            <Video className="mx-auto text-amber-400 mb-4" size={36} />
            <h4 className="font-bold text-lg mb-2">Videography</h4>
            <p className="text-neutral-400 text-sm">Cinematic wedding films, teasers, vlogs, and promotional video editing.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 text-center">
            <Palette className="mx-auto text-amber-400 mb-4" size={36} />
            <h4 className="font-bold text-lg mb-2">Graphic Design</h4>
            <p className="text-neutral-400 text-sm">Stunning promotional posters, social media banners, and thumbnails.</p>
          </div>
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 text-center">
            <Share2 className="mx-auto text-amber-400 mb-4" size={36} />
            <h4 className="font-bold text-lg mb-2">Social Media Marketing</h4>
            <p className="text-neutral-400 text-sm">Complete management and growth strategies for your brand across platforms.</p>
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEO GALLERY */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-neutral-800">
        <h3 className="text-2xl font-bold text-center mb-4 text-amber-400">Featured Video Gallery</h3>
        <p className="text-neutral-400 text-center mb-12">Watch our latest wedding teasers and cinematic works.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/videoseries?list=UU..." 
              title="Aadi Projects YouTube Showcase" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="aspect-video bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 flex flex-col items-center justify-center p-6 text-center">
            <Youtube size={48} className="text-red-600 mb-4" />
            <h4 className="font-bold text-lg mb-2">Explore More on YouTube</h4>
            <p className="text-neutral-400 text-sm mb-4">Check out our complete collection of wedding vlogs and cinematic stories.</p>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-500 transition">
              Visit Channel
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 border-t border-neutral-800 py-12 px-6 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-xl font-bold text-amber-400">AADI PROJECTS</h2>
            <p className="text-neutral-400 text-sm mt-1">Hingurakgoda, Sri Lanka</p>
          </div>
          <div className="flex gap-6">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition"><Facebook size={24} /></a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition"><Instagram size={24} /></a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition"><Youtube size={24} /></a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition"><MessageCircle size={24} /></a>
          </div>
        </div>
        <div className="text-center text-neutral-500 text-xs mt-8 border-t border-neutral-800 pt-6">
          © {new Date().getFullYear()} Aadi Projects. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

