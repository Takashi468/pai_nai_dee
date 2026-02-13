import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const regions = [
    {
      id: "north",
      name: "ภาคเหนือ",
      province: "น่าน",
      description: "เมืองเก่าที่มีชีวิต ท่ามกลางหุบเขาอันเงียบสงบ โดดเด่นด้วยวัฒนธรรม",
      color: "from-purple-500 to-indigo-600",
      image: "./images/nan/nan_page.jpg",
      url: "/province/nan",
    },
    {
      id: "central",
      name: "ภาคกลาง",
      province: "เพชรบุรี",
      description: "เที่ยวเมืองพริบพรี เพชรบุรีเมืองอาหารสร้างสรรค์",
      color: "from-amber-400 to-orange-500", // Gold theme
      image: "./images/Central_main.png",
      url: "#",
    },
    {
      id: "northeast",
      name: "ภาคตะวันออกเฉียงเหนือ",
      province: "หนองคาย",
      description: "มหาประตูสู่อินโดจีน ถิ่นวีรกรรมปราบฮ่อ หลวงพ่อพระใส",
      color: "from-orange-500 to-red-500",
      image: "./images/nong_khai/nong_khai_page.jpg",
      url: "/province/nong_khai",
    },
    {
      id: "east",
      name: "ภาคตะวันออก",
      province: "ชลบุรี",
      description: "ทะเลสวย น้ำใส ใกล้กรุง แหล่งรวมความบันเทิง",
      color: "from-blue-400 to-teal-400",
      image: "./images/East_main.png", // Reusing existing image
      url: "#",
    },
    {
      id: "west",
      name: "ภาคตะวันตก",
      province: "กาญจนบุรี",
      description: "ดินแดนแห่งประวัติศาสตร์ ธรรมชาติขุนเขา และสายน้ำ",
      color: "from-green-500 to-emerald-600",
      image: "./images/kanchanaburi/kanchanaburi_page.jpg",
      url: "/province/kanchanaburi",
    },
    {
      id: "south",
      name: "ภาคใต้",
      province: "สุราษฎร์ธานี",
      description: "หนีเมืองไปหาป่า หาเขา และเรา(เหล้า)",
      color: "from-blue-500 to-indigo-500", // Deep Blue theme
      image: "./images/surat_thani/surat_thani_page.jpg",
      url: "/province/surat_thani",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-800 dark:text-slate-100 font-sans selection:bg-thai-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-thai-gold to-yellow-300 drop-shadow-md tracking-tight">
                ไปไหนดี
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#" className="text-[#15173D] text-xl hover:text-thai-gold transition-colors duration-200 font-bold">หน้าแรก</Link>
                <Link href="#regions" className="text-[#15173D] text-xl hover:text-thai-purple transition-colors duration-200 font-bold">ภูมิภาค</Link>
                <Link href="#highlights" className="text-[#15173D] text-xl hover:text-thai-blue transition-colors duration-200 font-bold">ไฮไลท์</Link>
                <Link href="#contact" className="text-[#15173D] text-xl hover:text-thai-gold transition-colors duration-200 font-bold">ติดต่อ</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="./images/thailand.jpg"
          alt="ประเทศไทย"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-1"></div>

        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-thai-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob z-2"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-thai-gold rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 z-2"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-thai-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 z-2"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            ค้นพบความสวยงาม<span className="text-gradient-gold">ของไทย</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            เดินทางสู่ 6 ภาค 6 บรรยากาศ ที่คุณจะหลงรัก<br />
            เหนือ กลาง อีสาน ใต้ ครบจบในที่เดียว
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#regions"
              className="px-8 py-4 rounded-full bg-thai-gold hover:bg-yellow-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              เริ่มต้นการเดินทาง
            </Link>
            <Link
              href="#highlights"
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold text-lg transition-all"
            >
              ดูไฮไลท์แนะนำ
            </Link>
          </div>
        </div>
      </section>

      {/* Regions Showcase */}
      <section id="regions" className="py-24 bg-slate-50 dark:bg-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">เลือกภูมิภาคที่คุณสนใจ</h2>
            <div className="h-1 w-24 bg-linear-to-r from-thai-purple to-thai-blue mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">6 จังหวัดตัวแทนความภูมิใจจาก 6 ภาค</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <Link
                key={region.id}
                href={region.url}
                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer block"
              >
                {/* Background Image */}
                <Image
                  src={region.image}
                  alt={region.province}
                  fill
                  className="object-cover z-0 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${region.color} opacity-60 z-10 mix-blend-multiply group-hover:opacity-70 transition-opacity`}></div>
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/40 transition-colors"></div>

                <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
                  <span className="text-sm font-medium uppercase tracking-wider mb-2 opacity-90">{region.name}</span>
                  <h3 className="text-3xl font-bold mb-2">{region.province}</h3>
                  <p className="text-sm text-slate-100 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {region.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex items-center text-sm font-semibold text-thai-gold">
                    อ่านต่อ <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">สถานที่ยอดนิยม</h2>
              <p className="text-slate-600 dark:text-slate-400">จุดเช็คอินที่คุณไม่ควรพลาด</p>
            </div>
            <Link href="#" className="hidden md:block text-thai-purple font-semibold hover:text-thai-blue transition-colors">
              ดูทั้งหมด →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="./images/East_sup.png"
                alt="ทะเลบัวแดง อุดรธานี"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">ทะเลบัวแดง, อุดรธานี</h3>
                <p className="text-slate-300">ล่องเรือชมความงามแห่งบึงหนองหาน</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex-1 relative rounded-2xl overflow-hidden group shadow-lg">
                <Image
                  src="./images/North_sup.png"
                  alt="ดอยแม่สลอง เชียงราย"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">ดอยแม่สลอง, เชียงราย</h3>
                </div>
              </div>
              <div className="flex-1 relative rounded-2xl overflow-hidden group shadow-lg">
                <Image
                  src="./images/South_sup.png"
                  alt="เกาะหินงาม สตูล"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">เกาะหินงาม, สตูล</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-thai-purple via-thai-gold to-thai-blue"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-thai-gold to-yellow-300 drop-shadow-md tracking-tight">
                ไปไหนดี
              </span>
              <p className="mt-4 text-slate-400 max-w-sm">
                เว็บไซต์แนะนำสถานที่ท่องเที่ยวทั่วไทย รวบรวมข้อมูลครบจบในที่เดียว ให้การวางแผนเที่ยวของคุณง่ายและสนุกยิ่งขึ้น
              </p>
              <div className="mt-6 flex space-x-4">
                {/* Social Icons Placeholder */}
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-thai-purple transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-thai-blue transition-colors cursor-pointer">TW</div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-thai-gold transition-colors cursor-pointer">IG</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-thai-gold">ลิงก์ด่วน</h3>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">หน้าแรก</Link></li>
                <li><Link href="#regions" className="hover:text-white transition-colors">ภูมิภาค</Link></li>
                <li><Link href="#highlights" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">ติดต่อเรา</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-thai-blue">ติดต่อสอบถาม</h3>
              <ul className="space-y-3 text-slate-400">
                <li>โทร: 02-123-4567</li>
                <li>อีเมล: hello@painaidee.com</li>
                <li>ที่อยู่: กรุงเทพมหานคร, ประเทศไทย</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>&copy; 2026 Painaidee - ไปไหนดี. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
