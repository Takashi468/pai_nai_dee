import { StaticImageData } from "next/image";
import suratThaniImg from "@/public/images/surat_thani/surat_thani.jpg";
import kohSamuiImg from "@/public/images/surat_thani/koh_samui.jpg";
import bhawanathamKhaoNaNaiLuangImg from "@/public/images/surat_thani/bhawanatham_khao_na_nai_luang.jpg";
import namTokMueangThuatImg from "@/public/images/surat_thani/nam_tok_mueang_thuat.jpg";
import namTokDatFaImg from "@/public/images/surat_thani/nam_tok_dat_fa.jpg";
import banNamRadHeadwatersImg from "@/public/images/surat_thani/ban_nam_rad_headwaters.jpg";
import watPhraBorommathatChaiyaImg from "@/public/images/surat_thani/wat_phra_borommathat_chaiya.jpg";
import theLibraryImg from "@/public/images/surat_thani/the_library_surat_thani.jpg";

export interface Attraction {
  id: number;
  slug: string;
  name: string;
  description: string;
  highlight: string;
  image: StaticImageData | string;
  details: string;
}

export const suratThaniAttractions: Attraction[] = [
  {
    id: 1,
    slug: "bhawanatham-khao-na-nai-luang",
    name: "อุทยานธรรมเขานาในหลวง",
    description:
      "สัมผัสความงามที่เหมือนหลุดออกมาจากวรรณคดี เจดีย์พุทธศิลาวดีบนยอดเขาที่ล้อมรอบด้วยไอหมอก",
    highlight: "เจดีย์ลอยฟ้า",
    image: bhawanathamKhaoNaNaiLuangImg, // Placeholder
    details: `สถานที่ปฏิบัติธรรมสุดอันซีนที่ขึ้นชื่อเรื่อง "ซุ้มประตูพุทธาวดี" หรือประตูแห่งกาลเวลา ไฮไลท์คือช่วงเช้าที่แสงอาทิตย์จะส่องลอดผ่านซุ้มประตูพอดี เป็นภาพที่งดงามราวกับสวรรค์บนดิน นอกจากนี้บนยอดเขายังมีเจดีย์พุทธศิลาวดีที่บรรจุพระบรมสารีริกธาตุให้ได้ขึ้นไปสักการะพร้อมชมวิวหมอกแบบ 360 องศา`,
  },
  {
    id: 2,
    slug: "nam-tok-mueang-thuat",
    name: "น้ำตกเหมืองทวด",
    description:
      "น้ำตก 7 ชั้นที่ซ่อนตัวอยู่ในป่าลึก บรรยากาศเงียบสงบเหมือนมีน้ำตกส่วนตัวหลังบ้าน",
    highlight: "น้ำตก 7 ชั้นกลางป่า",
    image: namTokMueangThuatImg, // Placeholder
    details: `น้ำตกเหมืองทวด ตั้งอยู่ในอุทยานแห่งชาติใต้ร่มเย็น เป็นน้ำตกที่มีความสวยงามและอุดมสมบูรณ์ มีทั้งหมด 7 ชั้น แต่ละชั้นมีความสวยงามแตกต่างกันไป บรรยากาศเงียบสงบ ร่มรื่น เหมาะแก่การพักผ่อนและเล่นน้ำ ช่วงเวลาที่เหมาะสมที่สุดในการท่องเที่ยวคือช่วงปลายฝนต้นหนาว`,
  },
  {
    id: 3,
    slug: "nam-tok-dat-fa",
    name: "น้ำตกดาดฟ้า",
    description:
      'ยิ่งใหญ่สมชื่อ "ดาดฟ้า" หน้าผาสูงชันที่มีสายน้ำทิ้งตัวลงมาอย่างสง่างาม',
    highlight: "น้ำตกที่สูงที่สุดในสุราษฎร์ฯ",
    image: namTokDatFaImg, // Placeholder
    details: `น้ำตกที่ขึ้นชื่อว่าสูงและใหญ่ที่สุดในจังหวัดสุราษฎร์ธานี โดยเฉพาะชั้นที่ 8 ที่สายน้ำจะทิ้งตัวลงจากหน้าผาสูงชันเกือบ 80 เมตร ลงสู่แอ่งน้ำเบื้องล่างจนเกิดเป็นละอองน้ำฟุ้งกระจายไปทั่วบริเวณ ระหว่างทางเดินขึ้นน้ำตกคุณจะได้สัมผัสกับความอุดมสมบูรณ์ของป่าดิบชื้นที่เป็นแหล่งต้นน้ำสำคัญของชาวนาสาร`,
  },
  {
    id: 4,
    slug: "ban-nam-rad-headwaters",
    name: "ป่าต้นน้ำ บ้านน้ำราด",
    description:
      "พายเรือคายัคในน้ำใสสีมรกต มองเห็นทรายและรากไม้ใต้พื้นน้ำได้อย่างชัดเจน",
    highlight: "สระมรกตกลางป่า",
    image: banNamRadHeadwatersImg, // Placeholder
    details: `สระน้ำธรรมชาติที่ใสราวกับกระจกกลางป่าพรุ จนมองเห็นพื้นทรายและรากไม้ด้านล่างได้อย่างชัดเจนด้วยตาเปล่า ที่นี่เป็นแหล่งท่องเที่ยวเชิงอนุรักษ์ที่ไม่อนุญาตให้ใช้สบู่หรือแชมพูเพื่อรักษาความบริสุทธิ์ของน้ำ กิจกรรมยอดฮิตคือการลงเล่นน้ำเย็นฉ่ำและการพายเรือคายัคชมความงามของธรรมชาติที่ยังคงความสมบูรณ์แบบดั้งเดิม`,
  },
  {
    id: 5,
    slug: "wat-phra-borommathat-chaiya",
    name: "วัดพระบรมธาตุไชยาราชวรวิหาร",
    description:
      "ไหว้พระบรมธาตุศักดิ์สิทธิ์ สัมผัสความงดงามของศิลปะโบราณที่สืบทอดมานับพันปี",
    highlight: "พุทธศิลป์ศรีวิชัย",
    image: watPhraBorommathatChaiyaImg, // Placeholder
    details: `ปูชนียสถานสำคัญคู่บ้านคู่เมืองที่เป็นสัญลักษณ์ของจังหวัดสุราษฎร์ธานี โดดเด่นด้วยองค์เจดีย์ศิลปะศรีวิชัยที่สมบูรณ์ที่สุดในประเทศไทย บริเวณรอบองค์พระธาตุล้อมรอบด้วยวิหารคดที่มีพระพุทธรูปโบราณประดิษฐานอยู่มากมาย เป็นสถานที่ที่ให้ความรู้สึกสงบ เย็นใจ และเปี่ยมไปด้วยพลังแห่งศรัทธาที่สืบทอดมานับพันปี`,
  },
  {
    id: 6,
    slug: "the-library-surat-thani",
    name: "The Library Surat Thani",
    description:
      "ร้านดังระดับตำนานที่สายตื๊ดต้องรู้จัก ดนตรีสดดีมาก บรรยากาศกึ่งผับกึ่งบาร์",
    highlight: "จุดเช็คอินยามค่ำคืน",
    image: theLibraryImg, // Placeholder
    details: `สุราษฎร์ธานีไม่ได้มีดีแค่เขื่อนเชี่ยวหลาน แต่กลางคืนในตัวเมืองก็คึกคักไม่แพ้กัน แนะนำให้เริ่มสตาร์ทแถวริมน้ำตาปีเพื่อเอาบรรยากาศก่อน แล้วค่อยขยับไปร้านที่มีดนตรีสดแถวตลาดใหม่หรือแถวห้างเซ็นทรัลฯ ครับ ที่สำคัญคือช่วงวันศุกร์-เสาร์ ร้านดังๆ คนจะแน่นมาก ถ้าไม่อยากยืนถือแก้วเคว้งคว้าง`,
  },
];
