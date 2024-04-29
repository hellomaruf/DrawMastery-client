import Lottie from "lottie-react";
import qus from "../assets/qus.json";
import { Slide } from "react-awesome-reveal";

function FAQs() {
  return (
    <div className="max-w-7xl mx-auto mt-24 lg:mt-36 mb-8">
      <Slide direction="down">
        <div className="text-center pb-8">
          <h2 className="font-right text-3xl">FAQ,s</h2>
        </div>
      </Slide>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
        <Slide direction="left">
          <div className="col-span-1 ">
            <Lottie animationData={qus} loop={true}></Lottie>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="col-span-1 mx-6 lg:mx-3">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  What mediums and styles of art are available on the website?
                </div>
                <div className="collapse-content">
                  <p>
                    Users often want to know about the range of artwork offered,
                    including mediums such as oil painting, watercolor,
                    sculpture, etc., as well as different styles like abstract,
                    realism, impressionism, etc.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Can I commission custom artwork?
                </div>
                <div className="collapse-content">
                  <p>
                    Some users may have specific preferences or ideas for custom
                    pieces and would like to inquire about commissioning an
                    artist for personalized artwork.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Do you offer international shipping?
                </div>
                <div className="collapse-content">
                  <p>
                    Many users may be interested in purchasing artwork from
                    different parts of the world and would like to know if
                    international shipping is available, as well as associated
                    costs and delivery times.
                  </p>
                </div>
                <div className="join join-vertical w-full">
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                      How can I purchase artwork from the website?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Users often want to know about the purchasing process,
                        including payment methods, shipping options, and any
                        return policies in place.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      How do I contact the artists featured on the website?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Users might have inquiries about specific artworks or
                        artists and would like to know how they can reach out to
                        them for questions, collaborations, or additional
                        information.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      Are the artworks on the website original pieces or
                      reproductions?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Users may want clarification on whether the artworks
                        showcased are original pieces created by the artists or
                        reproductions such as prints or digital copies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default FAQs;
