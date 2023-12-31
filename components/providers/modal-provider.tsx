"use client";

import React, { useState, useEffect } from "react";

import { SettingsModal } from "@/components/modals/settings-modal";
import { CoverImageModal } from "@/components/modals/cover-image-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <React.Fragment>
      <SettingsModal />
      <CoverImageModal />
    </React.Fragment>
  );
};

export default ModalProvider;
