import { useState } from "react";

export default function PresentationForm() {
  const [complete, setComplete] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    socialUrl: "",
    expertise: "",
    hasLocation: "",
    locationType: "",
    locationTypeOther: "",
    needsAuthorization: "",
    expectedAttendees: "",
    timeframe: "",
    otherDetails: "",
    acknowledgement: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComplete(true);
    console.log("Form submitted:", formData);
    // Add your submit logic here
  };

  return complete ? (
    <button className="btn">[Download Presentation]</button>
  ) : (
    <div className="p-6 bg-surface rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Registration Form</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Professional Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Professional Details</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="bg-background w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="bg-background w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-background w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-background w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                LinkedIn (preferred) or Other Social URL{" "}
                <span className="text-error">*</span>
              </label>
              <input
                type="url"
                name="socialUrl"
                required
                value={formData.socialUrl}
                onChange={handleChange}
                placeholder="https://"
                className="bg-background w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Expertise? <span className="text-error">*</span>
              </label>
              <textarea
                name="expertise"
                required
                value={formData.expertise}
                onChange={handleChange}
                rows={3}
                className="bg-background w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Presentation Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Presentation Details</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Do you already have location(s) in mind to present to?{" "}
                <span className="text-error">*</span>
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="hasLocation"
                    value="yes"
                    required
                    checked={formData.hasLocation === "yes"}
                    onChange={handleChange}
                    className="mr-2 radio radio-xs"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="hasLocation"
                    value="no"
                    required
                    checked={formData.hasLocation === "no"}
                    onChange={handleChange}
                    className="mr-2 radio radio-xs"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Type of location you plan to present to?{" "}
                <span className="text-error">*</span>
              </label>
              <select
                name="locationType"
                required
                value={formData.locationType}
                onChange={handleChange}
                className="bg-background w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a location type...</option>
                <option value="school">School</option>
                <option value="sports-team">Sports Team</option>
                <option value="business">Business</option>
                <option value="church">Church</option>
                <option value="other">Other</option>
              </select>
            </div>

            {formData.locationType === "other" && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Please specify:
                </label>
                <input
                  type="text"
                  name="locationTypeOther"
                  value={formData.locationTypeOther}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1">
                Do you need authorization to present at this location?{" "}
                <span className="text-error">*</span>
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="needsAuthorization"
                    value="yes"
                    required
                    checked={formData.needsAuthorization === "yes"}
                    onChange={handleChange}
                    className="mr-2 radio radio-xs"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="needsAuthorization"
                    value="no"
                    required
                    checked={formData.needsAuthorization === "no"}
                    onChange={handleChange}
                    className="mr-2 radio radio-xs"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Expected Number of Attendees
              </label>
              <input
                type="number"
                name="expectedAttendees"
                min="0"
                value={formData.expectedAttendees}
                onChange={handleChange}
                className="bg-background w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Time Frame */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Time Frame</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Timeframe to present <span className="text-error">*</span>
              </label>
              <select
                name="timeframe"
                required
                value={formData.timeframe}
                onChange={handleChange}
                className="bg-background w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a timeframe...</option>
                <option value="next-month">Within the next month</option>
                <option value="2-6-months">2 to 6 months out</option>
                <option value="6-plus-months">6+ months out</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Other Details to Share or help we can provide?
              </label>
              <textarea
                name="otherDetails"
                value={formData.otherDetails}
                onChange={handleChange}
                rows={4}
                className="bg-background w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Legal Acknowledgment */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Legal Acknowledgment</h2>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Disclaimer:</strong> By
                submitting this form, you acknowledge that all information
                provided is accurate and complete to the best of your knowledge.
                You agree to comply with all applicable policies and regulations
                related to presenting at the specified location.
              </p>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="acknowledgement"
                  required
                  checked={formData.acknowledgement}
                  onChange={handleChange}
                  className="mr-2 checkbox checkbox-sm checkbox-primary"
                />
                <span className="text-sm">
                  I acknowledge that I have read and agree to the disclaimer
                  above. <span className="text-error">*</span>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button type="submit" className="w-full btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
