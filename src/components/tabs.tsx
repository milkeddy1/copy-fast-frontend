"use client";

import React, { useState } from "react";
import { Box, Tabs as ChTabs } from "@chakra-ui/react";
import Upload from "./upload";

const tabs = [
  {
    id: "upload",
    label: "UPLOAD",
  },
  {
    id: "items",
    label: "ITEMS",
  },
];

const tabContentsMap = {
  upload: <Upload />,
  items: "Manage your items",
};

export default function Tabs() {
  return (
    <ChTabs.Root
      defaultValue="upload"
      variant="enclosed"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box>
        <ChTabs.List flexShrink={0}>
          {tabs.map((tab) => {
            return (
              <ChTabs.Trigger key={tab.id} p={4} value={tab.id}>
                {tab.label}
              </ChTabs.Trigger>
            );
          })}
        </ChTabs.List>
      </Box>

      {tabs.map((tab) => {
        return (
          <ChTabs.Content
            key={tab.id}
            value={tab.id}
            width="100%"
            height="100%"
            flex={1}
          >
            {tabContentsMap[tab.id as keyof typeof tabContentsMap]}
          </ChTabs.Content>
        );
      })}
    </ChTabs.Root>
  );
}
