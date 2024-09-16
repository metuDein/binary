"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import CountrySelect from "@component/authcomponents/components/CountrySelect";

const AdminNewTraders = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [traderType, setTraderType] = useState({
    gold: false,
    silver: false,
    bronze: false,
  });
  const [thirtyDay, setThirtyDay] = useState(0);

  const [rating, setRating] = useState(4);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [copiers, setCopiers] = useState(100);
  const [joined, setJoined] = useState(2019);
  const [desc, setDesc] = useState("");

  // functions
  const handleCheckboxChange = (e, selectedOption) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      // When one checkbox is checked, all others should be unchecked
      const updatedValues = Object.keys(traderType).reduce((acc, option) => {
        acc[option] = option === selectedOption; // Only the selected checkbox will be true
        return acc;
      }, {});
      setTraderType(updatedValues);
    } else {
      // Uncheck the selected checkbox
      setTraderType((prevState) => ({
        ...prevState,
        [selectedOption]: false,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/admin/traders", {
        method: "POST",
        body: JSON.stringify({
          fullname,
          email,
          traderType,
          roi: {
            thirtydays: thirtyDay,
          },
          rating,
          location: selectedCountry,
          copiers,
          joined,
          desc,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create trader");
      }

      toast.success("Trader created successfully!");
      setFullname("");
      setEmail("");
      setTraderType({ gold: false, silver: false, bronze: false });
      setSevenDay(0);
      setThirtyDay(0);
      setOneYear(0);
      setRating(4);
      setLocation("");
      setCopiers(100);
      setJoined(2019);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="pt-10 mx-auto max-w-xl md:max-w-4xl min-h-screen pb-10">
      <h2 className="text-3xl font-bold text-center text-black">
        Create a New Trader
      </h2>
      <div className="mt-10 w-full">
        <form onSubmit={handleSubmit}>
          <div
            className="p-2 rounded bg-neutral-900 "
            style={{
              minHeight: "300px",
              padding: "20px",
            }}
          >
            <label htmlFor="userImage">
              <span
                className=" rounded-full block mx-auto"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  backgroundImage: `url(https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg)`,
                  backgroundSize: "contain",
                  backgroundPosition: "",
                  borderRadius: "50%",
                  position: "relative",
                  // background: "rgba(0, 0, 0, 0.6)",
                  cursor: "pointer",

                  breakAfter: {
                    content: "",
                    width: "200px",
                    height: "200px",
                    background: "rgba(0,0,0,0.6)",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: "100",
                  },
                }}
              ></span>
            </label>

            <div className="flex flex-col">
              <label
                htmlFor="fullname"
                className="font-semibold text-white"
                style={{
                  marginBottom: "5px",
                }}
              >
                Full name:
              </label>
              <input
                type="text"
                id="fullname"
                name="name"
                placeholder="Full name"
                className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-semibold text-white"
                style={{
                  marginBottom: "5px",
                }}
              >
                Change email address:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
                className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col pt-4">
              <label
                htmlFor="30d roi"
                className="font-semibold text-white"
                style={{
                  marginBottom: "5px",
                }}
              >
                30Days ROI:
              </label>
              <input
                type="text"
                id="30d roi"
                name="30d roi"
                placeholder="30day ROI"
                className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={thirtyDay}
                onChange={(e) => setThirtyDay(e.target.value)}
              />
            </div>

            <div className="flex flex-col pt-4">
              <label
                htmlFor="plan"
                className="font-semibold text-white"
                style={{
                  marginBottom: "5px",
                }}
              >
                Select Trader Plan
              </label>
              {Object.keys(traderType).map((option, index) => (
                <div className="bg-gray-200 mt-2 p-2 rounded" key={index}>
                  <label>
                    <input
                      type="checkbox"
                      checked={traderType[option]}
                      onChange={(e) => handleCheckboxChange(e, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="rating"
                className="font-semibold text-white"
                style={{
                  marginBottom: "5px",
                }}
              >
                Rating (stars):
              </label>
              <input
                type="number"
                min={3}
                id="rating"
                name="rating"
                placeholder="new password"
                className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="location"
                className="font-semibold text-white"
                style={{
                  marginBottom: "5px",
                }}
              >
                Location:
              </label>
              <CountrySelect
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="copiers"
                className="font-semibold text-white"
                style={{
                  marginBottom: "5px",
                }}
              >
                Copiers:
              </label>
              <input
                type="number"
                id="copiers"
                name="copiers"
                placeholder="copiers"
                className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={copiers}
                onChange={(e) => setCopiers(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="joined"
                className="font-semibold text-white"
                style={{
                  marginBottom: "5px",
                }}
              >
                Year Joined:
              </label>
              <input
                type="number"
                id="joined"
                name="copiers"
                placeholder="copiers"
                className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={joined}
                onChange={(e) => setJoined(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="font-semibold text-white"
                style={{
                  marginBottom: "5px",
                }}
              >
                description:
              </label>
              <textarea
                rows={3}
                cols={5}
                id="description"
                name="description"
                placeholder="description"
                className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button
              className="bg-gray-100 text-black w-1/2 mx-auto mt-4 "
              style={{
                padding: "10px",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "10px",
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default AdminNewTraders;
