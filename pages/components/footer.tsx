import Instagram from "../../public/images/Instagram.png";
import LinkedIn from "../../public/images/LinkedIn.png";
import email from "../../public/images/email.png";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="bg-footerColor pt-28 pb-28">
        <div className="flex container mx-auto text-backGroundWhite">
          <div className="w-1/2">
            <h1 className="text-5xl font-sora">
              Say Hello and let's work together !
            </h1>
            <ul className="flex pt-10 gap-14">
              <li>
                <a href="https://www.linkedin.com/in/sophia-ameh-67a849248/">
                  <Image src={LinkedIn} alt={"img"} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sophia-ameh-67a849248/">
                  <Image src={Instagram} alt={"img"} />
                </a>
              </li>
              <li>
                <a href="https://sofiagabriel722@mail.com">
                  <Image src={email} alt={"img"} />
                </a>
              </li>
            </ul>
            <h1 className="pt-8 font-mulish"> &copy; 2023 Brand,Inc <em className="p-2">.Privacy</em> <em className="p-2">.Terms</em> <em className="p-2">.Sitemap</em></h1>
          </div>
          <form className="font-mulish">
                <label>Email:<input type="email" name="" id="" placeholder="Your email address" className="mt-1 pl-4 py-2  bg-footerColor border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md focus:ring-1"/></label>
               
                <div className="mt-12">
                    <label className="">Input you message:
                        <textarea placeholder="Describe your project" className="mt-2 focus:border-sky-500 focus:ring-sky-500 block rounded-md focus:ring-1 w-full h-24 bg-footerColor border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none pt-2 pl-4">
                        </textarea>
                    </label>
                </div>
          <button className="bg-lightBlue text-backGroundWhite p-2 rounded mt-8 w-32 font-mulish text-lg">Submit</button>

          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
