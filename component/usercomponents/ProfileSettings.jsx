"use client";
import { IconEdit } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
// import { compare } from "bcrypt";
import { useDataContext } from "@component/context/DataProvider";
import { toast } from "react-toastify";
import CountryFlag from "@component/admincomponents/components/CountryFlag";

const ProfileSettings = () => {
  const { currentUser } = useDataContext();
  const [editEmail, seteditEmail] = useState(false);
  const [editPassword, seteditPassword] = useState(false);
  const [editUsername, seteditUsername] = useState(false);
  const [editBtc, seteditBtc] = useState(false);
  const [editEth, seteditEth] = useState(false);
  const [editPaypal, seteditPaypal] = useState(false);
  const [editAcctName, seteditAcctName] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUsername, setNewUsername] = useState(currentUser?.username);
  const [btc, setbtc] = useState(currentUser?.wallet?.bitcoin || "");
  const [eth, setEth] = useState(currentUser?.wallet?.ethereum || "");
  const [paypal, setpaypal] = useState(currentUser?.wallet?.paypal || "");
  const [acctName, setAcctName] = useState(
    currentUser?.wallet?.bankdetails?.accountname || ""
  );
  const [acctNumber, setAcctNumber] = useState(
    currentUser?.wallet?.bankdetails?.accountnumber || ""
  );
  const [bankName, setBankName] = useState(
    currentUser?.wallet?.bankdetails?.bankname || ""
  );
  const [routing, setRouting] = useState(
    currentUser?.wallet?.bankdetails?.routingnumber || ""
  );
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImageI, setSelectedImageI] = useState(null);
  const [selectedImageII, setSelectedImageII] = useState(null);
  const [selectedImageIII, setSelectedImageIII] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImageI(imageUrl);
    }
  };
  const handleImageChangeII = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImageII(imageUrl);
    }
  };
  const handleImageChangeIII = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImageIII(imageUrl);
    }
  };

  const removeImage = () => {
    setSelectedImageI(null);
  };
  const removeImageII = () => {
    setSelectedImageII(null);
  };
  const removeImageIII = () => {
    setSelectedImageIII(null);
  };

  const handleCancel = () => {
    seteditAcctName(false);
    seteditEmail(false);
    seteditBtc(false);
    seteditEth(false);
    seteditPaypal(false);
    seteditPassword(false);
    seteditUsername(false);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/userrequests", {
        method: "PATCH",
        body: JSON.stringify({
          id: currentUser._id,
          username: newUsername,
          password: newPassword || currentUser?.password,
          wallet: {
            bitcoin: btc,
            ethereum: eth,
            paypal: paypal,
            bankdetails: {
              accountname: acctName,
              accountnumber: acctNumber,
              bankname: bankName,
              routingnumber: routing,
            },
          },
        }),
      });

      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        toast.success("Profile updated", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <section className="pt-10 mx-auto max-w-xl md:max-w-4xl min-h-screen pb-10">
      <h2 className="text-3xl font-bold text-center text-black">
        Profile settings
      </h2>

      <div className="w-full max-w-2xl mx-auto mt-10">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-6 bg-gray-800 rounded-lg">
          <button
            className={`px-4 py-2 text-white ${
              activeTab === 0 ? "bg-blue-600" : "bg-gray-700"
            } rounded-l-lg focus:outline-none hover:bg-blue-500`}
            onClick={() => handleTabClick(0)}
          >
            INFO
          </button>
          <button
            className={`px-4 py-2 text-white ${
              activeTab === 1 ? "bg-blue-600" : "bg-gray-700"
            } focus:outline-none hover:bg-blue-500`}
            onClick={() => handleTabClick(1)}
          >
            Wallet
          </button>
          <button
            className={`px-4 py-2 text-white ${
              activeTab === 2 ? "bg-blue-600" : "bg-gray-700"
            } rounded-r-lg focus:outline-none hover:bg-blue-500`}
            onClick={() => handleTabClick(2)}
          >
            KYC
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md mt-2">
          {activeTab === 0 && (
            <form onSubmit={handleEdit} className="text-black">
              <div
                className="p-2 rounded bg-neutral-900 "
                style={{
                  minHeight: "300px",
                  padding: "20px",
                }}
              >
                <label htmlFor="userImage" className="flex items-center">
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
                  <CountryFlag countryName={currentUser?.location} />
                </label>

                <div className="flex flex-col">
                  <p className="font-semibold text-white"> Full name: </p>
                  <p
                    className="bg-gray-200 flex justify-between items-center"
                    style={{
                      padding: "5px 10px",
                      borderRadius: "5px",
                      marginTop: "10px",
                    }}
                  >
                    <span>{`${currentUser?.firstname} ${currentUser?.lastname}`}</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  {editEmail && (
                    <>
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
                      />
                    </>
                  )}
                  {!editEmail && (
                    <>
                      <p className="font-semibold text-white">
                        Email Address:{" "}
                      </p>
                      <p
                        className="bg-gray-200 flex justify-between items-center"
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <span>{currentUser?.email}</span>
                      </p>
                    </>
                  )}
                </div>

                <div className="flex flex-col pt-4">
                  {editUsername && (
                    <>
                      <label
                        htmlFor="username"
                        className="font-semibold text-white"
                        style={{
                          marginBottom: "5px",
                        }}
                      >
                        Change username:
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                      />
                    </>
                  )}
                  {!editUsername && (
                    <>
                      <p className="font-semibold text-white">Username: </p>
                      <p
                        className="bg-gray-200 flex justify-between items-center"
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <span>{currentUser?.username}</span>
                        <IconEdit
                          onClick={() => seteditUsername((prev) => !prev)}
                        />
                      </p>
                    </>
                  )}
                </div>
                <div className="flex flex-col">
                  {editPassword && (
                    <>
                      <label
                        htmlFor="old password"
                        className="font-semibold text-white"
                        style={{
                          marginBottom: "5px",
                        }}
                      >
                        old password:
                      </label>
                      <input
                        type="text"
                        id="old password"
                        name="old password"
                        placeholder="old password"
                        className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                      <label
                        htmlFor="newpassword"
                        className="font-semibold text-white"
                        style={{
                          marginBottom: "5px",
                        }}
                      >
                        new password:
                      </label>
                      <input
                        type="text"
                        id="newpassword"
                        name="password"
                        placeholder="new password"
                        className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </>
                  )}
                  {!editPassword && (
                    <>
                      <p className="font-semibold text-white">Password: </p>
                      <p
                        className="bg-gray-200 flex justify-between items-center"
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <span>{currentUser?.password}</span>
                        <IconEdit
                          onClick={() => seteditPassword((prev) => !prev)}
                        />
                      </p>
                    </>
                  )}
                </div>
                <div className="flex items-center justify-around gap-1">
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
                  <button
                    className="bg-gray-100 text-red- w-1/2 mx-auto mt-4 "
                    style={{
                      padding: "10px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "10px",
                      color: "#fff",
                      background: "#dc2626",
                    }}
                    onClick={handleCancel}
                  >
                    cancel
                  </button>
                </div>
              </div>
            </form>
          )}
          {activeTab === 1 && (
            <form onSubmit={handleEdit} className="text-black">
              <div
                className="p-2 rounded bg-neutral-900 "
                style={{
                  minHeight: "300px",
                  padding: "20px",
                }}
              >
                <div className="flex flex-col">
                  {editBtc && (
                    <>
                      <label
                        htmlFor="bitcoin"
                        className="font-semibold text-white"
                        style={{
                          marginBottom: "5px",
                        }}
                      >
                        Add new Bitcoin wallet:
                      </label>
                      <input
                        type="text"
                        id="bitcoin"
                        name="bitcoin"
                        placeholder="bitcoin Address"
                        className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={btc}
                        onChange={(e) => setbtc(e.target.value)}
                      />
                    </>
                  )}
                  {!editBtc && (
                    <>
                      <p className="font-semibold text-white">
                        Bitcoin Address:{" "}
                      </p>
                      <p
                        className="bg-gray-200 flex justify-between items-center overflow-hidden"
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <span
                          className=""
                          style={{
                            width: "80%",
                            overflow: "scroll",
                          }}
                        >
                          {currentUser?.wallet?.bitcoin}
                        </span>
                        <IconEdit onClick={() => seteditBtc((prev) => !prev)} />
                      </p>
                    </>
                  )}
                </div>

                <div className="flex flex-col pt-4">
                  {editEth && (
                    <>
                      <label
                        htmlFor="ethereum"
                        className="font-semibold text-white"
                        style={{
                          marginBottom: "5px",
                        }}
                      >
                        Ethereum Address:
                      </label>
                      <input
                        type="text"
                        id="ethereum"
                        name="ethereum"
                        placeholder="ethereum"
                        className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={eth}
                        onChange={(e) => setEth(e.target.value)}
                      />
                    </>
                  )}
                  {!editEth && (
                    <>
                      <p className="font-semibold text-white">
                        Ethereum address:{" "}
                      </p>
                      <p
                        className="bg-gray-200 flex justify-between items-center overflow-scroll"
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <span
                          style={{
                            width: "80%",
                            overflow: "scroll",
                          }}
                        >
                          {currentUser?.wallet?.ethereum}
                        </span>
                        <IconEdit onClick={() => seteditEth((prev) => !prev)} />
                      </p>
                    </>
                  )}
                </div>
                <div className="flex flex-col">
                  {editPaypal && (
                    <>
                      <label
                        htmlFor="paypal"
                        className="font-semibold text-white"
                        style={{
                          marginBottom: "5px",
                        }}
                      >
                        paypal:
                      </label>
                      <input
                        type="text"
                        id="paypal"
                        name="paypal"
                        placeholder="paypal"
                        className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={paypal}
                        onChange={(e) => setpaypal(e.target.value)}
                      />
                    </>
                  )}
                  {!editPaypal && (
                    <>
                      <p className="font-semibold text-white">Paypal email: </p>
                      <p
                        className="bg-gray-200 flex justify-between items-center"
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <span>{currentUser?.wallet?.paypal}</span>
                        <IconEdit
                          onClick={() => seteditPaypal((prev) => !prev)}
                        />
                      </p>
                    </>
                  )}
                </div>
                <div className="flex flex-col">
                  {editAcctName && (
                    <>
                      <label
                        htmlFor="account name"
                        className="font-semibold text-white"
                        style={{
                          marginBottom: "5px",
                        }}
                      >
                        Account name:
                      </label>
                      <input
                        type="text"
                        id="account name"
                        name="account name"
                        placeholder="account name"
                        className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={acctName}
                        onChange={(e) => setAcctName(e.target.value)}
                      />
                      <label
                        htmlFor="account number"
                        className="font-semibold text-white"
                        style={{
                          marginBottom: "5px",
                        }}
                      >
                        account number:
                      </label>
                      <input
                        type="text"
                        id="account number"
                        name="account number"
                        placeholder="account number"
                        className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={acctNumber}
                        onChange={(e) => setAcctNumber(e.target.value)}
                      />
                      <label
                        htmlFor="Bank name"
                        className="font-semibold text-white"
                        style={{
                          marginBottom: "5px",
                        }}
                      >
                        Bank name:
                      </label>
                      <input
                        type="text"
                        id="Bank name"
                        name="Bank name"
                        placeholder="Bank name"
                        className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                      />
                      <label
                        htmlFor="routing number"
                        className="font-semibold text-white"
                        style={{
                          marginBottom: "5px",
                        }}
                      >
                        routing number:
                      </label>
                      <input
                        type="text"
                        id="routing number"
                        name="routing number"
                        placeholder="routing number"
                        className="block w-full px-3 py-2 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={routing}
                        onChange={(e) => setRouting(e.target.value)}
                      />
                    </>
                  )}
                  {!editAcctName && (
                    <>
                      <p className="font-semibold text-white">account name: </p>
                      <p
                        className="bg-gray-200 flex justify-between items-center"
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <span>
                          {currentUser?.wallet?.bankdetails?.accountname}
                        </span>
                        <IconEdit
                          onClick={() => seteditAcctName((prev) => !prev)}
                        />
                      </p>
                      <p className="font-semibold text-white">
                        account number:{" "}
                      </p>
                      <p
                        className="bg-gray-200 flex justify-between items-center"
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <span>
                          {currentUser?.wallet?.bankdetails?.accountnumber}
                        </span>
                        <IconEdit
                          onClick={() => seteditPassword((prev) => !prev)}
                        />
                      </p>
                      <p className="font-semibold text-white">bank name: </p>
                      <p
                        className="bg-gray-200 flex justify-between items-center"
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <span>
                          {currentUser?.wallet?.bankdetails?.bankname}
                        </span>
                        <IconEdit
                          onClick={() => seteditPassword((prev) => !prev)}
                        />
                      </p>
                      <p className="font-semibold text-white">routing: </p>
                      <p
                        className="bg-gray-200 flex justify-between items-center"
                        style={{
                          padding: "5px 10px",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        <span>
                          {currentUser?.wallet?.bankdetails?.routingnumber}
                        </span>
                        <IconEdit
                          onClick={() => seteditPassword((prev) => !prev)}
                        />
                      </p>
                    </>
                  )}
                </div>
                <div className="flex items-center justify-around gap-1">
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
                  <button
                    className="bg-gray-100 text-red- w-1/2 mx-auto mt-4 "
                    style={{
                      padding: "10px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius: "10px",
                      color: "#fff",
                      background: "#dc2626",
                    }}
                    onClick={handleCancel}
                  >
                    cancel
                  </button>
                </div>
              </div>
            </form>
          )}
          {activeTab === 2 && (
            <form>
              <div className="flex flex-row items-center space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  <Image
                    src={"/assets/images/11648000058signup.png"}
                    alt="id-card"
                    width={80}
                    height={80}
                  />
                  Upload a selfie with your ID document
                </label>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0 file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100
                  "
                  />
                  <span className="text-neutral-" style={{ color: "#a3a3a3" }}>
                    "JPEG, PNG, JPG"{" "}
                  </span>
                </div>
                {selectedImageI && (
                  <div className="relative">
                    <Image
                      src={selectedImageI}
                      alt="Selected preview"
                      className="h-32 w-32 object-cover rounded-md"
                      height={100}
                      width={100}
                    />
                    <div
                      onClick={removeImage}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none"
                    >
                      &times;
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  <Image
                    src={"/assets/images/id-card.png"}
                    alt="id-card"
                    width={100}
                    height={100}
                  />
                  <span>Upload ID document</span>
                </label>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChangeII}
                    className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0 file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100
                  "
                  />
                  <span className="text-neutral-" style={{ color: "#a3a3a3" }}>
                    "JPEG, PNG, JPG"{" "}
                  </span>
                </div>
                {selectedImageII && (
                  <div className="relative">
                    <Image
                      src={selectedImageII}
                      alt="Selected preview"
                      className="h-32 w-32 object-cover rounded-md"
                      height={100}
                      width={100}
                    />
                    <div
                      onClick={removeImageII}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none"
                    >
                      &times;
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  <Image
                    src={"/assets/images/id-card.png"}
                    alt="id-card"
                    width={100}
                    height={100}
                  />
                  Upload your Proof of address
                </label>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChangeIII}
                    className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0 file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100
                  "
                  />
                  <span className="text-neutral-" style={{ color: "#a3a3a3" }}>
                    "JPEG, PNG, JPG"{" "}
                  </span>
                </div>
                {selectedImageIII && (
                  <div className="relative">
                    <Image
                      src={selectedImageIII}
                      alt="Selected preview"
                      className="h-32 w-32 object-cover rounded-md"
                      height={100}
                      width={100}
                    />
                    <div
                      onClick={removeImageIII}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none"
                    >
                      &times;
                    </div>
                  </div>
                )}
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
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default ProfileSettings;
