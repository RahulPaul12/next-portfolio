

export default function Contact() {
    
  return (
    <>
      <div className="container contact heroElem w-full h-dvh m-auto flex lg:justify-start md:justify-center justify-start text-center flex-col items-center">
          <div className="sub ">
              Got a question, proposal or project or want to work <br />
              together on something? Feel free to reach out.
            </div>
            <form className="w-full md:w-[70%] mb-8">
              <div className="md:flex justify-between">
                <div className="side">
                    <label htmlFor="name">Your Name</label>
                    <input
                    placeholder="Enter Your name"
                    name="name"
                    id="name"
                    type="text"
                    required="" />
                </div>
                <div className="side"
                  ><label htmlFor="email">Your Email</label
                  ><input
                    placeholder="Enter Your email address"
                    name="email"
                    id="email"
                    type="email"
                    required=""
                    
                /></div>
              </div>
              <div className="textarea">
                <label htmlFor="message">Your Message</label
                ><textarea
                  name="message"
                  id="message"
                  placeholder="Hi, I think we need you to work on this particular product. Reach out as soon as you can"
                  required=""
                ></textarea>
              </div>
              <button className="md:mb-0 mb-12" type="submit">Send Message.</button>
            </form>
            <div className="mb-4 hidden lg:flex items-center justify-center">
                <span className="w-10 bg-gradient-to-r to-[#99bbcc] from-[#1d5f80] h-[1px]"></span>
                <span className="text-xs text-center text-gray-500 px-3">Or</span>
                <span className="w-10 bg-gradient-to-l to-[#99bbcc] from-[#1d5f80] h-[1px]"></span>
            </div>
                        <div className="lg:static fixed left-0 top-1/2 transform -translate-y-1/2 flex justify-center lg:flex-row flex-col gap-2.5 items-center mb-6 lg:bg-transparent bg-blue-900 rounded-r-2xl">
                            <a href="mailto:rahulpaul9914@gmail.com" className="bg-light px-3 py-2 flex items-center gap-2 rounded-lg w-fit">
                                <img className="w-6 h-6" src="/images/social/google.png" alt="google"/>
                                <span className="lg:block hidden">Google</span>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100009216620059" className="bg-light px-3 py-2 flex items-center gap-2 rounded-lg w-fit">
                                <img className="w-6 h-6" src="/images/social/Facebook.png" alt="facebook"/>
                                <span className="lg:block hidden">Facebook</span>
                            </a>
                            <a href="https://bd.linkedin.com/in/rahul-paul-768165184" className="bg-light px-3 py-2 flex items-center gap-2 rounded-lg w-fit">
                                <img className="w-6 h-6" src="/images/social/linkedin.png" alt="linkedin"/>
                                <span className="lg:block hidden">Twitter</span>
                            </a>
                        </div>
      </div>
    </>
  );
}
