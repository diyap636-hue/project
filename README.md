# 🎓 CA Inter Exam Tracker & Syllabus Manager

A high-performance, distraction-free study companion and revision tracker built specifically for **Chartered Accountancy Intermediate** students preparing for the ICAI examination (New Scheme - 6 Papers).

![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(Offline%20Ready)-green)
![ICAI New Scheme](https://img.shields.io/badge/Curriculum-ICAI%206%20Papers-indigo)

---

## 🌟 Key Features

### 1. ⏱️ Live Target Exam Countdown
- **Target Date Picker**: Configure your target exam date with 1-click ICAI session presets (May Cycle, September Cycle, November Cycle, or custom date).
- **Ticking Digital Clock**: Real-time counter showing Days, Hours, Minutes, and Seconds.
- **Dynamic Study Phase Indicator**: Context-aware guidance (Conceptual Phase, Revision 1 & RTPs, Mock Test Papers, Final Review).
- **Daily Motivational Quotes**: Inspiring quotes curated for CA aspirants.

### 2. 📚 Preloaded Official ICAI 6-Paper Syllabus
Pre-populated with 80+ official chapters across both groups:
- **Paper 1**: Advanced Accounting *(Accounting Standards, Company Accounts, Branches, Consolidation)*
- **Paper 2**: Corporate and Other Laws *(Company Law, LLP Act, General Clauses, Interpretation, FEMA)*
- **Paper 3**: Taxation *(Income Tax Law & Goods and Services Tax - GST)*
- **Paper 4**: Cost and Management Accounting *(Material, Labour, Overheads, ABC, Cost Sheet, Marginal, Standard, Budgets)*
- **Paper 5**: Auditing and Ethics *(Standards on Auditing, Audit Planning, Bank Audit, Ethics)*
- **Paper 6**: Financial Management and Strategic Management *(Financial Ratios, Capital Budgeting, WACC, Leverage & Strategic Choices)*

### 3. 🎯 Multi-Stage Revision Tracking & ABC Categorization
- **Simple View**: Single-click checkbox to mark chapter completion.
- **Detailed Revision View**: Independent tracking for **Lectures / Concept**, **Revision 1 (R1)**, and **Revision 2 / RTP / PYQ Practice (R2)**.
- **ABC Analysis**: Prioritize high-yield Category A chapters.
- **Full CRUD**: Add custom topics, edit topic titles, add custom notes, and delete topics.

### 4. 📊 Real-Time Analytics & Progress Bars
- **Overall Completion Gauge**: Animated SVG radial progress indicator + aggregated percentage.
- **Paper-specific Progress**: Individual percentage bars and topic counters per paper.
- **100% Celebration**: Interactive confetti animation on reaching complete milestone.

### 5. ⚡ Distraction-Free Aspirant Tools
- **Built-in Pomodoro Focus Timer**: 25m Focus / 5m Break / 15m Long Break with Web Audio synthesized melodic chime.
- **Instant Search & Filters**: Live search across all papers, filter by Group 1, Group 2, Pending, or Category A.
- **Data Portability**: Full JSON export/import for device transfers and backup.
- **Printable Checklist Mode**: Clean, formatted print layout for physical paper checklists.
- **Dual Themes**: Obsidian Dark Mode (default) and Crisp Light Mode.

---

## 🚀 How to Run Locally

Since this is a lightweight, zero-dependency web application:

1. Double-click `index.html` to open it directly in any modern web browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, serve it via any static file server:
   ```bash
   npx serve .
   ```
   or with Python:
   ```bash
   python -m http.server 8080
   ```

---

## 🔒 Privacy & Persistence
All progress, target dates, and custom chapters are stored strictly **locally on your device** via the browser's `localStorage` API. No account or internet connection required.
