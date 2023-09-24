import React from "react";
import { useAuth } from "@/context/auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const HeaderMenu = () => {
  const { user, logout,  } = useAuth();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Next SNS App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {user ? (
              <>
            <Nav.Link href={`/profile/${user.id}`}>プロフィール</Nav.Link>
            <Nav.Link onClick={logout} >ログアウト</Nav.Link>
            <Nav.Link href="/withdrawal">退会</Nav.Link>
            </>) : ( <>
              <Nav.Link href="/login">ログイン</Nav.Link>
            <Nav.Link href="/signup">サインアップ</Nav.Link>
              </>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;
