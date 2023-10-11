import { React, useState } from "react";
import { Link, Route, Routes } from "react-router-dom"

function ImgBtn({ anImg, anAlt, aLink }) {

  return (
      <Link to={aLink}>
        <img src={anImg} className="navimg" alt={anAlt} />
      </Link>
  );
}

export default ImgBtn;
