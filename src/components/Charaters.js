import React from "react";

const Charaters = props => {
  const myDate = new Date();
  const date = () => {
    let newDate = new Date().toLocaleDateString("fr-FR", {
      month: "numeric",
      day: "numeric",
      year: "numeric"
    });
    return newDate;
  };
  console.log(date(myDate));

  let myStatus =
    "bgDeathOrAlive bg-success text-center text-light fw-bolder py-3";

  let myStatusDeath =
    "bgDeathOrAlive bg-danger text-center text-light fw-bolder py-3";

  window.addEventListener("click", e => {
    console.log(e.target);
  });
  return (
    <main>
      (
      <div className="container-fluide ">
        <div className="row">
          <div className="blocName col-xl-2  text-dark   ">
            <ul>
              {props.data.map(user => (
                <li key={user.char_id}>
                  <div className="card  text-dark" style={{ width: "470px" }}>
                    <img src={user.img} className="card-img-top " alt="..." />
                    <div className="card-body">
                      <h5 id={user.name}>{user.name}</h5>
                      <p className="card-text fw-bolder">
                        Birthday: {user.birthday}
                      </p>
                      <p className="card-text">
                        <span className="fw-bolder">Occupation:</span>{" "}
                        {user.occupation}
                      </p>

                      {user.status === "Alive" ? (
                        <p className={myStatus}>{user.status} </p>
                      ) : (
                        <p className={myStatusDeath}> {user.status}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      )
    </main>
  );
};

export default Charaters;
