# Asset Placeholders Checklist

Below is the list of all visual, document, and text assets that must be supplied by the client before deploying the final website to production. These are clearly marked in the UI code with dashed borders and labeled overlays.

---

## 1. Video Loops & Interactive Models
- [ ] **Hero Loop Video:** 10–15s silent, autoplaying, looping, playsinline video showing: *ear-canal scan transition to 3D model*. Reference: [Homepage Hero](file:///C:/Akmira%20website/src/app/%5Blang%5D/page.tsx#L63).
- [ ] **AKuris Live Scan Video:** High-fidelity clinical demonstration video showing: *practitioner scanning a model ear with the probe, rendering immediate points*. Reference: [AKuris Product Page](file:///C:/Akmira%20website/src/app/%5Blang%5D/akuris/page.tsx#L129).
- [ ] **Interactive 3D Ear Model:** A custom 3D mesh format (or JSON points) to replace the canvas fallback if a full WebGL engine is added later. Reference: [3D Ear Model Component](file:///C:/Akmira%20website/src/components/RotatingEarModel.tsx).

## 2. Product & Technology Renders
- [ ] **AKuris Product Render:** High-fidelity clinical/marketing render of the handheld AKuris ear scanner. Reference: [AKuris Hero Section](file:///C:/Akmira%20website/src/app/%5Blang%5D/akuris/page.tsx#L46).
- [ ] **Roadmap GEN 3 "Golden Eye" Render:** Macro-photography style render showing the miniature camera compared to a 1-cent coin. Reference: [Technology Timeline](file:///C:/Akmira%20website/src/app/%5Blang%5D/technology/page.tsx#L182).
- [ ] **Future Platform Renders:** Visual mockups for: *3D surgical endoscopy, contactless 3D fingerprint acquisition, and the drone-mounted 3D zoom camera*. Reference: [Technology Future Applications](file:///C:/Akmira%20website/src/app/%5Blang%5D/technology/page.tsx#L210).

## 3. Team & Leadership Photos
- [ ] **Dr. Alexander Knüttel Portrait:** Professional headshot. Reference: [Company Profiles](file:///C:/Akmira%20website/src/app/%5Blang%5D/company/page.tsx#L60).
- [ ] **Birte Filling Portrait:** Professional headshot. Reference: [Company Profiles](file:///C:/Akmira%20website/src/app/%5Blang%5D/company/page.tsx#L94).
- [ ] **Potsdam Team Photo Grid:** High-res group photo of active physicists, engineers, and operational staff in Potsdam. Reference: [Company Team Section](file:///C:/Akmira%20website/src/app/%5Blang%5D/company/page.tsx#L141).

## 4. Vector Logos (SVGs)
- [ ] **European Union Co-funding Logo:** Official EFRE logo badge. Reference: [Footer](file:///C:/Akmira%20website/src/components/Footer.tsx#L85).
- [ ] **State of Brandenburg Co-financing Logo:** Reference: [Footer](file:///C:/Akmira%20website/src/components/Footer.tsx#L95).
- [ ] **Innovation Award Berlin Brandenburg 2024 Winner Badge:** Reference: [Footer](file:///C:/Akmira%20website/src/components/Footer.tsx#L90).
- [ ] **BMBF Support Logo:** German Federal Ministry of Education and Research badge. Reference: [Footer](file:///C:/Akmira%20website/src/components/Footer.tsx#L100).

## 5. Documents & Share Images
- [ ] **AKuris Technical Spec Sheet (PDF):** Downloadable datasheet outlining mechanical, optical, and regulatory details. Reference: [AKuris Conversion Section](file:///C:/Akmira%20website/src/app/%5Blang%5D/akuris/page.tsx#L236).
- [ ] **OpenGraph/Twitter Share Image:** 1200x630px clinical marketing banner image for preview cards on social channels. Reference: [Root Layout Metadata](file:///C:/Akmira%20website/src/app/%5Blang%5D/layout.tsx#L40).
