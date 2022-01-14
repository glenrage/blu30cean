import React, { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function BreadCrumbs() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const pathName = window.location.pathname;
    setLocation(pathName);
  }, []);

  const generateBreadCrumbs = (path) => {
    const cleanedPath = path.substring(1);
    return (
      <Link underline="hover" color="inherit" href={path}>
        {cleanedPath}
      </Link>
    );
  };

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {generateBreadCrumbs(location)}
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumbs;
