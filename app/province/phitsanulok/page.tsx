import Link from "next/link";
import Image from "next/image";
import { phitsanulokAttractions } from "@/data/provinces/phitsanulok";

// Using placeholder paths since images are not yet available
const PhitsanulokPageBg = "@/public/images/phitsanulok/phitsanulok_page.jpg";
const WatPhraSiRattanaMahathatFeatured = "@/public/images/phitsanulok/wat_yai_featured.jpg";

export default function PhitsanulokPage() {
    const attractions = phitsanulokAttractions;

    const facts = [
        { label: "พื้นที่", value: "10,815.8 ตร.กม." },
        { label: "ประชากร", value: "~8.4 แสนคน" },
        { label: "อุณหภูมิเฉลี่ย", value: "20-36°C" },
        { label: "ดอกไม้ประจำจังหวัด", value: "ดอกปีบ" },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-100 font-sans selection:bg-thai-gold selection:text-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="shrink-0 flex items-center gap-2">
                            <Link href="/">
                                <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-thai-gold to-yellow-300 drop-shadow-md tracking-tight cursor-pointer">
                                    ไปไหนดี
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link href="/" className="text-white text-xl hover:text-thai-gold transition-colors duration-200 font-bold">หน้าแรก</Link>
                                <Link href="/#regions" className="text-white text-xl hover:text-thai-purple transition-colors duration-200 font-bold">ภูมิภาค</Link>
                                <Link href="/#highlights" className="text-white text-xl hover:text-thai-blue transition-colors duration-200 font-bold">ไฮไลท์</Link>
                                <Link href="/#contact" className="text-white text-xl hover:text-thai-gold transition-colors duration-200 font-bold">ติดต่อ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src={PhitsanulokPageBg}
                    alt="พิษณุโลก"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 z-1"></div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-2"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse z-2"></div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium mb-6">
                        ภาคเหนือตอนล่าง
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
                        พิษณุโลก
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        พระพุทธชินราชงามเลิศ ถิ่นกำเนิดพระนเรศวร<br />
                        สองฝั่งน่านล้วนเรือนแพ หวานฉ่ำแท้กล้วยตาก ถ้ำและน้ำตกหลากตระการตา
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#attractions"
                            className="px-8 py-4 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
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
            <section id="facts" className="py-16 bg-gradient-to-r from-amber-900 via-orange-950 to-amber-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {facts.map((fact, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                                <p className="text-sm text-amber-200 mb-2">{fact.label}</p>
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
                        <div className="h-1 w-24 bg-linear-to-r from-thai-gold to-orange-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            6 สถานที่ที่คุณไม่ควรพลาดเมื่อมาเยือนพิษณุโลก
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
                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-3">
                                        {attraction.highlight}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{attraction.name}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {attraction.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-700">
                                        <Link href={`/province/phitsanulok/${attraction.slug}`} className="text-amber-600 hover:text-amber-700 font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
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
                                src={PhitsanulokPageBg}
                                alt="วัดพระศรีรัตนมหาธาตุ"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
                                ไฮไลท์แนะนำ
                            </span>
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                วัดพระศรีรัตนมหาธาตุ (วัดใหญ่)<br />
                                <span className="text-gradient-gold">วัดคู่บ้านคู่เมืองพิษณุโลก</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                วัดพระศรีรัตนมหาธาตุวรมหาวิหาร เป็นพระอารามหลวงชั้นเอก ชนิดวรมหาวิหาร ตั้งอยู่ริมฝั่งแม่น้ำน่าน เป็นที่ประดิษฐาน "พระพุทธชินราช" พระพุทธรูปที่มีพุทธลักษณะงดงามที่สุดในประเทศไทย และเป็นที่สักการะศรัทธาของพุทธศาสนิกชนทั่วประเทศ
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">✓</span>
                                    สักการะพระพุทธชินราช
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">✓</span>
                                    ชมบานประตูประดับมุกสมัยอยุธยา
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">✓</span>
                                    แวะทานก๋วยเตี๋ยวห้อยขาริมน้ำน่าน
                                </li>
                            </ul>
                            <Link
                                href="https://maps.app.goo.gl/8dz9tVqj96gNqs2u7"
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold transition-all transform hover:-translate-y-1 gap-2"
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
                        <div className="h-1 w-24 bg-linear-to-r from-thai-gold to-yellow-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-3xl mb-6">
                                ✈️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">การเดินทาง</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                มีสนามบินพิษณุโลกให้บริการ หรือเดินทางด้วยรถไฟสายเหนือ (สถานีพิษณุโลก) และรถทัวร์จากกรุงเทพฯ (หมอชิต) ระยะเวลาเดินทางประมาณ 5-6 ชั่วโมง
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-3xl mb-6">
                                🌤️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">ช่วงเวลาที่เหมาะสม</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                เที่ยวได้ตลอดทั้งปี แต่ช่วงหน้าหนาว (พ.ย. - ก.พ.) จะเหมาะแก่การขึ้นภูหินร่องกล้าและภูทับเบิก (ทางเข้าจากฝั่งนครไทย) เพื่อสัมผัสอากาศหนาว
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-3xl mb-6">
                                🍜
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">อาหารต้องลอง</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                ก๋วยเตี๋ยวห้อยขา (เมนูเด็ดเมืองสองแคว), ผัดไทย, และกล้วยตากบางกระทุ่ม ของฝากขึ้นชื่อที่ห้ามพลาด
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Home */}
            <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">สนใจจังหวัดอื่นๆ?</h2>
                    <p className="text-amber-100 mb-8">กลับไปดูจังหวัดอื่นจากทั่วประเทศไทย</p>
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-white text-amber-700 font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 gap-2"
                    >
                        ← กลับหน้าแรก
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-thai-purple via-thai-gold to-thai-blue"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link href="/">
                        <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-thai-gold to-yellow-300 cursor-pointer">
                            ไปไหนดี
                        </span>
                    </Link>
                    <p className="mt-4 text-slate-500">© 2026 Painaidee - ไปไหนดี. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
