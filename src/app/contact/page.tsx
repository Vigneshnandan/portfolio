import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vignesh N for internships, collaborations, and full-time roles.",
};

export default function ContactPage() {
  return <ContactClient />;
}
