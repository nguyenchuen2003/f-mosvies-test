import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../public/IsLoading-Lottie.json";

const IsLoading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu đen với độ mờ 50%
        zIndex: 9999, // Đảm bảo nó hiển thị trên tất cả các phần tử khác
      }}
    >
      <div
        className="flex justify-center items-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Lottie animationData={LoadingAnimation} className="w-32" />
      </div>
    </div>
  );
};

export default IsLoading;
