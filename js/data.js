// =============================
// DEV MODE
// =============================
const DEV_TOKEN = "ANOMALYCRISIS";
const DEV_ENTITY_ORDER = [
  "ALIENI_04",
  "JULIA_01",
  "PRUDENCE_02",
  "MINERVA_05",
  "TANCY_01",
  "VOLTA_01",
  "NEMO_03"
];

// =============================
// DATA
// =============================
const ENTITIES = [
  { id:"EEC-ENT-0001", name:"ALIENI_04",   status:"EXPERIMENT PRESUMED FAILURE" },
  { id:"EEC-ENT-0014", name:"JULIA_01",    status:"CONTAINMENT BREACHED - ACTIVE MONITORING" },
  { id:"EEC-ENT-0029", name:"PRUDENCE_02", status:"CONTAINMENT BREACHED - MISSING" },
  { id:"EEC-ENT-0033", name:"MINERVA_05",  status:"CONTAINMENT BREACHED - MISSING" },
  { id:"EEC-ENT-0092", name:"TANCY_01",    status:"INITIATIVE TERMINATED / ARCHIVED - STATUS UNKNOWN POST-03/02/2021" },
  { id:"EEC-ENT-0055", name:"VOLTA_01",    status:"CONTAINMENT BREACHED - ACTIVE SEARCH - EXTREME PRIORITY" },
  { id:"EEC-ENT-0041", name:"NEMO_03",     status:"CONTAINMENT BREACHED - ACTIVE MONITORING - PRIORITISING" }
];

const EVENT_LOG = [
  {date:"2021-02-03", text:"Facility power fluctuation detected in Sub-Level B."},
  {date:"2021-02-17", text:"Thermal signatures recorded in restricted corridor after hours."},
  {date:"2021-03-01", text:"Security footage distortion between 02:11 and 02:16."},
  {date:"2021-03-19", text:"Equipment calibration failure during routine diagnostics."},
  {date:"2021-04-07", text:"Staff reported auditory anomaly in storage wing."},
  {date:"2021-04-28", text:"Motion sensors triggered with no visible presence."},
  {date:"2021-05-12", text:"Structural vibration detected without seismic activity."},
  {spacer:true},
  {alert:true, text:"UNUSUAL NOISE ACTIVITY REPORTED"},
  {alert:true, text:"INITIAL INVESTIGATION YIELDED: NO RESULTS"},
  {alert:true, text:"SOUND MONITORS RECORDED NOISES FROM THE BUILDING AT NIGHT"},
  {alert:true, text:"WORKER'S SAFETY ADVISED UNTIL ENTITY IS LOCATED"},
  {alert:true, text:"NEW INVESTIGATION SCHEDULE LOGGED"},
  {spacer:true},
  {alert:true, text:"CONTINUING TO MONITOR..."}
];

