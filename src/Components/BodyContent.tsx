import React from "react";
import { Nav } from "react-bootstrap";

export interface ContentSection {
  sectionId: string;
  title: string;
  component: React.ReactNode;
}

interface BodyContentProps {
  content: ContentSection[];
}

const BodyContent: React.FC<BodyContentProps> = ({ content }) => {
  return (
    <div
      style={{
        padding: "2rem",
        width: "100%",
        height: "100%",
        overflowY: "auto",
        paddingTop: "80px",
      }}
    >
      <Nav
        className="justify-content-center mb-4"
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          padding: "1rem",
          zIndex: 25,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          borderRadius: "0.25rem",
        }}
      >
        {content.map((section) => (
          <Nav.Item key={section.sectionId}>
            <Nav.Link href={`#${section.sectionId}`}>{section.title}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div>
        {content.map((section) => (
          <section
            key={section.sectionId}
            id={section.sectionId}
            className="my-5"
          >
            <h2 className="mb-4 border-bottom pb-2">{section.title}</h2>
            {section.component}
          </section>
        ))}
      </div>
    </div>
  );
};

export default BodyContent;
