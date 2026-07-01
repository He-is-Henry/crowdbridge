import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CrowdBridge | Student Mobilization & Campus Publicity by Arogbodo Motunrayo',
  description:
    'CrowdBridge connects brands and event organizers to real, engaged student audiences across Lagos campuses, from awareness to turnout. By Arogbodo Motunrayo.',
  keywords: [
    'CrowdBridge',
    'Arogbodo Motunrayo',
    'student mobilization Lagos',
    'campus publicity',
    'event promotion Nigeria',
  ],
  openGraph: {
    title: 'CrowdBridge | Student Mobilization & Campus Publicity',
    description:
      'We bring the crowd. CrowdBridge connects brands to real student audiences across campuses.',
    type: 'website',
  },
  icons: {
    icon: '/crowdbridge_logo.png'
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
