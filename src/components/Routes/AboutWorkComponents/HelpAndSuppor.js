import React from "react";
import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TabOne } from "./HelpSupportTabs/TabOne";
import { TabTwo } from "./HelpSupportTabs/TabTwo";

export const HelpAndSuppor = () => {
  return (
    <Container fluid>
      <Container>
        <div>
          <div className="bg_white text-left">
            <div>
              <p className="text-2xl p-2" style={{ color: "#6A489C" }}>
                We ServeProfessionals
              </p>
            </div>
            <h1 className="text-5xl text-black robot">Help & Support</h1>
          </div>
        </div>
      </Container>

      <Tabs>
        <TabList>
          <Tab> We Need to HIRE</Tab>
          <Tab> Looking For WORK</Tab>
        </TabList>

        <TabPanel>
          <TabOne />
        </TabPanel>
        <TabPanel>
          <TabTwo />
        </TabPanel>
      </Tabs>
    </Container>
  );
};
