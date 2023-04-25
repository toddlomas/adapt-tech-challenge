import React, { useEffect, useState } from "react";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

function UsersList() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isNameButtonClicked, setIsNameButtonClicked] = useState(false);
  const [isUsernameButtonClicked, setIsUsernameButtonClicked] = useState(false);
  const [isCompanyButtonClicked, setIsCompanyButtonClicked] = useState(false);
  const [users, setUsers] = useState<any[]>([]);

  const toggleNameButtonClicked = () =>
    setIsNameButtonClicked((value) => !value);
  const toggleUsernameButtonClicked = () =>
    setIsUsernameButtonClicked((value) => !value);
  const toggleCompanyButtonClicked = () =>
    setIsCompanyButtonClicked((value) => !value);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <div className="">
      <h3>Filter by:</h3>
      <>
        <button
          className="bg-[#FB8500] rounded-lg m-2 p-2 font-bold hover:bg-[#eca758] focus:ring-4 ring-[#219EBC] shadow-lg transform active:scale-75 transition-transform"
          onClick={toggleNameButtonClicked}
        >
          Name
        </button>
        <button
          className="bg-[#ab81cd] rounded-lg m-2 p-2 font-bold hover:bg-[#b69ccb] focus:ring-4 ring-[#219EBC] shadow-lg transform active:scale-75 transition-transform"
          onClick={toggleUsernameButtonClicked}
        >
          Username
        </button>
        <button
          className="bg-[#56ab91] rounded-lg m-2 p-2 font-bold hover:bg-[#8daea3] focus:ring-4 ring-[#219EBC] shadow-lg transform active:scale-75 transition-transform"
          onClick={toggleCompanyButtonClicked}
        >
          Company
        </button>
        {isNameButtonClicked ? (
          <div>
            {users.map((i) => (
              <p key={i.id}>
                <ul className="py-5">
                  <li>
                    <span className="font-bold text-lg text-[#8ECAE6]">
                      Name:{" "}
                    </span>
                    {i.name}
                  </li>
                </ul>
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
        {isUsernameButtonClicked ? (
          <div>
            {users.map((i) => (
              <p key={i.id}>
                <ul className="py-5">
                  <li>
                    <span className="font-bold text-lg text-[#8ECAE6]">
                      Username:{" "}
                    </span>
                    {i.username}
                  </li>
                </ul>
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
        {isCompanyButtonClicked ? (
          <div>
            {users.map((i) => (
              <p key={i.id}>
                <ul className="py-5">
                  <li>
                    <span className="font-bold text-lg text-[#8ECAE6]">
                      Company:{" "}
                    </span>
                    <ul className="indent-5">
                      <li>
                        <span className="font-bold text-lg text-[#8ECAE6]">
                          Name:{" "}
                        </span>
                        {i.company.name}
                      </li>
                      <li>
                        <span className="font-bold text-lg text-[#8ECAE6]">
                          Slogan:{" "}
                        </span>
                        {i.company.catchPhrase}
                      </li>
                      <li>
                        <span className="font-bold text-lg text-[#8ECAE6]">
                          Strategy:{" "}
                        </span>
                        {i.company.bs}
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
      </>
      <div className="columns-2 my-10">
        <p className="">
          <ul className="">
            <li>
              {users.map((i) => (
                <ul
                  key={i.id}
                  className={`py-5 ${
                    isNameButtonClicked ? "invisible" : "visible"
                  } ${isCompanyButtonClicked ? "invisible" : "visible"} ${
                    isUsernameButtonClicked ? "invisible" : "visible"
                  }`}
                >
                  <li>
                    <span className="font-bold text-lg text-[#8ECAE6]">
                      Name:{" "}
                    </span>
                    {i.name}
                  </li>
                  <li>
                    <span className="font-bold text-lg text-[#8ECAE6]">
                      Username:{" "}
                    </span>
                    {i.username}
                  </li>
                  <li>
                    <span className="font-bold text-lg text-[#8ECAE6]">
                      Email:{" "}
                    </span>
                    {i.email}
                  </li>
                  <li>
                    <span className="font-bold text-lg text-[#8ECAE6]">
                      Phone:{" "}
                    </span>
                    {i.phone}
                  </li>
                  <li>
                    <span className="font-bold text-lg text-[#8ECAE6]">
                      Website:
                    </span>
                    {i.website}
                  </li>
                  <li>
                    <span className="font-bold text-lg text-[#8ECAE6]">
                      Company:{" "}
                    </span>
                    <ul className="indent-5">
                      <li>
                        <span className="font-bold text-lg text-[#8ECAE6]">
                          Name:{" "}
                        </span>
                        {i.company.name}
                      </li>
                      <li>
                        <span className="font-bold text-lg text-[#8ECAE6]">
                          Slogan:{" "}
                        </span>
                        {i.company.catchPhrase}
                      </li>
                      <li>
                        <span className="font-bold text-lg text-[#8ECAE6]">
                          Strategy:{" "}
                        </span>
                        {i.company.bs}
                      </li>
                    </ul>
                  </li>
                </ul>
              ))}
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default UsersList;
