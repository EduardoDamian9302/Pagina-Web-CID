import React, { useEffect, useRef } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

export interface ContentSection {
  sectionId: string;
  title: string;
  description?: string;
  component: React.ReactNode;
}

interface BodyContentProps {
  content: ContentSection[];
}

const BodyContent: React.FC<BodyContentProps> = ({ content }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    import("bootstrap/js/dist/scrollspy").then(({ default: ScrollSpy }) => {
      if (scrollRef.current) {
        // eslint-disable-next-line no-new
        new ScrollSpy(scrollRef.current, {
          target: "#main-navbar",
          offset: 5,
        });
      }
    });
  }, []);

  return (
    <div
      ref={scrollRef}
      data-bs-spy="scroll"
      data-bs-target="#main-navbar"
      data-bs-smooth-scroll="true"
      tabIndex={0}
      style={{
        width: "100%",
        height: "90vh",
        overflowY: "scroll",
        paddingLeft: "290px",
        bottom: 0,
      }}
    >
      <Navbar
        id="main-navbar"
        className="justify-content-center  mb-4"
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          padding: "1rem",
          zIndex: 9,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          borderRadius: "0.25rem",
        }}
      >
        <Nav>
          {content.map((section) => (
            <Nav.Item
              key={section.sectionId}
              style={{ margin: "3 30px", borderColor: "red" }}
            >
              <Nav.Link href={`#${section.sectionId}`}>
                {section.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar>
      <div>
        {content.map((section) => (
          <section
            key={section.sectionId}
            id={section.sectionId}
            className="my-5"
          >
            <h2 className="mb-4 border-bottom pb-2">{section.title}</h2>
            <Container fluid>
              {section.description ? (
                <Row>
                  <Col>
                    <span>{section.description}</span>
                  </Col>
                  <Col>{section.component}</Col>
                </Row>
              ) : (
                <>{section.component}</>
              )}
            </Container>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BodyContent;
