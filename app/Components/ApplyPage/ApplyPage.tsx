"use client";

import React, { FormEvent, useMemo, useState } from "react";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import {
  UploadCloud,
  CheckCircle2,
  Send,
} from "lucide-react";
import { jobs } from "@/app/Components/CareersPage/CareersPage";
import "./ApplyPage.css";

type FormState = {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  location: string;
  intro: string;
};

const locations = [
  "Bengaluru",
  "Mumbai",
  "Other",
];

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  location: "",
  intro: "",
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
];

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function ApplyPage() {
  const positions = useMemo(
    () => jobs.map((job) => job.title),
    []
  );

  const [form, setForm] = useState<FormState>(emptyForm);
  const [resume, setResume] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitError("");
  };

  const validateFile = (file: File) => {
    const fileName = file.name.toLowerCase();

    const validExtension = ALLOWED_EXTENSIONS.some(
      (extension) => fileName.endsWith(extension)
    );

    const validMime =
      !file.type ||
      ALLOWED_FILE_TYPES.includes(file.type);

    if (!validExtension || !validMime) {
      return "Please upload a PDF, DOC, or DOCX file.";
    }

    if (file.size > MAX_FILE_SIZE) {
      return "Resume size must be 5 MB or less.";
    }

    return "";
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    setFileError("");

    if (!file) {
      setResume(null);
      return;
    }

    const error = validateFile(file);

    if (error) {
      setResume(null);
      setFileError(error);
      event.target.value = "";
      return;
    }

    setResume(file);
    setSubmitError("");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitError("");
    setSuccessMessage("");

    if (!form.name.trim()) {
      setSubmitError("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setSubmitError("Please enter your email address.");
      return;
    }

    if (!form.phone.trim()) {
      setSubmitError("Please enter your phone number.");
      return;
    }

    if (!form.position) {
      setSubmitError("Please select a position.");
      return;
    }

    if (!form.experience.trim()) {
      setSubmitError("Please enter your experience.");
      return;
    }

    if (!form.location) {
      setSubmitError("Please select your preferred location.");
      return;
    }

    if (!resume) {
      setSubmitError("Please upload your resume.");
      return;
    }

    const fileErrorMessage = validateFile(resume);

    if (fileErrorMessage) {
      setSubmitError(fileErrorMessage);
      return;
    }

    try {
      setIsSubmitting(true);

      const data = new FormData();

      data.append("name", form.name.trim());
      data.append("email", form.email.trim());
      data.append("phone", form.phone.trim());
      data.append("position", form.position);
      data.append("experience", form.experience.trim());
      data.append("location", form.location);
      data.append("intro", form.intro.trim());
      data.append("resume", resume);

      const response = await fetch(
        "https://pro-sim.com/demo1/send-career.php",
        {
          method: "POST",
          body: data,
        }
      );

      const responseText = await response.text();

      let result: {
        success?: boolean;
        message?: string;
      };

      try {
        result = JSON.parse(responseText);
      } catch {
        console.error(
          "Invalid PHP response:",
          responseText
        );

        throw new Error(
          "The server returned an invalid response. Please try again later."
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to submit your application. Please try again."
        );
      }

      setSuccessMessage(
        result.message ||
          "Your application has been submitted successfully."
      );

      setForm(emptyForm);
      setResume(null);
      setFileError("");

      const fileInput = document.getElementById(
        "ap-resume"
      ) as HTMLInputElement | null;

      if (fileInput) {
        fileInput.value = "";
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(
        "Application submission error:",
        error
      );

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your application."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="ap-page">

      <CrumbBanner title="Apply Now" />

      <section className="ap-section">
        <div className="ap-container">

          <div className="ap-header">
            <span className="ap-label">
              CAREERS
            </span>

            <h1>
              Join ProSIM
            </h1>

            <p>
              Take the next step in your engineering
              career. Fill in the application form below
              and upload your latest resume.
            </p>
          </div>

          {successMessage && (
            <div
              className="ap-success"
              role="alert"
            >
              <CheckCircle2
                size={24}
                strokeWidth={2}
              />

              <div>
                <strong>
                  Application Submitted
                </strong>

                <p>
                  {successMessage}
                </p>
              </div>
            </div>
          )}

          {submitError && (
            <div
              className="ap-error"
              role="alert"
            >
              <strong>
                Unable to submit application
              </strong>

              <p>
                {submitError}
              </p>
            </div>
          )}

          <form
            className="ap-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* FIXED: changed ap-form-grid to ap-grid */}
            <div className="ap-grid">

              <div className="ap-field">
                <label htmlFor="ap-name">
                  Full Name <span>*</span>
                </label>

                <input
                  id="ap-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="ap-field">
                <label htmlFor="ap-email">
                  Email Address <span>*</span>
                </label>

                <input
                  id="ap-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="ap-field">
                <label htmlFor="ap-phone">
                  Phone Number <span>*</span>
                </label>

                <input
                  id="ap-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="ap-field">
                <label htmlFor="ap-position">
                  Position Applying For <span>*</span>
                </label>

                <select
                  id="ap-position"
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a position
                  </option>

                  {positions.map((position) => (
                    <option
                      key={position}
                      value={position}
                    >
                      {position}
                    </option>
                  ))}
                </select>
              </div>

              <div className="ap-field">
                <label htmlFor="ap-experience">
                  Experience <span>*</span>
                </label>

                <input
                  id="ap-experience"
                  name="experience"
                  type="text"
                  value={form.experience}
                  onChange={handleChange}
                  placeholder="e.g. 3 years"
                  required
                />
              </div>

              <div className="ap-field">
                <label htmlFor="ap-location">
                  Preferred Location <span>*</span>
                </label>

                <select
                  id="ap-location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select location
                  </option>

                  {locations.map((location) => (
                    <option
                      key={location}
                      value={location}
                    >
                      {location}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* FIXED: changed ap-field-full to ap-field--full */}
            <div className="ap-field ap-field--full">
              <label htmlFor="ap-intro">
                Brief Introduction
              </label>

              <textarea
                id="ap-intro"
                name="intro"
                value={form.intro}
                onChange={handleChange}
                placeholder="Tell us briefly about yourself, your experience, or why you are interested in this position."
                rows={6}
              />
            </div>

            {/* FIXED: changed ap-field-full to ap-field--full */}
            <div className="ap-field ap-field--full">
              <label htmlFor="ap-resume">
                Resume / CV <span>*</span>
              </label>

              <label
                htmlFor="ap-resume"
                className={`ap-upload ${
                  resume ? "has-file" : ""
                }`}
              >
                <UploadCloud
                  size={30}
                  strokeWidth={1.7}
                />

                <span className="ap-upload-title">
                  {resume
                    ? resume.name
                    : "Click to upload your resume"}
                </span>

                <span className="ap-upload-info">
                  PDF, DOC or DOCX — Maximum 5 MB
                </span>

                <input
                  id="ap-resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                />
              </label>

              {fileError && (
                <p className="ap-file-error">
                  {fileError}
                </p>
              )}
            </div>

            <div className="ap-submit">
              <button
                type="submit"
                className="ap-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="ap-submit-spinner" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send
                      size={17}
                      strokeWidth={2}
                    />
                  </>
                )}
              </button>
            </div>

          </form>

        </div>
      </section>

    </main>
  );
}