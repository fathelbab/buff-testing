import Discount1 from "../assets/imgs/Promos/Discount1.png";
import Discount2 from "../assets/imgs/Promos/Discount2.png";
import Discount3 from "../assets/imgs/Promos/Discount3.png";

const discounts = [
  { image: Discount1, label: "10% Discount" },
  { image: Discount2, label: "25% Discount" },
  { image: Discount3, label: "50% Discount" },
];

export default function Promos() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-14 md:px-8 lg:px-12">

      {/* MAIN CONTAINER */}
      <div className="flex flex-col gap-10 rounded-3xl bg-surface-light p-6 lg:flex-row lg:items-center lg:justify-between lg:p-10">

        {/* LEFT SIDE */}
        <div className="mx-auto w-full max-w-[451px]">

          {/* TITLE */}
          <div className="relative flex flex-col items-center pt-6">

            {/* TOP LABEL */}
            <div className="absolute top-0 z-20 w-fit rounded-lg bg-[#1A1A1A] px-4 py-2 text-center font-extrabold text-white text-[24px] md:">
              JOIN THE
            </div>

            {/* MAIN CARD */}
            <div className="mt-6 flex w-fit items-center justify-center rounded-lg border-2 border-[#E8E8E8] bg-[#FAFAFA] p-4 text-center font-black text-[#151515] text-[40px]">
              BUFF CLUB
            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="py-4 text-center text-[16px] md:text-[20px]">
            Earn loyalty points with every order and
            enjoy member exclusive benefits!
          </div>

          {/* BUTTON */}
          <a href="">
            <div className="flex items-center justify-center rounded-lg bg-surface-brand p-4 text-center text-[16px] font-black leading-5 text-[#FAFAFA] transition hover:bg-orange-700">
              CREATE ACCOUNT
            </div>
          </a>

          {/* LOGIN */}
          <div className="flex justify-center gap-2 pt-3 text-center">
            <div className="text-[14px] text-[#3A3A3A] md:text-[16px]">
              ALREADY A MEMBER?
            </div>

            <a href="">
              <div className="font-semibold underline">
                LOGIN
              </div>
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {discounts.map((item) => (
            <a
              key={item.label}
              href={item.label}
              className="group flex justify-center"
            >
              <img
                className="w-full max-w-[220px] rounded-2xl shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
                src={item.image}
                alt={item.label}
              />
            </a>
          ))}

        </div>

      </div>

    </div>
  );
}