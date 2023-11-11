import { features } from "./constants";
import FeatureCard from "../utils/FeatureCard";

const Features = () => {
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        {features.map((feature, key) => (
          <FeatureCard
            key={key}
            icon={feature.icon}
            title={feature.title}
            subtitle={feature.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
