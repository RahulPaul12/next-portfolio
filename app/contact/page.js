

export default function Contact() {
    
  return (
    <>
      <div className="container relative heroElem w-full m-auto flex justify-center text-center flex-col items-center z-1">
          <div className="sub">
              Got a question, proposal or project or want to work <br />
              together on something? Feel free to reach out.
            </div>
            <form className="w-[70%]">
              <div className="flex justify-between">
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
              <button type="submit">Send Message.</button>
            </form>
      </div>
    </>
  );
}
