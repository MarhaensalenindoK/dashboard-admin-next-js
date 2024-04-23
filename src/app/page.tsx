import Image from "next/image";
import ShortInformation from "@/app/components/Card/ShortInformation/page"
import BarChart from "@/app/components/Chart/Bar/page"
import UserCard from "@/app/components/Card/User/page"

export default function Home() {
  return (
    <>
      <div className="container p-10 flex gap-3">
          {/* Main Content */}
          <div className="w-3/4 grid grid-cols-1 gap-4">
            {/* Short Information Grid */}
            <div className="grid grid-cols-4 gap-4">
              <ShortInformation title="128" subTitle="New Order" href="/" className="w-full" />
              <ShortInformation title="52" subTitle="New Users" href="/" className="" />
              <ShortInformation title="23" subTitle="Bounce Rate" href="/" className="" />
              <ShortInformation title="22" subTitle="Unique Visitor" href="/" className="" />
            </div>

            {/* Chart */}
            <div className="w-full bg-white">
              <BarChart titleSeries="Monthly Sales" dataSeries={[30,40,50,45,90,60, 110, 100, 70, 90, 110, 200]} categories={ ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}  />
            </div>
          </div>

          {/* Side Content */}
          <div className="w-1/4">
            <div>
              <UserCard photo="/profile.jpg" name="Marhaensalenindo Komara" username="marhaensa" />
            </div>
          </div>
      </div>
    </>
  );
}
