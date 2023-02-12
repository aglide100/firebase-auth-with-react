import React from "react";

interface Props {
  onClick: (e: any) => void;
}

const GoogleBtn = (props: Props) => {
  return (
    <div style={{ width: "184px", height: "42px", position: "relative" }}>
      <button
        style={{
          opacity: "0",
          width: "184px",
          height: "42px",
          position: "absolute",
          cursor: "pointer",
          zIndex: "2",
        }}
        onClick={(e) => {
          props.onClick(e);
        }}
      >
        Google
      </button>
      <div
        style={{
          position: "absolute",
          top: "0px",
          width: "184px",
          height: "42px",
          backgroundColor: "#4285f4",
          borderRadius: "2px",
          boxShadow: "0 3px 4px 0 rgba(0, 0, 0, .25)",
          zIndex: "1",
        }}
      >
        <div
          style={{
            position: "absolute",
            marginTop: "1.5px",
            marginLeft: "1.5px",
            width: "39px",
            height: "39px",
            borderRadius: "2px",
            backgroundColor: "#fff",
          }}
        >
          <img
            style={{
              position: "absolute",
              marginTop: "11px",
              marginLeft: "11px",
              width: "17px",
              height: "17px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p
          style={{
            position: "absolute",
            marginLeft: "50px",
            float: "right",
            color: "#fff",
            fontSize: "14px",
            letterSpacing: "0.2px",
            fontFamily: "Roboto",
          }}
        >
          <b>Sign in with google</b>
        </p>
      </div>
    </div>
  );
};

export default GoogleBtn;
