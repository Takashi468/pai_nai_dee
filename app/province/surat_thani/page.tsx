import Link from "next/link";
import Image from "next/image";
import { suratThaniAttractions } from "@/data/provinces/surat_thani";
import SuratThaniPage2 from "@/public/images/surat_thani/surat_thani.jpg";
import KohSamui from "@/public/images/surat_thani/koh_samui.jpg";

export default function SuratThaniPage() {
    const attractions = suratThaniAttractions;

    const facts = [
        { label: "พื้นที่", value: "~ 12,891 ตร.กม" },
        { label: "ประชากร", value: "~1,073,957 คน" },
        { label: "อุณหภูมิเฉลี่ย", value: "27-32°C" },
        { label: "ดอกไม้ประจำจังหวัด", value: "ดอกบัวผุด" },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-100 font-sans selection:bg-thai-blue selection:text-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="shrink-0 flex items-center gap-2">
                            <Link href="/">
                                <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-thai-blue to-cyan-300 drop-shadow-md tracking-tight cursor-pointer">
                                    ไปไหนดี
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link href="/" className="text-white text-xl hover:text-thai-gold transition-colors duration-200 font-bold">หน้าแรก</Link>
                                <Link href="/#regions" className="text-white text-xl hover:text-thai-blue transition-colors duration-200 font-bold">ภูมิภาค</Link>
                                <Link href="/#highlights" className="text-white text-xl hover:text-thai-blue transition-colors duration-200 font-bold">ไฮไลท์</Link>
                                <Link href="/#contact" className="text-white text-xl hover:text-thai-blue transition-colors duration-200 font-bold">ติดต่อ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src={SuratThaniPage2}
                    alt="น่าน"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 z-1"></div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-thai-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-2"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-thai-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse z-2"></div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium mb-6">
                        ภาคใต้
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
                        สุราษฎร์ธานี
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        เมืองร้อยเกาะ เงาะอร่อย หอยใหญ่ ไข่แดง แหล่งธรรมะ
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#attractions"
                            className="px-8 py-4 rounded-full bg-thai-blue hover:bg-sky-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            สำรวจสถานที่ท่องเที่ยว
                        </Link>
                        <Link
                            href="#facts"
                            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold text-lg transition-all"
                        >
                            ข้อมูลจังหวัด
                        </Link>
                    </div>
                </div>
            </section>

            {/* Province Facts */}
            <section id="facts" className="py-16 bg-gradient-to-r from-blue-700 via-sky-800 to-blue-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {facts.map((fact, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                                <p className="text-sm text-sky-200 mb-2">{fact.label}</p>
                                <p className="text-2xl font-bold text-white">{fact.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Attractions Section */}
            <section id="attractions" className="py-24 bg-slate-50 dark:bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">สถานที่ท่องเที่ยวยอดนิยม</h2>
                        <div className="h-1 w-24 bg-linear-to-r from-thai-blue to-cyan-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            6 สถานที่ที่คุณไม่ควรพลาดเมื่อมาเยือนสุราษฎร์ธานี
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {attractions.map((attraction) => (
                            <div
                                key={attraction.id}
                                className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                {/* Attraction Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={attraction.image}
                                        alt={attraction.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                            {attraction.highlight}
                                        </span>
                                        {attraction.location && (
                                            <span className="inline-block px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-full">
                                                📍 {attraction.location}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{attraction.name}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {attraction.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-700">
                                        <Link href={`/province/surat_thani/${attraction.slug}`} className="text-thai-blue hover:text-sky-700 font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
                                            ดูรายละเอียด <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Highlight */}
            <section className="py-24 bg-white dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Featured Image */}
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={KohSamui}
                                alt="เกาะสมุย"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-thai-blue/10 text-thai-blue text-sm font-medium mb-6">
                                ไฮไลท์แนะนำ
                            </span>
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                เกาะสมุย<br />
                                <span className="text-gradient-blue">เกาะที่ใหญ่เป็นอันดับสองของประเทศไทย</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                เกาะสมุย เป็นเกาะที่ใหญ่เป็นอันดับสองของประเทศไทย ตั้งอยู่ในอ่าวไทย มีชื่อเสียงด้านชายหาดที่สวยงาม น้ำทะเลใส และวัฒนธรรมที่เป็นเอกลักษณ์
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-thai-blue/20 flex items-center justify-center text-thai-blue">✓</span>
                                    เดินทางสะดวกด้วยเรือเฟอร์รี่ หรือบินตรงลงสนามบินสมุย
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-thai-blue/20 flex items-center justify-center text-thai-blue">✓</span>
                                    เที่ยวได้ตลอดปี (ช่วงไฮซีซั่น ม.ค. - เม.ย.)
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-thai-blue/20 flex items-center justify-center text-thai-blue">✓</span>
                                    ครบครันด้วยที่พักหรู ร้านอาหาร และกิจกรรมทางน้ำ
                                </li>
                            </ul>
                            <Link
                                href="https://maps.app.goo.gl/Ki78K15Wnpd1LQrr5"
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-thai-blue hover:bg-sky-600 text-white font-bold transition-all transform hover:-translate-y-1 gap-2"
                            >
                                วางแผนเดินทาง <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Tips */}
            <section className="py-24 bg-slate-50 dark:bg-zinc-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">เคล็ดลับการเดินทาง</h2>
                        <div className="h-1 w-24 bg-linear-to-r from-thai-blue to-cyan-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-3xl mb-6">
                                ✈️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">การเดินทาง</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                บินตรงลงสนามบินสุราษฎร์ฯ หรือสมุย นั่งรถทัวร์/รถไฟ
                                ต่อเรือเฟอร์รี่สู่เกาะต่าง ๆ ได้อย่างสะดวกสบาย
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-3xl mb-6">
                                🌤️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">ช่วงเวลาที่เหมาะสม</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                เที่ยวทะเลฝั่งอ่าวไทยช่วง ม.ค. - เม.ย. ฟ้าใส ทะเลสวย
                                หรือเที่ยวเขาสก ชมกุ้ยหลินเมืองไทยได้ตลอดปี
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-3xl mb-6">
                                🍜
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">อาหารต้องลอง</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                หอยนางรมสุราษฎร์ฯ ตัวใหญ่ ไข่เค็มไชยา ขนมจีนน้ำยาปักษ์ใต้
                                และอาหารทะเลสดใหม่จากแพ
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Home */}
            <section className="py-16 bg-gradient-to-r from-blue-500 to-sky-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">สนใจจังหวัดอื่นๆ?</h2>
                    <p className="text-sky-100 mb-8">กลับไปดูจังหวัดอื่นจากทั่วประเทศไทย</p>
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 gap-2"
                    >
                        ← กลับหน้าแรก
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-thai-blue via-cyan-400 to-sky-500"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link href="/">
                        <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-thai-blue to-cyan-300 cursor-pointer">
                            ไปไหนดี
                        </span>
                    </Link>
                    <p className="mt-4 text-slate-500">© 2026 Painaidee - ไปไหนดี. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
