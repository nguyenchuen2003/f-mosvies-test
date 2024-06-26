import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to={"/"}>
            <Button >Back Home</Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFoundPage;
