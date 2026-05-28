import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[#0a0a0a] text-white scroll-smooth"
    >
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#111] border-b border-[#222] px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 rounded-lg bg-[#00C853] text-black font-black text-base flex items-center justify-center">
            L
          </div>
          <span className="text-sm font-extrabold tracking-wider">LIANKA</span>
        </Link>
        <span className="text-[11px] text-[#555]">Legal Document</span>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1a0a] to-[#0a0a0a] border-b border-[#222] px-4 py-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00C85330] bg-[#00C85310] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#00C853]">
          Privacy
        </div>
        <h1 className="mt-3 text-2xl font-black">
          Privacy <span className="text-[#00C853]">Policy</span>
        </h1>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#555]">
          <span>Effective: June 1, 2025</span>
          <span>Lianka Inc</span>
          <span>lianka.io</span>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[760px] px-4 py-8">
        <p className="text-sm font-bold text-white">Lianka Inc</p>
        <p className="text-sm font-bold text-white">PRIVACY POLICY</p>
        <p className="text-[13px] text-[#888]">Effective Date: June 1, 2025</p>
        <p className="text-[13px] text-[#888]">Last Updated: June 1, 2025</p>
        <p className="text-[13px] text-[#888]">lianka.io</p>

        <blockquote className="mt-4 rounded-r-lg border-l-4 border-[#00C853] bg-[#00C85310] px-4 py-3 text-[12px] text-[#888] italic leading-relaxed">
          <strong className="text-white">
            This Privacy Policy explains how Lianka Inc collects, uses, stores,
            shares, and protects your personal data when you access or use the
            Lianka Platform. Please read it carefully. By using the Platform,
            you consent to the practices described in this Policy.
          </strong>
        </blockquote>

        <h2 className="mt-8 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          Table of Contents
        </h2>
        <ul className="mt-3 space-y-1 text-[13px] text-[#888]">
          <li>1. Definitions</li>
          <li>2. Who We Are and How to Contact Us</li>
          <li>3. What Personal Data We Collect</li>
          <li>4. How We Collect Your Data</li>
          <li>5. Legal Basis for Processing</li>
          <li>6. How We Use Your Personal Data</li>
          <li>7. How We Share Your Data</li>
          <li>8. Blockchain and On-Chain Data</li>
          <li>9. Cookies and Tracking Technologies</li>
          <li>10. Data Retention</li>
          <li>11. Data Security</li>
          <li>12. Your Rights</li>
          <li>13. KYC and Identity Verification</li>
          <li>14. Children's Privacy</li>
          <li>15. International Data Transfers</li>
          <li>16. Changes to This Policy</li>
          <li>17. Complaints</li>
        </ul>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          1. Definitions
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          In this Privacy Policy, unless the context otherwise requires:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            <strong className="text-white">"Account"</strong> means your
            registered user account on the Lianka Platform.
          </li>
          <li>
            <strong className="text-white">"Data Controller"</strong> means
            Lianka Inc, the entity that determines the purposes and means of
            processing your personal data.
          </li>
          <li>
            <strong className="text-white">"Personal Data"</strong> means any
            information relating to an identified or identifiable natural
            person.
          </li>
          <li>
            <strong className="text-white">"Platform"</strong> means the digital
            investment platform accessible at lianka.io and associated
            applications.
          </li>
          <li>
            <strong className="text-white">"Processing"</strong> means any
            operation performed on personal data, including collection, storage,
            use, disclosure, or deletion.
          </li>
          <li>
            <strong className="text-white">"Special Category Data"</strong>{' '}
            means personal data revealing racial or ethnic origin, political
            opinions, religious beliefs, health data, or biometric data.
          </li>
          <li>
            <strong className="text-white">"Third Party"</strong> means any
            person or entity other than you or the Company.
          </li>
          <li>
            <strong className="text-white">"User"</strong> means any individual
            who has registered an Account on the Platform.
          </li>
        </ul>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          2. Who We Are and How to Contact Us
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          2.1 The Data Controller for all personal data processed through the
          Platform is:
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Lianka Inc</strong>
        </p>
        <p className="text-[13px] text-[#888]">Trading as: Lianka</p>
        <p className="text-[13px] text-[#888]">Website: lianka.io</p>
        <p className="text-[13px] text-[#888]">
          Email: supportlianka@gmail.com
        </p>
        <p className="text-[13px] text-[#888]">
          2.2 If you have any questions or concerns about how we handle your
          personal data, please contact us at supportlianka@gmail.com. We aim to
          respond to all data-related enquiries within five (5) business days.
        </p>
        <p className="text-[13px] text-[#888]">
          2.3 Data Protection Contact. The Company does not currently have a
          formally designated Data Protection Officer (DPO), as this is not
          required at our current scale and operational structure. All data
          protection enquiries should be directed to our general contact email.
          If the Company's data processing activities expand to a scale that
          triggers a mandatory DPO requirement under applicable law, a DPO will
          be designated and their contact details published on the Platform.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          3. What Personal Data We Collect
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          3.1 We collect and process the following categories of personal data:
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">
            A. Registration and Identity Data
          </strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Full name (collected during KYC verification).</li>
          <li>Email address (provided at registration).</li>
          <li>Date of birth (collected during KYC verification).</li>
          <li>Nationality and country of residence (collected during KYC).</li>
          <li>
            Government-issued identification number (collected during KYC).
          </li>
          <li>
            Photograph or scan of identity document (collected during KYC).
          </li>
          <li>
            Selfie or liveness verification image (collected during KYC, where
            required).
          </li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">
            B. Financial and Transaction Data
          </strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>USDT deposit amounts and transaction timestamps.</li>
          <li>
            Blockchain wallet addresses (deposit origin and withdrawal
            destination).
          </li>
          <li>Transaction hashes and on-chain identifiers.</li>
          <li>Withdrawal amounts, dates, and processing status.</li>
          <li>Account balance history, ROI records, and cycle data.</li>
          <li>Referral earnings and referral relationship records.</li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">C. Technical and Device Data</strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            IP address and approximate geographic location derived from IP.
          </li>
          <li>Browser type, version, and operating system.</li>
          <li>Device type and unique device identifiers.</li>
          <li>Session timestamps, login history, and access logs.</li>
          <li>Pages visited on the Platform and time spent on each page.</li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">D. Communications Data</strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Content of emails, support messages, and enquiries sent to the
            Company.
          </li>
          <li>Platform notification preferences and history.</li>
          <li>Records of any disputes or complaints you have raised.</li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">
            E. Behavioural and Preference Data
          </strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Investment timeframe preferences.</li>
          <li>Notification preferences (email and in-app).</li>
          <li>Platform settings and configuration choices.</li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          3.2 We do not collect Special Category Data (such as health,
          political, or biometric data) except to the extent that a User's
          government-issued identity document incidentally contains such
          information.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          4. How We Collect Your Data
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          4.1 We collect your personal data through the following means:
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Direct Collection:</strong> Data you
          provide when registering an Account, completing KYC, submitting a
          deposit, requesting a withdrawal, contacting support, or updating your
          profile.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Automated Collection:</strong> Data
          collected automatically when you access the Platform, including
          through server logs, cookies, and analytics tools. This includes
          technical and device data described in Section 3(C).
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Blockchain Sources:</strong> Publicly
          available on-chain data associated with wallet addresses used in
          connection with your Account. Blockchain data is permanent and
          immutable - we cannot erase it.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Third-Party KYC Providers:</strong>{' '}
          Where we use third-party identity verification services to process
          KYC, those providers may collect additional data on our behalf as
          described in Section 13.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          5. Legal Basis for Processing
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          5.1 We process your personal data on the following legal grounds,
          depending on the nature of the processing:
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Contractual Necessity:</strong>{' '}
          Processing required to provide the Platform services to you -
          including managing your Account, processing deposits and withdrawals,
          applying ROI, and operating the referral system.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Legal Obligation:</strong> Processing
          required to comply with applicable legal requirements, including
          anti-money laundering (AML), counter-terrorism financing (CTF), and
          Know Your Customer (KYC) obligations.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Legitimate Interests:</strong>{' '}
          Processing for our legitimate business interests, including fraud
          prevention, security monitoring, platform improvement, and analytics -
          where such interests are not overridden by your rights.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Consent:</strong> Where we request your
          specific consent for a particular processing activity, such as sending
          marketing communications. You may withdraw consent at any time.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          6. How We Use Your Personal Data
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          6.1 We use your personal data for the following purposes:
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">A. Account Management</strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Creating, maintaining, and securing your Account.</li>
          <li>Authenticating your identity on login.</li>
          <li>
            Managing your Account lifecycle (ACTIVE, GRACE, INACTIVE, FROZEN,
            TERMINATED states).
          </li>
          <li>Sending system notifications relevant to your Account.</li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">B. Financial Operations</strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Processing deposits and initiating your investment cycle.</li>
          <li>Applying daily ROI calculations to your Active Deposit.</li>
          <li>
            Processing withdrawal requests and verifying destination addresses.
          </li>
          <li>Crediting referral and promotion bonuses.</li>
          <li>Calculating and updating your Loyalty Score and Rank Level.</li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">C. KYC and Compliance</strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Verifying your identity before processing your first withdrawal.
          </li>
          <li>
            Complying with applicable anti-money laundering and
            counter-terrorism financing requirements.
          </li>
          <li>Maintaining records required by law.</li>
          <li>Investigating suspected fraudulent or prohibited activity.</li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">
            D. Security and Fraud Prevention
          </strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Monitoring login activity and detecting unusual access patterns.
          </li>
          <li>Investigating and responding to suspected security breaches.</li>
          <li>Protecting the integrity of the Platform and its Users.</li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">E. Customer Support</strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Responding to your enquiries, complaints, and support requests.
          </li>
          <li>Maintaining records of our communications with you.</li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">F. Platform Improvement</strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Analysing how Users interact with the Platform to improve
            functionality and user experience.
          </li>
          <li>Diagnosing and resolving technical issues.</li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">G. Legal and Administrative</strong>
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Enforcing our Terms of Service.</li>
          <li>Defending or pursuing legal claims.</li>
          <li>
            Complying with court orders, regulatory requests, or lawful
            government demands.
          </li>
        </ul>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          7. How We Share Your Data
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          7.1 We do not sell your personal data to third parties. We share your
          data only as described in this Section.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Service Providers:</strong> We may
          share your data with trusted third-party service providers who process
          data on our behalf, including cloud hosting providers, email delivery
          services, analytics platforms, and KYC verification providers. All
          such providers are contractually bound to process your data only as
          instructed by us and in accordance with applicable privacy laws.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">
            Legal and Regulatory Authorities:
          </strong>{' '}
          We may disclose your personal data to law enforcement agencies,
          regulatory bodies, courts, or government authorities where required to
          do so by law, court order, or to protect the rights, property, or
          safety of the Company, its Users, or the public.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Business Transfers:</strong> In the
          event of a merger, acquisition, restructuring, or sale of all or part
          of the Company's business, your personal data may be transferred to
          the acquiring entity. We will notify you of any such transfer and the
          applicable privacy terms.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">With Your Consent:</strong> We may
          share your data with other third parties where you have given your
          explicit prior consent.
        </p>
        <p className="text-[13px] text-[#888]">
          7.2 We require all third parties with whom we share your data to
          maintain appropriate security standards and to process your data only
          for the specified purpose.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          8. Blockchain and On-Chain Data
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          8.1 When you deposit or withdraw USDT through the Platform, your
          wallet address and transaction details are recorded on a public
          blockchain (Tron or BNB Smart Chain). This data is:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Publicly visible to anyone who queries the blockchain.</li>
          <li>
            Permanent and immutable - it cannot be deleted or altered by us or
            anyone else.
          </li>
          <li>
            Outside the scope of any right to erasure request (see Section 12).
          </li>
        </ul>
        <p className="text-[13px] text-[#888]">
          8.2 The Company records blockchain wallet addresses you use in
          connection with your Account. This allows us to verify deposits,
          process withdrawals, and detect suspicious activity.
        </p>
        <p className="text-[13px] text-[#888]">
          8.3 Custody Model. Once you deposit USDT to a Platform deposit
          address, custody of those funds passes to the Company. The Company
          does not operate a segregated client account structure (i.e. your
          funds are not held separately from the Company's operating funds in a
          third-party custodian). This means your deposited funds are not
          protected by deposit insurance, investor compensation schemes, or
          equivalent protections. You should only deposit amounts you are
          prepared to risk in full. The Company maintains internal accounting
          records that track each User's Account balance separately for
          operational purposes.
        </p>
        <blockquote className="mt-4 rounded-r-lg border-l-4 border-[#00C853] bg-[#00C85310] px-4 py-3 text-[12px] text-[#888] italic">
          <strong className="text-white">
            You should assume that all blockchain transaction data associated
            with your wallet addresses is permanently public. If privacy is a
            concern, consider using dedicated wallet addresses for Platform
            transactions.
          </strong>
        </blockquote>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          9. Cookies and Tracking Technologies
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          9.1 The Platform uses cookies and similar tracking technologies to
          enhance your experience and collect usage data.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Types of Cookies We Use</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Strictly Necessary Cookies:</strong>{' '}
          Required for the Platform to function. These include session cookies
          that maintain your login state. You cannot disable these without
          impacting your ability to use the Platform.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Functional Cookies:</strong> Remember
          your preferences and settings, such as your chosen investment
          timeframe and notification preferences.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Analytics Cookies:</strong> Help us
          understand how Users interact with the Platform, which pages are most
          visited, and where errors occur. This data is aggregated and generally
          not linked to your identity.
        </p>
        <p className="text-[13px] text-[#888]">
          9.2 You may control non-essential cookies through your browser
          settings. Disabling analytics cookies will not affect your ability to
          use the Platform's core functions.
        </p>
        <p className="text-[13px] text-[#888]">
          9.3 We do not use advertising cookies or share data with advertising
          networks.
        </p>
        <p className="text-[13px] text-[#888]">
          9.4 Cookie Consent. When you first access the Platform, you will be
          presented with a cookie notice. By continuing to use the Platform
          after seeing this notice, you consent to our use of non-essential
          cookies as described in this Section. You may withdraw consent for
          non-essential cookies at any time through your browser settings or by
          contacting us. Withdrawal of cookie consent does not affect the
          lawfulness of prior processing.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          10. Data Retention
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          10.1 We retain your personal data for as long as is necessary for the
          purposes set out in this Policy, or as required by applicable law.
        </p>
        <p className="text-[13px] text-[#888]">
          10.2 Specific retention periods:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Account data (email, settings, preferences): Retained for the
            duration of your Account and for five (5) years following Account
            closure.
          </li>
          <li>
            KYC and identity documents: Retained for five (5) years following
            Account closure, or longer where required by law.
          </li>
          <li>
            Financial and transaction records: Retained for seven (7) years from
            the date of the transaction, in line with standard financial
            record-keeping requirements.
          </li>
          <li>
            Support communications: Retained for three (3) years from the date
            of the last communication.
          </li>
          <li>
            Technical logs and access records: Retained for ninety (90) days
            unless required for an ongoing security investigation.
          </li>
          <li>
            Blockchain data: Permanently recorded on the public blockchain and
            not within our control to delete.
          </li>
        </ul>
        <p className="text-[13px] text-[#888]">
          10.3 When personal data is no longer required, we securely delete or
          anonymise it.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          11. Data Security
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          11.1 We implement appropriate technical and organisational measures to
          protect your personal data against unauthorised access, alteration,
          disclosure, or destruction. These measures include:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Encrypted data transmission using Transport Layer Security
            (TLS/HTTPS).
          </li>
          <li>
            Hashed storage of passwords using industry-standard algorithms
            (bcrypt).
          </li>
          <li>JWT-based session authentication with defined expiry periods.</li>
          <li>
            Role-based access controls limiting administrator access to
            sensitive data.
          </li>
          <li>Regular security reviews and vulnerability monitoring.</li>
        </ul>
        <p className="text-[13px] text-[#888]">
          11.2 Notwithstanding the above, no method of electronic transmission
          or storage is completely secure. We cannot guarantee absolute security
          of your data. You are responsible for maintaining the confidentiality
          of your login credentials.
        </p>
        <p className="text-[13px] text-[#888]">
          11.3 In the event of a data breach that is likely to result in a risk
          to your rights and freedoms, we will notify you as soon as reasonably
          practicable and will take appropriate remedial action.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          12. Your Rights
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          12.1 Depending on your location and applicable law, you may have the
          following rights in respect of your personal data:
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Right of Access:</strong> You may
          request a copy of the personal data we hold about you.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Right to Rectification:</strong> You
          may request that we correct any inaccurate or incomplete personal
          data.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Right to Erasure:</strong> You may
          request that we delete your personal data where it is no longer
          necessary for the purposes for which it was collected, subject to our
          legal retention obligations. Note that blockchain data cannot be
          deleted.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Right to Restriction:</strong> You may
          request that we restrict processing of your personal data in certain
          circumstances (for example, while you contest the accuracy of the
          data).
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Right to Data Portability:</strong> You
          may request a copy of your personal data in a structured,
          machine-readable format.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Right to Object:</strong> You may
          object to processing based on legitimate interests or for direct
          marketing purposes.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Right to Withdraw Consent:</strong>{' '}
          Where processing is based on consent, you may withdraw it at any time
          without affecting the lawfulness of prior processing.
        </p>
        <p className="text-[13px] text-[#888]">
          12.2 To exercise any of these rights, please contact us at
          supportlianka@gmail.com with the subject line "Data Rights Request."
          We will respond within thirty (30) days. We may ask you to verify your
          identity before fulfilling a request.
        </p>
        <p className="text-[13px] text-[#888]">
          12.3 Certain rights cannot override our legal obligations. For
          example, we cannot delete transaction records that we are legally
          required to retain.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          13. KYC and Identity Verification
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          13.1 KYC verification is required before a User's first withdrawal.
          During KYC, we collect identity documents and may use third-party
          verification providers to process them.
        </p>
        <p className="text-[13px] text-[#888]">
          13.2 Where we use third-party KYC providers, those providers act as
          data processors under our instruction. We ensure they are subject to
          appropriate data processing agreements and security standards.
        </p>
        <p className="text-[13px] text-[#888]">
          13.3 KYC data is used exclusively for identity verification and
          compliance purposes. It is not shared with other Users or used for
          marketing.
        </p>
        <p className="text-[13px] text-[#888]">
          13.4 Rejected KYC documents are flagged in your Account. You may
          resubmit corrected documents. The Company retains all submitted KYC
          documents for the periods set out in Section 10, regardless of
          verification outcome.
        </p>
        <blockquote className="mt-4 rounded-r-lg border-l-4 border-[#00C853] bg-[#00C85310] px-4 py-3 text-[12px] text-[#888] italic">
          <strong className="text-white">
            Your identity documents are treated as highly sensitive data. They
            are stored with encryption, accessible only to authorised
            administrators, and never shared with third parties except as
            required by law.
          </strong>
        </blockquote>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          14. Children's Privacy
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          14.1 The Platform is not intended for use by persons under the age of
          eighteen (18). We do not knowingly collect personal data from
          children.
        </p>
        <p className="text-[13px] text-[#888]">
          14.2 If we become aware that a person under the age of eighteen (18)
          has registered an Account or provided us with personal data, we will
          take immediate steps to delete that data and close the Account.
        </p>
        <p className="text-[13px] text-[#888]">
          14.3 If you believe a child under eighteen (18) has provided us with
          personal data, please contact us immediately at
          supportlianka@gmail.com.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          15. International Data Transfers
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          15.1 The Company and its service providers may be located in, or
          process personal data in, jurisdictions outside your country of
          residence, including countries that may not provide the same level of
          data protection as your home jurisdiction.
        </p>
        <p className="text-[13px] text-[#888]">
          15.2 EU/EEA Users. If you are located in the European Union or
          European Economic Area, please note that: (a) the Company is not
          currently established in the EU and has not appointed an EU
          representative under Article 27 of the GDPR; (b) if the GDPR applies
          to your use of the Platform, you have the rights described in Section
          12 of this Policy and may lodge a complaint with your local data
          protection authority (supervisory authority) in addition to contacting
          us directly; (c) where we transfer your data outside the EEA, we rely
          on standard contractual clauses (SCCs) or other lawful transfer
          mechanisms to ensure an adequate level of protection. If GDPR
          applicability is a concern for your use case, please contact us at
          supportlianka@gmail.com before registering.
        </p>
        <p className="text-[13px] text-[#888]">
          15.2 Where we transfer personal data internationally, we take steps to
          ensure that appropriate safeguards are in place, including contractual
          protections (such as standard contractual clauses), to maintain a
          comparable level of protection for your data.
        </p>
        <p className="text-[13px] text-[#888]">
          15.3 By using the Platform and accepting this Policy, you consent to
          the transfer, storage, and processing of your personal data in such
          jurisdictions.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          16. Changes to This Policy
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          16.1 We may update this Privacy Policy from time to time to reflect
          changes in our data practices, legal obligations, or the Platform's
          features.
        </p>
        <p className="text-[13px] text-[#888]">
          16.2 When we make material changes, we will notify you via the
          Platform notification system or by email to your registered address,
          providing at least fourteen (14) days' notice before the changes take
          effect.
        </p>
        <p className="text-[13px] text-[#888]">
          16.3 The "Last Updated" date at the top of this Policy reflects the
          most recent revision. Continued use of the Platform after the
          effective date of any change constitutes acceptance of the updated
          Policy.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          17. Complaints
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          17.1 If you have a concern or complaint about how we handle your
          personal data, please contact us in the first instance at
          supportlianka@gmail.com. We take all privacy complaints seriously and
          will respond within five (5) business days.
        </p>
        <p className="text-[13px] text-[#888]">
          17.2 If you are not satisfied with our response, you may have the
          right to lodge a complaint with the data protection authority in your
          jurisdiction, depending on applicable local law.
        </p>

        <p className="mt-4 text-[13px] text-[#888] italic font-semibold">
          By using the Lianka Platform, you confirm that you have read and
          understood this Privacy Policy and consent to the collection and use
          of your personal data as described herein.
        </p>
        <p className="text-[13px] text-[#888]">
          Lianka Inc - lianka.io - supportlianka@gmail.com
        </p>
        <p className="text-[13px] text-[#888]">
          (c) 2026 Lianka Inc. All rights reserved.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#222] bg-[#111] px-4 py-6 text-center">
        <p className="text-[12px] text-[#555]">
          (c) 2025 Lianka Inc. All rights reserved.
        </p>
        <p className="text-[12px] text-[#555]">Effective Date: June 1, 2025</p>
        <div className="mt-3 flex items-center justify-center gap-4 text-[12px]">
          <Link href="/terms" className="text-[#00C853] hover:underline">
            Terms of Service
          </Link>
          <a
            href="mailto:supportlianka@gmail.com"
            className="text-[#00C853] hover:underline"
          >
            Contact
          </a>
        </div>
      </footer>

      <a
        href="#top"
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#00C853] text-black font-black shadow-[0_4px_16px_rgba(0,200,83,0.35)]"
        aria-label="Scroll to top"
      >
        ^
      </a>
    </div>
  );
}
