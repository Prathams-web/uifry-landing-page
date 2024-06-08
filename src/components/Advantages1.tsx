import Image from 'next/image';
import { FC } from 'react';

const Advantages1: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex flex-col justify-center py-8 px-7 lg:pl-32 lg:pr-24">
        <h3 className="text-2xl text-customRed tracking-wider">ADVANTAGES</h3>
        <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">Why Choose Uifry?</h1>
        <div className="flex flex-col mt-4">
          <div className="flex items-center">
            <Image src="/assets/icons/advantageslogo1.svg" alt="Notification Icon" width={40} height={40} />
            <h2 className="ml-2 text-xl font-bold">Clever Notifications</h2>
          </div>
          <p className="mt-3 text-gray-600">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Leotus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <Image src="/assets/images/advantages1.svg" alt="App Screenshot" layout="responsive" width={600} height={600} />
      </div>
    </div>
  );
};

export default Advantages1;