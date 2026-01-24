import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    href: "https://twitter.com/Ewave07",
    icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "mailto:iyayiemmanuel1@gmail.com",
    icon: MdEmail,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/osagie-iyayi-a277b21ab/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/E-wave112",
    icon: FaGithub,
    label: "GitHub",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white text-center py-8 mt-8">
      <hr className="border-slate-600 mb-6 mx-8" />

      <p className="text-gray-300 mb-6 px-4">
        Let&apos;s connect! Reach out for collaborations, questions, or just to
        say hi.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mb-8">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <social.icon className="w-7 h-7" />
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-600 pt-4 mx-8">
        <p className="text-gray-400">
          &copy; {currentYear} Copyright{" "}
          <Link
            href="#top"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Back to Top
          </Link>
        </p>
      </div>
    </footer>
  );
}
