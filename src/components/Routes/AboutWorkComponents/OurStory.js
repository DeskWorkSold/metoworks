import React from "react";
import { Container, Button } from "react-bootstrap";

export const OurStory = () => {
  return (
    <Container fluid className="bgbanner">
      <div class="bg_white text-white text-center">
        <h1 class="text-5xl robot">Our Story</h1>
        <div className="webkit">
          <p class="text-3xl p-2" style={{ color: "#39BEC1" }}>
            Careers At Me2Works
          </p>
          <p class="text-lg p-2 w-half">
            A simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            safes, when avn unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived
          </p>

          <Button
            className="text-white border-rounded px-5 mt-3 text-lg"
            style={{ background: "#39BEC1", border: "none" }}
          >
            join Me2Works Family
          </Button>
        </div>
      </div>
    </Container>
  );
};
