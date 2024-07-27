import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProductShowcase() {
  return (
    <>
      <section
        id="product-showcase"
        className="w-full grid place-items-center py-32"
      >
        <div
          id="product-showcase-grid"
          className="grid grid-cols-2 grid-rows-[fit_minmax(fit,_1fr)] gap-8"
        >
          <div className="grid place-self-center">
            <img
              src="https://static.wixstatic.com/media/8c0806_0fcc1bbca4b34548bbeeef30d9634cda~mv2_d_5580_3720_s_4_2.jpg/v1/fill/w_451,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c0806_0fcc1bbca4b34548bbeeef30d9634cda~mv2_d_5580_3720_s_4_2.jpg"
              alt=""
            />
            <caption className="uppercase my-6">
              Landscape
              <p className="text-[0.75rem] text-cyan-900">
                <a href="/portfolio">SEE MORE</a>
              </p>
            </caption>
          </div>
          <div className="grid place-self-end mb-12">
            <img
              src="https://static.wixstatic.com/media/8c0806_f4d9a4649c584ab895242bd21ad16905~mv2_d_3597_5396_s_4_2.jpg/v1/fill/w_450,h_610,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c0806_f4d9a4649c584ab895242bd21ad16905~mv2_d_3597_5396_s_4_2.jpg"
              alt=""
            />
            <caption className="uppercase my-6">
              Portrait
              <p className="text-[0.75rem] text-cyan-900">
                <a href="/portfolio">SEE MORE</a>
              </p>
            </caption>
          </div>
          <div className="grid place-self-start justify-self-end w-[80%]">
            <img
              src="https://static.wixstatic.com/media/8c0806_3eff47402a524f1f8cb6fd10471e39c7~mv2_d_3517_5275_s_4_2.jpg/v1/fill/w_502,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c0806_3eff47402a524f1f8cb6fd10471e39c7~mv2_d_3517_5275_s_4_2.jpg"
              alt=""
            />
            <caption className="uppercase my-6">
              Randoms
              <p className="text-[0.75rem] text-cyan-900">
                <a href="/portfolio">SEE MORE</a>
              </p>
            </caption>
          </div>
          <div className="grid place-self-start justify-self-center mt-8">
            <img
              src="https://static.wixstatic.com/media/8c0806_49791819ebb249fd9e6af1fb480185f1~mv2_d_2333_3111_s_2.jpg/v1/fill/w_308,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c0806_49791819ebb249fd9e6af1fb480185f1~mv2_d_2333_3111_s_2.jpg"
              alt=""
            />
            <caption className="uppercase my-6">
              Aesthetic
              <p className="text-[0.75rem] text-cyan-900">
                <a href="/portfolio">SEE MORE</a>
              </p>
            </caption>
          </div>
        </div>
        <Link to="/portfolio" className="bg-neutral-800 text-white font-semibold px-6 py-2 flex gap-2 rounded-md hover:bg-neutral-950 focus:bg-neutral-950 group transition-scale hover:scale-110 focus:scale-110 ease-in-out duration-200 my-8">
          My Portfolio
          <ArrowRight className="transform transition-transform group-hover:translate-x-2 group-focus:translate-x-2" />
        </Link>
      </section>
    </>
  );
}

export default ProductShowcase;
