import React from "react";
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardImg
  } from "reactstrap";

const MenuList = props => {
  document.title = "MenuList"
  return (
    
    <div className="col-lg-4 mt-5">

        <Card>
          <CardImg top width="100%" src={props.menu.image} alt="Card image cap" />
          <CardHeader>
            {props.menu.subtitle}
            <span className="badge rounded-pill bg-danger ms-2">{props.menu.category}</span>
          </CardHeader>

          <CardFooter className="text-center border-top-0">
            <Button onClick={props.selectMenu} >View Details</Button>
          </CardFooter>
        </Card>
    </div>
  );
};

export default MenuList;
