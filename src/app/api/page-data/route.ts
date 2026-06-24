import { NextResponse } from "next/server";

const avatarList = [
  { image: "/WhatsApp Image 2026-06-24 at 4.55.23 PM.jpeg", title: "Set still" },
  { image: "/WhatsApp Image 2026-06-24 at 4.55.23 PM (1).jpeg", title: "Canon 200D shoot" },
  { image: "/images/WhatsApp Image 2026-06-24 at 4.57.36 PM.jpeg", title: "Production frame" },
  { image: "/images/WhatsApp Image 2026-06-24 at 4.57.36 .jpeg", title: "Behind the scenes" },
];

const brandList = [
  { image: "/images/Adobe_Premiere_Pro_CC_2026_icon.svg.png", darkImg: "/images/Adobe_Premiere_Pro_CC_2026_icon.svg.png", title: "Adobe Premiere Pro" },
  { image: "/images/ccanva.jpg", darkImg: "/images/ccanva.jpg", title: "Canva" },
  { image: "/images/meta-ads-manager-logo-hd.webp", darkImg: "/images/meta-ads-manager-logo-hd.webp", title: "Meta Ads Manager" },
  { title: "Google Workspace" },
  { image: "/images/camera-gear-chain-photography-logo-5ec56064-ed6b-402c-bc95-f1a3cacba668.png", darkImg: "/images/camera-gear-chain-photography-logo-5ec56064-ed6b-402c-bc95-f1a3cacba668.png", title: "Professional Camera Equipment" },
];

const innovationList = [
  { image: "/images/home/innovation/brand.svg", title: "Script\nWriting", bg_color: "bg-purple/20", txt_color: "text-purple" },
  { image: "/images/home/innovation/digitalmarketing.svg", title: "Performance\nCreatives", bg_color: "bg-blue/20", txt_color: "text-blue" },
  { image: "/images/home/innovation/uiux.svg", title: "Shoot\nDirection", bg_color: "bg-orange/20", txt_color: "text-orange" },
  { image: "/images/home/innovation/analitics.svg", title: "Editing &\nDelivery", bg_color: "bg-green/20", txt_color: "text-green" },
  { image: "/images/home/innovation/webdevp.svg", title: "Creative\nOperations", bg_color: "bg-pink/20", txt_color: "text-pink" },
];

const onlinePresenceList = [
  {
    image: "/WhatsApp Image 2026-06-24 at 4.55.23 PM.jpeg",
    video: "/HIRING AD(1.mp4",
    title: "Hiring Ad: 10k+ conversions",
    tag: ["Scripting", "Shoot", "Edit", "Performance Ad"],
    link: "https://drive.google.com/drive/folders/1fIrq5EtjpzRerq-iqMUk98BCX9ViYSuW",
    format: "reel",
  },
  {
    image: "/WhatsApp Image 2026-06-24 at 4.55.23 PM (1).jpeg",
    video: "/HR HIRING(2).mp4",
    title: "HR Hiring Campaign",
    tag: ["Concept", "Production", "Editing"],
    link: "https://drive.google.com/drive/folders/1fIrq5EtjpzRerq-iqMUk98BCX9ViYSuW",
    format: "reel",
  },
  {
    image: "/images/WhatsApp Image 2026-06-24 at 4.57.36 PM.jpeg",
    video: "/RM_VY_SKU233_5.mp4",
    title: "Retail Product Creative",
    tag: ["Product Video", "Ad Creative"],
    link: "https://www.instagram.com/reel/DVYk-N6EuYF/?igsh=MTMwcG5iajAxbXZ3dg==",
    format: "reel",
  },
  {
    image: "/images/home/onlinePresence/online_img_3.jpg",
    video: "/RM_VY_HAO_PENDANT_5.mp4",
    title: "Jewellery Performance Creative",
    tag: ["E-commerce", "UGC Style", "Edit"],
    link: "https://www.instagram.com/reel/DWeK2VDzfTs/?igsh=MTU4eWNzbWJvNGM2Ng==",
    format: "reel",
  },
  {
    image: "/images/home/onlinePresence/online_img_4.jpg",
    video: "/MANAGER HIRING.mp4",
    title: "Manager Hiring Ad",
    tag: ["Recruitment", "Campaign Variant"],
    link: "https://drive.google.com/drive/folders/1fIrq5EtjpzRerq-iqMUk98BCX9ViYSuW",
    wide: true,
    format: "wide",
  },
];

