import TopCards from "@/components/TopCards/TopCards";
import BarChart from "@/components/BarChart/BarChart";
import Card from "@/components/Card/Card";
import Invest from "/public/images/invest.svg"
import Image from "next/image";
import styles from './page.module.css'
export default function Dashboard() {
  return (
    <>
    <div className={styles.chart_transaction}>
      <Card />
      <TopCards />
    </div>
      <div className={styles.chart_transaction}>
        <BarChart />
        <Image src={Invest} alt='st' />
      </div>
      
    </>
  );
  }