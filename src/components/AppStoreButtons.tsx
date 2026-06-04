import iOSDownload from "../assets/imgs/BBApp/iOSDownload.svg"
import AndroidDownload from "../assets/imgs/BBApp/AndroidDownload.svg"

interface AppStoreButtonsProps {
  layout?: "vertical" | "horizontal"
  className?: string
}

export default function AppStoreButtons({ layout = "vertical", className = "" }: AppStoreButtonsProps) {
  return (
    <div className={`flex ${layout === "vertical" ? "flex-col gap-3" : "flex-row gap-4"} ${className}`}>
      <img
        src={iOSDownload}
        alt="Download on the App Store"
        className="h-[52px] w-[150px] cursor-pointer object-contain transition hover:scale-105 sm:h-[60px]"
        loading="lazy"
      />
      <img
        src={AndroidDownload}
        alt="Get it on Google Play"
        className="h-[52px] w-[150px] cursor-pointer object-contain transition hover:scale-105 sm:h-[60px]"
        loading="lazy"
      />
    </div>
  )
}
