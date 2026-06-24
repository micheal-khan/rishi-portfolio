import { NextResponse } from "next/server";

const headerData = [
  { label: "About", href: "/#aboutus" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/contact" },
];

const footerData = {
  brand: {
    name: "Rishi Motwani",
    tagline:
      "Creative Production Lead crafting performance-driven ad creatives from script and shoot to edit and campaign delivery.",
    socialLinks: [
      {
        icon: "/images/home/footerSocialIcon/linkedin.svg",
        dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
        link: "https://www.linkedin.com/in/rishi-motwani-a546302ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      },
      {
        icon: "/images/home/footerSocialIcon/instagram.svg",
        dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
        link: "https://www.instagram.com/rishii.mtwn?igsh=NmF1eG4xcm1kdTl4&utm_source=qr",
      },
    ],
  },
  sitemap: {
    name: "Sitemap",
    links: [
      { name: "Contact", url: "/contact" },
      { name: "About", url: "/#aboutus" },
      { name: "Work", url: "/#work" },
      { name: "Services", url: "/#services" },
      { name: "Experience", url: "/#experience" },
    ],
  },
  otherPages: {
    name: "Portfolio Links",
    links: [
      {
        name: "Hiring Ad Drive",
        url: "https://drive.google.com/drive/folders/1fIrq5EtjpzRerq-iqMUk98BCX9ViYSuW",
      },
      {
        name: "Instagram Reel 1",
        url: "https://www.instagram.com/reel/DVYk-N6EuYF/?igsh=MTMwcG5iajAxbXZ3dg==",
      },
      {
        name: "Instagram Reel 2",
        url: "https://www.instagram.com/reel/DWJgo6oEQI-/?igsh=MW4zZGd2czl5MWIyMw==",
      },
      {
        name: "Instagram Reel 3",
        url: "https://www.instagram.com/reel/DWeK2VDzfTs/?igsh=MTU4eWNzbWJvNGM2Ng==",
      },
    ],
  },
  contactDetails: {
    name: "Contact Details",
    address: "Jaipur, Rajasthan",
    email: "rishimotwani295@gmail.com",
    phone: "+91 85299 90426",
    whatsapp: "https://wa.me/918529990426",
  },
  copyright: "©2026 Rishi Motwani. All Rights Reserved",
};

export const GET = async () => {
  return NextResponse.json({
    headerData,
    footerData,
  });
};
