import { Helmet } from "react-helmet-async";
import { PlansSection } from "@/components/plans/PlansSection";

const Plans = () => {
  return (
    <>
      <Helmet>
        <title>WEPLIX Plans – Free & Premium Streaming Options</title>
        <meta name="description" content="Choose your WEPLIX plan. Start free with ads or upgrade to premium for ad-free streaming, 4K quality, and unlimited access." />
        <link rel="canonical" href={window.location.origin + "/plans"} />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="pt-8">
          <PlansSection />
        </div>
      </main>
    </>
  );
};

export default Plans;