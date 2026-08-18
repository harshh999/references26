import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import CategoryNav from "@/app/components/CategoryNav";
import CategoryTransition from "@/app/components/CategoryTransition";
import ReferenceCard from "@/app/components/ReferenceCard";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import { websiteReferences } from "@/app/data/references";

const chapters = [
  {
    id: "chapter-01",
    number: "01",
    name: "SOFT DRINKS & FUNCTIONAL BEVERAGES",
    workCount: "04 SELECTED WORK",
    categoryName: "Soft Drinks & Functional Beverages",
  },
  {
    id: "chapter-02",
    number: "02",
    name: "WINE",
    workCount: "03 SELECTED WORK",
    categoryName: "Wine",
  },
  {
    id: "chapter-03",
    number: "03",
    name: "ALCOHOL & BEVERAGE RETAIL",
    workCount: "03 SELECTED WORK",
    categoryName: "Alcohol & Beverage Retail",
  },
  {
    id: "chapter-04",
    number: "04",
    name: "BEER",
    workCount: "02 SELECTED WORK",
    categoryName: "Beer",
  },
  {
    id: "chapter-05",
    number: "05",
    name: "COFFEE",
    workCount: "05 SELECTED WORK",
    categoryName: "Coffee",
  },
  {
    id: "chapter-06",
    number: "06",
    name: "FOOD BRANDS & SAUCES",
    workCount: "01 SELECTED WORK",
    categoryName: "Food Brands & Sauces",
  },
  {
    id: "chapter-07",
    number: "07",
    name: "RESTAURANTS",
    workCount: "01 SELECTED WORK",
    categoryName: "Restaurants",
  },
  {
    id: "chapter-08",
    number: "08",
    name: "HOTELS & RESORTS",
    workCount: "08 SELECTED WORK",
    categoryName: "Hotels & Resorts",
  },
  {
    id: "chapter-09",
    number: "09",
    name: "LUXURY STAYS & VILLAS",
    workCount: "01 SELECTED WORK",
    categoryName: "Luxury Stays & Villas",
  },
  {
    id: "chapter-10",
    number: "10",
    name: "TRAVEL & TOURISM",
    workCount: "02 SELECTED WORK",
    categoryName: "Travel & Tourism",
  },
  {
    id: "chapter-11",
    number: "11",
    name: "CLUBS & HOSPITALITY",
    workCount: "02 SELECTED WORK",
    categoryName: "Restaurants & Clubs / Hospitality Industry",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Sticky category navigation */}
        <CategoryNav />

        {/* Chapters */}
        {chapters.map((chapter) => {
          const chapterSites = websiteReferences.filter(
            (ref) => ref.category === chapter.categoryName
          );

          return (
            <div key={chapter.id} className="w-full bg-[#e8e6e1]">
              {/* Massive Bold Category Transition */}
              <CategoryTransition
                id={chapter.id}
                number={chapter.number}
                name={chapter.name}
                workCount={chapter.workCount}
              />

              {/* Gallery Section */}
              <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-7 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 items-start">
                  {chapterSites.map((site, index) => {
                    const cardIndex = index + 1;
                    
                    // Dynamic visual variants based on chapter and index
                    let variant: "feature" | "standard" | "mini" = "standard";
                    const isFirst = cardIndex === 1;
                    const isSecond = cardIndex === 2;
                    const isThird = cardIndex === 3;
                    
                    const chapterCycle = parseInt(chapter.number) % 3;
                    if (chapterCycle === 1) {
                      variant = isFirst ? "feature" : isSecond ? "standard" : "mini";
                    } else if (chapterCycle === 2) {
                      variant = isThird ? "feature" : isFirst ? "standard" : "mini";
                    } else {
                      variant = isFirst ? "standard" : isSecond ? "feature" : "mini";
                    }

                    // Special crop override for 1-item sections
                    if (chapterSites.length === 1) {
                      variant = "feature";
                    }

                    return (
                      <ReferenceCard
                        key={site.url}
                        name={site.name}
                        url={site.url}
                        category={site.category}
                        image={site.image}
                        index={cardIndex}
                        variant={variant}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {/* Contact */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
