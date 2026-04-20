import Banner from "@/components/Category/Banner";
import CatProducts from "@/components/Category/CatProducts";
import HeadingSection from "@/components/Category/HeadingSection";
import InstantQuote from "@/components/Category/InstantQuote";
import Faqs from "@/components/Home/Faqs";
import ScrollContent from "@/components/Home/ScrollContent";
import { notFound } from "next/navigation";

const categories = [
    { slug: "corrugated-boxes", title: "Corrugated Boxes" },
    { slug: "fashion", title: "Fashion" },
];

export default async function CategoryPage({ params }: any) {
    const { slug } = await params; // ✅ FIX HERE

    const category = categories.find((cat) => cat.slug === slug);

    if (!category) return notFound();

    return (
        <main>
            <Banner data={category} />
            <InstantQuote />
            <HeadingSection />
            <CatProducts />
            <ScrollContent />
            <Faqs />
        </main>
    );
}