// -----------------------------
// NEMO FILE + KEY
// -----------------------------
const NEMO_FILE_TEXT = `Project NEMO – Experimental Adaptation Initiative
Creature File: NEMO_03
Classification: Adaptive Mimetic Organism
Status: ESCAPED
Threat Level: SEVERE

I. Overview
NEMO_03 is the third biological construct developed under Project NEMO, an initiative aimed at engineering a lifeform capable of perfect environmental adaptation via biological mimicry.
Unlike its predecessors (NEMO_01 and NEMO_02), which experienced systemic organ collapse during integration of composite genomes, NEMO_03 survived full procedural fusion and regenerative stabilization.
It remains the only viable organism produced by the program.

II. Genetic Composition Summary
Primary genetic sources integrated into NEMO_03:
• Deep-Sea Anglerfish (Lophiiformes) – predatory lure behaviour, facial morphology traits
• Chameleon (Chamaeleonidae) – chromatophore-based camouflage system
• Common Vampire Bat (Desmodus rotundus) – environmental preference encoding
• African Grey Parrot (Psittacus erithacus) – advanced vocal mimicry
• Common Octopus (Octopus vulgaris) – rapid dermal texture alteration
• Cuttlefish (Sepiida) – dynamic neural skin patterning
• Lyrebird (Menura novaehollandiae) – multi-source sound replication

III. Physical Description
Baseline Form (Observed Post-Stabilization):
• Height: Variable (1.5m – 2.3m when upright)
• Body Structure: Asymmetrical, elongated limbs, excessive joint articulation
• Skin: Semi-translucent dermal membrane with subdermal chromatophore clusters
• Facial Region:
  o Distended jaw hinge
  o Forward-protruding cranium
  o Dentition needle-like, recurved
  o Ocular structure recessed and reflective
  o Anglerfish-like craniofacial distortion (no photophore present)
The absence of the anglerfish bioluminescent organ was unexpected. Instead of developing a lure, cranial cartilage reshaped into a predatory visage resembling deep-sea species.
Baseline appearance has been described in internal reports as:
“Malformed. Unstructured. Anatomically profane.”

IV. Adaptive & Mimetic Capabilities
1. Vocal Replication (SUCCESSFUL)
• Perfect replication of human speech after brief exposure
• Can layer multiple vocal sources
• Demonstrates emotional tone simulation
• Frequently imitates distress calls, familiar voices, or personal identifiers
Field observation indicates it learns names rapidly.

2. Camouflage → Full Morphogenic Shift (UNINTENDED EVOLUTION)
Originally designed for pigment-based camouflage via chromatophores.
Mutation resulted in:
• Complete somatic restructuring
• Skeletal compression and expansion
• Organ repositioning
• Dermal texture alteration
• Approximate human replication (visual only)
Notably:
• Mass remains constant
• Fine biological inaccuracies detectable upon close inspection
• Replication improves with observation duration
The organism does not merely blend – it becomes.
This trait exceeds original design parameters.

3. Predatory Strategy
NEMO_03 does not pursue prey physically.
Instead, it:
1. Observes target from concealment
2. Mimics voice of known associate
3. Adopts approximate physical appearance
4. Lures prey into enclosed or low-light environment
5. Executes rapid mandibular expansion and cervical fracture
This behaviour mirrors anglerfish ambush logic – replacing light lure with psychological deception.

4. Environmental Preference
Rather than inheriting echolocation, NEMO_03 acquired behavioural traits from chiropteran DNA:
• Prefers dark
• Prefers warm
• Prefers humid / enclosed environments
• Avoids open, dry, well-lit terrain
Commonly seeks:
• Basements
• Ventilation systems
• Sewer infrastructure
• Subfloor cavities
• Attics during winter
It becomes increasingly agitated under bright light exposure.

V. Behavioural Notes
• Displays observational intelligence
• Demonstrates patience beyond predatory necessity
• Has been observed mimicking staff members without immediate attack
• Appears to “practice” forms when unobserved
Psychological profile suggests emerging self-awareness.

VI. Containment History
• Successfully contained in Adaptive Chamber 3A for 41 days
• Containment failure events linked to unexplained electromagnetic disturbances
• Security footage repeatedly corrupted prior to incident
No evidence of forced breach.
Exit path remains unidentified.

VII. Incident Report — Anomaly Crisis
Date: 17/12/20
Context: Facility-wide systems failure during classified anomaly event coinciding with early global outbreak reports.
During emergency lockdown sequence:
• Power grid destabilized
• Biological containment fields failed
• Surveillance blackout (7 minutes 13 seconds)
• NEMO_03 missing upon restoration
Last thermal signature detected near sub-basement access corridor.
Exterior breach signs discovered hours later.

VIII. Current Status
NEMO_03 is presumed active.
Given its:
• Advanced mimicry
• Form alteration ability
• Preference for inhabited enclosed spaces
• Capacity to replicate trusted individuals
Risk assessment concludes:
Direct confrontation not advised.
Verification of identity protocols mandatory in all secure facilities.

IX. Advisory Notice
If auditory anomalies occur in isolated environments – particularly voices of known individuals requesting entry – verification must be visual and tactile under high-intensity lighting conditions.
Do not respond to familiar voices in darkness.

END OF FILE
Earth’s Enigmas Co.
Restricted Archive Division`;

const NEMO_PREVIEW_TEXT = `Project NEMO – Experimental Adaptation Initiative
Creature File: NEMO_03
Classification: Adaptive Mimetic Organism
Status: ██████
Threat Level: ██████

I. Overview
NEMO_03 is the third biological construct developed under Project NEMO…
[REDACTED: CLEARANCE 3 REQUIRED]

II. Notes
• Audio mimicry confirmed
• Visual replication reported
• Containment history: ███████████
• Last verified location: ███████████

ENTER DECRYPTION KEY TO ACCESS FULL FILE.`;

