"use client";

import { authClient } from "@/lib/auth-client";

export default function SignInWithKeycloak() {
  return (
    <button
      onClick={async () => {
        await authClient.signIn.oauth2({
          providerId: "keycloak",
          callbackURL: "/",
        });
      }}
    >
      Sign in with Keycloak
    </button>
  );
}
