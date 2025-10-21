import {
  PageName,
  ParagraphWrapper,
  SectionWrapper,
  SectionHeading,
} from "@/components/common";
import Layout from "@/components/Layout";

const Attic = () => {
  return (
    <Layout>
      <SectionWrapper>
        <div className="space-y-6">
          <PageName label="My Brain Attic" />
          <ParagraphWrapper>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to my brain attic—a curated collection of notes, code
              snippets, references, and learnings that I frequently revisit.
              Think of it as my digital second brain where I store insights,
              solutions, and knowledge that have proven valuable over time.
            </p>
          </ParagraphWrapper>
        </div>
      </SectionWrapper>

      {/* Notes Section */}
      <SectionWrapper>
        <SectionHeading heading="📝 Notes" />
        <ParagraphWrapper>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Key concepts, learnings, and insights from my journey in
              technology and research.
            </p>
            {/* Add your notes content here */}
            <div className="border-l-4 border-primary/50 pl-4 py-2 bg-muted/30 rounded-r">
              <p className="text-sm italic">
                Coming soon: Notes on machine learning, system design, and
                software architecture
              </p>
            </div>
          </div>
        </ParagraphWrapper>
      </SectionWrapper>

      {/* Code Snippets Section */}
      <SectionWrapper>
        <SectionHeading heading="💻 Code Snippets" />
        <ParagraphWrapper>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Reusable code patterns and solutions I've found helpful.
            </p>
            {/* Add your code snippets here */}
            <div className="border-l-4 border-primary/50 pl-4 py-2 bg-muted/30 rounded-r">
              <p className="text-sm italic">
                Coming soon: Useful algorithms, utilities, and design patterns
              </p>
            </div>
          </div>
        </ParagraphWrapper>
      </SectionWrapper>

      {/* References Section */}
      <SectionWrapper>
        <SectionHeading heading="🔖 References" />
        <ParagraphWrapper>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Papers, articles, books, and resources I frequently reference.
            </p>
            {/* Add your references here */}
            <div className="border-l-4 border-primary/50 pl-4 py-2 bg-muted/30 rounded-r">
              <p className="text-sm italic">
                Coming soon: Curated list of must-read papers and essential
                resources
              </p>
            </div>
          </div>
        </ParagraphWrapper>
      </SectionWrapper>

      {/* Quick Links Section */}
      <SectionWrapper>
        <SectionHeading heading="🔗 Quick Links" />
        <ParagraphWrapper>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Tools, libraries, and resources I use regularly.
            </p>
            {/* Add your quick links here */}
            <div className="border-l-4 border-primary/50 pl-4 py-2 bg-muted/30 rounded-r">
              <p className="text-sm italic">
                Coming soon: Essential tools and favorite resources
              </p>
            </div>
          </div>
        </ParagraphWrapper>
      </SectionWrapper>
    </Layout>
  );
};

export default Attic;