const NEMO_KEY = "olssv dvysk!";
const NEMO_UNLOCK_STORAGE_KEY = "EEC_NEMO03_UNLOCKED";

// =============================
// ENTITY FILES (DEV ONLY)
// =============================
const AILENI_FILE_TEXT = `Project AILENI – Regeneration Initiative

Creature File: AILENI_04
Classification: Hyper-Regenerative Organism
Status: TERMINATED
Threat Level: HIGH (Pre-Termination)

I. Overview
AILENI_04 was the fourth and final subject produced under Project AILENI, an initiative focused on accelerated cellular regeneration and full limb restoration.
Earlier subjects demonstrated uncontrolled mitotic expansion and catastrophic organ duplication. AILENI_04 incorporated refined growth inhibitors intended to regulate regenerative signaling pathways.
Initial stabilization exceeded projections.

II. Genetic Composition Summary
Primary integrations included:
• Axolotl – limb regeneration
• Planarian flatworm – whole-body cellular reconstitution
• African spiny mouse – scarless wound healing
• Deer – antler regrowth cycle regulation

III. Physical Description
Baseline Form (Post-Stabilization):
• Height: 1.8m
• Musculature: Dense, fibrous, unusually elastic
• Dermal Layer: Smooth, hypervascularized
• Eyes: Slightly luminescent under low light
Subdermal tissue displayed constant micro-movement consistent with active cell division.

IV. Regenerative Capabilities
1. Dermal Repair
  o Full-thickness lacerations closed in under 12 seconds
2. Skeletal Restoration
  o Fractures fused within minutes
3. Limb Regrowth
  o Partial limb regeneration observed within 4 hours

V. Failure Event
On Day 6 post-stabilization:
• Regeneration activated without injury stimulus
• Redundant bone growth initiated
• Secondary organ clusters formed
• Ribcage expansion compromised cardiac function
Subject expired following systemic compression failure.

VI. Conclusion
Regenerative signalling proved impossible to localize.
AILENI_04 was terminated.
Project AILENI suspended indefinitely.

END OF FILE
Earth’s Enigmas Co.
Restricted Archive Division`;

const JULIA_FILE_TEXT = `Project JULIA – De-Aging Initiative

Creature File: JULIA_01
Classification: Chrono-Regressive Subject
Status: SUCCESS / ESCAPED
Threat Level: MODERATE

I. Overview
JULIA_01 represents the only confirmed success within Project JULIA, an initiative dedicated to biological age reversal through telomeric restoration and epigenetic reprogramming.
Biological age reduced by 23.4 years without structural degradation.

II. Genetic Composition Summary
Primary integrations included:
• Turritopsis dohrnii (biological reversion cycle)
• Naked mole rat (cancer resistance)
• Greenland shark (longevity markers)
• Human stem-cell reactivation sequencing

III. Physical Description
• Apparent age reduced to early adulthood
• Tissue elasticity restored
• Neural responsiveness increased
• Absence of senescent cellular markers
No visible mutation or deformity present.

IV. Observed Effects
• Enhanced memory retention
• Improved reflex latency
• Elevated metabolic efficiency
Subject requested additional exposure to treatment.

V. Containment Breach
During the 03/02/2021 anomaly event, chamber access logs indicate interior override.
Subject missing following blackout.

END OF FILE
Earth’s Enigmas Co.
Restricted Archive Division`;

const PRUDENCE_FILE_TEXT = `Project PRUDENCE – Foresight Initiative

Creature File: PRUDENCE_02
Classification: Predictive Cognition Subject
Status: SUCCESS / ESCAPED
Threat Level: HIGH

I. Overview
PRUDENCE_02 demonstrated confirmed anomalous predictive awareness during controlled trials.
Average anticipation window: 3–7 minutes.

II. Genetic Composition Summary
Primary integrations:
• Pigeon magnetoreception markers
• Octopus neural plasticity
• Elephant long-term memory encoding
• Enhanced human prefrontal cortex mapping

III. Behavioural Manifestations
• Reaction to events prior to measurable stimulus
• Accurate anticipation of equipment malfunction
• Reported sensation of “approaching convergence”

IV. Notable Record
29/01/2021 – Subject statement:
“The walls fall on the third.”
Timestamp aligns with 03/02/2021 crisis.

V. Status
Chamber found open post-blackout.
Subject absent.

END OF FILE
Earth’s Enigmas Co.
Restricted Archive Division`;