const creativeMindList = [
  { image: "/images/Adobe_Premiere_Pro_CC_2026_icon.svg.png", name: "Adobe Premiere Pro", position: "Primary editing tool for reels, ads, product videos, and campaign variants." },
  { image: "/images/meta-ads-manager-logo-hd.webp", name: "Meta Ads Manager", position: "Performance creative context for CTR, ROAS, conversion rate, and audience testing." },
  { image: "/images/ccanva.jpg", name: "Canva", position: "Static ads, promotional creatives, packaging concepts, and fast campaign assets." },
  { image: "/images/camera-gear-chain-photography-logo-5ec56064-ed6b-402c-bc95-f1a3cacba668.png", name: "Professional Camera Gear", position: "Shoot planning, camera operation, framing, and on-set production execution." },
];

const WebResultTagList = [
  { image: "/images/home/result/creativity.svg", name: "Creative Production", bg_color: "bg-purple/20", txt_color: "text-purple" },
  { image: "/images/home/result/innovation.svg", name: "Performance Strategy", bg_color: "bg-blue/20", txt_color: "text-blue" },
  { image: "/images/home/result/strategy.svg", name: "Fast Execution", bg_color: "bg-orange/20", txt_color: "text-orange" },
];

const startupPlanList = [
  {
    plan_bg_color: "bg-pale-yellow",
    text_color: "text-dark_black",
    descp_color: "dark_black/60",
    border_color: "border-dark_black/10",
    plan_name: "Campaign Creative Sprint",
    plan_descp: "For brands that need ad concepts, scripts, shoots, edits, and variants for active campaigns.",
    plan_price: "Project",
    icon_img: "/images/home/startupPlan/white_tick.svg",
    plan_feature: ["Ad concept ideation", "Script writing", "Shoot planning", "Video editing", "Static ad support", "Performance-focused variants"],
  },
  {
    plan_bg_color: "bg-purple_blue",
    text_color: "text-white",
    descp_color: "white/60",
    border_color: "border-white/10",
    plan_name: "Creative Production Lead",
    plan_descp: "For agencies or brands that need a hands-on lead to manage editors and high-volume creative delivery.",
    plan_price: "Role",
    icon_img: "/images/home/startupPlan/black_tick.svg",
    plan_feature: ["Team coordination", "Output review", "Creative workflows", "Meta and Google ad creatives", "Mentorship for editors", "Campaign delivery systems"],
  },
];

const faqList = [
  { faq_que: "What kind of work does Rishi specialize in?", faq_ans: "Performance marketing creatives, UGC-style ad videos, recruitment ads, product videos, scripting, shooting, editing, and campaign-ready creative variants." },
  { faq_que: "Which tools does he use?", faq_ans: "Adobe Premiere Pro, Canva, Meta Ads Manager, Google Workspace, and professional camera equipment." },
  { faq_que: "Has he led teams?", faq_ans: "Yes. At PixelLab Media, he coordinated a 7-member creative team, reviewed output, trained new editors, and managed delivery across multiple campaigns." },
  { faq_que: "What is his strongest result?", faq_ans: "A hiring ad campaign he scripted, shot, and edited generated 10k+ conversions in under six months, with 9-10 variations produced for testing." },
  { faq_que: "Where is he based?", faq_ans: "Rishi is based in Jaipur, Rajasthan and is available for creative production, content marketing, and performance creative roles." },
  { faq_que: "How can I contact him?", faq_ans: "Email rishimotwani295@gmail.com or message him on WhatsApp at +91 85299 90426." },
];

const achievementsList = [
  { icon: "/images/home/achievement/framer_award.svg", dark_icon: "/images/home/achievement/dark_framer_award.svg", sub_title: "PixelLab Media", title: "Associate Lead - Creative Production, managing end-to-end Meta and Google campaign creatives.", year: "2025-26", url: "https://wa.me/918529990426" },
  { icon: "/images/home/achievement/dribble_award.svg", dark_icon: "/images/home/achievement/dribble_award.svg", sub_title: "Campaign Output", title: "Produced 150+ ad creatives in a single campaign cycle for retail and marketplace brands.", year: "150+", url: "https://wa.me/918529990426" },
  { icon: "/images/home/achievement/awward_award.svg", dark_icon: "/images/home/achievement/dark_awward_award.svg", sub_title: "Hiring Ad", title: "Scripted, shot, edited, and iterated a high-performing hiring ad with 10k+ conversions.", year: "10k+", url: "https://drive.google.com/drive/folders/1fIrq5EtjpzRerq-iqMUk98BCX9ViYSuW" },
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
