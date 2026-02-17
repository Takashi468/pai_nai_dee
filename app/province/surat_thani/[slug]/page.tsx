import { suratThaniAttractions } from "@/data/provinces/surat_thani";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface AttractionDetailProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return suratThaniAttractions.map((attraction) => ({
        slug: attraction.slug,
    }));
}

export default async function AttractionDetailPage(props: AttractionDetailProps) {
    const params = await props.params;
    const attraction = suratThaniAttractions.find((a) => a.slug === params.slug);

    if (!attraction) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black font-sans selection:bg-thai-blue selection:text-white">
            {/* Minimal Nav */}
            <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/province/surat_thani" className="text-white hover:text-thai-blue font-bold flex items-center gap-2 transition-colors">
                            ← ย้อนกลับ
                        </Link>
                        <Link href="/">
                            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-thai-blue to-cyan-300 drop-shadow-md tracking-tight cursor-pointer">
                                ไปไหนดี
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-block px-4 py-1 rounded-full bg-thai-blue text-white text-sm font-semibold">
                                {attraction.highlight}
                            </span>
                            {attraction.location && (
                                <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold">
                                    📍 {attraction.location}
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">{attraction.name}</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-xl -mt-24 relative z-10">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-thai-blue mb-6">รายละเอียด</h2>
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
                            {attraction.details}
                        </p>

                        {attraction.funnyCaption && (
                            <div className="mt-8 p-6 rounded-2xl bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-thai-blue">
                                <p className="text-base md:text-lg italic text-slate-700 dark:text-slate-300 text-center">
                                    "{attraction.funnyCaption}"
                                </p>
                            </div>
                        )}

                        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
                            <p className="text-slate-500 italic">
                                *ข้อมูลอาจมีการเปลี่ยนแปลง โปรดตรวจสอบก่อนการเดินทาง
                            </p>
                            <Link
                                href="/province/surat_thani"
                                className="px-8 py-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-900 dark:text-white font-semibold transition-colors"
                            >
                                ดูสถานที่อื่นๆ ในสุราษฎร์ธานี
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
