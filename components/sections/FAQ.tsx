import { cn } from "@/lib/utils";

interface FAQProps {
  title: string;
  description?: string;
  faqs: {
    id: string;
    question: string;
    answer: string;
  }[];
  className?: string;
}

export default function FAQ({ title, description, faqs, className }: FAQProps) {
  return (
    <section 
      className={cn(
        "py-16 px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto",
        className
      )}
      aria-labelledby="faq-heading"
    >
      <div className="text-center mb-12">
        <h2 
          id="faq-heading"
          className="text-3xl font-bold mb-4 text-foreground"
        >
          {title}
        </h2>
        
        {description && (
          <p className="text-foreground/80 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      <div 
        className="space-y-6"
        itemScope 
        itemType="https://schema.org/FAQPage"
      >
        {faqs.map((faq) => (
          <article 
            key={faq.id}
            className="rounded-lg border bg-card text-card-foreground p-6 
              hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-in-out
              cursor-pointer"
            itemScope 
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3 
              className="text-lg font-semibold mb-3 text-foreground"
              itemProp="name"
            >
              {faq.question}
            </h3>
            <div 
              itemScope 
              itemProp="acceptedAnswer" 
              itemType="https://schema.org/Answer"
              className="prose prose-sm max-w-none"
            >
              <div 
                className="text-foreground/80 leading-relaxed"
                itemProp="text"
              >
                {faq.answer}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
