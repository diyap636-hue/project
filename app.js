/**
 * CA INTER EXAM TRACKER - CORE APPLICATION ENGINE
 * Features:
 * - Persistent Exam Countdown & Motivational Phase Tracker
 * - Preloaded 6-Paper ICAI Intermediate Syllabus (New Scheme)
 * - Multi-stage Revision Tracker (Lecture, Rev 1, Rev 2 / RTP)
 * - Dynamic Analytics & Paper-wise Progress
 * - Audio-synthesized Focus Pomodoro Timer
 * - Data Backup, Export, Import & Reset
 */

// Default ICAI CA Intermediate Syllabus Data (New Scheme)
const DEFAULT_SYLLABUS = {
  p1: {
    id: "p1",
    code: "Paper 1",
    name: "Advanced Accounting",
    group: 1,
    chapters: [
      { id: "p1_c1", name: "Introduction to Accounting Standards & Conceptual Framework", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p1_c2", name: "AS 1, AS 2 (Valuation of Inventories) & AS 3 (Cash Flow Statement)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p1_c3", name: "AS 4, AS 5, AS 7 (Construction Contracts) & AS 9 (Revenue Recognition)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p1_c4", name: "AS 10 (Property, Plant & Equip) & AS 11 (Foreign Exchange)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p1_c5", name: "AS 12 (Govt Grants), AS 13 (Investments) & AS 14 (Amalgamation)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p1_c6", name: "AS 15, AS 16 (Borrowing Costs), AS 17 (Segment) & AS 18 (Related Party)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p1_c7", name: "AS 19 (Leases), AS 20 (EPS) & AS 22 (Taxes on Income)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p1_c8", name: "AS 24, AS 26 (Intangible Assets), AS 28 (Impairment) & AS 29 (Provisions)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p1_c9", name: "Financial Statements of Companies (Schedule III Preparation)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p1_c10", name: "Buyback of Securities & Accounting for Share-Based Payments (ESOP)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p1_c11", name: "Amalgamation & Internal Reconstruction of Companies", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p1_c12", name: "Accounting for Branches including Foreign Branches", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p1_c13", name: "Consolidated Financial Statements (AS 21, AS 23, AS 27)", category: "A", completed: false, rev1: false, rev2: false }
    ]
  },
  p2: {
    id: "p2",
    code: "Paper 2",
    name: "Corporate and Other Laws",
    group: 1,
    chapters: [
      { id: "p2_c1", name: "Preliminary & Incorporation of Company (Sec 1-22)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p2_c2", name: "Prospectus and Allotment of Securities (Sec 23-42)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p2_c3", name: "Share Capital and Debentures (Sec 43-72)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p2_c4", name: "Acceptance of Deposits by Companies (Sec 73-76A)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p2_c5", name: "Registration of Charges (Sec 77-87)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p2_c6", name: "Management & Administration - General Meetings (Sec 88-122)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p2_c7", name: "Declaration and Payment of Dividend (Sec 123-127)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p2_c8", name: "Accounts of Companies & CSR (Sec 128-138)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p2_c9", name: "Audit and Auditors (Sec 139-148)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p2_c10", name: "Companies Incorporated Outside India (Sec 379-393A)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p2_c11", name: "The Limited Liability Partnership Act, 2008 (LLP Act)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p2_c12", name: "The General Clauses Act, 1897", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p2_c13", name: "Interpretation of Statutes, Deeds and Documents", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p2_c14", name: "The Foreign Exchange Management Act, 1999 (FEMA)", category: "A", completed: false, rev1: false, rev2: false }
    ]
  },
  p3: {
    id: "p3",
    code: "Paper 3",
    name: "Taxation (DT & GST)",
    group: 1,
    chapters: [
      { id: "p3_c1", name: "DT: Basic Concepts & Residential Status (Sec 1-9)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c2", name: "DT: Incomes which do not form part of Total Income (Sec 10)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p3_c3", name: "DT: Salaries (Sec 15-17)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c4", name: "DT: Income from House Property (Sec 22-27)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p3_c5", name: "DT: Profits & Gains of Business or Profession - PGBP (Sec 28-44DB)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c6", name: "DT: Capital Gains (Sec 45-55A)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c7", name: "DT: Income from Other Sources (Sec 56-59)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p3_c8", name: "DT: Clubbing & Set-off / Carry Forward of Losses", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c9", name: "DT: Deductions from GTI (Chapter VI-A: 80C to 80U)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c10", name: "DT: Advance Tax, TDS, TCS & Return of Income", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c11", name: "DT: Computation of Total Income & Tax Liability (Sec 115BAC)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c12", name: "GST: Supply under GST & Charge of GST (RCM)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c13", name: "GST: Place of Supply & Exemptions from GST", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c14", name: "GST: Time and Value of Supply (Sec 12-15)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c15", name: "GST: Input Tax Credit - ITC (Sec 16, 17, 18)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p3_c16", name: "GST: Registration under GST (Sec 22-30)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p3_c17", name: "GST: Tax Invoice, E-Way Bill, Payment of Tax & Returns", category: "A", completed: false, rev1: false, rev2: false }
    ]
  },
  p4: {
    id: "p4",
    code: "Paper 4",
    name: "Cost & Management Accounting",
    group: 2,
    chapters: [
      { id: "p4_c1", name: "Introduction to Cost and Management Accounting", category: "C", completed: false, rev1: false, rev2: false },
      { id: "p4_c2", name: "Material Cost (EOQ, Stock Levels, Inventory Control)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p4_c3", name: "Employee Cost & Direct Expenses (Labour Turn-over, Incentives)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p4_c4", name: "Overheads: Absorption Costing Method", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p4_c5", name: "Activity Based Costing (ABC)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p4_c6", name: "Cost Sheet (Format, Production Costs, Reconciliation)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p4_c7", name: "Cost Accounting Systems (Integrated & Non-Integrated)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p4_c8", name: "Unit & Batch Costing + Job & Contract Costing", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p4_c9", name: "Process & Operation Costing (Joint & By-Products)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p4_c10", name: "Service / Operating Costing (Transport, Hospital, Hotel)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p4_c11", name: "Standard Costing (Material, Labour & Overhead Variances)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p4_c12", name: "Marginal Costing (CVP Analysis, BEP, Decision Making)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p4_c13", name: "Budget and Budgetary Control (Cash & Flexible Budgets)", category: "A", completed: false, rev1: false, rev2: false }
    ]
  },
  p5: {
    id: "p5",
    code: "Paper 5",
    name: "Auditing and Ethics",
    group: 2,
    chapters: [
      { id: "p5_c1", name: "Nature, Objective and Scope of Audit (SA 200, SQC 1)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p5_c2", name: "Audit Strategy, Audit Planning & Programme (SA 300)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p5_c3", name: "Risk Assessment & Internal Control (SA 315, SA 330, IT Control)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p5_c4", name: "Audit Evidence (SA 500, 501, 505, 520 & SA 530 Sampling)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p5_c5", name: "Audit of Items of Financial Statements (Vouching & Verification)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p5_c6", name: "Audit Documentation (SA 230) & Audit Trail", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p5_c7", name: "Completion and Review (SA 560, SA 570 Going Concern, SA 580)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p5_c8", name: "Audit Report (SA 700, SA 701 KAM, SA 705 Modified, SA 706)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p5_c9", name: "Special Features of Audit of Different Entities (Societies, Trusts)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p5_c10", name: "Audit of Banks (NPA Norms, Advances, Prudential Regulations)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p5_c11", name: "Ethics and Terms of Engagements (SA 210, Code of Ethics)", category: "A", completed: false, rev1: false, rev2: false }
    ]
  },
  p6: {
    id: "p6",
    code: "Paper 6",
    name: "FM & Strategic Management",
    group: 2,
    chapters: [
      { id: "p6_c1", name: "FM: Scope and Objectives of Financial Management", category: "C", completed: false, rev1: false, rev2: false },
      { id: "p6_c2", name: "FM: Types of Financing & Financial Markets", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p6_c3", name: "FM: Financial Analysis and Planning - Ratio Analysis", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p6_c4", name: "FM: Cost of Capital (Cost of Equity, Debt, Preference, WACC)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p6_c5", name: "FM: Financing Decisions - Capital Structure & EBIT-EPS", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p6_c6", name: "FM: Financing Decisions - Leverages (DOL, DFL, DCL)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p6_c7", name: "FM: Investment Decisions - Capital Budgeting (NPV, IRR)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p6_c8", name: "FM: Dividend Decisions (Walter, Gordon, MM Model)", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p6_c9", name: "FM: Management of Working Capital (Cash, Debtors, Inventory)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p6_c10", name: "SM: Introduction to Strategic Management & Strategic Intent", category: "B", completed: false, rev1: false, rev2: false },
      { id: "p6_c11", name: "SM: Strategic Analysis: External (PESTLE, Porter's 5 Forces)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p6_c12", name: "SM: Strategic Analysis: Internal (SWOT, BCG Matrix, Ansoff)", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p6_c13", name: "SM: Strategic Choices: Business Level & Corporate Strategies", category: "A", completed: false, rev1: false, rev2: false },
      { id: "p6_c14", name: "SM: Strategy Implementation and Control", category: "A", completed: false, rev1: false, rev2: false }
    ]
  }
};

// Inspirational Motivational Quotes for CA Aspirants
const MOTIVATIONAL_QUOTES = [
  "\"The prefix 'CA' before your name is worth every late night sacrifice.\"",
  "\"Consistency beats intensity. Conquer one chapter every single day.\"",
  "\"Your hard work today will be your pride tomorrow on Result Day.\"",
  "\"Revise until the concepts become your second nature.\"",
  "\"Trust the process. 3 hours of focused study beats 8 hours of distraction.\"",
  "\"Every solved question brings you one step closer to Chartered Accountant.\""
];

// App State
class ExamTrackerApp {
  constructor() {
    this.storageKeySyllabus = "ca_inter_syllabus_v1";
    this.storageKeyExamDate = "ca_inter_exam_date_v1";
    this.storageKeyTheme = "ca_inter_theme_v1";
    this.storageKeyViewMode = "ca_inter_view_mode_v1"; // 'simple' or 'detailed'
    
    this.syllabus = this.loadSyllabus();
    this.examDate = this.loadExamDate();
    this.currentTheme = localStorage.getItem(this.storageKeyTheme) || "dark";
    this.viewMode = localStorage.getItem(this.storageKeyViewMode) || "simple";
    
    this.currentGroupFilter = "all"; // 'all', 'g1', 'g2'
    this.currentStatusFilter = "all"; // 'all', 'pending', 'completed', 'cat-a'
    this.searchQuery = "";
    
    // Pomodoro State
    this.pomoTimeLeft = 25 * 60;
    this.pomoDuration = 25 * 60;
    this.pomoMode = "focus"; // 'focus', 'shortBreak', 'longBreak'
    this.pomoTimerId = null;
    this.pomoRunning = false;
    
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.renderExamDate();
    this.startCountdown();
    this.renderQuote();
    this.renderSyllabus();
    this.updateStats();
    this.setupEventListeners();
    this.setupAudio();
  }

  // --- Persistence & Storage ---
  loadSyllabus() {
    const saved = localStorage.getItem(this.storageKeySyllabus);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved syllabus, resetting to default", e);
      }
    }
    return JSON.parse(JSON.stringify(DEFAULT_SYLLABUS));
  }

  saveSyllabus() {
    localStorage.setItem(this.storageKeySyllabus, JSON.stringify(this.syllabus));
    this.updateStats();
  }

  loadExamDate() {
    const saved = localStorage.getItem(this.storageKeyExamDate);
    if (saved) return saved;
    // Default: Next ICAI Exam Target (~3 months out from now)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 75);
    const isoString = futureDate.toISOString().split("T")[0];
    localStorage.setItem(this.storageKeyExamDate, isoString);
    return isoString;
  }

  saveExamDate(newDate) {
    this.examDate = newDate;
    localStorage.setItem(this.storageKeyExamDate, newDate);
    this.renderExamDate();
    this.startCountdown();
  }

  // --- Countdown Engine ---
  startCountdown() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    
    const update = () => {
      const target = new Date(`${this.examDate}T09:00:00`).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      const daysEl = document.getElementById("count-days");
      const hoursEl = document.getElementById("count-hours");
      const minsEl = document.getElementById("count-mins");
      const secsEl = document.getElementById("count-secs");
      const phaseEl = document.getElementById("study-phase");

      if (diff <= 0) {
        if (daysEl) daysEl.innerText = "00";
        if (hoursEl) hoursEl.innerText = "00";
        if (minsEl) minsEl.innerText = "00";
        if (secsEl) secsEl.innerText = "00";
        if (phaseEl) phaseEl.innerHTML = `<span>🎯 Exam Underway / Completed!</span>`;
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
      if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
      if (minsEl) minsEl.innerText = String(mins).padStart(2, '0');
      if (secsEl) secsEl.innerText = String(secs).padStart(2, '0');

      // Dynamic phase text
      if (phaseEl) {
        if (days > 60) {
          phaseEl.innerHTML = `<span>📖 Phase 1: Conceptual Clarity & Regular Study</span>`;
        } else if (days > 25) {
          phaseEl.innerHTML = `<span>⚡ Phase 2: Revision 1 & RTP Solving</span>`;
        } else if (days > 7) {
          phaseEl.innerHTML = `<span>🔥 Phase 3: Final Revision & Mock Test Papers</span>`;
        } else {
          phaseEl.innerHTML = `<span>🚀 Final Week: Quick Formula & Standard Review</span>`;
        }
      }
    };

    update();
    this.countdownInterval = setInterval(update, 1000);
  }

  renderExamDate() {
    const displayEl = document.getElementById("exam-date-display");
    if (displayEl && this.examDate) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const dateObj = new Date(`${this.examDate}T00:00:00`);
      displayEl.innerText = dateObj.toLocaleDateString(undefined, options);
    }
  }

  renderQuote() {
    const quoteEl = document.getElementById("quote-display");
    if (quoteEl) {
      const randomIndex = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
      quoteEl.innerText = MOTIVATIONAL_QUOTES[randomIndex];
    }
  }

  // --- Statistics & Progress Calculations ---
  updateStats() {
    let totalChapters = 0;
    let completedChapters = 0;

    Object.values(this.syllabus).forEach(paper => {
      let paperTotal = paper.chapters.length;
      let paperCompleted = paper.chapters.filter(c => c.completed).length;

      totalChapters += paperTotal;
      completedChapters += paperCompleted;

      const paperPct = paperTotal > 0 ? Math.round((paperCompleted / paperTotal) * 100) : 0;

      // Update paper card mini bar and count
      const paperCountEl = document.getElementById(`count-${paper.id}`);
      const paperPctEl = document.getElementById(`pct-${paper.id}`);
      const paperBarEl = document.getElementById(`bar-${paper.id}`);

      if (paperCountEl) paperCountEl.innerText = `${paperCompleted}/${paperTotal} Topics`;
      if (paperPctEl) paperPctEl.innerText = `${paperPct}%`;
      if (paperBarEl) paperBarEl.style.width = `${paperPct}%`;
    });

    const overallPct = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

    // Overall summary metrics
    const overallPctEl = document.getElementById("overall-percentage");
    const overallFractionEl = document.getElementById("overall-fraction");
    const overallBarEl = document.getElementById("overall-progress-bar");
    const remainingEl = document.getElementById("total-remaining-count");
    const radialBar = document.getElementById("radial-bar");

    if (overallPctEl) overallPctEl.innerText = `${overallPct}%`;
    if (overallFractionEl) overallFractionEl.innerText = `${completedChapters} of ${totalChapters} completed`;
    if (overallBarEl) overallBarEl.style.width = `${overallPct}%`;
    if (remainingEl) remainingEl.innerText = String(totalChapters - completedChapters);

    // SVG Radial calculation (circumference is 2 * PI * 45 ≈ 283)
    if (radialBar) {
      const circumference = 283;
      const offset = circumference - (overallPct / 100) * circumference;
      radialBar.style.strokeDashoffset = offset;
    }

    if (overallPct === 100 && totalChapters > 0) {
      this.triggerConfetti();
    }
  }

  // --- Syllabus Rendering & UI ---
  renderSyllabus() {
    const container = document.getElementById("papers-container");
    if (!container) return;

    container.innerHTML = "";

    Object.values(this.syllabus).forEach(paper => {
      // Group Filter check
      if (this.currentGroupFilter === "g1" && paper.group !== 1) return;
      if (this.currentGroupFilter === "g2" && paper.group !== 2) return;

      // Filter chapters based on search and status
      const filteredChapters = paper.chapters.filter(chapter => {
        // Status filter
        if (this.currentStatusFilter === "completed" && !chapter.completed) return false;
        if (this.currentStatusFilter === "pending" && chapter.completed) return false;
        if (this.currentStatusFilter === "cat-a" && chapter.category !== "A") return false;

        // Search query
        if (this.searchQuery.trim() !== "") {
          const q = this.searchQuery.toLowerCase();
          const matchesName = chapter.name.toLowerCase().includes(q);
          const matchesPaper = paper.name.toLowerCase().includes(q) || paper.code.toLowerCase().includes(q);
          return matchesName || matchesPaper;
        }
        return true;
      });

      const paperCard = document.createElement("div");
      paperCard.className = `paper-card ${filteredChapters.length > 0 ? "expanded" : ""}`;
      paperCard.setAttribute("data-paper", paper.id);

      const paperCompleted = paper.chapters.filter(c => c.completed).length;
      const paperTotal = paper.chapters.length;
      const paperPct = paperTotal > 0 ? Math.round((paperCompleted / paperTotal) * 100) : 0;

      paperCard.innerHTML = `
        <div class="paper-header" onclick="app.togglePaperCard('${paper.id}')">
          <div class="paper-title-area">
            <span class="paper-tag-badge">${paper.code}</span>
            <div class="paper-info">
              <h3>${paper.name}</h3>
              <p>Group ${paper.group} • ${paperTotal} Standard Chapters</p>
            </div>
          </div>
          <div class="paper-stats-area">
            <div class="paper-count-stat">
              <div class="count-text" id="count-${paper.id}">${paperCompleted}/${paperTotal} Topics</div>
              <div class="percent-text" id="pct-${paper.id}">${paperPct}% Complete</div>
            </div>
            <div class="paper-mini-bar">
              <div class="paper-mini-fill" id="bar-${paper.id}" style="width: ${paperPct}%"></div>
            </div>
            <div class="paper-actions" onclick="event.stopPropagation()">
              <button class="btn-add-chapter" onclick="app.openAddTopicModal('${paper.id}')" title="Add custom topic">
                <i class="fa-solid fa-plus"></i> Add Topic
              </button>
            </div>
            <i class="fa-solid fa-chevron-down chevron-icon"></i>
          </div>
        </div>
        <div class="paper-body">
          <div class="chapters-list" id="list-${paper.id}">
            ${filteredChapters.length > 0 ? filteredChapters.map(ch => this.renderChapterRow(paper.id, ch)).join("") : `
              <div class="empty-chapters">
                <p><i class="fa-regular fa-folder-open"></i> No topics match current filters.</p>
                <button class="btn-secondary" onclick="app.openAddTopicModal('${paper.id}')">+ Add New Topic</button>
              </div>
            `}
          </div>
        </div>
      `;

      container.appendChild(paperCard);
    });
  }

  renderChapterRow(paperId, chapter) {
    const isDetailed = this.viewMode === "detailed";

    return `
      <div class="chapter-row ${chapter.completed ? 'completed' : ''}" id="ch-row-${chapter.id}">
        <div class="chapter-left">
          <label class="custom-checkbox" title="Mark as Completed">
            <input type="checkbox" ${chapter.completed ? 'checked' : ''} onchange="app.toggleChapter('${paperId}', '${chapter.id}', this.checked)">
            <span class="checkmark"></span>
          </label>
          <div class="chapter-title-wrap">
            <div class="chapter-title">${this.escapeHtml(chapter.name)}</div>
            <div class="chapter-subtext">
              <span class="category-tag tag-cat-${(chapter.category || 'b').toLowerCase()}">Category ${chapter.category || 'B'}</span>
              ${chapter.notes ? `<span>• 📝 ${this.escapeHtml(chapter.notes)}</span>` : ''}
            </div>
          </div>
        </div>
        
        ${isDetailed ? `
          <div class="revision-stages">
            <label class="rev-step ${chapter.rev1 ? 'checked' : ''}" title="First Comprehensive Revision">
              <input type="checkbox" ${chapter.rev1 ? 'checked' : ''} onchange="app.toggleRevision('${paperId}', '${chapter.id}', 'rev1', this.checked)">
              <i class="fa-solid fa-${chapter.rev1 ? 'check-circle' : 'circle-dot'}"></i> Rev 1
            </label>
            <label class="rev-step ${chapter.rev2 ? 'checked' : ''}" title="Second Revision / RTP / PYQ">
              <input type="checkbox" ${chapter.rev2 ? 'checked' : ''} onchange="app.toggleRevision('${paperId}', '${chapter.id}', 'rev2', this.checked)">
              <i class="fa-solid fa-${chapter.rev2 ? 'check-circle' : 'circle-dot'}"></i> Rev 2 / RTP
            </label>
          </div>
        ` : ''}

        <div class="chapter-actions">
          <button class="action-icon-btn" onclick="app.openEditTopicModal('${paperId}', '${chapter.id}')" title="Edit Chapter">
            <i class="fa-solid fa-pencil"></i>
          </button>
          <button class="action-icon-btn delete-btn" onclick="app.deleteChapter('${paperId}', '${chapter.id}')" title="Delete Chapter">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }

  togglePaperCard(paperId) {
    const card = document.querySelector(`.paper-card[data-paper="${paperId}"]`);
    if (card) {
      card.classList.toggle("expanded");
    }
  }

  // --- Chapter CRUD Operations ---
  toggleChapter(paperId, chapterId, isChecked) {
    const paper = this.syllabus[paperId];
    if (!paper) return;

    const chapter = paper.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    chapter.completed = isChecked;
    this.saveSyllabus();

    const row = document.getElementById(`ch-row-${chapterId}`);
    if (row) {
      if (isChecked) {
        row.classList.add("completed");
        this.showToast(`Completed: ${chapter.name}`, "toast-success");
      } else {
        row.classList.remove("completed");
      }
    }
  }

  toggleRevision(paperId, chapterId, revKey, isChecked) {
    const paper = this.syllabus[paperId];
    if (!paper) return;

    const chapter = paper.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    chapter[revKey] = isChecked;
    // If both revisions done, suggest marking chapter completed
    if (chapter.rev1 && chapter.rev2 && !chapter.completed) {
      chapter.completed = true;
    }
    this.saveSyllabus();
    this.renderSyllabus();
  }

  addChapter(paperId, name, category, notes) {
    const paper = this.syllabus[paperId];
    if (!paper) return;

    const newId = `${paperId}_c_${Date.now()}`;
    paper.chapters.push({
      id: newId,
      name: name.trim(),
      category: category || "B",
      notes: notes ? notes.trim() : "",
      completed: false,
      rev1: false,
      rev2: false
    });

    this.saveSyllabus();
    this.renderSyllabus();
    this.showToast(`Added topic to ${paper.name}`, "toast-success");
  }

  updateChapter(paperId, chapterId, newName, newCategory, newNotes) {
    const paper = this.syllabus[paperId];
    if (!paper) return;

    const chapter = paper.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    chapter.name = newName.trim();
    chapter.category = newCategory || "B";
    chapter.notes = newNotes ? newNotes.trim() : "";

    this.saveSyllabus();
    this.renderSyllabus();
    this.showToast("Topic updated successfully", "toast-info");
  }

  deleteChapter(paperId, chapterId) {
    const paper = this.syllabus[paperId];
    if (!paper) return;

    const chapterIndex = paper.chapters.findIndex(c => c.id === chapterId);
    if (chapterIndex === -1) return;

    const deletedName = paper.chapters[chapterIndex].name;
    if (confirm(`Are you sure you want to remove "${deletedName}"?`)) {
      paper.chapters.splice(chapterIndex, 1);
      this.saveSyllabus();
      this.renderSyllabus();
      this.showToast("Topic removed", "toast-info");
    }
  }

  resetToDefaultSyllabus() {
    if (confirm("Are you sure you want to reset all syllabus data to default ICAI New Scheme curriculum? All current progress will be reset!")) {
      this.syllabus = JSON.parse(JSON.stringify(DEFAULT_SYLLABUS));
      this.saveSyllabus();
      this.renderSyllabus();
      this.showToast("Syllabus reset to official ICAI standard", "toast-info");
      this.closeModal('modal-backup');
    }
  }

  // --- Modals Handlers ---
  openAddTopicModal(paperId) {
    const modal = document.getElementById("modal-topic");
    const title = document.getElementById("topic-modal-title");
    const paperSelect = document.getElementById("topic-paper-select");
    const nameInput = document.getElementById("topic-name-input");
    const catSelect = document.getElementById("topic-cat-select");
    const notesInput = document.getElementById("topic-notes-input");
    const editIdInput = document.getElementById("topic-edit-id");

    if (!modal) return;

    title.innerText = "Add New Study Topic";
    editIdInput.value = "";
    nameInput.value = "";
    notesInput.value = "";
    catSelect.value = "B";
    if (paperId && paperSelect) paperSelect.value = paperId;

    modal.classList.add("active");
    nameInput.focus();
  }

  openEditTopicModal(paperId, chapterId) {
    const paper = this.syllabus[paperId];
    if (!paper) return;
    const chapter = paper.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    const modal = document.getElementById("modal-topic");
    const title = document.getElementById("topic-modal-title");
    const paperSelect = document.getElementById("topic-paper-select");
    const nameInput = document.getElementById("topic-name-input");
    const catSelect = document.getElementById("topic-cat-select");
    const notesInput = document.getElementById("topic-notes-input");
    const editIdInput = document.getElementById("topic-edit-id");

    if (!modal) return;

    title.innerText = "Edit Study Topic";
    editIdInput.value = chapterId;
    if (paperSelect) paperSelect.value = paperId;
    nameInput.value = chapter.name;
    catSelect.value = chapter.category || "B";
    notesInput.value = chapter.notes || "";

    modal.classList.add("active");
    nameInput.focus();
  }

  handleTopicFormSubmit(e) {
    e.preventDefault();
    const paperSelect = document.getElementById("topic-paper-select");
    const nameInput = document.getElementById("topic-name-input");
    const catSelect = document.getElementById("topic-cat-select");
    const notesInput = document.getElementById("topic-notes-input");
    const editIdInput = document.getElementById("topic-edit-id");

    const paperId = paperSelect.value;
    const name = nameInput.value;
    const cat = catSelect.value;
    const notes = notesInput.value;
    const editId = editIdInput.value;

    if (!name.trim()) return;

    if (editId) {
      this.updateChapter(paperId, editId, name, cat, notes);
    } else {
      this.addChapter(paperId, name, cat, notes);
    }

    this.closeModal("modal-topic");
  }

  openDateModal() {
    const modal = document.getElementById("modal-date");
    const input = document.getElementById("exam-date-input");
    if (modal && input) {
      input.value = this.examDate;
      modal.classList.add("active");
    }
  }

  handleDateFormSubmit(e) {
    e.preventDefault();
    const input = document.getElementById("exam-date-input");
    if (input && input.value) {
      this.saveExamDate(input.value);
      this.closeModal("modal-date");
      this.showToast("Exam target date updated", "toast-success");
    }
  }

  setPresetExamDate(presetType) {
    const input = document.getElementById("exam-date-input");
    if (!input) return;

    const today = new Date();
    const currentYear = today.getFullYear();
    let targetDate;

    if (presetType === "may") {
      // ICAI May exam cycle (usually May 2)
      targetDate = new Date(currentYear, 4, 2);
      if (targetDate < today) targetDate.setFullYear(currentYear + 1);
    } else if (presetType === "sept") {
      // ICAI September cycle
      targetDate = new Date(currentYear, 8, 12);
      if (targetDate < today) targetDate.setFullYear(currentYear + 1);
    } else if (presetType === "nov") {
      // ICAI Nov cycle
      targetDate = new Date(currentYear, 10, 2);
      if (targetDate < today) targetDate.setFullYear(currentYear + 1);
    } else if (presetType === "30d") {
      targetDate = new Date();
      targetDate.setDate(today.getDate() + 30);
    } else if (presetType === "60d") {
      targetDate = new Date();
      targetDate.setDate(today.getDate() + 60);
    }

    if (targetDate) {
      input.value = targetDate.toISOString().split("T")[0];
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("active");
  }

  // --- Pomodoro Timer & Audio Synthesizer ---
  setupAudio() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    } catch (e) {
      console.warn("Web Audio API not supported in this browser");
    }
  }

  playChime() {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    
    // Play warm melodic two-tone chime
    const now = this.audioCtx.currentTime;
    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, now); // D5
    osc1.frequency.setValueAtTime(880.00, now + 0.2); // A5

    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    osc1.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    osc1.start(now);
    osc1.stop(now + 1.2);
  }

  togglePomodoroDrawer() {
    const panel = document.getElementById("pomodoro-panel");
    if (panel) panel.classList.toggle("open");
  }

  setPomoMode(mode) {
    this.pomoMode = mode;
    if (mode === "focus") this.pomoDuration = 25 * 60;
    else if (mode === "shortBreak") this.pomoDuration = 5 * 60;
    else if (mode === "longBreak") this.pomoDuration = 15 * 60;

    this.resetPomoTimer();

    // Update active button
    document.querySelectorAll(".pomo-mode-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.mode === mode);
    });
  }

  togglePomoTimer() {
    if (this.pomoRunning) {
      this.pausePomoTimer();
    } else {
      this.startPomoTimer();
    }
  }

  startPomoTimer() {
    if (this.pomoRunning) return;
    this.pomoRunning = true;
    const mainBtn = document.getElementById("btn-pomo-start");
    if (mainBtn) mainBtn.innerText = "Pause Session";

    this.pomoTimerId = setInterval(() => {
      if (this.pomoTimeLeft > 0) {
        this.pomoTimeLeft--;
        this.updatePomoDisplay();
      } else {
        this.playChime();
        this.pausePomoTimer();
        this.showToast(
          this.pomoMode === "focus" ? "🎉 Focus session finished! Take a break." : "⚡ Break ended! Ready to focus?",
          "toast-success"
        );
      }
    }, 1000);
  }

  pausePomoTimer() {
    this.pomoRunning = false;
    clearInterval(this.pomoTimerId);
    const mainBtn = document.getElementById("btn-pomo-start");
    if (mainBtn) mainBtn.innerText = "Start Focus";
  }

  resetPomoTimer() {
    this.pausePomoTimer();
    this.pomoTimeLeft = this.pomoDuration;
    this.updatePomoDisplay();
  }

  updatePomoDisplay() {
    const mins = Math.floor(this.pomoTimeLeft / 60);
    const secs = this.pomoTimeLeft % 60;
    const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    
    const displayEl = document.getElementById("pomo-display");
    if (displayEl) displayEl.innerText = str;
  }

  // --- Theme, View Modes & Filters ---
  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(this.storageKeyTheme, theme);

    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
      themeIcon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === "dark" ? "light" : "dark";
    this.applyTheme(nextTheme);
  }

  toggleViewMode(isChecked) {
    this.viewMode = isChecked ? "detailed" : "simple";
    localStorage.setItem(this.storageKeyViewMode, this.viewMode);
    this.renderSyllabus();
  }

  setGroupFilter(group) {
    this.currentGroupFilter = group;
    document.querySelectorAll(".tab-btn").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.group === group);
    });
    this.renderSyllabus();
  }

  setStatusFilter(status) {
    this.currentStatusFilter = status;
    document.querySelectorAll(".pill-btn").forEach(pill => {
      pill.classList.toggle("active", pill.dataset.status === status);
    });
    this.renderSyllabus();
  }

  handleSearch(query) {
    this.searchQuery = query;
    const clearBtn = document.getElementById("search-clear");
    if (clearBtn) clearBtn.style.display = query ? "block" : "none";
    this.renderSyllabus();
  }

  clearSearch() {
    const input = document.getElementById("syllabus-search");
    if (input) input.value = "";
    this.handleSearch("");
  }

  // --- Data Portability: Export / Import ---
  openBackupModal() {
    const modal = document.getElementById("modal-backup");
    if (modal) modal.classList.add("active");
  }

  exportData() {
    const data = {
      version: 1,
      exportedAt: new Date().toISOString(),
      examDate: this.examDate,
      syllabus: this.syllabus
    };
    const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", jsonStr);
    dlAnchor.setAttribute("download", `CA_Inter_Study_Tracker_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    this.showToast("Backup exported successfully", "toast-success");
  }

  importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed.syllabus) {
          this.syllabus = parsed.syllabus;
          this.saveSyllabus();
        }
        if (parsed.examDate) {
          this.saveExamDate(parsed.examDate);
        }
        this.renderSyllabus();
        this.showToast("Data restored successfully!", "toast-success");
        this.closeModal("modal-backup");
      } catch (err) {
        alert("Invalid backup file format. Please upload a valid JSON backup.");
      }
    };
    reader.readAsText(file);
  }

  printChecklist() {
    window.print();
  }

  // --- Confetti Animation ---
  triggerConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#6366f1", "#10b981", "#f59e0b", "#f43f5e", "#06b6d4", "#a855f7"];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        r: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 3,
        gravity: 0.25,
        alpha: 1
      });
    }

    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      if (alive) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrame);
      }
    };
    animate();
  }

  // --- Toast System ---
  showToast(message, type = "toast-info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${this.escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>"']/g, function(m) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[m];
    });
  }

  // --- Event Listeners Setup ---
  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById("syllabus-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => this.handleSearch(e.target.value));
    }

    // Modal background clicks to close
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.classList.remove("active");
        }
      });
    });

    // View mode switch
    const viewSwitch = document.getElementById("view-mode-checkbox");
    if (viewSwitch) {
      viewSwitch.checked = this.viewMode === "detailed";
      viewSwitch.addEventListener("change", (e) => this.toggleViewMode(e.target.checked));
    }
  }
}

// Global Application Instance
let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new ExamTrackerApp();
});
