import type { Metadata } from "next";
import CertificationsClient from "./CertificationsClient";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Certificates, course completions, and event participations earned by Vignesh N.",
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}
