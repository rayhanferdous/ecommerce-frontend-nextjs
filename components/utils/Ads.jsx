import Image from "next/image";
import Link from "next/link";

const Ads = () => {
  return (
    <div className="container pb-16">
      <Link href="/#">
        <Image
          width={4672}
          height={1124}
          src="/assets/images/offer.jpg"
          alt="ads"
          className="w-full"
        />
      </Link>
    </div>
  );
};

export default Ads;
