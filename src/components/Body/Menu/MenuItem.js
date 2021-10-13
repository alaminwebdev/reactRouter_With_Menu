import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardImg, CardText, CardTitle, Button, CardFooter } from "reactstrap";

const MenuItem = (props) => {
    document.title = "MenuItem";
    console.log(props);
    if (props.location.state === undefined) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 mx-auto "   >
                        <Card body inverse color="danger">
                            <CardTitle tag="h5">No Menu Selected !</CardTitle>
                            <CardText>
                                Please Go back  & Select a Menu for ignore this window !
                            </CardText>
                            <Button onClick={() => props.history.goBack()} color="secondary">Go Back</Button>
                        </Card>
                    </div>
                </div>
            </div>
        );
    } else {
        const menuitem = props.location.state.updateMenu;
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <Card>
                            <CardImg top width="100%" src={menuitem.image} alt="Card image cap" />
                            <CardHeader>
                                {menuitem.menuName}
                                <span className="badge rounded-pill bg-danger ms-2">
                                    {menuitem.category}
                                </span>
                            </CardHeader>
                            <CardBody>
                                <CardText>{menuitem.description}</CardText>
                                <CardText>
                                    <small className="text-muted">Price : {menuitem.price}Tk Only </small>
                                </CardText>
                            </CardBody>
                            <CardFooter className="text-center py-3">
                                <Button className="me-4">Go To CheckOut</Button>
                                <Button>
                                    <Link to="/menu" exact className="text-decoration-none text-white">Back To Menu</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
};

export default MenuItem;
