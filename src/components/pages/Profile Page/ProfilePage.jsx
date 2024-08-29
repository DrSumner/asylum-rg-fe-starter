import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Col, Container, Row } from "react-bootstrap";

const ProfilePage = () => {
    const {user} = useAuth0();
    const style = {
        borderRadius: '50%',
        size: '200%',
    };
    return (
        <Container className="mb-5">
            
            <Row>
                <Col md={2} className="col1">
                <img
                src={user.picture}
                alt="Profile"
                style={style}
                />
                </Col>
                <Col md className="col1">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                </Col>
            </Row>
        </Container>
    );

};


export default ProfilePage;