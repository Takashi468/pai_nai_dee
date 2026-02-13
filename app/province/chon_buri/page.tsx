"use client";
import Link from "next/link";
import Image from "next/image";
import { chonBuriAttractions } from "@/data/provinces/chon_buri";
import ChonBuriPageImg from "@/public/images/chon_buri/chon_buri.jpg"; // Re-using placeholder
import sanctuaryOfTruthMuseum from "@/public/images/chon_buri/sanctuary_of_truth_museum.jpg"; // Placeholder
import bangSaenBeachImg from "@/public/images/chon_buri/bangSaenBeachImg.jpg";

export default function ChonBuriPage() {
    const attractions = chonBuriAttractions;

    const facts = [
        { label: "พื้นที่", value: "~ 4,363 ตร.กม" },
        { label: "ประชากร", value: "~1.5 ล้านคน" },
        { label: "อุณหภูมิเฉลี่ย", value: "28-35°C" },
        { label: "ดอกไม้ประจำจังหวัด", value: "ดอกประดู่ป่า" },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="shrink-0 flex items-center gap-2">
                            <Link href="/">
                                <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-md tracking-tight cursor-pointer">
                                    ไปไหนดี
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link href="/" className="text-white text-xl hover:text-cyan-400 transition-colors duration-200 font-bold">หน้าแรก</Link>
                                <Link href="/#regions" className="text-white text-xl hover:text-cyan-400 transition-colors duration-200 font-bold">ภูมิภาค</Link>
                                <Link href="/#highlights" className="text-white text-xl hover:text-cyan-400 transition-colors duration-200 font-bold">ไฮไลท์</Link>
                                <Link href="/#contact" className="text-white text-xl hover:text-cyan-400 transition-colors duration-200 font-bold">ติดต่อ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src={ChonBuriPageImg}
                    alt="ชลบุรี"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 z-1"></div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-2"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse z-2"></div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium mb-6">
                        ภาคตะวันออก
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
                        ชลบุรี
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        เมืองท่องเที่ยวชายทะเลระดับโลก สีสันตะวันออก
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#attractions"
                            className="px-8 py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
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
            <section id="facts" className="py-16 bg-gradient-to-r from-cyan-700 via-blue-800 to-cyan-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {facts.map((fact, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                                <p className="text-sm text-cyan-200 mb-2">{fact.label}</p>
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
                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            6 สถานที่ที่คุณไม่ควรพลาดเมื่อมาเยือนชลบุรี
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
                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-800 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mb-3">
                                        {attraction.highlight}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{attraction.name}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {attraction.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-700">
                                        <Link href={`/province/chon_buri/${attraction.slug}`} className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
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
                                src={bangSaenBeachImg}
                                alt="หาดบางแสน"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
                                ไฮไลท์แนะนำ
                            </span>
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                หาดบางแสน<br />
                                <span className="text-cyan-500">ชายหาดในความทรงจำ ใกล้กรุงนิดเดียว</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                หาดบางแสนโฉมใหม่ สะอาด น่าเที่ยว เรียงรายด้วยทิวมะพร้าวร่มรื่น
                                จะนั่งชิลล์บนเก้าอี้ผ้าใบ กินอาหาทะเลสดๆ หรือลงเล่นน้ำก็สนุกได้ทั้งครอบครัว
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500">✓</span>
                                    เที่ยวได้ทุกวัน ใกล้กรุงเทพฯ เพียง 1 ชม.
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500">✓</span>
                                    ถนนคนเดินบางแสน (ศุกร์-เสาร์)
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500">✓</span>
                                    มีคาเฟ่และร้านอาหารริมหาดมากมาย
                                </li>
                            </ul>
                            <Link
                                href="https://maps.app.goo.gl/..."
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all transform hover:-translate-y-1 gap-2"
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
                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-3xl mb-6">
                                🚗
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">การเดินทาง</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                ขับรถจากกรุงเทพฯ ใช้เวลาเพียง 1-2 ชั่วโมง ผ่านเส้นทางมอเตอร์เวย์หรือบูรพาวิถี
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center text-3xl mb-6">
                                🏖️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">ช่วงเวลาที่เหมาะสม</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                เที่ยวได้ตลอดทั้งปี ฤดูหนาว (พ.ย.-ม.ค.) อากาศดีที่สุดสำหรับการเดินชายหาด
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-3xl mb-6">
                                🦑
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">อาหารต้องลอง</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                ข้าวหลามหนองมน อาหารทะเลสดๆ อ่างศิลา และคาเฟ่ชิคๆ มากมาย
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Home */}
            <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">สนใจจังหวัดอื่นๆ?</h2>
                    <p className="text-cyan-100 mb-8">กลับไปดูจังหวัดอื่นจากทั่วประเทศไทย</p>
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-white text-cyan-700 font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 gap-2"
                    >
                        ← กลับหน้าแรก
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-400 to-purple-500"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link href="/">
                        <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            ไปไหนดี
                        </span>
                    </Link>
                    <p className="mt-4 text-slate-500">© 2026 Painaidee - ไปไหนดี. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
