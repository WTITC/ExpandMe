import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PlaceholderProps {
  title: string;
}

const Placeholder = ({ title }: PlaceholderProps) => {
  return (
    <Layout>
      <section className="py-20 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
            Content coming soon. Stay tuned for updates about {title}.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Placeholder;
