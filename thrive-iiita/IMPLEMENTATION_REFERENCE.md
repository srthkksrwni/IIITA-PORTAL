# THRIVE @ IIITA — Implementation Reference

**Office for Students' Holistic Growth, Inclusive Care & Mental Wellness**
Indian Institute of Information Technology, Allahabad · Prof. Sonali Agarwal, Professor-in-Charge
Basis: Office Order F.No. IIIT-A/RO/029/2026, dated 09 January 2026.

This document accompanies the working front-end (13 HTML pages + shared CSS/JS) and gives a development team everything needed to take the portal to production.

---

## 1. Recommended Website Name

The build uses **THRIVE @ IIITA** as the working brand. Ten candidate names:

1. THRIVE @ IIITA *(used in this build)*
2. IIITA Thrive360
3. Student Growth & Wellness Office
4. Student Success and Wellbeing Centre
5. Inclusive Growth and Student Development Office
6. IIITA Student Life and Wellness Hub
7. Holistic Growth and Student Success Centre
8. Student Development and Inclusive Care Office
9. Student Wellness and Enrichment Portal
10. Student Excellence and Care Centre

---

## 2. Sitemap

```
Home (index.html)
├── About the Office (about.html)
│     Mission · Vision · Core Values · Objectives · Strategic Goals
│     Office Structure · Governance · Reporting · Roles (Deans / PIC)
├── Programs
│   ├── Our Responsibilities (responsibilities.html)  ← full responsibility matrix
│   ├── Minor & Honours Programs (programs.html)
│   ├── Student Mentorship (mentorship.html)
│   ├── Student Mobility (mobility.html)
│   └── Internship Portal (internships.html)
├── Care & Wellness
│   ├── Mental Wellness (wellness.html)
│   ├── Inclusive Care (inclusive.html)
│   └── Ecological Council (ecological.html)
├── Student Resources (resources.html)
├── News & Events (news.html)
├── Dashboard (dashboard.html)
└── Contact (contact.html)
```

## 3. Navigation Structure

- **Primary nav** (sticky): Home · About · Programs ▾ · Care & Wellness ▾ · Resources · News & Events · Dashboard · Contact
- **Utility bar:** institute identity, IIITA main site link, email, emergency helpline
- **Persistent CTAs:** "Student Support" (→ contact) and "Apply Now" (→ internships)
- **Footer:** four columns (Programs / Care & Wellness / Office / brand) + legal line citing the office order
- **Mobile:** hamburger toggles the full menu; dropdowns expand inline

---

## 4. Page-wise Content — Status

All pages are populated with production-ready copy (no Lorem Ipsum):

| Page | Key sections delivered |
|---|---|
| Home | Hero, quick-access, 8 animated stats, 300-word welcome message, 9 initiative cards, support pillars, news preview, CTA |
| About | Mission, Vision, 6 Core Values, Objectives, Strategic Goals, Structure, Governance, Reporting, Dean AA / Dean SA / PIC roles |
| Responsibilities | 7 responsibility areas (Academic Enrichment, Mentorship, Mobility, Internships, Inclusive Care, Mental Wellness, Welfare & Ecological) with ~35 sub-cards |
| Minor & Honours | Overview, Eligibility, Application steps, Benefits, Testimonials, Important Dates, Downloads, FAQ |
| Mentorship | Peer & Faculty programs, mentor/mentee responsibilities, matching, training, impact, registration, resources, FAQ |
| Mobility | Semester exchange, exchange, credit transfer, partnerships, application, funding, scholarships, stories, FAQ |
| Internships | Live opportunities table, application steps, partners/labs/intl, calendar, success stories, FAQ |
| Inclusive Care | Accessibility statement, support services, Divyangjan support, facilities, assistive tech, request flow, policies, FAQ |
| Mental Wellness | Emergency CTA, mission, wellbeing framework, services, counselling, emergency, self-help, events, toolkit, FAQ |
| Ecological Council | About, mission, vision, projects, waste/water/energy, plantation, volunteers, achievements, FAQ |
| Resources | 9 resource libraries (forms, downloads, policies, guidelines, handbooks, academic, wellness, exchange, internship) + FAQ |
| News & Events | Filterable feed (announcements, workshops, internships, exchange, scholarships, wellness, stories) + subscribe |
| Dashboard | 8 KPI widgets, participation bar chart, support-status bars, participation-by-year analytics table |
| Contact | Office details, email, phone, hours, map embed, Student Support form, Feedback form |

