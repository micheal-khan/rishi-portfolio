"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      <div className="flex items-center gap-2.5">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918529990426"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-purple_blue text-sm hover:bg-purple_blue/90 text-white px-4 py-2.5 leading-none rounded-lg font-medium text-nowrap"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2C6.58 2 2.13 6.44 2.13 11.9c0 1.99.52 3.94 1.5 5.67L2 22l4.55-1.59a9.82 9.82 0 0 0 5.49 1.68h.01c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2z" />
          </svg>
          Chat on WhatsApp
        </a>

        {/* Scroll To Top Button */}
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-purple_blue text-white shadow-md transition hover:bg-dark"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          </div>
        )}
      </div>
    </div>
  );
}
