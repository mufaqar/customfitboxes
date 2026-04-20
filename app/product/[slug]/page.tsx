import Faqs from "@/components/Home/Faqs";
import ScrollContent from "@/components/Home/ScrollContent";
import CTA from "@/components/products/CTA";
import Feature from "@/components/products/Feature";
import ProBanner from "@/components/products/ProBanner";
import RelatedPRoducts from "@/components/products/RelatedPRoducts";
import { notFound } from "next/navigation";

const products = [
    {
        slug: "corrugated-mailer-boxes",
        name: "Corrugated Mailer Boxes",
        price: 100,
        description: "Strong packaging box",
    },
    {
        slug: "box-2",
        name: "Corrugated Box 2",
        price: 150,
        description: "Heavy duty box",
    },
];

export default async function ProductPage({ params }: any) {
    const { slug } = await params;

    const product = products.find((p) => p.slug === slug);

    if (!product) return notFound();

    return (
        <main>
            <ProBanner data={product} />
            <Feature />
            <ScrollContent />
            <Faqs />
            <RelatedPRoducts />
            <CTA />
        </main>
    );
}