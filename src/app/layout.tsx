import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {


  viewport: "width=device-width, initial-scale=1.0",
  title: "Belunno - Embutidos de Qualidade, Sabor e Tradição",
  description: "Descubra os embutidos suínos de alta qualidade da Belunno, desenvolvidos para os consumidores mais exigentes. Líder no Norte do Brasil, oferecemos uma linha completa de produtos para churrasco, restaurantes e atacado. Saiba mais sobre nossas ofertas e condições especiais.",
  keywords: 'Embutidos de Carne Suína, Qualidade, Tradição, SIF, Segurança Alimentar, Produção Sustentável, Produtos Certificados, Belunno, Embutido cozido de suíno, linguiça toscana,linguiça para churrasco, linguiça fininha,linguiça toscana apimentada, calabresa, lombo suino, salaminho, copa defumadaBelunno embutidos suínos,Linguiça Toscana Belunno,Linguiça Apimentada Belunno,Embutidos Belunno para churrasco,Embutidos suínos no Norte do Brasil,Distribuição de embutidos no Pará,Linguiça para churrasco Belunno,Fornecedores de embutidos no Maranhão,Produtos suínos Belunno,Distribuição de embutidos no Nordeste,Linguiça Calabresa Belunno,Embutidos artesanais Belunno,Linguiça Fininha Belunno,Carne suína embutida Belunno,Parcerias comerciais com a Belunno,Linguiça para atacado,Embutidos para restaurantes Belunno,Qualidade em embutidos Belunno,Distribuição de embutidos Belunno,Embutidos no Piauí,Linguiça Toscana tradicional Belunno,Embutidos regionais do Norte,Fornecedores de carne suína Maranhão,Comércio de embutidos Belunno,Parcerias de distribuição Belunno,Linguiça para atacadistas no Brasil,Linguiça suína para negócios Belunno,Belunno no mercado de embutidos,Melhores embutidos para churrasco,Embutidos suínos no Pará,Embutidos Belunno para distribuidores,Produtos de carne suína Belunno ,Distribuição de linguiça Toscana no Norte,Produtos suínos no Norte do Brasil,Linguiça para pizzarias Belunno,Carne suína do Pará Belunno,Melhores embutidos do Maranhão,Embutidos suínos para bares,Fornecedores de embutidos artesanais,Embutidos Belunno no Nordeste,Linguiça apimentada para negócios,Belunno distribuição no Piauí,Embutidos de alta qualidade Belunno,Comercialização de embutidos no Norte,Parcerias B2B Belunno,Embutidos Belunno Maranhão e Pará,Distribuição de linguiça suína Belunno,Linguiça para churrascarias Belunno,Fornecedor de linguiça Toscana no Nordeste,Produtos suínos para atacadistas Belunno',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    url: "https://belunno.com.br",
    title: "BBelunno - Embutidos de Qualidade, Sabor e Tradição",
    description: "Descubra os embutidos suínos de alta qualidade da Belunno, desenvolvidos para os consumidores mais exigentes. Líder no Norte do Brasil, oferecemos uma linha completa de produtos para churrasco, restaurantes e atacado. Saiba mais sobre nossas ofertas e condições especiais.",
    siteName: "Belunno",
    images: [{
      url: "/images/pig2.png",
      alt: "Belunno - Qualidade, Sabor e Tradição"
    }],
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    site: "@belunno",
    creator: "@belunno",
    title: "Belunno - Embutidos de Qualidade, Sabor e Tradição",
    description: "Descubra os embutidos suínos de alta qualidade da Belunno, desenvolvidos para os consumidores mais exigentes. Líder no Norte do Brasil, oferecemos uma linha completa de produtos para churrasco, restaurantes e atacado. Saiba mais sobre nossas ofertas e condições especiais.",
    images: [{
      url: "/images/pig2.png",
      alt: "Belunno – Embutidos de Qualidade, Sabor e Tradição"
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="4vCX5en3nb8Pf8M-4yciBhRw_ud-KelPM8_XP1jFFHE" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