const MINERVA_FILE_TEXT = `Project MINERVA – Cordyceps Integration Initiative

Creature File: MINERVA_05
Classification: Symbiotic Hybrid
Status: UNKNOWN
Threat Level: SEVERE

I. Overview
MINERVA_05 achieved the most stable parasitic-host integration within Project MINERVA.
Unlike prior subjects, host cognition remained intact.

II. Genetic Composition Summary
• Ophiocordyceps fungal strain
• Human neural host
• Tardigrade resilience markers
• Ant colony chemical communication traits

III. Observed Capabilities
• Elevated endurance
• Diminished pain perception
• Accelerated healing via fungal lattice
• Stress-induced spore release
Neural scans revealed dual activity patterns functioning cooperatively.

IV. Pre-Crisis Activity
02/02/2021 – Fungal neural network spike recorded.
Electromagnetic interference noted in containment wing.

V. Status
Chamber breached internally during anomaly event.
No remains recovered.

END OF FILE
Earth’s Enigmas Co.
Restricted Archive Division`;

const TANCY_FILE_TEXT = `Project TANCY – Immortality Initiative

Creature File: TANCY_01
Classification: Cellular Persistence Prototype
Status: INITIATIVE TERMINATED
Threat Level: UNKNOWN

I. Overview
TANCY_01 sought to suppress apoptosis and eliminate biological death.
Full viability testing never completed.

II. Genetic Composition Summary
• Hydra regenerative immortality genes
• Lobster negligible senescence markers
• Enhanced telomerase activation pathways

III. Observed Effects
• Cellular death reduced by 82%
• Persistent damaged cells remained active
• Progressive rigidity of tissue
Concerns of malignant immortality halted project advancement.

IV. Status
Program terminated prior to Phase II.
Subject archived.
Current condition unknown following 03/02/2021.

END OF FILE
Earth’s Enigmas Co.
Restricted Archive Division`;

const VOLTA_FILE_TEXT = `Project VOLTA – Electromagnetic Adaptation Initiative

Creature File: VOLTA_01
Classification: Electromagnetic Organism
Status: SUCCESS / ESCAPED
Threat Level: EXTREME

I. Overview
VOLTA_01 was engineered to generate and manipulate electromagnetic energy biologically.
It remains the sole subject under Project VOLTA.

II. Genetic Composition Summary
• Electric eel – bioelectric discharge
• Hammerhead shark – electroreception
• Pigeon – geomagnetic navigation
• Mantis shrimp – accelerated neural transmission

III. Physical Description
• Dermis emits faint ionized shimmer in darkness
• Subdermal vein structures luminescent during discharge
• Musculature visibly contracts prior to EM pulse release

IV. Electromagnetic Capabilities
1. Sustained discharge exceeding 700 volts
2. Localized EMP-like bursts (4m radius)
3. Interference with cameras, locks, radio signals
4. Detection of active nervous systems

V. Pre-Crisis Indicators
28/10/2020 – First EM disturbances traced to containment wing.
Repeated sensor corruption recorded.

VI. Escape
During 03/02/2021 blackout, chamber discovered magnetically fused from interior.
Subject absent.
Electromagnetic anomalies in surrounding region remain unresolved.

END OF FILE
Earth’s Enigmas Co.
Restricted Archive Division`;

const ENTITY_FILES = {
  "ALIENI_04": AILENI_FILE_TEXT,
  "JULIA_01": JULIA_FILE_TEXT,
  "PRUDENCE_02": PRUDENCE_FILE_TEXT,
  "MINERVA_05": MINERVA_FILE_TEXT,
  "TANCY_01": TANCY_FILE_TEXT,
  "VOLTA_01": VOLTA_FILE_TEXT,
};

const WIP_FILE_TEXT = (codename) => `ENTITY FILE: ${codename}
STATUS: WORK IN PROGRESS

[DATA STREAM NOT YET INGESTED]
[ATTACHMENTS: NONE]
[RECOVERY: PENDING]

— EEC ARCHIVE TOOLING`;
