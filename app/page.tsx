import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import ReferenceCard from "@/app/components/ReferenceCard";
import Footer from "@/app/components/Footer";
import { websiteReferences, categories } from "@/app/data/references";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        
        <div className="mx-auto w-full max-w-[1400px] px-[24px] md:px-[40px] lg:px-[64px]">
          {categories.map((category) => {
            const categorySites = websiteReferences.filter(
              (ref) => ref.category === category.name
            );

            return (
              <section 
                key={category.id} 
                id={category.id} 
                className="pt-[80px] pb-[100px] border-t border-black/5"
              >
                <div className="mb-[36px]">
                  <h2 
                    className="font-medium text-foreground"
                    style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-0.035em", lineHeight: 1 }}
                  >
                    {category.name}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                  {categorySites.map((site, index) => (
                    <ReferenceCard
                      key={site.url}
                      name={site.name}
                      url={site.url}
                      category={site.category}
                      image={site.image}
                      index={index + 1}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
