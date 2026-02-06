import Link from "next/link";
import Image from "next/image";

export default function ChiangRaiPage() {
    const attractions = [
        {
            id: 1,
            name: "วัดร่องขุ่น",
            description: "วัดสีขาวอันศักดิ์สิทธิ์ ผลงานศิลปะชิ้นเอกของอาจารย์เฉลิมชัย โฆษิตพิพัฒน์",
            highlight: "สถาปัตยกรรมสีขาวอันงดงาม",
            image: "/images/chiang-rai/wat-rong-khun.jpg",
        },
        {
            id: 2,
            name: "ดอยแม่สลอง",
            description: "ยอดเขาที่มีอากาศเย็นสบาย ชมพระอาทิตย์ขึ้นและไร่ชาที่สวยงาม",
            highlight: "ไร่ชาและวิวพระอาทิตย์ขึ้น",
            image: "/images/chiang-rai/doi-mae-salong.jpg",
        },
        {
            id: 3,
            name: "พระธาตุดอยตุง",
            description: "พระธาตุศักดิ์สิทธิ์บนยอดดอย ศาสนสถานสำคัญของภาคเหนือ",
            highlight: "จุดชมวิวพร้อมสายหมอก",
            image: "/images/chiang-rai/doi-tung.jpg",
        },
        {
            id: 4,
            name: "สามเหลี่ยมทองคำ",
            description: "จุดบรรจบของสามประเทศ ไทย ลาว และเมียนมา ริมแม่น้ำโขง",
            highlight: "ล่องเรือชมทิวทัศน์",
            image: "/images/chiang-rai/golden-triangle.jpg",
        },
        {
            id: 5,
            name: "วัดร่องเสือเต้น",
            description: "วัดสีฟ้าสวยงาม ศิลปะร่วมสมัยผสมผสานความเชื่อดั้งเดิม",
            highlight: "สถาปัตยกรรมสีฟ้าเขียว",
            image: "/images/chiang-rai/wat-rong-suea-ten.jpg",
        },
        {
            id: 6,
            name: "ภูชี้ฟ้า",
            description: "ยอดดอยสูงสุดของจังหวัด ชมทะเลหมอกยามเช้าที่งดงาม",
            highlight: "ทะเลหมอกยามเช้า",
            image: "/images/chiang-rai/phu-chi-fa.jpg",
        },
    ];

    const facts = [
        { label: "พื้นที่", value: "11,678 ตร.กม." },
        { label: "ประชากร", value: "~1.3 ล้านคน" },
        { label: "สภาพอากาศ", value: "เย็นสบาย 15-25°C" },
        { label: "ดอกไม้ประจำจังหวัด", value: "ดอกพวงแสด" },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-100 font-sans selection:bg-thai-purple selection:text-white">
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
                    src="/images/chiang_rai_page.jpg"
                    alt="เชียงราย"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 z-1"></div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-thai-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-2"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-thai-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse z-2"></div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium mb-6">
                        ภาคเหนือ
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
                        เชียงราย
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                        เมืองแห่งศิลปะและธรรมชาติ<br />
                        สูงสุดดอยแม่สลอง มนต์เสน่ห์แห่งล้านนา
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#attractions"
                            className="px-8 py-4 rounded-full bg-thai-purple hover:bg-purple-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
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
            <section id="facts" className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {facts.map((fact, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                                <p className="text-sm text-purple-300 mb-2">{fact.label}</p>
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
                        <div className="h-1 w-24 bg-linear-to-r from-thai-purple to-thai-blue mx-auto rounded-full"></div>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            6 สถานที่ที่คุณไม่ควรพลาดเมื่อมาเยือนเชียงราย
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
                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3">
                                        {attraction.highlight}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{attraction.name}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {attraction.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-700">
                                        <button className="text-thai-purple hover:text-purple-700 font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
                                            ดูรายละเอียด <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                                        </button>
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
                                src="/images/chiang-rai/wat-rong-khun-featured.jpg"
                                alt="วัดร่องขุ่น"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-thai-purple/10 text-thai-purple text-sm font-medium mb-6">
                                ไฮไลท์แนะนำ
                            </span>
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                วัดร่องขุ่น<br />
                                <span className="text-gradient-gold">มรดกศิลปะแห่งล้านนา</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                วัดร่องขุ่น หรือที่รู้จักกันในนาม "White Temple" เป็นผลงานศิลปะอันโดดเด่นของอาจารย์เฉลิมชัย โฆษิตพิพัฒน์
                                ศิลปินแห่งชาติ วัดแห่งนี้โดดเด่นด้วยสถาปัตยกรรมสีขาวบริสุทธิ์ที่สะท้อนความเป็นพุทธศิลป์ร่วมสมัย
                                ผสมผสานกับความเชื่อและจินตนาการอันไร้ขีดจำกัด
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-thai-purple/20 flex items-center justify-center text-thai-purple">✓</span>
                                    เปิดให้เข้าชมทุกวัน 06:30 - 18:00 น.
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-thai-purple/20 flex items-center justify-center text-thai-purple">✓</span>
                                    ค่าเข้าชม: คนไทย ฟรี / ชาวต่างชาติ 100 บาท
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="w-6 h-6 rounded-full bg-thai-purple/20 flex items-center justify-center text-thai-purple">✓</span>
                                    ที่จอดรถฟรี มีร้านอาหารและของที่ระลึก
                                </li>
                            </ul>
                            <Link
                                href="#"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-thai-purple hover:bg-purple-700 text-white font-bold transition-all transform hover:-translate-y-1 gap-2"
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
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-3xl mb-6">
                                ✈️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">การเดินทาง</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                บินตรงจากกรุงเทพฯ สู่สนามบินนานาชาติแม่ฟ้าหลวง ใช้เวลาประมาณ 1.5 ชั่วโมง
                                หรือเดินทางโดยรถยนต์ผ่านเส้นทางหมายเลข 1 ระยะทางประมาณ 830 กม.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-3xl mb-6">
                                🌤️
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">ช่วงเวลาที่เหมาะสม</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                เดือนพฤศจิกายน - กุมภาพันธ์ อากาศเย็นสบาย อุณหภูมิประมาณ 15-25°C
                                เหมาะแก่การท่องเที่ยวชมธรรมชาติและทะเลหมอก
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-3xl mb-6">
                                🍜
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">อาหารต้องลอง</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                ขนมจีนน้ำเงี้ยว ข้าวซอย หมูแก้วดอยแม่สลอง และชาอู่หลงจากไร่ชาบนดอย
                                รสชาติดั้งเดิมที่คุณจะหลงรัก
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Home */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">สนใจจังหวัดอื่นๆ?</h2>
                    <p className="text-purple-200 mb-8">กลับไปดูจังหวัดอื่นจากทั่วประเทศไทย</p>
                    <Link
                        href="/"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-white text-purple-700 font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 gap-2"
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
