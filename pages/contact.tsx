import Instagram from "../public/images/instagram.png";
import LinkedIn from "../public/images/LinkedIn.png";
import email from "../public/images/email.png";
import Image from "next/image";
import { ProjectNavbar } from "./components/navbar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Contact = () => {
  return (
    <div className="">
      <ProjectNavbar />
      <div className=" pt-28 pb-28 bg-pinkBackground h-screen">
        <div className="flex container mx-auto text-backGroundWhite items-center justify-center gap-10">
          <div className="w-1/2">
            <h1 className="text-5xl font-sora text-lightGray">
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
            <h1 className="pt-8 font-mulish">
              {" "}
              &copy; 2023 Sophie,Inc <em className="p-2">.Privacy</em>{" "}
              <em className="p-2">.Terms</em> <em className="p-2">.Sitemap</em>
            </h1>
          </div>
         
          <div>
            <h1 className="text-lightGray text-3xl text-center pb-4 font-mulish">Get In Touch</h1>
            <Box
              component="form"
              sx={{
                m: 1,
                width: "80ch",
                colorScheme: "white",
              }}
              noValidate
              autoComplete="off"
              className="grid grid-cols-2 gap-10 items-center justify-center"
            >
              <TextField id="standard-basic" label="Name" variant="standard" />
              <TextField
                id="standard-basic"
                label="Last Name"
                variant="standard"
              />
              <TextField id="standard-basic" label="Email" variant="standard" />
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="standard"
              />
            </Box>

            <div className="mt-12">
              <textarea
                placeholder="Describe your project.."
                className="mt-2 focus:border-sky-500 focus:ring-pinkBackground block rounded-md focus:ring-1 w-full h-32 bg-pinkBackground border shadow-sm border-navPink placeholder-lightGray focus:outline-none pt-2 pl-4"
              ></textarea>
              <div className='flex justify-center items-center'><button className="bg-pinkBackground text-backGroundWhite p-2 rounded mt-8 w-32 font-mulish text-lg">Submit</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
