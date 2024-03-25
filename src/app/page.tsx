import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";

export default function Home() {


  return (
    <>
      <div className="flex flex-col h-[100vh] px-6 py-7 justify-between relative z-10">
        <Header />
        <Banner />
        <Footer />
      </div>
    </>
  );
}
