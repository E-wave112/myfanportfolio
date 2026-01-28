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
    <footer className="mt-8 bg-slate-800 py-8 text-center text-white">
      <hr className="mx-8 mb-6 border-slate-600" />

      <p className="mb-6 px-4 text-gray-300">
        Let&apos;s connect! Reach out for collaborations, questions, or just to
        say hi.
      </p>

      {/* Social Icons */}
      <div className="mb-8 flex justify-center gap-8">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-gray-300 transition-all duration-300 hover:scale-110 hover:text-white"
          >
            <social.icon className="h-7 w-7" />
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <div className="mx-8 border-t border-slate-600 pt-4">
        <p className="text-gray-400">
          &copy; {currentYear} Copyright{" "}
          <Link
            href="#top"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Back to Top
          </Link>
        </p>
      </div>
    </footer>
  );
}
