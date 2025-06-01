import FooterSumary from "@/components/Sumary/FooterSumary";
import HeaderSumary from "@/components/Sumary/HeaderSumary";
import ListSumary from "@/components/Sumary/ListSumary";

export default function SumaryPage() {
  return (
    <div className="min-h-full ">
      <HeaderSumary />
      <ListSumary />
      <FooterSumary />
    </div>
  );
}
