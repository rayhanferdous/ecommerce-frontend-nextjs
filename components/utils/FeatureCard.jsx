import Image from "next/image";

const FeatureCard = ({ icon, title, subtitle }) => {
  return (
    <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
      <Image
        width={48}
        height={48}
        src={icon}
        alt="Delivery"
        className="w-12 h-12 object-contain"
      />
      <div>
        <h4 className="font-medium capitalize text-lg">{title}</h4>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
