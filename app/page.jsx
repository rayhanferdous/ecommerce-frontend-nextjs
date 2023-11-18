import Categories from "@/components/index/Categories";
import Features from "@/components/index/Features";
import Hero from "@/components/index/Hero";
import NewArrival from "@/components/index/NewArrival";
import Recomanded from "@/components/index/Recomanded";
import Ads from "@/components/utils/Ads";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Categories />
      <NewArrival />
      <Ads />
      <Recomanded />
    </main>
  );
}
