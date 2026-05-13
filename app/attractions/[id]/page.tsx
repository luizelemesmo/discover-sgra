import { notFound } from "next/navigation";
import { getAttractionById, attractions } from "@/data/attractions";
import AttractionDetail from "./AttractionDetail";

export async function generateStaticParams() {
  return attractions.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const attraction = getAttractionById(id);
  if (!attraction) return { title: "Não encontrado" };
  return {
    title: `${attraction.title} — Discover SGRA`,
    description: attraction.shortDescription,
  };
}

export default async function AttractionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const attraction = getAttractionById(id);
  if (!attraction) notFound();
  return <AttractionDetail attraction={attraction} />;
}
