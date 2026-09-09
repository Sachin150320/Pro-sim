"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import CrumbBanner from "@/app/Components/CrumbBanner/CrumbBanner";
import { UploadCloud, CheckCircle2, Send } from "lucide-react";
import { jobs } from "@/app/Components/CareersPage/CareersPage";
import "./ApplyPage.css";

const positions = jobs.map((j) => j.title);
const locations = ["Bengaluru", "Mumbai", "Other"];

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
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const takeFile = (file?: File | null) => {
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="ap-done">
        <CheckCircle2 size={52} strokeWidth={1.5} />
        <h2>Application received</h2>
        <p>
          Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. Our HR team
          will review your details and get back to you. You can also email your
          CV to <a href="mailto:HR@pro-sim.com">HR@pro-sim.com</a>.
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
          Take the next step in your career. Submit your details below and our HR
          team will get back to you.
        </p>
      </div>

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
          <em>Supported formats: PDF, DOC, DOCX (Max 5MB)</em>
        </label>
      </div>

      <button type="submit" className="ap-submit">
        <Send size={16} strokeWidth={1.9} />
        Submit Application
      </button>
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
