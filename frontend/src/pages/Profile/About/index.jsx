import React, { useReducer } from "react";
import { useEditContext } from "./../../../context/editContext";
import { initalstate2, reducer2 } from "../../../reducer/ProfileReduce";
import { Localhost } from "../../../config/api";

const About = () => {
  const [state, dispatch] = useReducer(reducer2, initalstate2);

  const data = {
    firstname: state.firstname,
    lastname: state.lastname,
    email: state.email,
    Gender: state.Gender,
    Phone: state.Phone,
    address: state.address,
    country: state.country,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let fetchData = await fetch(`${Localhost}/user`, {
        method: "patch",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let res = await fetchData.json();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const [isEditing, setIsEditing] = useEditContext();
  return (
    <div className="about">
      <div className="titleItem">About</div>
      {isEditing ? (
        <>
          <div className="editButton" onClick={() => setIsEditing(false)}>
            Done
          </div>
          <form onSubmit={handleSubmit}>
            <div className="wrapper">
              <div className="detailItem">
                <span className="itemKey">First Name:</span>
                <span className="itemValue">
                  <input
                    type="text"
                    value={state.firstname}
                    name="firstname"
                    onChange={(e) =>
                      dispatch({ type: "firstname", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Last Name:</span>
                <span className="itemValue">
                  <input
                    type="text"
                    name="lastname"
                    value={state.lastname}
                    onChange={(e) =>
                      dispatch({ type: "lastname", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Gender:</span>
                <span className="itemValue">
                  <input
                    type="text"
                    name="Gender"
                    value={state.Gender}
                    onChange={(e) =>
                      dispatch({ type: "Gender", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">
                  <input
                    type="tel"
                    name="Phone"
                    value={state.Phone}
                    onChange={(e) =>
                      dispatch({ type: "Phone", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">
                  <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={(e) =>
                      dispatch({ type: "email", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">
                  <input
                    type="text"
                    name="address"
                    value={state.address}
                    onChange={(e) =>
                      dispatch({ type: "address", value: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">
                  <input
                    type="text"
                    value={state.country}
                    name="country"
                    onChange={(e) =>
                      dispatch({ type: "country", value: e.target.value })
                    }
                  />
                </span>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="editButton" onClick={() => setIsEditing(true)}>
            Edit
          </div>
          <div className="wrapper">
            <div className="detailItem">
              <span className="itemKey">First Name:</span>
              <span className="itemValue">John</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Last Name:</span>
              <span className="itemValue">Joe</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Gender:</span>
              <span className="itemValue">male</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Phone:</span>
              <span className="itemValue">+1 2345 67 89</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Email:</span>
              <span className="itemValue">janedoe@gmail.com</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Address:</span>
              <span className="itemValue">
                Elton St. 234 Garden Yd. NewYork
              </span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Country:</span>
              <span className="itemValue">USA</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Birthday:</span>
              <span className="itemValue">May 03,2000</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
