import Discount1 from "../assets/imgs/Promos/Discount1.png";
import Discount2 from "../assets/imgs/Promos/Discount2.png";
import Discount3 from "../assets/imgs/Promos/Discount3.png";
import Button from "./Button";

const discounts = [
  { id: 1, image: Discount1, label: "10% Discount" },
  { id: 2, image: Discount2, label: "25% Discount" },
  { id: 3, image: Discount3, label: "50% Discount" },
];

export default function Promos() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-14 md:px-8 lg:px-12">
      <div className="flex flex-col gap-10 rounded-3xl bg-surface-light p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-10">

        <div className="mx-auto w-full max-w-[451px]">
          <div className="relative flex flex-col items-center pt-6">
            <div className="absolute top-0 z-20 w-fit rounded-lg bg-page-dark px-4 py-2 text-center text-[18px] font-extrabold text-headings-light sm:text-[24px]">
              JOIN THE
            </div>
            <div className="mt-6 flex w-fit items-center justify-center rounded-lg border-2 border-border-default bg-surface-card p-4 text-center text-[30px] font-black text-text-primary sm:text-[40px]">
              BUFF CLUB
            </div>
          </div>

          <p className="py-4 text-center text-[15px] text-text-secondary md:text-[20px]">
            Earn loyalty points with every order and
            enjoy member exclusive benefits!
          </p>

          <Button variant="primary" className="w-full p-4 text-[15px] font-black leading-5 sm:text-[16px]">
            CREATE ACCOUNT
          </Button>

          <div className="flex justify-center gap-2 pt-3 text-center">
            <span className="text-[14px] text-text-secondary md:text-[16px]">
              ALREADY A MEMBER?
            </span>
            <button type="button" className="font-semibold underline text-text-primary">
              LOGIN
            </button>
          </div>
        </div>

        <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:hidden">
          {discounts.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group flex shrink-0 snap-start justify-center"
            >
              <img
                className="w-[180px] rounded-2xl shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl sm:w-[220px]"
                src={item.image}
                alt={item.label}
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <div className="hidden grid-cols-1 gap-6 sm:grid lg:grid-cols-3">
          {discounts.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group flex justify-center"
            >
              <img
                className="w-full max-w-[220px] rounded-2xl shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
                src={item.image}
                alt={item.label}
                loading="lazy"
              />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
