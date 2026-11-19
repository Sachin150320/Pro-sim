"use client";

import React, {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";

import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";

import {
  UploadCloud,
  CheckCircle2,
  Send,
  AlertCircle,
} from "lucide-react";

import { jobs } from "@/app/Components/CareersPage/CareersPage";

import "./ApplyPage.css";

/* =========================================================
   TYPES
========================================================= */

type FormState = {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  location: string;
  intro: string;
};

/* =========================================================
   CONSTANTS
========================================================= */

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

/* =========================================================
   COMPONENT
========================================================= */

export default function ApplyPage() {
  /* =======================================================
     POSITIONS
  ======================================================= */

  const positions = useMemo(
    () => jobs.map((job) => job.title),
    []
  );

  /* =======================================================
     STATE
  ======================================================= */

  const [form, setForm] =
    useState<FormState>(emptyForm);

  const [resume, setResume] =
    useState<File | null>(null);

  const [fileError, setFileError] =
    useState("");

  const [submitError, setSubmitError] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  /* =======================================================
     GET POSITION FROM URL
     
     Example:
     /apply?position=Pipe%20Stress%20Engineer
  ======================================================= */

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const position =
      params.get("position")?.trim() || "";

    if (
      position &&
      positions.includes(position)
    ) {
      setForm((current) => ({
        ...current,
        position,
      }));
    }
  }, [positions]);

  /* =======================================================
     INPUT CHANGE
  ======================================================= */

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const {
      name,
      value,
    } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitError("");
    setSuccessMessage("");
  };

  /* =======================================================
     EMAIL VALIDATION
  ======================================================= */

  const validateEmail = (
    email: string
  ) => {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  /* =======================================================
     PHONE VALIDATION
  ======================================================= */

  const validatePhone = (
    phone: string
  ) => {
    const cleanPhone =
      phone.replace(/\s+/g, "");

    const phoneRegex =
      /^[+0-9()-]{7,20}$/;

    return phoneRegex.test(cleanPhone);
  };

  /* =======================================================
     FILE VALIDATION
  ======================================================= */

  const validateFile = (
    file: File
  ) => {
    const fileName =
      file.name.toLowerCase();

    const validExtension =
      ALLOWED_EXTENSIONS.some(
        (extension) =>
          fileName.endsWith(extension)
      );

    if (!validExtension) {
      return (
        "Please upload a PDF, DOC, or DOCX file."
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return (
        "Resume size must be 5 MB or less."
      );
    }

    return "";
  };

  /* =======================================================
     FILE CHANGE
  ======================================================= */

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      event.target.files?.[0];

    setFileError("");
    setSubmitError("");
    setSuccessMessage("");

    if (!file) {
      setResume(null);
      return;
    }

    const error =
      validateFile(file);

    if (error) {
      setResume(null);
      setFileError(error);

      event.target.value = "";

      return;
    }

    setResume(file);
  };

  /* =======================================================
     RESET FILE INPUT
  ======================================================= */

  const resetFileInput = () => {
    const fileInput =
      document.getElementById(
        "ap-resume"
      ) as HTMLInputElement | null;

    if (fileInput) {
      fileInput.value = "";
    }
  };

  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitError("");
    setSuccessMessage("");

    /* =====================================================
       REQUIRED FIELD VALIDATION
    ===================================================== */

    if (!form.name.trim()) {
      setSubmitError(
        "Please enter your name."
      );

      return;
    }

    if (!form.email.trim()) {
      setSubmitError(
        "Please enter your email address."
      );

      return;
    }

    if (!validateEmail(form.email.trim())) {
      setSubmitError(
        "Please enter a valid email address."
      );

      return;
    }

    if (!form.phone.trim()) {
      setSubmitError(
        "Please enter your phone number."
      );

      return;
    }

    if (!validatePhone(form.phone.trim())) {
      setSubmitError(
        "Please enter a valid phone number."
      );

      return;
    }

    if (!form.position) {
      setSubmitError(
        "Please select a position."
      );

      return;
    }

    if (!form.experience.trim()) {
      setSubmitError(
        "Please enter your experience."
      );

      return;
    }

    if (!form.location) {
      setSubmitError(
        "Please select your preferred location."
      );

      return;
    }

    if (!resume) {
      setSubmitError(
        "Please upload your resume."
      );

      return;
    }

    /* =====================================================
       FINAL FILE VALIDATION
    ===================================================== */

    const fileErrorMessage =
      validateFile(resume);

    if (fileErrorMessage) {
      setSubmitError(
        fileErrorMessage
      );

      return;
    }

    /* =====================================================
       START SUBMISSION
    ===================================================== */

    try {
      setIsSubmitting(true);

      /* ===================================================
         CREATE FORM DATA
      =================================================== */

      const data = new FormData();

      data.append(
        "name",
        form.name.trim()
      );

      data.append(
        "email",
        form.email.trim()
      );

      data.append(
        "phone",
        form.phone.trim()
      );

      data.append(
        "position",
        form.position
      );

      data.append(
        "experience",
        form.experience.trim()
      );

      data.append(
        "location",
        form.location
      );

      data.append(
        "intro",
        form.intro.trim()
      );

      data.append(
        "resume",
        resume,
        resume.name
      );

      /* ===================================================
         SEND TO PHP
      =================================================== */

      const response = await fetch(
        "/send-career.php",
        {
          method: "POST",
          body: data,
        }
      );

      /* ===================================================
         GET RAW RESPONSE FIRST
         
         IMPORTANT:
         Don't immediately use response.json()
         because a 403 response may be plain text/HTML.
      =================================================== */

      const responseText =
        await response.text();

      console.log(
        "Career API status:",
        response.status
      );

      console.log(
        "Career API response:",
        responseText
      );

      /* ===================================================
         SERVER ERROR
      =================================================== */

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error(
            "Server returned 403 Forbidden. Please check the send-career.php file permissions, .htaccess rules, or hosting security/ModSecurity settings."
          );
        }

        if (response.status === 404) {
          throw new Error(
            "send-career.php was not found on the server."
          );
        }

        if (response.status === 500) {
          throw new Error(
            "The server encountered an error while processing your application."
          );
        }

        throw new Error(
          `Server error (${response.status}). ${
            responseText || "Unable to submit application."
          }`
        );
      }

      /* ===================================================
         PARSE JSON
      =================================================== */

      let result: {
        success?: boolean;
        message?: string;
      };

      try {
        result =
          JSON.parse(responseText);
      } catch (jsonError) {
        console.error(
          "Invalid JSON response:",
          jsonError
        );

        throw new Error(
          "The server did not return a valid response. Please check send-career.php."
        );
      }

      /* ===================================================
         PHP RETURNED ERROR
      =================================================== */

      if (!result.success) {
        throw new Error(
          result.message ||
          "Unable to submit application."
        );
      }

      /* ===================================================
         SUCCESS
      =================================================== */

      setSuccessMessage(
        result.message ||
        "Application submitted successfully."
      );

      /* ===================================================
         RESET FORM
      =================================================== */

      setForm(emptyForm);

      setResume(null);

      setFileError("");

      resetFileInput();

      /* ===================================================
         SCROLL TO TOP
      =================================================== */

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } catch (error) {
      console.error(
        "Application error:",
        error
      );

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit application. Please try again."
      );

    } finally {
      setIsSubmitting(false);
    }
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <main className="ap-page">

      {/* ===================================================
          BANNER
      =================================================== */}

      <CrumbBanner
        title="Apply Now"
      />

      {/* ===================================================
          APPLICATION SECTION
      =================================================== */}

      <section className="ap-section">

        <div className="ap-container">

          {/* =================================================
              HEADER
          ================================================= */}

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

          {/* =================================================
              SUCCESS MESSAGE
          ================================================= */}

          {successMessage && (
            <div
              className="ap-success"
              role="alert"
            >

              <CheckCircle2
                size={24}
                aria-hidden="true"
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

          {/* =================================================
              ERROR MESSAGE
          ================================================= */}

          {submitError && (
            <div
              className="ap-error"
              role="alert"
            >

              <AlertCircle
                size={22}
                aria-hidden="true"
              />

              <div>

                <strong>
                  Unable to submit application
                </strong>

                <p>
                  {submitError}
                </p>

              </div>

            </div>
          )}

          {/* =================================================
              FORM
          ================================================= */}

          <form
            className="ap-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* ===============================================
                GRID
            =============================================== */}

            <div className="ap-grid">

              {/* =============================================
                  NAME
              ============================================= */}

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

              {/* =============================================
                  EMAIL
              ============================================= */}

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

              {/* =============================================
                  PHONE
              ============================================= */}

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

              {/* =============================================
                  POSITION
              ============================================= */}

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

                  {positions.map(
                    (position) => (
                      <option
                        key={position}
                        value={position}
                      >
                        {position}
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* =============================================
                  EXPERIENCE
              ============================================= */}

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

              {/* =============================================
                  LOCATION
              ============================================= */}

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

                  {locations.map(
                    (location) => (
                      <option
                        key={location}
                        value={location}
                      >
                        {location}
                      </option>
                    )
                  )}

                </select>

              </div>

            </div>

            {/* =================================================
                INTRODUCTION
            ================================================= */}

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

            {/* =================================================
                RESUME
            ================================================= */}

            <div className="ap-field ap-field--full">

              <label htmlFor="ap-resume">
                Resume / CV <span>*</span>
              </label>

              <label
                htmlFor="ap-resume"
                className={`ap-upload ${
                  resume
                    ? "has-file"
                    : ""
                }`}
              >

                <UploadCloud
                  size={30}
                  strokeWidth={1.7}
                  aria-hidden="true"
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
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />

              </label>

              {/* FILE ERROR */}

              {fileError && (
                <p className="ap-file-error">
                  {fileError}
                </p>
              )}

            </div>

            {/* =================================================
                SUBMIT
            ================================================= */}

            <div className="ap-submit">

              <button
                type="submit"
                className="ap-submit-button"
                disabled={isSubmitting}
              >

                {isSubmitting
                  ? "Submitting..."
                  : "Submit Application"}

                {!isSubmitting && (
                  <Send
                    size={17}
                    aria-hidden="true"
                  />
                )}

              </button>

            </div>

          </form>

        </div>

      </section>

    </main>
  );
}