---

## 5. Database Schema (suggested, relational)

```
users (id PK, name, email, role_id FK, enrolment_no, branch, year,
       phone, status, created_at)
       roles (id PK, name, description)              -- student, peer_mentor, faculty,
                                                        counsellor, accessibility_officer,
                                                                                                         coordinator, pic, dean, admin
                                                                                                         permissions (id PK, code, description)
                                                                                                         role_permissions (role_id FK, permission_id FK)

                                                                                                         programs (id PK, type, title, description, eligibility, status)  -- minor | honours
                                                                                                         program_enrolments (id PK, user_id FK, program_id FK, status, applied_at, approved_by FK)

                                                                                                         mentorships (id PK, mentor_id FK, mentee_id FK, type, status, matched_at)
                                                                                                                                                       -- peer | faculty | research | career | industry
                                                                                                                                                       mentorship_sessions (id PK, mentorship_id FK, date, notes, logged_by FK)

                                                                                                                                                       internships (id PK, title, type, host, mode, stipend, slots, deadline, status)
                                                                                                                                                       internship_applications (id PK, user_id FK, internship_id FK,
                                                                                                                                                                                stage, applied_at, updated_at)  -- applied|shortlisted|interview|offer|joined

                                                                                                                                                                                mobility_programs (id PK, partner_institution, country, type, term, status)
                                                                                                                                                                                mobility_applications (id PK, user_id FK, mobility_program_id FK, stage, funding_status)
                                                                                                                                                                                credit_transfers (id PK, user_id FK, mobility_program_id FK, course_map JSON, credits, approved_by FK)

                                                                                                                                                                                wellness_appointments (id PK, user_id FK, counsellor_id FK, slot, mode, status, is_confidential)
                                                                                                                                                                                support_requests (id PK, user_id FK, category, message, stage, assigned_to FK,
                                                                                                                                                                                                  created_at, first_response_at)        -- category incl. accessibility
                                                                                                                                                                                                  accessibility_profiles (id PK, user_id FK, accommodations JSON, assistive_tech JSON, plan_doc)

                                                                                                                                                                                                  events (id PK, title, category, starts_at, venue, organiser, description)
                                                                                                                                                                                                  event_registrations (id PK, event_id FK, user_id FK)
                                                                                                                                                                                                  announcements (id PK, title, category, body, published_at, audience)

                                                                                                                                                                                                  resources (id PK, title, category, file_url, format, is_accessible, updated_at)
                                                                                                                                                                                                  feedback (id PK, user_id FK, target_type, target_id, rating, comment, created_at)
                                                                                                                                                                                                  kpi_snapshots (id PK, metric, value, period, captured_at)  -- powers the dashboard
                                                                                                                                                                                                  ```

                                                                                                                                                                                                  Notes: store wellness/accessibility records with row-level encryption and strict
                                                                                                                                                                                                  access scoping; `is_confidential` rows are visible only to counsellors/accessibility
                                                                                                                                                                                                  officers and the PIC.

                                                                                                                                                                                                  ---

                                                                                                                                                                                                  ## 6. User Roles & Permissions

                                                                                                                                                                                                  | Role | Core permissions |
                                                                                                                                                                                                  |---|---|
                                                                                                                                                                                                  | **Student** | View programs; apply (minor/honours, internships, mobility); register for mentorship & events; book wellness sessions; raise support requests; submit feedback; manage own profile |
                                                                                                                                                                                                  | **Peer Mentor** | All student permissions + view assigned mentees, log sessions |
                                                                                                                                                                                                  | **Faculty Mentor** | View/advise assigned mentees; endorse honours; log sessions |
                                                                                                                                                                                                  | **Counsellor** | Manage wellness appointments; view confidential wellness records (scoped); crisis workflow |
                                                                                                                                                                                                  | **Accessibility Officer** | Manage accessibility profiles & accommodations; handle assistance requests |
                                                                                                                                                                                                  | **Coordinator** | Manage a program area (programs/internships/mobility/events/resources); review applications |
                                                                                                                                                                                                  | **Professor-in-Charge** | Full oversight; approvals; dashboard analytics; governance reports |
                                                                                                                                                                                                  | **Dean (AA / SA)** | Read analytics & governance reports; policy approvals |
                                                                                                                                                                                                  | **Admin** | System config, role assignment, content & user management |

                                                                                                                                                                                                  ---

                                                                                                                                                                                                  ## 7. Dashboard Design

                                                                                                                                                                                                  Widgets implemented (illustrative data, wire to `kpi_snapshots` + live tables):
                                                                                                                                                                                                  Active Mentors · Active Mentees · Internships Offered · Exchange Students ·
                                                                                                                                                                                                  Wellness Activities · Avg. Student Feedback · Open Support Requests · Participation Rate.
                                                                                                                                                                                                  Plus: participation-by-program bar chart, support-request status bars,
                                                                                                                                                                                                  participation-by-year analytics table. Role-aware: students see a personal version;
                                                                                                                                                                                                  coordinators see their area; PIC/Deans see institute-wide.

                                                                                                                                                                                                  ---

                                                                                                                                                                                                  ## 8. Mobile Version

                                                                                                                                                                                                  Single responsive codebase. Breakpoints at 980px (multi-column → single column,
                                                                                                                                                                                                  nav → hamburger) and 560px (stat grid → 2-up, tighter spacing). All forms, tables,
                                                                                                                                                                                                  charts and the dashboard reflow. Touch targets ≥ 44px. Optional later step: wrap as
                                                                                                                                                                                                  a PWA / mobile app via the Notification System.

                                                                                                                                                                                                  ---

                                                                                                                                                                                                  ## 9. Homepage Mockup Description

                                                                                                                                                                                                  A deep navy-to-blue gradient hero with a subtle dot texture and green/blue radial
                                                                                                                                                                                                  glows; left column carries the headline (with "Lifelong Success" italicised in
                                                                                                                                                                                                  wellness green), subtitle and four action buttons; right column is a frosted
                                                                                                                                                                                                  quick-access card. A floating stats strip overlaps the hero base. Below: the
                                                                                                                                                                                                  300-word PIC welcome with a portrait card, a 9-card initiatives grid on grey, a
                                                                                                                                                                                                  dark "support pillars" band, a news preview paired with a wellness CTA, and a
                                                                                                                                                                                                  gradient closing CTA. Display type is Fraunces (serif); body is Plus Jakarta Sans.

                                                                                                                                                                                                  ---

                                                                                                                                                                                                  ## 10. Implementation Roadmap

                                                                                                                                                                                                  | Phase | Timeline | Deliverables |
                                                                                                                                                                                                  |---|---|---|
                                                                                                                                                                                                  | **0 — Foundations** | Month 1 | Finalise brand, IA, design system (done as static build); set up repo, hosting under iiita.ac.in, CI |
                                                                                                                                                                                                  | **1 — Static launch** | Months 1–2 | Deploy these 13 pages as the public site; wire forms to email/ticketing; accessibility audit (WCAG 2.1 AA) |
                                                                                                                                                                                                  | **2 — Backend & auth** | Months 2–4 | DB schema, SSO with institute credentials, roles & permissions, student profiles |
                                                                                                                                                                                                  | **3 — Core systems** | Months 4–6 | Mentorship matching, internship management, mobility/credit-transfer tracker |
                                                                                                                                                                                                  | **4 — Care systems** | Months 6–8 | Wellness booking + confidential records, accessibility profiles, support-request workflow |
                                                                                                                                                                                                  | **5 — Engagement** | Months 8–10 | Live dashboard, events & notifications, resource repository, feedback analytics |
                                                                                                                                                                                                  | **6 — Intelligence & app** | Months 10–12 | AI chatbot/FAQ assistant, wellness self-assessment, mobile app/PWA, analytics maturity |

                                                                                                                                                                                                  ---

                                                                                                                                                                                                  ## 11. One-Year Activity Calendar (indicative)

                                                                                                                                                                                                  | Month | Anchor activities |
                                                                                                                                                                                                  |---|---|
                                                                                                                                                                                                  | Jan | Office orientation; mentor recruitment; semester kick-off |
                                                                                                                                                                                                  | Feb | Internship Phase I (summer industry); mentor training |
                                                                                                                                                                                                  | Mar | Career mentorship drive; wellness awareness week |
                                                                                                                                                                                                  | Apr | Internship Phase II (research/intl); exchange info sessions |
                                                                                                                                                                                                  | May | Summer schools; mobility pre-departure; volunteer drives |
                                                                                                                                                                                                  | Jun | Minor/Honours applications; fall exchange calls; mindfulness fair |
                                                                                                                                                                                                  | Jul | Enrolment confirmations; first-year mentorship onboarding |
                                                                                                                                                                                                  | Aug | Advisor reviews; Green Campus Week; accessibility onboarding |
                                                                                                                                                                                                  | Sep | Internship Phase III (winter/semester); leadership workshops |
                                                                                                                                                                                                  | Oct | Mid-year wellness check-ins; sustainability projects review |
                                                                                                                                                                                                  | Nov | Mentorship impact survey; scholarship windows |
                                                                                                                                                                                                  | Dec | Annual report; KPI review; recognition & certificates |

                                                                                                                                                                                                  ---

                                                                                                                                                                                                  ## 12. KPI Framework (measuring student impact)

                                                                                                                                                                                                  | Dimension | KPI | Target signal |
                                                                                                                                                                                                  |---|---|---|
                                                                                                                                                                                                  | Reach | % students with an active mentor | → 100% in 2 yrs |
                                                                                                                                                                                                  | Reach | % students engaged in ≥1 program | rising YoY |
                                                                                                                                                                                                  | Academic | Minor/Honours enrolment & completion rate | rising |
                                                                                                                                                                                                  | Academic | At-risk students supported / recovered | rising recovery |
                                                                                                                                                                                                  | Careers | Internships offered & conversion to PPO | rising |
                                                                                                                                                                                                  | Global | Outbound exchange & intl internship count | 2× in 2 yrs |
                                                                                                                                                                                                  | Inclusion | Divyangjan accommodation fulfilment rate | ~100% |
                                                                                                                                                                                                  | Inclusion | Accessibility request median resolution time | falling |
                                                                                                                                                                                                  | Wellness | Counselling utilisation & repeat-engagement | healthy, stigma-free |
                                                                                                                                                                                                  | Wellness | Support-request first-response time | falling (target < 8h) |
                                                                                                                                                                                                  | Wellness | Student well-being / satisfaction index | rising |
                                                                                                                                                                                                  | Sustainability | Waste-to-landfill reduction; saplings maintained | improving |
                                                                                                                                                                                                  | Experience | Avg. feedback rating across services | ≥ 4.5 / 5 |

                                                                                                                                                                                                  ---

                                                                                                                                                                                                  ## 13. Suggested Advanced Features (build backlog)

                                                                                                                                                                                                  Student Portal · Mentorship Matching System · Internship Management System ·
                                                                                                                                                                                                  Exchange Program Tracker · Mental Wellness Self-Assessment Tool · Student Feedback
                                                                                                                                                                                                  System · AI Chatbot · Event Management System · Document Repository · Analytics
                                                                                                                                                                                                  Dashboard · Mobile App / PWA · Notification System · Accessibility Toolkit
                                                                                                                                                                                                  (contrast, text-resize, screen-reader optimisation).

                                                                                                                                                                                                  ---

                                                                                                                                                                                                  ## 14. UI / UX Specification

                                                                                                                                                                                                  - **Theme:** modern university student-affairs portal
                                                                                                                                                                                                  - **Colours:** professional blue (`#1457a8` / `#0a2540`), white, grey scale,
                                                                                                                                                                                                    wellness green accents (`#16a06b`), amber highlight (`#e2a32b`)
                                                                                                                                                                                                    - **Typography:** Fraunces (display) + Plus Jakarta Sans (body) — clean, accessible, professional
                                                                                                                                                                                                    - **Components:** cards, KPI widgets, steps, FAQ accordions, testimonials, tables,
                                                                                                                                                                                                      forms, news feed, charts — all in `css/style.css` as a reusable design system
                                                                                                                                                                                                      - **Motion:** staggered scroll-reveal, animated counters, hover lifts, accordion transitions
                                                                                                                                                                                                      - **Accessibility:** semantic HTML, keyboard-navigable, high-contrast text, focus styles,
                                                                                                                                                                                                        scalable type, accessible-format resources
                                                                                                                                                                                                        ```
                                                                                                                                                                                                        ```
                                                                                                                                                                                                        ```

                                                                                                                                                                                                        *Build files:* `index.html` + 12 interior pages, `css/style.css`, `js/main.js`.
                                                                                                                                                                                                        Open `index.html` in any browser to preview; deploy as static files under the IIITA domain, then layer the backend per the roadmap.
                                                                                                                                                                                                        