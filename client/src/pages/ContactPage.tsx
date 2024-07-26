
function ContactPage() {
  return (
    <>
      <div
        id="contact_us_page-container"
        className="w-full grid place-items-center"
      >
        <section
          id="homepage-banner"
          className="w-[100vw] grid grid-cols-2 place-items-end items-center py-20"
          style={{
            backgroundImage: `url(https://static.wixstatic.com/media/28ab42_6a819d2a4ef44793922259639ac2afca~mv2_d_2200_1468_s_2.jpg/v1/fill/w_1920,h_632,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28ab42_6a819d2a4ef44793922259639ac2afca~mv2_d_2200_1468_s_2.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className="max-w-[32rem] grid gap-4 bg-white text-[#333333] px-16 py-8">
            <h1 className="uppercase font-light text-[2rem] tracking-[0.1em]">
              SAY HELLO...
            </h1>
            <p className="font-light">
              To discuss your creative project requirements, image library
              development or editorial opportunities with Froxyera, please use
              this form or the email address below.
            </p>
            <label htmlFor="email-form" className="font-medium">
              Email
            </label>
            <form
              id="email-form"
              action=""
              className="grid gap-2 place-items-end"
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-[#333333] p-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#333333] p-2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-[#333333] p-2"
              />
              <textarea
                placeholder="Message"
                className="w-full h-[6rem] border border-[#333333] p-2"
              />
              <button
                type="submit"
                className="max-w-fit  bg-blue-400 rounded-md px-4 py-2 text-white"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactPage;
