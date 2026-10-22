import Nav from "@/components/Nav";
import Anim from "@/components/Anim";
import DemoPitchModal from "@/components/DemoPitchModal";
import FAQSection from "@/components/FAQSection";
import StatFlipBoard from "@/components/StatFlipBoard";
import AnnouncementCarousel from "@/components/AnnouncementCarousel";
import HeroSection from "@/components/HeroSection";
import TextReveal from "@/components/TextReveal";
import {
  Lightbulb,
  Bot,
  BookOpen,
  Globe,
  Trophy,
  ShieldCheck,
  Microscope,
  Users,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";

const tickerItems = [
  {
    label: "PROJECT BASED LEARNING",
    icon: <Lightbulb className="h-4 w-4 shrink-0 text-[#c9f158]" strokeWidth={2} />,
  },
  {
    label: "ROBOTICS AND CODING LAB",
    icon: <Bot className="h-4 w-4 shrink-0 text-[#c9f158]" strokeWidth={2} />,
  },
  {
    label: "ISLAMIC THEOLOGY",
    icon: <BookOpen className="h-4 w-4 shrink-0 text-[#c9f158]" strokeWidth={2} />,
  },
  {
    label: "GLOBAL CURRICULUM",
    icon: <Globe className="h-4 w-4 shrink-0 text-[#c9f158]" strokeWidth={2} />,
  },
  {
    label: "OLYMPIAD ASSESSMENTS",
    icon: <Trophy className="h-4 w-4 shrink-0 text-[#c9f158]" strokeWidth={2} />,
  },
  {
    label: "MORAL GROUNDING",
    icon: <ShieldCheck className="h-4 w-4 shrink-0 text-[#c9f158]" strokeWidth={2} />,
  },
  {
    label: "EXPERIENTIAL INQUIRY",
    icon: <Microscope className="h-4 w-4 shrink-0 text-[#c9f158]" strokeWidth={2} />,
  },
  {
    label: "INCLUSIVE COMMUNITY",
    icon: <Users className="h-4 w-4 shrink-0 text-[#c9f158]" strokeWidth={2} />,
  },
  {
    label: "ADMISSIONS 2026 2027 OPEN",
    icon: <GraduationCap className="h-4 w-4 shrink-0 text-[#c9f158]" strokeWidth={2} />,
  },
];

const programs = [
  {
    title: "Project Based Learning",
    text: "Learning through hands-on, real-world projects that foster critical inquiry, problem-solving, and team collaboration.",
    img: "/img/05_68c3de7ed69047.699973141757666942.jpg",
  },
  {
    title: "Coding & Robotics Lab",
    text: "Explore technology, algorithmic reasoning, and robotics through creative coding and physical computing exercises.",
    img: "/img/06_68c3de73beefd7.053165391757666931.jpg",
  },
  {
    title: "International Curriculum",
    text: "Global benchmarks for future-ready education that equip learners with intellectual curiosity and international perspectives.",
    img: "/img/07_68c3de699bd215.719608801757666921.jpg",
  },
  {
    title: "Islamic Theology",
    text: "Faith-based learning rooted in moral character, ethical responsibility, and spiritual consciousness.",
    img: "/img/08_68c3de5e32ae98.503537541757666910.jpg",
  },
];

const gallery = [
  {
    img: "/img/05_68c3de7ed69047.699973141757666942.jpg",
    title: "Classroom Learning",
    sub: "Everyday hands-on discovery and teamwork",
  },
  {
    img: "/img/29_1",
    title: "Trade Camp",
    sub: "Practical experiential learning by doing",
  },
  {
    img: "/img/31_2",
    title: "Orientation Day",
    sub: "A fresh academic beginning for students",
  },
  {
    img: "/img/32_3",
    title: "Creative Studio",
    sub: "Artistic expression, painting, and design",
  },
  {
    img: "/img/33_6",
    title: "Spelling Bee Competition",
    sub: "Annual Brookfield Spelling Bee tournament",
  },
  {
    img: "/img/34_8",
    title: "Heritage Educational Trip",
    sub: "Field learning and cultural discovery beyond campus",
  },
  {
    img: "/img/35_9",
    title: "Community Outreach",
    sub: "Zaiba Appa School inclusive engagement visit",
  },
  {
    img: "/img/36_10",
    title: "Olympiad Examination",
    sub: "Students participating in Brookfield Olympiad Test",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/91861888615",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Anim />
      <DemoPitchModal />
      <Nav />

      {/* ================= HERO SECTION (EXACT 100VH 1-PAGE VIEWPORT) ================= */}
      <HeroSection />

      {/* ================= ARCHITECTURAL TICKER STRIP ================= */}
      <div className="relative z-20 overflow-hidden border-y border-white/10 bg-[#0b1f12] py-4 text-white">
        <div className="animate-marquee flex items-center gap-14 sm:gap-16">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex shrink-0 items-center gap-3">
              <span className="flex items-center justify-center">
                {item.icon}
              </span>
              <span className="font-['Nunito',sans-serif] text-[13px] font-normal uppercase tracking-widest text-white/90">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ABOUT US SECTION (ARCHITECTURAL BENTO REDESIGN) ================= */}
      <section id="about" className="border-b border-[#e2e6e2] bg-white py-16 sm:py-20">
        <div className="container-x">
          {/* Center-Aligned Section Title Header: Only Title & Balanced Subtext (No Badges) */}
          <div className="mb-12 flex flex-col items-center justify-center text-center mx-auto max-w-2xl">
            <TextReveal
              as="div"
              className="section-title text-[#111813]"
              text="About Brookfield International School"
              staggerMs={55}
              baseDelayMs={80}
            />
            <p
              className="reveal mt-3 max-w-xl mx-auto font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-[#55665b] [text-wrap:balance]"
              style={{ transitionDelay: "220ms" }}
            >
              Cultivating critical thinking moral grounding and leadership through experiential learning in Anantnag.
            </p>
          </div>

          {/* Top Bento Row: Luminous Architectural Feature Block + Framed Image */}
          <div className="reveal-stagger grid gap-6 lg:grid-cols-12 items-stretch">
            {/* Left Column: Luminous Architectural Educational Block */}
            <div className="flex flex-col justify-between rounded-none border border-[#e2e8e3] bg-[#f8faf7] p-8 sm:p-12 text-[#111813] lg:col-span-7">
              <div>
                <TextReveal
                  as="h3"
                  className="about-bento-headline text-[#0b1f12]"
                  text="Where Tradition Meets Modern Innovation"
                  staggerMs={50}
                  baseDelayMs={120}
                />

                <p className="mt-5 font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-[#44554a]">
                  We offer an international curriculum that fosters critical thinking creativity
                  and moral grounding. With practical learning through robotics coding laboratories
                  and real world projects alongside spiritual growth through Islamic theology we
                  create an inspiring space where every child is empowered to dream learn and lead.
                  Our mission is to prepare students not just for examinations but for life.
                </p>

                <p className="mt-3.5 font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-[#55665b]">
                  Our educational framework combines experiential inquiry with foundational character
                  development ensuring learners cultivate intellectual curiosity resilience and
                  universal ethical principles.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-[#e2e8e3]">
                <a
                  href="#contact"
                  className="btn-cta rounded-none uppercase tracking-wider"
                >
                  SCHEDULE CAMPUS VISIT
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center border border-[#0b1f12]/25 bg-white px-6 py-3 font-['Nunito',sans-serif] text-[14px] font-normal uppercase tracking-wider text-[#0b1f12] transition-colors hover:border-[#0b1f12] hover:bg-[#0b1f12] hover:text-white rounded-none"
                >
                  VIEW PROGRAMMES
                </a>
              </div>
            </div>

            {/* Right Column: Full Image Block with Subtle Caption */}
            <div className="relative rounded-none border border-[#e2e8e3] bg-[#fafaf7] lg:col-span-5 overflow-hidden flex flex-col justify-between">
              <img
                src="/img/about_student.jpg"
                alt="Student learning at Brookfield International School"
                className="h-full min-h-[380px] w-full rounded-none object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1f12]/80 via-[#0b1f12]/30 to-transparent p-5 text-white">
                <span className="block font-['Instrument_Sans',sans-serif] text-[15px] font-normal">
                  Experiential Learning in Action
                </span>
                <span className="block font-['Nunito',sans-serif] text-[12px] text-white/80 mt-0.5">
                  Campus Achabal, Anantnag
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Interactive 3D Image Flip Data Board */}
          <div className="reveal mt-6">
            <StatFlipBoard />
          </div>
        </div>
      </section>

      {/* ================= EDUCATIONAL PROGRAMMES SECTION ================= */}
      <section
        id="programs"
        className="border-b border-[#e2e6e2] bg-[#fafaf7] py-20 sm:py-24"
      >
        <div className="container-x">
          <div className="mb-12 flex flex-col items-center justify-center text-center mx-auto max-w-2xl">
            <TextReveal
              as="div"
              className="section-title text-[#111813]"
              text="Educational Programmes"
              staggerMs={70}
              baseDelayMs={80}
            />
            <p
              className="reveal mt-3 max-w-xl mx-auto font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-[#55665b] [text-wrap:balance]"
              style={{ transitionDelay: "200ms" }}
            >
              From early foundational years to advanced secondary stages our programmes
              integrate global standards practical technology and ethical values.
            </p>
          </div>

          <div className="reveal-stagger mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-none border border-[#e2e6e2] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden rounded-none border-b border-[#e2e6e2]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full rounded-none object-cover"
                  />
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="font-['Instrument_Sans',sans-serif] text-[20px] font-normal text-[#111813]">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-grow font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-[#55665b]">
                    {p.text}
                  </p>
                  <a
                    href="#apply"
                    className="btn-cta mt-6 !w-full rounded-none"
                  >
                    Apply Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ANNOUNCEMENTS & UPDATES SECTION (HIGH-TECH LEDGER REDESIGN) ================= */}
      <section
        id="announcements"
        className="border-b border-[#e2e6e2] bg-[#fafaf7] py-14 sm:py-16"
      >
        <div className="container-x">
          {/* Center-Aligned Section Title Header: Only Title & Balanced Subtext (No Badges) */}
          <div className="mb-5 flex flex-col items-center justify-center text-center mx-auto max-w-2xl">
            <TextReveal
              as="div"
              className="section-title text-[#111813]"
              text="Important Updates and Academic Notices"
              staggerMs={50}
              baseDelayMs={80}
            />
            <p
              className="reveal mt-2.5 max-w-xl mx-auto font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-[#55665b] [text-wrap:balance]"
              style={{ transitionDelay: "200ms" }}
            >
              Official schedules olympiad examination timetables and academic notifications for parents and students.
            </p>
          </div>

          {/* Interactive Professional Announcement Carousel */}
          <div className="reveal">
            <AnnouncementCarousel />
          </div>
        </div>
      </section>

      {/* ================= PHOTO GALLERY SECTION ================= */}
      <section
        id="gallery"
        className="border-b border-[#e2e6e2] bg-[#fafaf7] py-20 sm:py-24"
      >
        <div className="container-x">
          <div className="mb-12 flex flex-col items-center justify-center text-center mx-auto max-w-2xl">
            <TextReveal
              as="div"
              className="section-title text-[#111813]"
              text="Campus Life and Activities Showcase"
              staggerMs={55}
              baseDelayMs={80}
            />
            <p
              className="reveal mt-3 max-w-xl mx-auto font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-[#55665b] [text-wrap:balance]"
              style={{ transitionDelay: "200ms" }}
            >
              Moments of discovery student competitions workshops and school events captured at Brookfield.
            </p>
          </div>

          <div className="reveal-stagger mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g) => (
              <figure
                key={g.title}
                className="flex flex-col rounded-none border border-[#e2e6e2] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={g.img}
                  alt={g.title}
                  className="h-52 w-full rounded-none object-cover"
                />
                <figcaption className="border-t border-[#e2e6e2] p-4">
                  <h3 className="font-['Instrument_Sans',sans-serif] text-[20px] font-normal text-[#111813]">
                    {g.title}
                  </h3>
                  <p className="mt-1 font-['Nunito',sans-serif] text-[14px] font-normal text-[#55665b]">
                    {g.sub}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REDESIGNED CREATIVE FAQ SECTION ================= */}
      <FAQSection />

      {/* ================= CONTACT US & ENQUIRY SECTION (ARCHITECTURAL HEADQUARTERS REDESIGN) ================= */}
      <section
        id="contact"
        className="border-b border-[#e2e6e2] bg-white py-20 sm:py-24"
      >
        <div className="container-x">
          <div className="mb-12 flex flex-col items-center justify-center text-center mx-auto max-w-2xl">
            <TextReveal
              as="div"
              className="section-title text-[#111813]"
              text="Contact Us and Admission Enquiry"
              staggerMs={55}
              baseDelayMs={80}
            />
            <p
              className="reveal mt-3 max-w-xl mx-auto font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-[#55665b] [text-wrap:balance]"
              style={{ transitionDelay: "200ms" }}
            >
              Connect directly with our campus administration or submit an application enquiry online.
            </p>
          </div>

          {/* Integrated 2-Column Split Console */}
          <div className="reveal-stagger mt-10 grid gap-0 border border-[#0b1f12]/20 lg:grid-cols-12 overflow-hidden">
            {/* Left Column: Full-Bleed Photograph with Top Contact Block & White Icons */}
            <div className="reveal relative flex flex-col justify-start overflow-hidden p-6 sm:p-7 lg:p-8 text-white lg:col-span-5 rounded-none min-h-[580px]">
              {/* Full Picture Background: Pinned to bottom to showcase the students reading */}
              <img
                src="/img/admission_students.jpg"
                alt="Brookfield International School Students"
                className="absolute inset-0 h-full w-full object-cover object-bottom rounded-none"
              />

              {/* Seamless Continuous Top Gradient: Zero hard lines, smooth natural photographic blend */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f12]/75 via-[#0b1f12]/20 to-transparent pointer-events-none rounded-none" />

              {/* Top Contact Details with Pure White Icons & Subtle Drop Shadow for High Readability */}
              <div className="relative z-10 space-y-3 font-['Nunito',sans-serif] text-[14px]">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-none bg-black/40 border border-white/10 backdrop-blur-sm">
                    <MapPin className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-normal uppercase tracking-wider text-[#c9f158] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      CAMPUS ADDRESS
                    </span>
                    <span className="text-[13px] text-white leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      Thajiwara Road, Achabal, Anantnag, Jammu and Kashmir 192201
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-none bg-black/40 border border-white/10 backdrop-blur-sm">
                    <Phone className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-normal uppercase tracking-wider text-[#c9f158] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      DIRECT TELEPHONE
                    </span>
                    <a
                      href="tel:+91861888615"
                      className="text-[13px] text-white hover:text-[#c9f158] transition-colors leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    >
                      +91 86188 8615
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-none bg-black/40 border border-white/10 backdrop-blur-sm">
                    <Mail className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-normal uppercase tracking-wider text-[#c9f158] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      EMAIL CORRESPONDENCE
                    </span>
                    <a
                      href="mailto:info@brookfieldschools.com"
                      className="text-[13px] text-white hover:text-[#c9f158] transition-colors leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                    >
                      info@brookfieldschools.com
                    </a>
                  </div>
                </div>

                {/* Office Timings */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-none bg-black/40 border border-white/10 backdrop-blur-sm">
                    <Clock className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-normal uppercase tracking-wider text-[#c9f158] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      OFFICE TIMINGS
                    </span>
                    <span className="text-[13px] text-white leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      Monday to Saturday 9:00 AM to 4:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Application Terminal */}
            <div className="reveal flex flex-col justify-between bg-[#fafaf7] p-8 sm:p-12 lg:col-span-7 border-t lg:border-t-0 lg:border-l border-[#0b1f12]/20">
              <form>
                <h3 className="font-['Instrument_Sans',sans-serif] text-[20px] font-normal text-[#111813]">
                  Submit an Admission Enquiry
                </h3>
                <p className="mt-1 font-['Nunito',sans-serif] text-[14px] font-normal text-[#55665b]">
                  Please enter applicant details below and our admissions counsellor will respond
                  within one working day.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-['Nunito',sans-serif] text-[13px] font-normal uppercase tracking-wider text-[#111813]">
                      Student Full Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Aayan Ahmad"
                      className="mt-2 w-full rounded-none border border-[#0b1f12]/20 bg-white px-4 py-3.5 font-['Nunito',sans-serif] text-[14px] font-normal text-[#111813] outline-none transition focus:border-[#0b1f12] focus:ring-1 focus:ring-[#0b1f12]"
                    />
                  </label>

                  <label className="block">
                    <span className="font-['Nunito',sans-serif] text-[13px] font-normal uppercase tracking-wider text-[#111813]">
                      Grade Applying For
                    </span>
                    <input
                      type="text"
                      name="grade"
                      placeholder="e.g. Primary 1 or Grade 4"
                      className="mt-2 w-full rounded-none border border-[#0b1f12]/20 bg-white px-4 py-3.5 font-['Nunito',sans-serif] text-[14px] font-normal text-[#111813] outline-none transition focus:border-[#0b1f12] focus:ring-1 focus:ring-[#0b1f12]"
                    />
                  </label>

                  <label className="block">
                    <span className="font-['Nunito',sans-serif] text-[13px] font-normal uppercase tracking-wider text-[#111813]">
                      Parent Email Address
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="parent@example.com"
                      className="mt-2 w-full rounded-none border border-[#0b1f12]/20 bg-white px-4 py-3.5 font-['Nunito',sans-serif] text-[14px] font-normal text-[#111813] outline-none transition focus:border-[#0b1f12] focus:ring-1 focus:ring-[#0b1f12]"
                    />
                  </label>

                  <label className="block">
                    <span className="font-['Nunito',sans-serif] text-[13px] font-normal uppercase tracking-wider text-[#111813]">
                      Telephone Number
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91"
                      className="mt-2 w-full rounded-none border border-[#0b1f12]/20 bg-white px-4 py-3.5 font-['Nunito',sans-serif] text-[14px] font-normal text-[#111813] outline-none transition focus:border-[#0b1f12] focus:ring-1 focus:ring-[#0b1f12]"
                    />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="font-['Nunito',sans-serif] text-[13px] font-normal uppercase tracking-wider text-[#111813]">
                    Message or Specific Inquiry
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Enter any specific questions regarding curriculum transport or admission prerequisites..."
                    className="mt-2 w-full resize-none rounded-none border border-[#0b1f12]/20 bg-white px-4 py-3.5 font-['Nunito',sans-serif] text-[14px] font-normal text-[#111813] outline-none transition focus:border-[#0b1f12] focus:ring-1 focus:ring-[#0b1f12]"
                  />
                </label>

                <button
                  type="submit"
                  className="btn-cta mt-6 !w-full rounded-none uppercase tracking-wider"
                >
                  SUBMIT ADMISSION ENQUIRY
                </button>

                <p className="mt-3 text-center font-['Nunito',sans-serif] text-[12px] text-[#55665b]">
                  All application details are handled with strict privacy by our admissions board.
                </p>
              </form>
            </div>
          </div>

          {/* Interactive Campus Location Google Map */}
          <div className="reveal mt-8 border border-[#0b1f12]/20 bg-white rounded-none overflow-hidden">
            <div className="relative h-[340px] sm:h-[420px] w-full bg-[#f0f2f0]">
              <iframe
                title="Brookfield International School Campus Location"
                src="https://maps.google.com/maps?q=Brookfield+International+School+Achabal+Anantnag&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0 rounded-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADMISSIONS CTA SECTION (POSITIONED DIRECTLY UNDER GOOGLE MAPS) ================= */}
      <section
        id="apply"
        className="relative overflow-hidden border-t border-[#0b1f12]/15 bg-[#0b1f12] py-20 text-white sm:py-24"
      >
        {/* Left Flank Decorative Student Cutout (Tastefully Sized, Grounded to Bottom) */}
        <div
          className="reveal absolute left-2 lg:left-6 xl:left-12 bottom-0 hidden md:block z-10 pointer-events-none select-none"
          style={{ transitionDelay: "100ms" }}
        >
          <img
            src="/img/cta%20img%201.png"
            alt="Brookfield Student"
            className="h-48 md:h-56 lg:h-64 xl:h-72 w-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
          />
        </div>

        {/* Right Flank Decorative Student Cutout (Tastefully Sized, Grounded to Bottom) */}
        <div
          className="reveal absolute right-2 lg:right-6 xl:right-12 bottom-0 hidden md:block z-10 pointer-events-none select-none"
          style={{ transitionDelay: "180ms" }}
        >
          <img
            src="/img/cta%20img%202.png"
            alt="Brookfield Student"
            className="h-48 md:h-56 lg:h-64 xl:h-72 w-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)]"
          />
        </div>

        {/* Center Content Container */}
        <div className="container-x relative z-20">
          <div className="mx-auto max-w-2xl text-center px-4">
            <TextReveal
              as="div"
              className="section-title text-white"
              text="Admissions Open for Academic Session 2026 2027"
              staggerMs={55}
              baseDelayMs={90}
            />

            <p
              className="reveal mx-auto mt-3 max-w-xl font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-white/75 [text-wrap:balance]"
              style={{ transitionDelay: "220ms" }}
            >
              At our innovative values driven school students do not just learn they
              thrive. Enroll now and give your child a head start in a world class
              educational environment in Anantnag.
            </p>

            <div
              className="reveal mt-8 flex flex-wrap items-center justify-center gap-4"
              style={{ transitionDelay: "340ms" }}
            >
              <a
                href="#contact"
                className="btn-cta btn-cta-dark-context rounded-none uppercase tracking-wider"
              >
                APPLY NOW
              </a>
              <a
                href="#contact"
                className="btn-secondary rounded-none border-white/25 text-white hover:bg-white/10 uppercase tracking-wider"
              >
                BOOK A VISIT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERSECTING ARCHITECTURAL BORDER DIVIDING CTA BANNER AND FOOTER ================= */}
      <div className="relative w-full border-b border-white/20 bg-[#0b1f12]">
        <div className="container-x flex items-center justify-center">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9f158]/50 to-transparent" />
        </div>
      </div>

      {/* ================= ENHANCED ARCHITECTURAL FOOTER ================= */}
      <footer className="border-t border-white/10 bg-[#0b1f12] py-16 text-white">
        <div className="container-x">
          {/* Main 4-Column Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Identity, Mission Statement and Social Channels */}
            <div>
              <a href="#home" className="inline-flex items-center gap-3">
                <img
                  src="/img/main-logo.png"
                  alt="Brookfield International School"
                  className="h-11 w-auto sm:h-12 object-contain"
                />
                <div className="flex flex-col justify-center text-left">
                  <span className="font-['Instrument_Sans',sans-serif] text-[13px] sm:text-[15px] font-normal leading-tight text-white tracking-wide uppercase">
                    BROOKFIELD INTERNATIONAL SCHOOL
                  </span>
                  <span className="font-['Nunito',sans-serif] text-[9.5px] sm:text-[10px] font-normal tracking-[0.12em] sm:tracking-[0.14em] text-[#c9f158] uppercase leading-tight mt-0.5">
                    SHAPING THE FUTURE OF SCHOOLING
                  </span>
                </div>
              </a>

              <p className="mt-4 font-['Nunito',sans-serif] text-[14px] font-normal leading-relaxed text-white/70">
                We are redefining education in Anantnag with an international curriculum,
                robotics and coding laboratories, project based inquiry, and moral grounding
                through Islamic values.
              </p>

              {/* Official Social Media Channels */}
              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Brookfield International School on ${s.name}`}
                    className="text-white transition-colors hover:text-[#c9f158]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Navigation */}
            <div>
              <h3 className="font-['Instrument_Sans',sans-serif] text-[20px] font-normal text-white">
                Quick Navigation
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Us", href: "#about" },
                  { label: "Programs", href: "#programs" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Announcements", href: "#announcements" },
                  { label: "FAQs", href: "#faqs" },
                  { label: "Contact Us", href: "#contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-['Nunito',sans-serif] text-[14px] font-normal text-white/70 transition-colors hover:text-[#c9f158]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Information & Academic Links (No Admin Login) */}
            <div>
              <h3 className="font-['Instrument_Sans',sans-serif] text-[20px] font-normal text-white">
                Information &amp; Links
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Academic Calendar",
                  "Curriculum Framework",
                  "Student Welfare",
                  "Terms & Conditions",
                  "Privacy Policy",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="#home"
                      className="font-['Nunito',sans-serif] text-[14px] font-normal text-white/70 transition-colors hover:text-[#c9f158]"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Campus Liaison & Quick Contact Credentials */}
            <div>
              <h3 className="font-['Instrument_Sans',sans-serif] text-[20px] font-normal text-white">
                Campus Liaison
              </h3>
              <div className="mt-4 space-y-3 font-['Nunito',sans-serif] text-[14px] text-white/75">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#c9f158]" />
                  <span>Thajiwara Road, Achabal, Anantnag, Jammu and Kashmir 192201</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#c9f158]" />
                  <a href="tel:+91861888615" className="hover:text-[#c9f158] transition-colors">
                    +91 86188 8615
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#c9f158]" />
                  <a href="mailto:info@brookfieldschools.com" className="hover:text-[#c9f158] transition-colors">
                    info@brookfieldschools.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-[#c9f158]" />
                  <span>Mon to Sat: 9:00 AM to 4:00 PM</span>
                </div>
              </div>

              <a
                href="#apply"
                className="btn-cta btn-cta-dark-context mt-6 !w-full rounded-none uppercase tracking-wider text-center"
              >
                APPLY FOR ADMISSION
              </a>
            </div>
          </div>

          {/* Bottom Bar: Copyright on Left, Accreditation & Minimal Back to Top Arrow on Right */}
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 text-white/50 text-[13px] font-['Nunito',sans-serif] sm:flex-row sm:items-start">
            <p className="font-['Nunito',sans-serif] text-[13px] font-normal text-white/60">
              Copyright © 2026 Brookfield International School. All rights reserved.
            </p>

            <div className="flex flex-col items-start text-left gap-2 sm:max-w-md">
              <p className="font-['Nunito',sans-serif] text-[13px] font-normal text-white/50 text-left">
                Recognized International Curriculum · Experiential STEM and Values Driven Education
              </p>

              <a
                href="#home"
                aria-label="Back to top"
                className="group inline-flex items-center text-white/70 transition-colors hover:text-[#c9f158]"
              >
                <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
