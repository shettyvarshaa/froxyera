import NavBar from "@/components/NavBar";

function PortfolioPage() {
  return (
    <>
      <NavBar />
      <div className="w-full grid place-items-center">
        <section className="w-full bg-neutral-200 text-center items-center py-8">
          <h1 className="uppercase font-light text-[2rem]">My Portfolio</h1>
          <div className="flex justify-center gap-x-8 my-8">
            <div
              className="bg-red-300 w-[14ch] place-content-center"
              style={{
                backgroundImage: `url(https://static.wixstatic.com/media/9d7009_fbdad113070f405bbe1e6a5f33c4b3f5~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_1760,h_482,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d7009_fbdad113070f405bbe1e6a5f33c4b3f5~mv2_d_6016_4016_s_4_2.jpg)`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
            >
              <h2>Portraits</h2>
            </div>
            <div className="bg-red-300 w-[14ch] place-content-center p-4">
              <h2>Events</h2>
            </div>
            <div className="bg-red-300 w-[14ch] place-content-center p-4">
              <h2>Real-estate</h2>
            </div>
            <div className="bg-red-300 w-[14ch] place-content-center p-4">
              <h2>Restaurents/Pubs</h2>
            </div>
            <div className="bg-red-300 w-[14ch] place-content-center p-4">
              <h2>Car/Bike</h2>
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </>
  );
}

export default PortfolioPage;
