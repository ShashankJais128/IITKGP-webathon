import React, { useState, useContext } from "react";

// img
import eveImg from "../../public/aboutimg.png";
import bgn from "../../public/bgn.jpg";

// store
import AuthContext from "../../store/auth-context";

// axois
import axios from "axios";

function ViewTeam({ showModal, setShowModal, data }) {
  const authCtx = useContext(AuthContext);

  // console.log(data);

  const [show, set] = useState("");

  const closeModal = () => {
    setShowModal({ show: false });
  };

  return (
    <div>
      {showModal.show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="relative bg-cover w-[90%] md:w-[60%] my-6 mx-auto max-w-3xl"
              style={{
                backgroundImage: ` url(${bgn})`,
              }}
            >
              {/*content*/}
              <div className="h-[500px] overflow-auto  rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 -b rounded-t">
                  <h3 className="text-3xl text-[#ff673a] font-semibold">
                    View Team
                  </h3>
                  <button
                    className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div>
                  {data ? (
                    <>
                      {data.map((val, key) => {
                        return <div key={key}></div>;
                      })}
                    </>
                  ) : (
                    ""
                  )}
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end px-6 py-2 rounded-b">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default ViewTeam;
