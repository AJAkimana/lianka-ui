import Link from 'next/link';

export default function TermsOfServicePage() {
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
          Legal
        </div>
        <h1 className="mt-3 text-2xl font-black">
          Terms of <span className="text-[#00C853]">Service</span>
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
        <p className="text-sm font-bold text-white">TERMS OF SERVICE</p>
        <p className="text-[13px] text-[#888]">Effective Date: June 1, 2025</p>
        <p className="text-[13px] text-[#888]">Last Updated: June 1, 2025</p>
        <p className="text-[13px] text-[#888]">lianka.io</p>

        <blockquote className="mt-4 rounded-r-lg border-l-4 border-[#00C853] bg-[#00C85310] px-4 py-3 text-[12px] text-[#888] italic leading-relaxed">
          <strong className="text-white">
            PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE ACCESSING OR
            USING THE LIANKA PLATFORM. BY REGISTERING AN ACCOUNT, DEPOSITING
            FUNDS, OR OTHERWISE ACCESSING THE PLATFORM, YOU CONFIRM THAT YOU
            HAVE READ, UNDERSTOOD, AND AGREE TO BE LEGALLY BOUND BY THESE TERMS
            IN THEIR ENTIRETY. IF YOU DO NOT AGREE, YOU MUST NOT USE THE
            PLATFORM.
          </strong>
        </blockquote>

        <h2 className="mt-8 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          Table of Contents
        </h2>
        <ul className="mt-3 space-y-1 text-[13px] text-[#888]">
          <li>1. Definitions and Interpretation</li>
          <li>2. Nature of the Platform</li>
          <li>3. Eligibility and Account Registration</li>
          <li>4. Platform Access and Use</li>
          <li>5. Deposits and Funding</li>
          <li>6. Return on Investment (ROI)</li>
          <li>7. Withdrawal Terms</li>
          <li>8. Account States and Lifecycle</li>
          <li>9. Referral Program</li>
          <li>10. Loyalty and Rank System</li>
          <li>11. Fees and Charges</li>
          <li>12. Risk Disclosure</li>
          <li>13. Prohibited Activities</li>
          <li>14. Intellectual Property</li>
          <li>15. Disclaimers and Limitation of Liability</li>
          <li>16. Indemnification</li>
          <li>17. Amendments to These Terms</li>
          <li>18. Suspension and Termination</li>
          <li>19. Dispute Resolution</li>
          <li>20. Governing Law</li>
          <li>21. Miscellaneous</li>
          <li>22. Contact Information</li>
        </ul>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          1. Definitions and Interpretation
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          In these Terms of Service, unless the context otherwise requires, the
          following terms shall have the meanings set out below:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            <strong className="text-white">"Agreement"</strong> means these
            Terms of Service, together with the Privacy Policy and any other
            policies published on the Platform from time to time.
          </li>
          <li>
            <strong className="text-white">"Account"</strong> means the user
            account created on the Platform by a User following successful
            registration.
          </li>
          <li>
            <strong className="text-white">"Active Deposit"</strong> means the
            principal amount of USDT currently deployed in an active investment
            cycle, on which ROI is calculated.
          </li>
          <li>
            <strong className="text-white">"Active Cycle"</strong> means an
            investment cycle with status ACTIVE, during which daily ROI accrues
            on a User's Active Deposit.
          </li>
          <li>
            <strong className="text-white">"Company"</strong> means Lianka Inc,
            operating the Platform under the trading name "Lianka."
          </li>
          <li>
            <strong className="text-white">"Cycle Cap"</strong> means the
            maximum accumulated balance of two hundred percent (200%) of the
            Principal, at which point an Active Cycle is deemed complete and the
            Account transitions to Grace Period.
          </li>
          <li>
            <strong className="text-white">"Grace Period"</strong> means the ten
            (10) calendar day window following completion of an Active Cycle
            during which a User may re-deposit to initiate a new Active Cycle.
          </li>
          <li>
            <strong className="text-white">"KYC"</strong> means Know Your
            Customer - the identity verification process required prior to a
            User's first withdrawal.
          </li>
          <li>
            <strong className="text-white">"Loyalty Score"</strong> means a
            numerical score between 0 and 100, calculated daily using seven
            weighted components, which determines a User's eligibility for
            reduced fees and other benefits.
          </li>
          <li>
            <strong className="text-white">"Platform"</strong> means the digital
            investment platform accessible at lianka.io and associated mobile or
            desktop applications operated by the Company.
          </li>
          <li>
            <strong className="text-white">"Principal"</strong> means the
            original USDT amount deposited by a User in a given investment
            cycle, which serves as the base for ROI calculation and does not
            itself earn ROI directly - only the Active Deposit does.
          </li>
          <li>
            <strong className="text-white">"Profit Wallet"</strong> means the
            wallet within a User's Account that accumulates ROI earnings and
            from which withdrawals may be made.
          </li>
          <li>
            <strong className="text-white">"Referral Wallet"</strong> means the
            wallet within a User's Account that accumulates referral bonuses.
          </li>
          <li>
            <strong className="text-white">"ROI"</strong> means Return on
            Investment - the daily percentage return applied to a User's Active
            Deposit, as set by the Company's administrators.
          </li>
          <li>
            <strong className="text-white">"Terms"</strong> means these Terms of
            Service.
          </li>
          <li>
            <strong className="text-white">"USDT"</strong> means Tether USD, a
            USD-pegged stablecoin accepted on the Platform via the TRC20 (Tron)
            and BEP20 (BNB Smart Chain) networks.
          </li>
          <li>
            <strong className="text-white">"User"</strong> means any individual
            who has registered an Account on the Platform and accepted these
            Terms.
          </li>
          <li>
            <strong className="text-white">"Withdrawal"</strong> means the
            transfer of funds from a User's Profit Wallet, Referral Wallet, or
            Promotion Wallet to an external wallet address designated by the
            User.
          </li>
        </ul>
        <p className="mt-3 text-[13px] text-[#888]">
          1.2 References to any statute or statutory provision include
          references to that statute or statutory provision as amended,
          extended, or re-enacted from time to time.
        </p>
        <p className="text-[13px] text-[#888]">
          1.3 The singular includes the plural and vice versa. Headings are for
          convenience only and shall not affect interpretation.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          2. Nature of the Platform
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          2.1 The Company operates Lianka as a technology platform that connects
          participants with capital management activities. The Platform
          facilitates structured participation cycles in which Users deposit
          USDT and may receive variable, non-guaranteed discretionary
          performance distributions at rates determined solely by the Company's
          administrators. No fixed or promised return is made at any time.
        </p>
        <p className="text-[13px] text-[#888]">
          2.2 Lianka is not a bank, financial institution, broker-dealer,
          investment fund, or collective investment scheme. The Company does not
          hold a financial services licence in any jurisdiction as of the
          Effective Date. Users acknowledge this and engage with the Platform on
          that basis. Corporate Status: Lianka Inc is the operating entity.
          Formal company registration is in progress; the Company will publish
          its registration number upon completion. This does not affect the
          binding force of these Terms.
        </p>
        <p className="text-[13px] text-[#888]">
          2.4 Platform Operations. Certain Platform functions are automated,
          including: daily performance distribution calculations, Account state
          transitions (INACTIVE, ACTIVE, GRACE), cycle progress tracking,
          Loyalty Score recalculation, and Rank evaluation. Certain functions
          require manual administrator action, including: deposit confirmation
          and crediting, withdrawal approval and processing, KYC document
          review, and Account freeze/termination decisions. The Company aims to
          process manual functions within the timelines stated in these Terms
          but does not guarantee specific processing times outside those stated.
        </p>
        <blockquote className="mt-4 rounded-r-lg border-l-4 border-[#00C853] bg-[#00C85310] px-4 py-3 text-[12px] text-[#888] italic">
          <strong className="text-white">
            IMPORTANT: Daily ROI rates are not guaranteed. Past performance of
            the Platform does not predict or guarantee future returns. The
            Company reserves the right to adjust ROI rates at any time at its
            sole discretion. No ROI is applied on weekends (Saturday and Sunday,
            UTC time).
          </strong>
        </blockquote>
        <p className="mt-3 text-[13px] text-[#888]">
          2.4 The Company does not provide financial advice, tax advice, or
          legal advice to Users. Nothing on the Platform constitutes a
          solicitation or offer to buy or sell any financial instrument.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          3. Eligibility and Account Registration
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          3.1 To register an Account and use the Platform, you must:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Be at least eighteen (18) years of age.</li>
          <li>
            Have the legal capacity to enter into binding contracts in your
            jurisdiction.
          </li>
          <li>
            Not be prohibited by any applicable law from using the Platform.
          </li>
          <li>
            Provide accurate, complete, and current information during
            registration.
          </li>
          <li>
            Maintain and promptly update your registration information if it
            changes.
          </li>
        </ul>
        <p className="mt-3 text-[13px] text-[#888]">
          3.2 By registering, you represent and warrant that all information you
          provide is true, accurate, and complete. The Company reserves the
          right to suspend or terminate any Account where registration
          information is found to be false, misleading, or incomplete.
        </p>
        <p className="text-[13px] text-[#888]">
          3.3 You may only hold one (1) Account at any time. The creation of
          multiple Accounts is a material breach of these Terms and may result
          in immediate termination of all associated Accounts and forfeiture of
          balances.
        </p>
        <p className="text-[13px] text-[#888]">
          3.4 You are solely responsible for maintaining the confidentiality of
          your login credentials. You agree to notify the Company immediately at
          supportlianka@gmail.com if you suspect any unauthorised access to your
          Account.
        </p>
        <p className="text-[13px] text-[#888]">
          3.5 Accounts are personal and non-transferable. You may not assign,
          sell, or transfer your Account or any rights or obligations under
          these Terms to any third party.
        </p>
        <p className="text-[13px] text-[#888]">
          3.6 Sanctions and Restricted Persons. You represent and warrant that:
          (a) you are not located in, incorporated in, or a citizen or resident
          of any country or territory subject to comprehensive economic
          sanctions by the United Nations Security Council, the United States
          Office of Foreign Assets Control (OFAC), the European Union, or the
          United Kingdom; (b) you are not listed on any sanctions list or
          designated as a restricted or prohibited party by any governmental
          authority; and (c) you will not use the Platform in any manner that
          would cause the Company to violate applicable sanctions laws. The
          Company reserves the right to immediately freeze and terminate any
          Account that it reasonably believes is connected to a sanctioned
          person or jurisdiction, without liability.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          4. Platform Access and Use
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          4.1 Subject to your compliance with these Terms, the Company grants
          you a limited, non-exclusive, non-transferable, revocable licence to
          access and use the Platform solely for your personal investment
          purposes.
        </p>
        <p className="text-[13px] text-[#888]">
          4.2 The Platform is provided on an "as is" and "as available" basis.
          The Company does not guarantee that the Platform will be
          uninterrupted, error-free, or free of viruses or other harmful
          components.
        </p>
        <p className="text-[13px] text-[#888]">
          4.3 The Company may modify, suspend, or discontinue any aspect of the
          Platform at any time without prior notice, including temporarily
          taking the Platform offline for maintenance, upgrades, or security
          purposes.
        </p>
        <p className="text-[13px] text-[#888]">
          4.4 You are responsible for ensuring that your device, internet
          connection, and software are compatible with the Platform. The Company
          accepts no liability for any failure to access the Platform arising
          from User-side technical issues.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          5. Deposits and Funding
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">
            5.1 Accepted Currency and Networks
          </strong>
        </p>
        <p className="text-[13px] text-[#888]">
          The Platform accepts deposits exclusively in USDT via the following
          blockchain networks:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            TRC20 (Tron Network) - recommended, lower fees, 12 confirmations
            required.
          </li>
          <li>BEP20 (BNB Smart Chain) - 15 confirmations required.</li>
        </ul>
        <p className="text-[13px] text-[#888]">
          The Company does not accept fiat currency, other cryptocurrencies, or
          tokens other than USDT. Sending any other asset to a Platform deposit
          address may result in permanent loss of funds.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">5.2 Deposit Process</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          To make a deposit, a User must:
        </p>
        <ol className="mt-2 list-decimal pl-5 text-[13px] text-[#888]">
          <li>
            Select their preferred network (TRC20 or BEP20) on the Platform.
          </li>
          <li>Obtain a unique deposit address generated by the Platform.</li>
          <li>
            Transfer USDT from an external wallet to that address using the
            exact selected network.
          </li>
          <li>Confirm the transfer on the Platform once sent.</li>
        </ol>
        <p className="text-[13px] text-[#888]">
          Deposits are credited to the User's Account as the Active Deposit
          following the required number of blockchain confirmations and manual
          verification by the Company's administrators.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">5.3 Minimum Deposit</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          The minimum deposit amount is ten US dollars (USD 10.00) equivalent in
          USDT. The Company reserves the right to adjust the minimum at any
          time.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">5.4 Cycle Initiation</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          Upon confirmation of a deposit, the Company will:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Set the User's Active Deposit to the deposited amount.</li>
          <li>
            Set the User's Principal to the same amount - this amount does not
            change unless a new deposit is made.
          </li>
          <li>
            Create an Active Cycle with a start date and a target of two hundred
            percent (200%) of the Principal.
          </li>
          <li>Transition the User's Account state to ACTIVE.</li>
        </ul>
        <p className="text-[13px] text-[#888]">
          ROI begins accruing from the next business day (Monday to Friday, UTC)
          following cycle initiation.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">5.5 Accuracy of Deposit</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          Users are solely responsible for sending the correct amount, to the
          correct address, on the correct network. The Company accepts no
          liability for:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Funds sent to incorrect addresses.</li>
          <li>Funds sent on the wrong network.</li>
          <li>Funds sent in non-USDT tokens.</li>
          <li>Delays caused by network congestion or blockchain issues.</li>
        </ul>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          6. Return on Investment (ROI)
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">6.1 ROI Rate</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          The daily performance distribution rate is set exclusively by the
          Company's administrators and applied to a User's Active Deposit each
          business day (Monday to Friday, UTC) at the Company's sole discretion.
          The rate is variable, non-guaranteed, and may change without notice.
          It may be zero on any given day. The maximum rate that may be applied
          is one point five percent (1.5%) per day. These distributions do not
          constitute interest, dividends, or returns on a financial instrument.
        </p>
        <p className="text-[13px] text-[#888]">
          No ROI is applied on Saturdays, Sundays (UTC), or on any day for which
          no rate has been set by the administrators.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">6.2 Calculation Basis</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          The daily performance distribution (where applicable) is calculated
          as:
        </p>
        <p className="text-[13px] font-bold text-white">
          Daily Distribution = Active Deposit x Administrator-Set Rate (%) -
          non-guaranteed, discretionary
        </p>
        <p className="text-[13px] text-[#888]">
          ROI is credited exclusively to the Profit Wallet. It does not compound
          automatically unless the User initiates a reinvestment.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">6.3 Cycle Cap - 200% Rule</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          When a User's Total Balance (Active Deposit + Total Profit) reaches
          two hundred percent (200%) of the Principal:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>The Active Cycle is marked as COMPLETED.</li>
          <li>The User's Account transitions to GRACE state.</li>
          <li>No further ROI accrues in the completed cycle.</li>
          <li>
            The User has ten (10) calendar days to make a new deposit and
            initiate a new Active Cycle.
          </li>
        </ul>
        <blockquote className="mt-4 rounded-r-lg border-l-4 border-[#00C853] bg-[#00C85310] px-4 py-3 text-[12px] text-[#888] italic">
          <strong className="text-white">
            The 200% Cycle Cap is a hard limit. Any ROI that would cause the
            balance to exceed 200% of Principal is trimmed automatically. Users
            cannot earn beyond this cap within a single cycle.
          </strong>
        </blockquote>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">6.4 Reinvestment</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          Users may transfer funds from their Profit Wallet back to their Active
          Deposit at any time while their Account is in ACTIVE or GRACE state.
          This increases the Active Deposit and thus the ROI base for subsequent
          days. Reinvestment is irreversible once confirmed.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">6.5 Weekend Notice</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          ROI is not applied on weekends. Users whose Accounts would otherwise
          receive ROI on a Saturday or Sunday will receive a system
          notification. No compensation is provided for non-business days.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          7. Withdrawal Terms
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">7.1 Eligible Funds</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          Users may only withdraw from the following wallet types:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Profit Wallet - accumulated ROI earnings.</li>
          <li>Referral Wallet - referral bonus earnings.</li>
          <li>
            Promotion Wallet - promotion-related earnings assigned by
            administrators.
          </li>
        </ul>
        <p className="text-[13px] text-[#888]">
          The Principal (Active Deposit) is not withdrawable during an Active
          Cycle. Attempting to withdraw funds that reduce the Account balance
          below the Principal may trigger Account termination under Section 8.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">7.2 KYC Requirement</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          KYC verification is mandatory before a User's first withdrawal. Users
          must submit the required identity documents as prompted by the
          Platform. The Company will review KYC submissions within a reasonable
          time. Until KYC is verified, all withdrawal requests will be blocked.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">7.3 Withdrawal Address</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          Users must set a USDT withdrawal address before requesting a
          withdrawal. Once set, the withdrawal address may only be changed once
          every twenty-four (24) hours. The Company is not responsible for funds
          sent to an incorrectly entered withdrawal address.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">7.4 Processing</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          Withdrawals are processed manually by the Company's administrators.
          Processing times are:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Standard processing: twenty-four (24) to seventy-two (72) hours from
            approval.
          </li>
          <li>Processing occurs on business days only.</li>
        </ul>
        <p className="text-[13px] text-[#888]">
          Users may only have one (1) pending withdrawal request at a time. Once
          a withdrawal is submitted, it cannot be modified - only cancelled by
          the User before administrator approval.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">7.5 Withdrawal Scheduling</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          Following completion of a withdrawal, the User's next withdrawal
          eligibility date is automatically recalculated based on their elected
          investment timeframe. The available timeframes are:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Daily Plan - next withdrawal available the following business day.
          </li>
          <li>
            Biweekly Plan - next withdrawal available after fourteen (14) days.
          </li>
          <li>
            40-Day Plan - next withdrawal available after forty (40) days.
          </li>
          <li>
            90-Day Plan - next withdrawal available after ninety (90) days.
          </li>
          <li>
            180-Day Plan - next withdrawal available after one hundred eighty
            (180) days.
          </li>
        </ul>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">7.6 Minimum Withdrawal</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          The minimum withdrawal amount is ten US dollars (USD 10.00) equivalent
          in USDT. The Company reserves the right to adjust the minimum at any
          time.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">7.7 Fees</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          As of the Effective Date, the Company does not charge a fee on
          standard withdrawals. Network transaction fees, if any, are borne by
          the User. The Company reserves the right to introduce withdrawal fees
          upon thirty (30) days' written notice.
        </p>

        <p className="mt-3 text-[13px] text-[#888]">
          <strong className="text-white">7.8 Termination Withdrawal Fee</strong>
        </p>
        <p className="text-[13px] text-[#888]">
          If a User voluntarily terminates their Account (or requests early
          withdrawal of their full balance) while their Loyalty Score is below
          eighty (80), a termination fee of thirty percent (30%) of the
          withdrawn amount will be applied. Users whose Loyalty Score is eighty
          (80) or above at the time of termination pay no termination fee.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          8. Account States and Lifecycle
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          8.1 A User's Account exists in one of the following states at all
          times:
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">INACTIVE:</strong> The Account has no
          active cycle. No ROI accrues. A deposit is required to activate the
          Account.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">ACTIVE:</strong> An investment cycle is
          in progress. ROI accrues daily on the Active Deposit (business days
          only).
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">GRACE:</strong> The Active Cycle has
          reached the 200% Cycle Cap. The User has ten (10) calendar days to
          make a new deposit. No ROI accrues. The Grace Period cannot be
          extended.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">TERMINATED:</strong> The Account has
          been closed, either voluntarily by the User or by the Company. No
          further activity is possible. Any remaining withdrawable balance may
          be claimed subject to applicable fees.
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">FROZEN:</strong> The Account has been
          suspended by the Company pending investigation of a potential breach
          of these Terms. Deposits, withdrawals, and ROI accrual are all
          suspended during this period.
        </p>
        <p className="mt-3 text-[13px] text-[#888]">
          8.2 Grace Period Expiry. If a User does not make a new deposit within
          ten (10) calendar days of their Account entering GRACE state, the
          Account automatically transitions to INACTIVE. The User's accumulated
          profit remains in the Profit Wallet and may be withdrawn.
        </p>
        <p className="text-[13px] text-[#888]">
          8.3 Termination by User. A User may voluntarily terminate their
          Account by contacting the Company at supportlianka@gmail.com.
          Termination fees apply as set out in Section 7.8.
        </p>
        <p className="text-[13px] text-[#888]">
          8.4 Termination by Company. The Company may terminate any Account
          immediately, without notice, in the event of:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Breach of these Terms.</li>
          <li>Fraudulent activity or suspected money laundering.</li>
          <li>Provision of false registration information.</li>
          <li>Creation of multiple Accounts.</li>
          <li>
            Any activity the Company determines to be harmful to the Platform or
            other Users.
          </li>
        </ul>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          9. Referral Program
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          9.1 The Company operates a referral program that allows existing Users
          to invite new Users to the Platform.
        </p>
        <p className="text-[13px] text-[#888]">
          9.2 Referral Bonuses. When a User (the "Referrer") successfully refers
          a new User (the "Referee") using the Referrer's unique referral code
          or link, the following bonuses apply:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Deposit Bonus: Two percent (2%) of the Referee's first deposit,
            credited to the Referrer's Referral Wallet upon deposit
            confirmation.
          </li>
          <li>
            Ongoing Bonus: Zero point one percent (0.1%) of the Referee's daily
            ROI earnings, credited to the Referrer's Referral Wallet on each
            business day the Referee earns ROI.
          </li>
        </ul>
        <p className="text-[13px] text-[#888]">
          9.3 Referral Limits. Users at Rank Levels 1 and 2 may maintain a
          maximum of five (5) active referral links. Users at Rank Level 3 and
          above have no referral link limit.
        </p>
        <p className="text-[13px] text-[#888]">
          9.4 Referral bonuses are credited only for Referees who complete
          registration, verify their email, and make a qualifying deposit. The
          Company reserves the right to reverse referral bonuses if a Referee's
          Account is terminated for breach of these Terms.
        </p>
        <p className="text-[13px] text-[#888]">
          9.5 Abuse of the referral system, including self-referral, creation of
          fake Accounts, or any attempt to manipulate referral bonuses, is a
          material breach of these Terms and will result in immediate Account
          termination and forfeiture of all referral balances.
        </p>
        <p className="text-[13px] text-[#888]">
          9.6 Nature of Referral Rewards. Referral bonuses are promotional
          incentives provided at the Company's discretion and do not constitute
          investment returns, commissions on securities, or compensation for the
          promotion of financial products. The referral program operates on a
          single-level basis only - Users earn rewards solely from direct
          referrals and are not entitled to any compensation from second-level
          or deeper referral chains. The program is not a multi-level marketing
          arrangement and should not be represented as such.
        </p>
        <p className="text-[13px] text-[#888]">
          9.7 Geographic Restrictions on Referrals. Users must not actively
          recruit Referees from jurisdictions where the operation of the
          Platform or payment of referral incentives may be prohibited or
          restricted by applicable law. Users are solely responsible for
          ensuring that their referral activities comply with the laws of their
          own jurisdiction and the jurisdiction of the persons they refer.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          10. Loyalty and Rank System
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          10.1 Loyalty Score. The Platform maintains a Loyalty Score for each
          User, calculated daily using the following weighted components:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Completed Investment Cycles - 35% weight.</li>
          <li>Re-deposit Behaviour - 20% weight.</li>
          <li>Absence of Principal Breaches - 20% weight.</li>
          <li>Timeframe Discipline - 10% weight.</li>
          <li>Account Age - 5% weight.</li>
          <li>Referral Quality - 5% weight.</li>
          <li>Promotion Contributions - 5% weight.</li>
        </ul>
        <p className="text-[13px] text-[#888]">
          10.2 A Loyalty Score of eighty (80) or above qualifies a User for a
          zero percent (0%) termination fee. A score below eighty (80) results
          in a thirty percent (30%) termination fee on withdrawn amounts at
          termination.
        </p>
        <p className="text-[13px] text-[#888]">
          10.3 Rank System. Users are assigned a Rank Level from 1 to 6, based
          on their completed cycles, active referrals, and Loyalty Score. Rank
          upgrades are permanent - Ranks never decrease. The six Rank Levels and
          their primary privileges are:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Rank 1 - New Member: Standard access, five (5) referral links.
          </li>
          <li>
            Rank 2 - Contributor: Enhanced recognition, five (5) referral links.
          </li>
          <li>
            Rank 3 - Builder: Unlimited referral links, promotion eligibility.
          </li>
          <li>
            Rank 4 - Growth Partner: Biweekly withdrawal eligibility without
            capital requirement.
          </li>
          <li>
            Rank 5 - Strategic Partner: Daily withdrawal eligibility without
            capital requirement.
          </li>
          <li>
            Rank 6 - Elite Contributor: Full ecosystem authority, promotion
            revenue rights.
          </li>
        </ul>
        <p className="text-[13px] text-[#888]">
          10.4 The Company reserves the right to amend the Loyalty Score formula
          and Rank requirements at any time. Changes will be notified to Users
          via the Platform's notification system.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          11. Fees and Charges
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          11.1 As of the Effective Date, the Company does not charge deposit
          fees, withdrawal fees (except the termination fee in Section 7.8), or
          account maintenance fees.
        </p>
        <p className="text-[13px] text-[#888]">
          11.2 The Company reserves the right to introduce or amend fees at any
          time upon thirty (30) days' written notice to Users via the Platform
          notification system or registered email address.
        </p>
        <p className="text-[13px] text-[#888]">
          11.3 Blockchain network fees associated with USDT transfers (gas fees)
          are solely the User's responsibility and are not charged by or paid by
          the Company.
        </p>
        <p className="text-[13px] text-[#888]">
          11.4 Tax Responsibility. You are solely responsible for determining
          what, if any, taxes apply to amounts received through the Platform,
          including but not limited to income tax, capital gains tax, and any
          reporting or withholding obligations. The Company does not withhold,
          collect, report, or remit taxes on your behalf in any jurisdiction.
          You agree to comply with all applicable tax laws and to indemnify the
          Company for any tax liability, penalties, or interest arising from
          your failure to do so. You should seek independent tax advice for your
          specific circumstances.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          12. Risk Disclosure
        </h2>
        <blockquote className="mt-4 rounded-r-lg border-l-4 border-[#00C853] bg-[#00C85310] px-4 py-3 text-[12px] text-[#888] italic">
          <strong className="text-white">
            Digital asset investments carry substantial risk. You may lose some
            or all of your invested capital. You should not invest more than you
            can afford to lose. Please read this section carefully.
          </strong>
        </blockquote>
        <p className="mt-3 text-[13px] text-[#888]">
          12.1 By using the Platform, you acknowledge and accept the following
          risks:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Market Risk: The value of USDT and other digital assets may
            fluctuate, and stablecoin pegs may break.
          </li>
          <li>
            Technology Risk: The Platform may experience outages, bugs,
            cyberattacks, or other technical failures.
          </li>
          <li>
            Regulatory Risk: Laws governing digital assets may change in your
            jurisdiction, potentially affecting the legality or availability of
            the Platform.
          </li>
          <li>
            Liquidity Risk: The Company may face circumstances that delay or
            prevent withdrawal processing.
          </li>
          <li>
            Counterparty Risk: The Company is not a regulated financial
            institution and deposits are not protected by any government deposit
            insurance scheme.
          </li>
          <li>
            ROI Rate Risk: Daily ROI rates are not guaranteed and may be reduced
            to zero on any given day at the Company's discretion.
          </li>
          <li>
            Custody Risk: Your USDT is held by the Company once deposited. The
            Platform does not use third-party custodians or escrow arrangements.
          </li>
        </ul>
        <p className="text-[13px] text-[#888]">
          12.2 Past ROI rates posted on the Platform are for informational
          purposes only and do not constitute a guarantee of future performance.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          13. Prohibited Activities
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          13.1 You agree that you will not, directly or indirectly:
        </p>
        <ol
          start={5}
          className="mt-2 list-decimal pl-5 text-[13px] text-[#888]"
        >
          <li>
            Use the Platform for any unlawful purpose or in violation of
            applicable law.
          </li>
          <li>
            Engage in money laundering, terrorist financing, or any other
            financial crime.
          </li>
          <li>Create multiple Accounts or use the Account of another User.</li>
          <li>
            Abuse the referral system through self-referral, artificial Account
            creation, or manipulation.
          </li>
          <li>
            Attempt to hack, reverse-engineer, or disrupt the Platform or its
            infrastructure.
          </li>
          <li>
            Introduce malware, viruses, or any malicious code to the Platform.
          </li>
          <li>Impersonate the Company, its employees, or any other User.</li>
          <li>
            Engage in any activity that artificially inflates your Loyalty Score
            or Rank.
          </li>
          <li>
            Publish, distribute, or otherwise make available any content on or
            through the Platform that is defamatory, obscene, or otherwise
            objectionable.
          </li>
          <li>
            Use automated bots, scripts, or tools to interact with the Platform
            without the Company's prior written consent.
          </li>
        </ol>
        <p className="mt-3 text-[13px] text-[#888]">
          13.2 Any breach of this Section constitutes a material breach of these
          Terms and entitles the Company to immediately terminate the offending
          Account, forfeit all balances, and pursue any available legal
          remedies.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          14. Intellectual Property
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          14.1 All intellectual property rights in and to the Platform,
          including but not limited to software, code, design, logos, branding,
          content, and documentation, are and shall remain the exclusive
          property of the Company or its licensors.
        </p>
        <p className="text-[13px] text-[#888]">
          14.2 Nothing in these Terms grants the User any right, title, or
          interest in or to the Platform's intellectual property beyond the
          limited licence set out in Section 4.1.
        </p>
        <p className="text-[13px] text-[#888]">
          14.3 The "Lianka" name, logo, and all associated branding are the
          proprietary marks of the Company. Users may not use, reproduce, or
          imitate these marks without prior written consent.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          15. Disclaimers and Limitation of Liability
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          15.1 THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
          NON-INFRINGEMENT.
        </p>
        <p className="text-[13px] text-[#888]">
          15.2 TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY
          SHALL NOT BE LIABLE FOR:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>
            Any loss of profits, revenue, data, goodwill, or business
            opportunities.
          </li>
          <li>
            Any indirect, incidental, special, consequential, or punitive
            damages.
          </li>
          <li>
            Any losses arising from unauthorised access to or alteration of your
            Account.
          </li>
          <li>
            Any losses arising from your reliance on information provided on the
            Platform.
          </li>
          <li>
            Any losses resulting from blockchain network failures or delays.
          </li>
          <li>
            Any losses arising from changes in ROI rates or Account state
            transitions.
          </li>
        </ul>
        <p className="text-[13px] text-[#888]">
          15.3 The Company's total aggregate liability to any User for any claim
          arising under or in connection with these Terms shall not exceed the
          total amount deposited by that User in the twelve (12) months
          preceding the relevant claim.
        </p>
        <p className="text-[13px] text-[#888]">
          15.4 Some jurisdictions do not allow the exclusion of certain
          warranties or limitations of liability. In such jurisdictions, the
          Company's liability shall be limited to the maximum extent permitted
          by law.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          16. Indemnification
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          16.1 You agree to indemnify, defend, and hold harmless the Company,
          its officers, directors, employees, agents, and affiliates from and
          against any and all claims, damages, losses, liabilities, costs, and
          expenses (including reasonable legal fees) arising from or related to:
        </p>
        <ul className="mt-2 list-disc pl-5 text-[13px] text-[#888]">
          <li>Your use of the Platform.</li>
          <li>Your breach of these Terms.</li>
          <li>
            Your violation of any applicable law or the rights of a third party.
          </li>
          <li>
            Any false or misleading information you have provided to the
            Company.
          </li>
        </ul>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          17. Amendments to These Terms
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          17.1 The Company reserves the right to amend these Terms at any time.
          Where the Company makes material changes, it will provide at least
          fourteen (14) days' prior notice via the Platform notification system
          or by email to the User's registered address.
        </p>
        <p className="text-[13px] text-[#888]">
          17.2 Continued use of the Platform following the effective date of any
          amendment constitutes acceptance of the revised Terms. If you do not
          agree to the revised Terms, you must cease using the Platform and
          request account closure.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          18. Suspension and Termination
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          18.1 The Company may, at its sole discretion, immediately suspend or
          terminate a User's Account, without prior notice or liability, for any
          reason, including but not limited to breach of these Terms.
        </p>
        <p className="text-[13px] text-[#888]">
          18.2 Upon Account suspension (FROZEN state), the User's access to the
          Platform is restricted. The Company will: (a) notify the User by email
          of the suspension and its general reason within forty-eight (48)
          hours; (b) complete its initial investigation within fourteen (14)
          calendar days; (c) notify the User of the outcome (reinstatement,
          continued freeze pending further review, or termination). The User may
          submit a written appeal to supportlianka@gmail.com within seven (7)
          days of receiving the suspension notice. The Company will consider all
          appeals in good faith and respond within seven (7) business days of
          receipt.
        </p>
        <p className="text-[13px] text-[#888]">
          18.3 Upon Account termination, the User's access to the Platform
          ceases immediately. Any balance remaining in the User's wallets may be
          subject to the termination fee in Section 7.8 and any applicable
          forfeiture provisions.
        </p>
        <p className="text-[13px] text-[#888]">
          18.4 Balance Treatment on Termination. Where the Company terminates an
          Account for cause (breach, fraud, sanctions), any balance remaining in
          the User's wallets may be frozen pending investigation. The Company
          will determine within thirty (30) days whether balances are to be: (a)
          returned to the User net of applicable fees; (b) held pending legal
          proceedings; or (c) forfeited where required by applicable law (e.g.
          proceeds of fraud or money laundering). Automatic forfeiture without
          investigation applies only where required by law or ordered by a
          competent authority.
        </p>
        <p className="text-[13px] text-[#888]">
          18.5 Survival. Provisions that by their nature should survive
          termination - including Sections 12, 14, 15, 16, 19, and 20 - shall
          survive any termination of these Terms.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          19. Dispute Resolution
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          19.1 Good Faith Resolution. In the event of any dispute arising out of
          or in connection with these Terms or the Platform, the parties agree
          to first attempt to resolve the dispute through good faith
          negotiation. Users should contact the Company at
          supportlianka@gmail.com with a detailed description of the dispute.
        </p>
        <p className="text-[13px] text-[#888]">
          19.2 Binding Arbitration. If the dispute cannot be resolved through
          good faith negotiation within thirty (30) days of written notice, it
          shall be referred to and finally resolved by binding arbitration
          administered under the UNCITRAL Arbitration Rules as then in force.
          The seat of arbitration shall be determined by mutual agreement of the
          parties. The language of arbitration shall be English. The arbitral
          tribunal shall consist of one (1) arbitrator agreed upon by the
          parties, or failing agreement within fifteen (15) days, appointed by
          an internationally recognized arbitration institution. The
          arbitrator's award shall be final and binding and may be enforced in
          any court of competent jurisdiction. Notwithstanding the foregoing,
          either party may seek urgent injunctive relief from a court of
          competent jurisdiction.
        </p>
        <p className="text-[13px] text-[#888]">
          19.3 Class Action Waiver. To the extent permitted by applicable law,
          all disputes must be resolved on an individual basis. You waive any
          right to participate in any class, collective, or representative
          action against the Company.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          20. Governing Law
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          20.1 These Terms, and any dispute or claim arising out of or in
          connection with them, shall be governed by and construed in accordance
          with general principles of international commercial law. The parties
          agree that disputes shall be resolved through arbitration as set out
          in Section 19. Users acknowledge that mandatory consumer protection
          laws of their home jurisdiction may also apply.
        </p>
        <p className="text-[13px] text-[#888]">
          20.2 If any provision of these Terms is found to be invalid or
          unenforceable by a court of competent jurisdiction, the remaining
          provisions shall continue in full force and effect.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          21. Miscellaneous
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          21.1 Entire Agreement. These Terms, together with the Privacy Policy,
          constitute the entire agreement between you and the Company with
          respect to the Platform and supersede all prior agreements,
          representations, or understandings.
        </p>
        <p className="text-[13px] text-[#888]">
          21.2 Waiver. No failure or delay by the Company in exercising any
          right or remedy shall constitute a waiver of that right or remedy.
        </p>
        <p className="text-[13px] text-[#888]">
          21.3 Severability. If any provision of these Terms is held to be
          unlawful, void, or unenforceable, that provision shall be deemed
          severable and shall not affect the validity and enforceability of the
          remaining provisions.
        </p>
        <p className="text-[13px] text-[#888]">
          21.4 Force Majeure. The Company shall not be liable for any failure or
          delay in performance resulting from causes beyond its reasonable
          control, including but not limited to acts of God, natural disasters,
          blockchain network failures, government action, or cyberattacks.
        </p>
        <p className="text-[13px] text-[#888]">
          21.5 Language. These Terms are written in English. If translated into
          any other language, the English version shall prevail in the event of
          any conflict.
        </p>
        <p className="text-[13px] text-[#888]">
          21.6 No Agency. Nothing in these Terms creates a partnership, joint
          venture, employment, or agency relationship between the User and the
          Company.
        </p>

        <h2 className="mt-10 border-b border-[#222] pb-2 text-[15px] font-extrabold text-white">
          22. Contact Information
        </h2>
        <p className="mt-3 text-[13px] text-[#888]">
          For all enquiries, support requests, KYC submissions, account closure
          requests, or legal notices, please contact:
        </p>
        <p className="text-[13px] text-[#888]">
          <strong className="text-white">Lianka Inc</strong>
        </p>
        <p className="text-[13px] text-[#888]">Website: lianka.io</p>
        <p className="text-[13px] text-[#888]">
          Email: supportlianka@gmail.com
        </p>
        <p className="text-[13px] text-[#888]">
          Response time: 1-3 business days
        </p>
        <p className="mt-3 text-[13px] text-[#888] italic font-semibold">
          By using the Lianka Platform, you acknowledge that you have read,
          understood, and agreed to these Terms of Service.
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
          <Link href="/privacy" className="text-[#00C853] hover:underline">
            Privacy Policy
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
