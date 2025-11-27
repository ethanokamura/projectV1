import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaUsers, FaBook, FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  const history = useNavigate();

  const handleNavigation = (event: React.MouseEvent) => {
    event.preventDefault();
    history("/register");
  };

  return (
    <React.Fragment>
      <main className="pt-0">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header with Icon */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <FaShieldAlt className="text-base-content text-4xl" />
              </div>
              <h1 className="text-5xl font-bold text-base-content mb-4">
                Welcome
              </h1>
            </div>

            {/* Main Content Card */}
            <div className="bg-base-200 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-base-content/70 leading-relaxed mb-6">
                  Thank you for your interest in receiving and delivering the{" "}
                  <span className="font-semibold text-primary">
                    [TBD title]
                  </span>{" "}
                  on Digital Safety in Current Era (2025-2026) presentation with
                  a focus on online safety and scams targeted at teenagers &
                  young people.
                </p>

                <p className="text-base-content/70 leading-relaxed mb-6">
                  By filling out the details below, we will have a better idea
                  who, where, when and how this presentation will be utilized.
                  This will better help us serve the community of parties
                  interested in helping our young people learn and defend
                  themselves against these threats.
                </p>

                <p className="text-base-content/70 leading-relaxed mb-8">
                  We really appreciate your energy, efforts and drive to take on
                  these threats through education.
                </p>

                <div className="border-t border-base-300 pt-6">
                  <p className="text-base-content/70 font-medium">
                    Cheers,
                    <br />
                    <span className="text-primary">- The MAP Team</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="flex flex-col gap-8 mb-12">
              <div className="bg-base-200 rounded-xl p-6 shadow-md">
                <div className="flex items-center text-lg gap-2 mb-2">
                  <FaShieldAlt className="text-primary" />
                  <h3 className="font-semibold text-base-content">
                    Online Safety
                  </h3>
                </div>
                <p className="text-base-content/70 text-sm">
                  Protect young people from digital threats and online scams
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-6 shadow-md">
                <div className="flex items-center text-lg gap-2 mb-2">
                  <FaUsers className="text-primary" />
                  <h3 className="font-semibold text-base-content">
                    Community Impact
                  </h3>
                </div>
                <p className="text-base-content/70 text-sm">
                  Join educators making a difference in their communities
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-6 shadow-md">
                <div className="flex items-center text-lg gap-2 mb-2">
                  <FaBook className="text-primary" />
                  <h3 className="font-semibold text-base-content">
                    Education First
                  </h3>
                </div>
                <p className="text-base-content/70 text-sm">
                  Comprehensive presentation materials ready to deliver
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={handleNavigation}
                className="inline-flex items-center gap-3 bg-primary hover:bg-accent text-base-content font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
              >
                Get Started with Registration
                <FaArrowRight className="text-xl" />
              </button>
              <p className="text-base-content/70 text-sm mt-4">
                Takes approximately 5 minutes to complete
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-base-300">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-base-content/70 text-sm">
              © 2025 MAP Team. Committed to digital safety education.
            </p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
