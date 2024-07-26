
function HomePage() {
  return (
    <>
      <div id="homepage-container">
        <section
          id="homepage-banner"
          className="grid place-items-center py-32"
          style={{
            backgroundImage: `url(https://static.wixstatic.com/media/9d7009_fbdad113070f405bbe1e6a5f33c4b3f5~mv2_d_6016_4016_s_4_2.jpg/v1/fill/w_1760,h_482,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d7009_fbdad113070f405bbe1e6a5f33c4b3f5~mv2_d_6016_4016_s_4_2.jpg)`,
          }}
        >
          <div
            id="banner-title"
            className="max-w-[48rem] grid place-items-center text-center border-2 border-white text-white px-36 py-10"
          >
            <h1 className="uppercase font-extralight text-[3rem] tracking-[0.5em] leading-[4.5rem]">
              FROXYERA
            </h1>
            <h2 className="uppercase font-light text-[1.25rem] tracking-[0.25em]">
              Photographer
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
