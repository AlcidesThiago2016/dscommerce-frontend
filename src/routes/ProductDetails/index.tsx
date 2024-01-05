import './styles.css'
import BottonInverse from "../../components/BottonInverse";
import BottonPrimary from "../../components/BottonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";

export default function ProductDetails(){
    return(
        <>
        <HeaderClient /> 
        <main>
            <section id="product-details-section" className="dsc-container">
                <ProductDetailsCard />
                <div className="dsc-btn-page-container">
                    <BottonPrimary />
                    <BottonInverse />
                </div>
            </section>
        </main>
      </>
    );
}