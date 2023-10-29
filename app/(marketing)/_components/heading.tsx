"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-4xl space-y-4">
      <h1 className="text-2xl sm:text-4xl md:text-6xl">
        Your Ideas, Documents, & Plans . Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h2 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where better, faster work happens.
      </h2>
      {isLoading && (
        <div>
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Jotion <ArrowRight />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Jotion free <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
