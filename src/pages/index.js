import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>The NEW Amazon</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
      <Sidebar />
      <main className="max-w-screen-2xl">
        <Banner />
        <ProductFeed products={products} />
      </main>
      {/* ---- ---- */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then(
      (res) => res.json()
    );

  return {
    props: {
      products,
    }
  }
}
