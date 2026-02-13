"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";

export default function AuthenticatorWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <Authenticator>{children}</Authenticator>
}