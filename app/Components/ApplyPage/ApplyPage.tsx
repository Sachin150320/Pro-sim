"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import { UploadCloud, CheckCircle2, Send } from "lucide-react";
import { jobs } from "@/app/Components/CareersPage/CareersPage";
import "./ApplyPage.css";

const positions = jobs.map((j) => j.title);
const locations = ["Bengaluru", "Mumbai", "Other"];

const HR_EMAILS = [
  "HR@pro-sim.com",
  "Sandeep.PS@pro-sim.com",
  "ps2@pro-sim.com",
  "emswebdesign22@gmail.com",
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  location: "",
  intro: "",
};

function ApplyForm() {
  const params = useSearchParams();
  const preRole = params.get("role") ?? "";

  const [form, setForm] = useState({
    ...emptyForm,
    position: positions.includes(preRole) ? preRole : "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const set = (key: keyof typeof form, value: string) => {
    setForm((f) => ({
      ...f,
      [key]: value,
    }));
  };

  const takeFile = (selectedFile?: File | null) => {
    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const maxSize = 5 * 1024 * 1024;

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Please upload only PDF, DOC or DOCX files.");
      return;
    }

    if (selectedFile.size > maxSize) {
      setError("Resume file must be 5MB or smaller.");
      return;
    }

    setError("");
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (sending) return;

    if (!file) {
      setError("Please upload your resume / CV.");
      return;
    }

    setSending(true);
    setError("");

    try {
      const data = new FormData();

      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("position", form.position);
      data.append("experience", form.experience);
      data.append("location", form.location);
      data.append("intro", form.intro);

      // Resume file
      data.append("resume", file);

      const response = await fetch(
        "https://pro-sim.com/demo1/send-career.php",
        {
          method: "POST",
          body: data,
        }
      );

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error("The server returned an invalid response.");
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your application."
        );
      }

      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Career application error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to submit your application. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="ap-done">
        <CheckCircle2 size={52} strokeWidth={1.5} />

        <h2>Application Submitted Successfully</h2>

        <p>
          Thank you
          {form.name ? `, ${form.name.split(" ")[0]}` : ""}. Your application
          has been sent to our HR team. We will review your profile and get
          back to you if your experience matches the position.
        </p>

        <p>
          Applied Position: <strong>{form.position}</strong>
        </p>

        <a href="/careers" className="ap-done-link">
          Back to Careers
        </a>
      </div>
    );
  }

  return (
    <form className="ap-form" onSubmit={handleSubmit}>
      <div className="ap-form-head">
        <h2>Apply Now</h2>

        <p>
          Take the next step in your career. Submit your details and CV below
          and our HR team will get back to you.
        </p>
      </div>

      {error && (
        <div
          style={{
            marginBottom: "20px",
            padding: "14px 16px",
            borderRadius: "8px",
            background: "#fff1f1",
            border: "1px solid #f0b5b5",
            color: "#b00020",
            fontSize: "14px",
          }}
        >
          {error}
        </div>
      )}

      <div className="ap-grid">
        <label className="ap-field">
          <span>
            Full Name <i>*</i>
          </span>

          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </label>

        <label className="ap-field">
          <span>
            Email Address <i>*</i>
          </span>

          <input
            type="email"
            required
            placeholder="name@example.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </label>

        <label className="ap-field">
          <span>
            Phone Number <i>*</i>
          </span>

          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </label>

        <label className="ap-field">
          <span>
            Applying Position <i>*</i>
          </span>

          <select
            required
            value={form.position}
            onChange={(e) => set("position", e.target.value)}
          >
            <option value="" disabled>
              Select a role…
            </option>

            {positions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}

            <option value="General Application">
              General Application / Other
            </option>
          </select>
        </label>

        <label className="ap-field">
          <span>
            Total Experience (Years) <i>*</i>
          </span>

          <input
            type="text"
            required
            placeholder="e.g. 4 Years"
            value={form.experience}
            onChange={(e) => set("experience", e.target.value)}
          />
        </label>

        <label className="ap-field">
          <span>
            Preferred Location <i>*</i>
          </span>

          <select
            required
            value={form.location}
            onChange={(e) => set("location", e.target.value)}
          >
            <option value="" disabled>
              Select location…
            </option>

            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>

        <label className="ap-field ap-field--full">
          <span>Brief Introduction / Key Skills</span>

          <textarea
            rows={4}
            placeholder="Mention software competencies, current CTC, notice period, or brief summary…"
            value={form.intro}
            onChange={(e) => set("intro", e.target.value)}
          />
        </label>
      </div>

      <div className="ap-field ap-field--full">
        <span className="ap-upload-title">
          Upload Resume / CV <i>*</i>
        </span>

        <label
          className={`ap-upload${dragging ? " is-drag" : ""}${
            fileName ? " has-file" : ""
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            takeFile(e.dataTransfer.files?.[0]);
          }}
        >
          <input
            type="file"
            required
            accept=".pdf,.doc,.docx"
            onChange={(e) => takeFile(e.target.files?.[0])}
          />

          <UploadCloud size={24} strokeWidth={1.7} />

          <strong>
            {fileName || "Click to Upload or Drag & Drop Resume"}
          </strong>

          <em>
            Supported formats: PDF, DOC, DOCX (Max 5MB)
          </em>
        </label>
      </div>

      <button
        type="submit"
        className="ap-submit"
        disabled={sending}
      >
        <Send size={16} strokeWidth={1.9} />

        {sending ? "Submitting..." : "Submit Application"}
      </button>

      <p className="ap-submit-note">
        Your application and resume will be securely submitted to our HR team.
      </p>
    </form>
  );
}

export default function ApplyPage() {
  return (
    <main className="ap-page">
      <CrumbBanner
        title="Apply Now"
        subtitle="Take the next step in your career — submit your details and our HR team will get back to you."
      />

      <section className="ap-section">
        <div className="ap-container">
          <Suspense fallback={null}>
            <ApplyForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}