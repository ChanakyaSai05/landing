import React from 'react'
import {Container,Row,Col, Modal} from 'react-bootstrap'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Page() {
  return (
    <>
        <Header/>

        <section className='terms-use'>
            <Container className="d-flex justify-content-center">
                <Row className='pb-4 d-flex justify-content-center'>
                    <Col className='col-12 text-center pb-5'>
                        <h1 className='ff-reemkufi display-4 fw-600'>
                            Terms of Service
                        </h1>
                    </Col>
                </Row>
            </Container>
        </section>

        <Container className="py-5">
            <Row className="">
                <Col className="col-12">
                    <p className="fs-5 pb-3 fst-italic">
                        Effective May 01, 2024
                    </p>
                    <p className="fs-5 pb-3">
                        These Terms of Service (this <strong>“Agreement”</strong>) are a binding contract between you (<strong>"Customer"</strong>) and Vison.ai, a product of <a href="https://infiniticube.com">Inifniticube</a> (“<strong>Vison,</strong>” “<strong>we,</strong>” or “<strong>us</strong>”). This Agreement governs your access to and use of the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION. THIS AGREEMENT CONTAINS AN ARBITRATION AGREEMENT AND A CLASS ACTION/JURY TRIAL WAIVER THAT REQUIRE, UNLESS YOU OPT OUT PURSUANT TO THE INSTRUCTIONS IN SECTION 11(B), THE EXCLUSIVE USE OF FINAL AND BINDING ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES BETWEEN YOU AND US, INCLUDING ANY CLAIMS THAT AROSE OR WERE ASSERTED BEFORE YOU AGREED TO THESE TERMS. TO THE FULLEST EXTENT PERMITTED BY LAW, YOU EXPRESSLY WAIVE YOUR RIGHT TO SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL ON YOUR CLAIMS, AS WELL AS YOUR RIGHT TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, COLLECTIVE, PRIVATE ATTORNEY GENERAL OR REPRESENTATIVE ACTION OR PROCEEDING.
                    </p>
                    <p className="fs-5 pb-3">
                        THIS AGREEMENT TAKES EFFECT WHEN YOU SIGN UP TO THE APP BY ACCESSING OR USING THE SERVICES (THE “<strong>EFFECTIVE DATE</strong>”). BY CLICKING ON THE “I ACCEPT” BUTTON BELOW OR BY ACCESSING OR USING THE SERVICES YOU (A) ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THIS AGREEMENT; (B) REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, POWER, AND AUTHORITY TO ENTER INTO THIS AGREEMENT AND, IF ENTERING INTO THIS AGREEMENT FOR AN ORGANIZATION, THAT YOU HAVE THE LEGAL AUTHORITY TO BIND THAT ORGANIZATION; AND (C) ACCEPT THIS AGREEMENT AND AGREE THAT YOU ARE LEGALLY BOUND BY ITS TERMS.
                    </p>
                    <p className="fs-5 pb-3">
                        IF YOU DO NOT ACCEPT THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICES.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">1. Definitions</h5>
                    <p className="fs-5 pb-3">
                        <strong>“Aggregated Statistics”</strong> means data and information related to Customer’s use of the Services to be used by Vison.ai in an aggregated and anonymized manner, including to compile statistical and performance information related to the provision and operation of the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong> “Arbitration Agreement”</strong> means the mandatory individual arbitration provision in Section 11(b).
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Authorized User”</strong> means Customer’s employees, consultants, contractors, and agents (i) who are authorized by Customer to access and use the Services under the rights granted to Customer pursuant to this Agreement and (ii) for whom access to the Services has been purchased hereunder.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Class Action/Jury Trial Waiver”</strong> means the class action/jury trial waiver provision in Section 11(c).
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Confidential Information”</strong> means information about either party’s business affairs, products, confidential intellectual property, trade secrets, third-party confidential information, and other sensitive or proprietary information, whether orally or in written, electronic, or other form or media/in written or electronic form or media, whether or not marked, designated, or otherwise identified as “confidential” at the time of disclosure. Confidential Information does not include information that, at the time of disclosure is: (a) in the public domain; (b) known to the receiving party; (c) rightfully obtained by the receiving party on a non-confidential basis from a third party; or (d) independently developed by the receiving party.
                    </p>
                    <p className="fs-5 pb-3">
                    <strong>“Customer,”</strong> <strong>“you,”</strong> or <strong>“your”</strong> means you and your Authorized Users.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Customer Account”</strong> means your account on the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Customer Property”</strong> means (i) the Input, (ii) the Output, and (iii) any other content (including text, images, illustrations, charts, tables, and other materials), materials or data supplied by Customer to Vison.ai, either directly through the Service or indirectly through the integration with a Third Party Product, for processing on Customer’s behalf.
                    </p>
                    <p className="fs-5 pb-3">
                    <strong>“Documentation”</strong> means Vison.ai’s user manuals, handbooks, guides, FAQs, instructional videos, relating to the Services provided by Vison.ai to Customer electronically and relating to the Services available at. <a href="https://www.vison.ai/">www.vison.ai</a>
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Feedback”</strong> means any communications or materials sent to us by mail, email, telephone, or otherwise, suggesting or recommending changes to the Services, including without limitation, new features or functionality relating thereto, or any comments, questions, suggestions, ideas, or the like, about the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>"Input"</strong> means the information you input via prompts into the Services to which you own or have permission to use the Intellectual Property Rights therein. For the avoidance of doubt, Input shall not be deemed to include any Vison.ai Property.

                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Intellectual Property Rights”</strong> means all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights and other intellectual property rights as may now exist or hereafter come into existence, and all applications therefore and registrations, renewals and extensions thereof, under the laws of any state, country, territory or other jurisdiction.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Vison.ai Property”</strong> means (i) the Services, (ii) the Documentation, and (iii) all content and other materials and software supplied by Vison.ai in connection with, or used by Vison.ai in providing, any Services. For the avoidance of doubt, Vison.ai Property shall not be deemed to include the Output. For the avoidance of doubt, Vison.ai Property includes Aggregated Statistics and any information, data, or other content derived from Vison.ai’s monitoring of your access to or use of the Services, but does not include Customer Property.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Output”</strong> means the output generated and returned by the Services to you based on the Input. For the avoidance of doubt, the Output shall not be deemed to include any Vison.ai Property.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Privacy Policy”</strong> means the privacy policy, available at <a href="https://vison.ai/privacy">Vison.ai/privacy.</a>
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Services”</strong> means the online and/or mobile services, web site, and software provided on or in connection with the service provided by Vison.ai under this Agreement and as detailed on Vison.ai’s website at <a href="http://www.vison.ai/">www.vison.ai</a>
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>"Term"</strong> means the term of this Agreement, which will commence on the Effective Date and continue for the period of Customer's active subscription to the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“Third-Party Products”</strong> means any products, content, services, information, websites, or other materials that are owned by third parties and are incorporated into or accessible through the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“User”</strong> or <strong>“Users”</strong> means all visitors, users, and others who access the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>“User Accounts”</strong> means different types of accounts for different types of Users.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">2. Access and Use</h5>

                    <p className="fs-5 pb-3">
                        <strong>(a) Eligibility.</strong> This is a contract between you and Vison.ai. You must read and agree to this Agreement before using the Services. If you do not agree, you may not use the Services. You may use the Services only if you can form a binding contract with Vison.ai, and only in compliance with this Agreement and all applicable local, state, national, and international laws, rules and regulations. Any use or access to the Services by anyone under 13 years old (or under 16 years old in Europe) is strictly prohibited and in violation of this Agreement. The Services are not available to any Users previously removed from the Services by Vison.ai.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(b) Provision of Access.</strong> Subject to and conditioned on your payment of Fees and compliance with all the terms and conditions of this Agreement, Vison.ai hereby grants you a revocable, non-exclusive, non-transferable, non-sublicensable, limited right to access and use the Services during the Term solely for your internal business operations by Authorized Users in accordance with the terms and conditions herein. Vison.ai shall provide you the necessary passwords and access credentials to allow you to access the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(c) Documentation License.</strong> Subject to the terms and conditions contained in this Agreement, Vison.ai hereby grants you a non-exclusive, non-sublicensable, non-transferable license for Authorized Users to use the Documentation during the Term solely for your internal business purposes in connection with use of the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(d) Accounts.</strong> Your Customer Account gives you access to the services and functionality that we may establish and maintain from time to time and in our sole discretion. We may maintain other User Accounts. If you open a Customer Account on behalf of a company, organization, or other entity, then “you” includes you and that entity. By connecting to Vison.ai with a third-party service, you give us permission to access and use your information from that service as permitted by that service, and to store your log-in credentials for that service.
                    </p>
                    <p className="fs-5 pb-3">
                        You may never use other Users’ User Accounts without permission. When creating your Customer Account, you must provide accurate and complete information, and you must keep this information up to date. You are solely responsible for the activity that occurs on your Customer Account, and you must not share your Customer Account login verification code (OTP- One Time Password) with any one. You must notify Vison.ai immediately of any breach of security or unauthorized use of your Customer Account. Vison.ai will not be liable for any losses caused by any unauthorized use of your Customer Account.
                    </p>
                    <p className="fs-5 pb-3">
                        You may control your Customer Account profile and how you interact with the Services by changing the settings in your settings page. By providing Vison.ai your email address you consent to our using the email address to send you Services-related notices, including any notices required by law, in lieu of communication by postal mail. We may also use your email address to send you other messages, such as changes to features of the Services and special offers. If you do not want to receive such email messages, you may opt out or change your preferences in your settings page. Opting out may prevent you from receiving email messages regarding updates, improvements, or offers.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(e) Use Restrictions.</strong> You shall not, and shall not permit any Authorized Users to engage in any of the following prohibited activities: (i) copying, distributing, selling, reselling, or disclosing any part of the Services in any medium, including without limitation by any automated or non-automated “scraping”; (ii) using any automated system, including without limitation “robots,” “spiders,” “offline readers,” etc., to access the Services in a manner that sends more request messages to the Vison.ai servers than a human can reasonably produce in the same period of time by using a conventional on-line web browser (except that Vison.ai grants the operators of public search engines revocable permission to use spiders to copy publicly available materials from the Services for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials); (iii) transmitting spam, chain letters, or other unsolicited email; (iv) attempting to interfere with, compromise the system integrity or security or decipher any transmissions to or from the servers running the Services; (v) violate Vison.ai's Fair Use Policy accessible at <a href="https://vison.ai/usage-policies">vison.ai/usage-policies</a>; (vi) uploading invalid data, viruses, worms, or other software agents through the Services; (vii) collecting or harvesting any personally identifiable information or other personal information, including account names, from the Services; (viii) using the Services for any unlawful commercial solicitation purposes; (ix) impersonating another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud, hiding or attempting to hide your identity; (x) interfering with the proper working of the Services; (xi) accessing any content on the Services through any technology or means other than those provided or authorized by the Services; or (xii) bypassing the measures we may use to prevent or restrict access to the Services, including without limitation features that prevent or restrict use or copying of any content or enforce limitations on use of the Services or the content therein.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(f) Aggregated Statistics.</strong> Notwithstanding anything to the contrary in this Agreement, Vison.ai may monitor Customer’s use of the Services and collect and compile Aggregated Statistics. As between Vison.ai and Customer, all right, title, and interest in Aggregated Statistics, and all intellectual property rights therein, belong to and are retained solely by Vison.ai. You acknowledge that Vison.ai may compile Aggregated Statistics based on Customer Property input into the Services. You agree that Vison.ai may (i) make Aggregated Statistics publicly available in compliance with applicable law, and (ii) use Aggregated Statistics to the extent and in the manner permitted under applicable law; provided that such Aggregated Statistics do not identify Customer or Customer’s Confidential Information.
                    </p>
                    <p className="fs-5 pb-3">

                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(g) Reservation of Rights.</strong> Vison.ai reserves all rights not expressly granted to Customers in this Agreement. Except for the limited rights and licenses expressly granted under this Agreement, nothing in this Agreement grants, by implication, waiver, estoppel, or otherwise, to Customer or any third party, any intellectual property rights or other right, title, or interest in or to the Vison.ai Property.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(h) Suspension.</strong> Notwithstanding anything to the contrary in this Agreement, Vison.ai may, in its sole discretion and without notice, temporarily suspend or permanently terminate Customer’s and any other Authorized User’s access to any portion or all of the Services for no reason or for any reason, including but not limited to if: (i) Vison.ai reasonably determines that (A) there is a threat or attack on any of the Vison.ai Property; (B) Customer’s or any other Authorized User’s use of the Vison.ai Property disrupts or poses a security risk to the Vison.ai Property or to any other customer or vendor of Vison.ai; (C) Customer or any other Authorized User is using the Vison.ai Property for fraudulent or illegal activities; (D) subject to applicable law, Customer has ceased to continue its business in the ordinary course, made an assignment for the benefit of creditors or similar disposition of its assets, or become the subject of any bankruptcy, reorganization, liquidation, dissolution, or similar proceeding; or (E) Vison.ai’s provision of the Services to Customer or any other Authorized User is prohibited by applicable law; (ii) any vendor of Vison.ai has suspended or terminated Vison.ai’s access to or use of any third-party services or products required to enable Customer to access the Services; or (iii) in accordance with Section 5.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(i) Changes to the Services.</strong> We may, without prior notice, change the Services; stop providing the Services or features of the Services, to you or to Users generally; or create usage limits for the Services. We may permanently or temporarily terminate or suspend your access to the Services without notice and liability for any reason, including if in our sole determination you violate any provision of this Agreement, or for no reason. Upon termination for any reason or no reason, you continue to be bound by this Agreement.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(j) Processing of Personal Data.</strong> The Parties acknowledge that use of the Service does not require Vison.ai to process any information relating to an identified or identifiable natural person that relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular natural person ("Personal Data") on behalf of Customer. In other words, Customer acknowledges that it does not need to provide Input that contains Personal Data in order to make effective use of the Services. However, if Customer wishes to submit Personal Data to Vison.ai for processing on its behalf, it must first execute a Data Processing Addendum (“DPA”) with Vison.ai, which is accessible at: <a href="https://vison.ai/dpa">vison.ai/dpa</a>. Upon execution of the DPA by Customer, the DPA shall be fully incorporated by reference in, and become a part of, this Agreement. To the extent that Vison.ai processes Personal Data in its capacity as a data controller, such processing will be in accordance with Vison.ai’s Privacy Policy.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(k) In-Product Cookies.</strong> Whenever Customers or Users interact with the Services, Vison.ai uses First Party Cookies to collect information to ensure Customers and Users can securely, quickly and reliably use the Services, and Vison.ai’s In-Product Cookie Policy, accessible at <a href="https://vison.ai/cookies">vison.ai/cookies</a>, applies. When Vison.ai collects this information, it only uses this data to (i) provide the Services, or (ii) in aggregate form, and not in a manner that would identify the Customers or Users personally.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">3. Intellectual Property Rights</h5>

                    <p className="fs-5 pb-3">
                        <strong>(a) Customer Property.</strong> We claim no ownership rights over Customer Property. The Customer Property remains yours.
                    </p>
                    <p className="fs-5 pb-3">
                        Vison.ai has the right (but not the obligation) in its sole discretion to remove any Customer Property that is processed via the Services. By submitting, posting, displaying, providing, or otherwise making available any Customer Property on or through the Services, you expressly grant, and you represent and warrant that you have all rights necessary to grant, to Vison.ai a royalty-free, sublicensable, transferable, perpetual, irrevocable, non-exclusive, worldwide license to use, reproduce, modify, publish, list information regarding, edit, translate, distribute, syndicate, publicly perform, publicly display, and make derivative works of all such Customer Property and your name, voice, and/or likeness as contained in your Customer Property, in whole or in part, and in any form, media or technology, whether now known or hereafter developed, for use in connection with the Services and Vison.ai’s (and its successors’ and affiliates’) business, including without limitation in connection with modifying, improving, and enhancing artificial intelligence models, as well as promoting and redistributing part or all of the Services (and derivative works thereof) in any media formats and through any media channels. Additionally, for the Term, you grant Vison.ai a non-exclusive, irrevocable license to use Customer’s name, trademarks and logos to identify Customer as a subscriber of the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        In connection with your Customer Property, you affirm, represent, warrant and covenant the following: (i) You have the written consent of each and every identifiable natural person in the Customer Property, if any, to use such person’s name or likeness in the manner contemplated by the Services and this Agreement, and each such person has released you from any liability that may arise in relation to such use; (ii) You have obtained and are solely responsible for obtaining all consents as may be required by law to submit any Customer Property relating to third parties; (iii) Your Customer Property and Vison.ai’s use thereof as contemplated by this Agreement and the Services will not violate any law or infringe any rights of any third party, including but not limited to any Intellectual Property Rights and privacy rights; and (iv) Vison.ai may exercise the rights to your Customer Property granted under this Agreement without liability for payment of any guild fees, residuals, payments, fees, or royalties payable under any collective bargaining agreement or otherwise.
                    </p>
                    <p className="fs-5 pb-3">
                        Vison.ai takes no responsibility and assumes no liability for any Customer Property that you or any other User or third-party posts, sends, or otherwise makes available over the Services. You shall be solely responsible for your Customer Property and the consequences of posting, publishing it, sharing it, or otherwise making it available on the Services, and you agree that we are only acting as a passive conduit for your online distribution and publication of your Customer Property. You understand and agree that you may be exposed to Customer Property that is inaccurate, objectionable, inappropriate for children, or otherwise unsuited to your purpose, and you agree that Vison.ai shall not be liable for any damages you allege to incur as a result of or relating to any Customer Property.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(b) Vison.ai Property.</strong> Vison.ai Property and all Intellectual Property Rights related thereto are the exclusive property of Vison.ai and its licensors (including other Users who post content to the Services). Except as explicitly provided herein, nothing in this Agreement shall be deemed to create a license in or under any such Intellectual Property Rights, and you agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from any Vison.ai Property. Use of the Vison.ai Property for any purpose not expressly permitted by this Agreement is strictly prohibited. For the avoidance of doubt, Vison.ai Property, Aggregated Statistics and any other information, data, or other content derived from Vison.ai’s monitoring of your access to or use of the Services, but does not include Customer Property. In furtherance of the foregoing, you hereby unconditionally and irrevocably grant to Vison.ai an assignment of all right, title, and interest in and to the Aggregated Statistics, including all Intellectual Property Rights relating thereto.
                    </p>
                    <p className="fs-5 pb-3">
                        You may choose to or we may invite you to submit Feedback. By submitting any Feedback, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place Vison.ai under any fiduciary or other obligation, and that we are free to use the Feedback without any additional compensation to you, and/or to disclose the Feedback on a non-confidential basis or otherwise to anyone. You further acknowledge that, by acceptance of your submission, Vison.ai does not waive any rights to use similar or related ideas previously known to Vison.ai, or developed by its employees, or obtained from sources other than you. If you or any of your employees, contractors, or agents sends or transmits Feedback, we are free to use such Feedback irrespective of any other obligation or limitation between you and us governing such Feedback. All Feedback is and will be treated as non-confidential. You hereby assign to us on your behalf, and shall cause your Authorized Users to assign, all right, title, and interest in, and we are free to use, without any attribution or compensation to you or any third party, any ideas, know-how, concepts, techniques, or other Intellectual Property Rights contained in the Feedback, for any purpose whatsoever, although we are not required to use any Feedback.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">4. Customer Responsibilities</h5>

                    <p className="fs-5 pb-3">
                    <strong>(a) Acceptable Use Policy.</strong> You shall comply with Vison.ai's Acceptable Use Policy available a <a href="https://vison.ai/usage-policies">Vison.ai/usage-policies</a> and all applicable laws, rules, and regulations.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(b) Account Use.</strong> You are responsible and liable for all uses of the Services and Documentation resulting from access provided by you, directly or indirectly, whether such access or use is permitted by or in violation of this Agreement. Without limiting the generality of the foregoing, you are responsible for all acts and omissions of Authorized Users, and any act or omission by an Authorized User that would constitute a breach of this Agreement if taken by you will be deemed a breach of this Agreement by you. You shall use reasonable efforts to make all Authorized Users aware of this Agreement’s provisions as applicable to such Authorized User’s use of the Services and shall cause Authorized Users to comply with such provisions.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(c) Passwords and Access Credentials.</strong> You are responsible for keeping your access credentials associated with the Services confidential. You will not sell or transfer them to any other person or entity. You will promptly notify us about any unauthorized access to your access credentials.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(d) Third-Party Products.</strong> The Services may permit access to Third-Party Products. For purposes of this Agreement, such Third-Party Products are subject to their own terms and conditions presented to you for acceptance within the Services by website link or otherwise. If you do not agree to abide by the applicable terms for any such Third-Party Products, then you should not install, access, or use such Third-Party Products. Vison.ai does not endorse or assume any responsibility for any such Third-Party Products. If you access a Third-Party Product from the Services or share your Customer Property on or through any third-party website or service, you do so at your own risk, and you understand that this Agreement and Vison.ai’s Privacy Policy do not apply to your use of such sites. You expressly relieve Vison.ai from any and all liability arising from your use of any Third-Party Products Third-Party Products, including without limitation Customer Property submitted by other Users. Additionally, your dealings with or participation in promotions of advertisers found on the Services, including payment and delivery of goods, and any other terms (such as warranties) are solely between you and such advertisers. You agree that Vison.ai shall not be responsible for any loss or damage of any sort relating to your dealings with such advertisers.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">5. Fees and Payment</h5>

                    <p className="fs-5 pb-3">
                        <strong>(a) Billing Policies.</strong> Certain aspects of the Services may be provided for a fee or other charge. If you elect to use paid aspects of the Services, you agree to our Pricing and Payment Terms available at www.vison.ai/pricing, as we may update them from time to time. Vison.ai may add new services for additional fees and charges, add or amend fees and charges for existing services, at any time in its sole discretion. Any change to our Pricing and Payment Terms shall become effective in the billing cycle following notice of such change to you as provided in this Agreement.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(b) No Refunds.</strong> You may cancel your Customer Account at any time; however, there are no refunds for cancellation but you can use the services till the next billing cycle. In the event that Vison.ai suspends or terminates your Customer Account or this Agreement, you understand and agree that you shall receive no refund or exchange for any unused time on a subscription, any license or subscription fees for any portion of the Services, any content or data associated with your Customer Account, or for anything else.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(c) Free Trials.</strong> We or our third-party service providers may offer free trials to a particular Service. We or our third-party service provider will automatically bill your payment method on the later of the day your free trial ends or the day you start your paid subscription, and on each recurring billing date thereafter, subject to Section 5(d). You will not receive a notice that your free trial has ended and that payment for your subscription is due. If you wish to avoid charges to your payment method, you must cancel your subscription prior to the last day of your free trial period. If you cancel your subscription during a free trial, cancellation may be effective immediately.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(d) Automatic Renewal of Subscription Fees.</strong> IF YOU SIGN UP FOR A SUBSCRIPTION, THE CORRESPONDING FEES AT THE RATE AS SET FORTH IN YOUR USER ACCOUNT AND/OR ON THE CHECKOUT PAGE WILL AUTOMATICALLY RENEW EVERY MONTH ON A CONTINUOUS BASIS UNLESS AND UNTIL YOU NOTIFY US THAT YOU WANT TO CANCEL YOUR SUBSCRIPTION. ANY NOTICE OF CANCELLATION MUST BE SUBMITTED ON YOUR SETTINGS PAGE AND WILL BE EFFECTIVE IN THE MONTH FOLLOWING THE MONTH YOU PROVIDE US NOTICE. YOU UNDERSTAND THAT UNLESS AND UNTIL YOU NOTIFY US OF YOUR CANCELLATION, YOUR SUBSCRIPTION AND ALL CORRESPONDING FEES WILL AUTOMATICALLY RENEW, AND YOU AUTHORIZE US OR OUR AUTHORIZED THIRD-PARTY PAYMENT PROVIDER (WITHOUT NOTICE TO YOU, UNLESS REQUIRED BY APPLICABLE LAW) TO CHARGE YOU THE APPLICABLE SUBSCRIPTION FEES AND ANY TAXES, USING ANY ELIGIBLE PAYMENT METHOD WE HAVE ON RECORD FOR YOU.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(e) Risk of Loss.</strong> All products that may be purchased from or via the Services are transported and delivered to you by an independent carrier not affiliated with, or controlled by, Vison.ai. Title to products purchased on the Services, as well as the risk of loss for such products, passes to you when Vison.ai or our supplier delivers these items to the carrier.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(f) Payment Information; Taxes.</strong> We accept various payment methods through Stripe, including, without limitation, Mastercard, Visa, and American Express. By using the Services, you agree to be bound by Stripe’s Services Agreement available at <a href="https://stripe.com/us/legal">https://stripe.com/us/legal</a>. All information that you provide in connection with a purchase or transaction or other monetary transaction interaction with the Services must be accurate, complete, and current. You agree to pay all charges incurred by users of your credit card, debit card, or other payment method used in connection with a purchase or transaction or other monetary transaction interaction with the Services at the prices in effect when such charges are incurred. You will pay any applicable taxes, if any, relating to any such purchases, transactions or other monetary transaction interactions.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">6. Confidential Information</h5>

                    <p className="fs-5 pb-3">
                        From time to time, Vison.ai and Customer may disclose or make available to the other party Confidential Information. The receiving party shall not disclose the disclosing party’s Confidential Information to any person or entity, except to the receiving party’s employees who have a need to know the Confidential Information for the receiving party to exercise its rights or perform its obligations hereunder and who are required to protect the Confidential Information in a manner no less stringent than required under this Agreement. Notwithstanding the foregoing, each party may disclose Confidential Information to the limited extent required (i) to comply with the order of a court or other governmental body, or as otherwise necessary to comply with applicable law, provided that the party making the disclosure pursuant to the order shall first have given written notice to the other party and made a reasonable effort to obtain a protective order; or (ii) to establish a party’s rights under this Agreement, including to make required court filings. Each party’s obligations of non-disclosure with regard to Confidential Information are effective as of the date such Confidential Information is first disclosed to the receiving party and will expire five years thereafter; provided, however, with respect to any Confidential Information that constitutes a trade secret (as determined under applicable law), such obligations of non-disclosure will survive the termination or expiration of this Agreement for as long as such Confidential Information remains subject to trade secret protection under applicable law.
                    </p>
                    <p className="fs-5 pb-3">
                        Vison.ai cares about the integrity and security of your personal information. However, we cannot guarantee that unauthorized third parties will never be able to defeat our security measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">7. Privacy Policy</h5>

                    <p className="fs-5 pb-3">
                        Vison.ai complies with its Privacy Policy in providing the Services. The Privacy Policy is subject to change as described therein. By accessing, using, and providing information to or through the Services, you acknowledge that you have reviewed and accepted our Privacy Policy, and you consent to all actions taken by us with respect to your information in compliance with the then-current version of our Privacy Policy.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">8. Warranty Disclaimer</h5>

                    <p className="fs-5 pb-3">
                        THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. USE OF THE SERVICES IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM VISON.AI OR THROUGH THE SERVICES WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN. WITHOUT LIMITING THE FOREGOING, VISON.AI, ITS SUBSIDIARIES, ITS AFFILIATES, AND ITS LICENSORS DO NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE OR CORRECT; THAT THE SERVICES WILL MEET YOUR REQUIREMENTS; THAT THE SERVICES WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ANY CONTENT RESULTING FROM, OR DOWNLOADED OR OTHERWISE OBTAINED THROUGH, THE USE OF THE SERVICES IS DOWNLOADED AND USED AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY LIABILITY ARISING THEREFROM TO THE EXTENT NOT EXPRESSLY SET FORTH OTHERWISE HEREIN, INCLUDING ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOAD OR YOUR USE OF THE SERVICES.
                    </p>
                    <p className="fs-5 pb-3">
                        FURTHER, VISON.AI DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES OR ANY HYPERLINKED WEBSITE OR SERVICE, AND VISON.AI WILL NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                    </p>
                    <p className="fs-5 pb-3">
                        FEDERAL LAW, SOME STATES, PROVINCES AND OTHER JURISDICTIONS DO NOT ALLOW THE EXCLUSION AND LIMITATIONS OF CERTAIN IMPLIED WARRANTIES, SO THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. THIS AGREEMENT GIVES YOU SPECIFIC LEGAL RIGHTS, AND YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE. THE DISCLAIMERS AND EXCLUSIONS UNDER THIS AGREEMENT WILL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">9. Indemnification</h5>

                    <p className="fs-5 pb-3">
                        Customer shall defend, indemnify and hold harmless Vison.ai and its subsidiaries, agents, licensors, managers, and other affiliated companies, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s fees) arising from: (i) Customer or Customer’s Authorized Users’ use of and access to the Services, including any data or content transmitted or received by Customer or Customer’s Authorized Users; (ii) Customer or Customer’s Authorized Users’ violation of any term of this Agreement, including without limitation Customer or Customer’s Authorized Users’ breach of any of the representations and warranties above; (iii) Customer or Customer’s Authorized Users’ violation of any third-party right, including without limitation any right of privacy or Intellectual Property Rights; (iv) Customer or Customer’s Authorized Users’ violation of any applicable law, rule or regulation; (v) Customer Property or any content that is submitted via Customer or Customer’s Authorized Users’ User Account including without limitation misleading, false, or inaccurate information; (vi) Customer or Customer’s Authorized Users’ willful misconduct; or (vii) any other party’s access and use of the Services with Customer or Customer’s Authorized Users’ unique username, password or other appropriate security code.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">10. Limitations of Liability</h5>

                    <p className="fs-5 pb-3">
                        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL VISON.AI BE LIABLE UNDER OR IN CONNECTION WITH THIS AGREEMENT UNDER ANY LEGAL OR EQUITABLE THEORY, INCLUDING BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE, FOR ANY: (a) CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, ENHANCED, OR PUNITIVE DAMAGES; (b) INCREASED COSTS, DIMINUTION IN VALUE OR LOST BUSINESS, PRODUCTION, REVENUES, OR PROFITS; (c) LOSS OF GOODWILL OR REPUTATION; (d) USE, INABILITY TO USE, LOSS, INTERRUPTION, DELAY OR RECOVERY OF ANY DATA, OR BREACH OF DATA OR SYSTEM SECURITY; OR (e) COST OF REPLACEMENT GOODS OR SERVICES, IN EACH CASE REGARDLESS OF WHETHER VISON.AI WAS ADVISED OF THE POSSIBILITY OF SUCH LOSSES OR DAMAGES OR SUCH LOSSES OR DAMAGES WERE OTHERWISE FORESEEABLE. UNDER NO CIRCUMSTANCES WILL VISON.AI BE RESPONSIBLE FOR ANY DAMAGE, LOSS OR INJURY RESULTING FROM HACKING, TAMPERING OR OTHER UNAUTHORIZED ACCESS OR USE OF THE SERVICES OR YOUR ACCOUNT OR THE INFORMATION CONTAINED THEREIN.
                    </p>

                    <p className="fs-5 pb-3">
                        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VISON.AI ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO OR USE OF THE SERVICES; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN; (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES; (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY; (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SERVICES; AND/OR (VII) CUSTOMER PROPERTY OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY.
                    </p>
                    <p className="fs-5 pb-3">
                        IN NO EVENT WILL VISON.AI, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS’ AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT UNDER ANY LEGAL OR EQUITABLE THEORY, INCLUDING BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE EXCEED THE TOTAL AMOUNTS PAID TO VISON.AI UNDER THIS AGREEMENT IN THE TWO (2) MONTH PERIOD PRECEDING THE EVENT GIVING RISE TO THE CLAIM OR $50.00, WHICHEVER IS GREATER.
                    </p>
                    <p className="fs-5 pb-3">
                        THIS LIMITATION OF LIABILITY SECTION APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF VISON.AI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                    </p>
                    <p className="fs-5 pb-3">
                        SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU. THIS AGREEMENT GIVES YOU SPECIFIC LEGAL RIGHTS, AND YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE. THE DISCLAIMERS, EXCLUSIONS, AND LIMITATIONS OF LIABILITY UNDER THIS AGREEMENT WILL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">11. Governing Law, Arbitration, and Class Action/Jury Trial Waiver</h5>

                    <p className="fs-5 pb-3">
                        <strong>(a) Governing Law.</strong> You agree that: (i) the Services shall be deemed solely based in Delaware; and (ii) the Services shall be deemed a passive one that does not give rise to personal jurisdiction over us, either specific or general, in jurisdictions other than Delaware. This Agreement shall be governed by the internal substantive laws of the State of Delaware, without respect to its conflict of laws principles. The parties acknowledge that this Agreement evidences a transaction involving interstate commerce. Notwithstanding the preceding sentences with respect to the substantive law, the Federal Arbitration Act (9 U.S.C. §§ 1-16) (“FAA”) governs the interpretation and enforcement of the Arbitration Agreement in Section 11(b) and preempts all state laws to the fullest extent permitted by law. If the FAA is found to not apply to any issue that arises from or relates to the Arbitration Agreement, then that issue shall be resolved under and governed by the law of your state of residence. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. You agree to submit to the exclusive personal jurisdiction of the federal and state courts located in Delaware for any actions for which we retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a our copyrights, trademarks, trade secrets, patents, or other intellectual property or proprietary rights, as set forth in the Arbitration provision below, including any provisional relief required to prevent irreparable harm. You agree that Delaware is the proper and exclusive forum for any appeals of an arbitration award or for trial court proceedings in the event that the arbitration provision below is found to be unenforceable.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(b) Arbitration.</strong> Read this Section carefully because it requires the parties to arbitrate their disputes and limits the manner in which you can seek relief from Vison.ai. This Arbitration Agreement applies to and governs any dispute, controversy, or claim between you and Vison.ai that arises out of or relates to, directly or indirectly: (a) this Agreement, including the formation, existence, breach, termination, enforcement, interpretation, validity, or enforceability thereof; (b) access to or use of the Services, including receipt of any advertising or marketing communications; (c) any transactions through, by, or using the Services; or (d) any other aspect of your relationship or transactions with Vison.ai, directly or indirectly, as a consumer (“Claim” or collectively, “Claims”). The Arbitration Agreement shall apply, without limitation, to all Claims that arose or were asserted before or after your agreement to this Agreement.
                    </p>
                    <p className="fs-5 pb-3">
                        If you are a new Vison.ai user, you can reject and opt-out of this Arbitration Agreement within 30 days of accepting this Agreement by emailing Vison.ai at legal@vison.aii with your first and last name and stating your intent to opt-out of the Arbitration Agreement. Note that opting out of this Arbitration Agreement does not affect any other part of this Agreement, including the provisions regarding controlling law or in which courts any disputes must be brought.
                    </p>
                    <p className="fs-5 pb-3">
                        For any Claim, you agree to first contact us at legal@vison.ai and attempt to resolve the dispute with us informally. In the unlikely event that Vison.ai has not been able to resolve a Claim after sixty (60) days, we each agree to resolve any Claim exclusively through binding arbitration by AAA before a single arbitrator (the “Arbitrator”), under the Expedited Procedures then in effect for AAA (the “Rules”), except as provided herein. In the event of any conflict between the Rules and this Arbitration Agreement, this Arbitration Agreement shall control. AAA may be contacted at <a href="http://www.adr.org/">www.adr.org</a>, where the Rules are also available. The arbitration will be conducted in the U.S. county where you live or Delaware, unless you and Vison.ai agree otherwise. If you are using the Services for commercial purposes, each party will be responsible for paying any AAA filing, administrative and arbitrator fees in accordance with AAA rules, and the award rendered by the arbitrator shall include costs of arbitration, reasonable attorneys’ fees and reasonable costs for expert and other witnesses. If you are an individual using the Services for non-commercial purposes: (i) AAA may require you to pay a fee for the initiation of your case, unless you apply for and successfully obtain a fee waiver from AAA; (ii) the award rendered by the arbitrator may include your costs of arbitration, your reasonable attorney’s fees, and your reasonable costs for expert and other witnesses; and (iii) you may sue in a small claims court of competent jurisdiction without first engaging in arbitration, but this does not absolve you of your commitment to engage in the informal dispute resolution process. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. You and Vison.ai agree that the Arbitrator, and not any federal, state, or local court or agency, shall have exclusive authority to resolve any disputes relating to the interpretation, applicability, enforceability or formation of this Arbitration Agreement, including any claim that all or any part of this Arbitration Agreement is void or voidable. The Arbitrator shall also be responsible for determining all threshold arbitrability issues, including issues relating to whether the Agreement, any provision of the Agreement, is unconscionable or illusory and any defense to arbitration, including waiver, delay, laches, unconscionability, or estoppel.
                    </p>
                    <p className="fs-5 pb-3">
                        Nothing in this Section shall be deemed as: preventing Vison.ai from seeking injunctive or other equitable relief from the courts as necessary to prevent the actual or threatened infringement, misappropriation, or violation of our data security, Intellectual Property Rights or other proprietary rights; or preventing you from asserting claims in small claims court, if your claims qualify and so long as the matter remains in such court and advances on only an individual (non-class, non-representative) basis.
                    </p>
                    <p className="fs-5 pb-3">
                        If this Arbitration Agreement is found to be void, unenforceable, or unlawful, in whole or in part, the void, unenforceable, or unlawful provision, in whole or in part, shall be severed. Severance of the void, unenforceable, or unlawful provision, in whole or in part, shall have no impact on the remaining provisions of the Arbitration Agreement, which shall remain in force, or the parties’ ability to compel arbitration of any remaining claims on an individual basis pursuant to the Arbitration Agreement. Notwithstanding the foregoing, if the Class Action/Jury Trial Waiver is found to be void, unenforceable, or unlawful, in whole or in part, because it would prevent you from seeking public injunctive relief, then any dispute regarding the entitlement to such relief (and only that relief) must be severed from arbitration and may be litigated in a civil court of competent jurisdiction. All other claims for relief subject to arbitration under this Arbitration Agreement shall be arbitrated under its terms, and the parties agree that litigation of any dispute regarding the entitlement to public injunctive relief shall be stayed pending the outcome of any individual claims in arbitration.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(c) Class Action/Jury Trial Waiver.</strong> WITH RESPECT TO ALL PERSONS AND ENTITIES, REGARDLESS OF WHETHER THEY HAVE OBTAINED OR USED THE SERVICES FOR PERSONAL, COMMERCIAL OR OTHER PURPOSES, ALL CLAIMS MUST BE BROUGHT IN THE PARTIES’ INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION OR OTHER REPRESENTATIVE PROCEEDING. THIS WAIVER APPLIES TO CLASS ARBITRATION, AND, UNLESS WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON’S CLAIMS. YOU AND Vison.ai AGREE THAT THE ARBITRATOR MAY AWARD RELIEF ONLY TO AN INDIVIDUAL CLAIMANT AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF ON YOUR INDIVIDUAL CLAIM(S). ANY RELIEF AWARDED MAY NOT AFFECT OTHER Vison.ai USERS. YOU AND Vison.ai FURTHER AGREE THAT, BY ENTERING INTO THIS AGREEMENT, YOU AND Vison.ai ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO BRING, JOIN, OR PARTICIPATE IN A CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR OTHER REPRESENTATIVE PROCEEDING OF ANY KIND AS A PLAINTIFF OR CLASS MEMBER.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">12. Miscellaneous</h5>

                    <p className="fs-5 pb-3">
                        <strong>(a) Entire Agreement/Severability.</strong> This Agreement, together with any amendments and any additional agreements you may enter into with Vison.ai in connection with the Services, shall constitute the entire agreement between you and Vison.ai concerning the Services. Except as otherwise stated in Section 11(b), if any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect. The invalidity, illegality, or unenforceability of any provision herein does not affect any other provision herein or the validity, legality, or enforceability of such provision in any other jurisdiction.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(b) Modifications.</strong> You acknowledge and agree that we have the right, in our sole discretion, to modify this Agreement from time to time, and that modified terms become effective on posting. We will notify you of material modifications through direct email or visible banner in the Services. You are responsible for reviewing and becoming familiar with any such modifications. Your continued use of the Services after the effective date of the modifications will be deemed acceptance of the modified terms. Vison.ai will provide at least 30 days’ advance notice of changes to any service level that Vison.ai reasonably anticipates may result in a material reduction in quality or services.

                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(c) Export Regulation.</strong> The Services utilize software and technology that may be subject to US export control laws, including the US Export Administration Act and its associated regulations. You shall not, directly or indirectly, export, re-export, or release the Services or the software or technology included in the Services to, or make the Services or the software or technology included in the Services accessible from, any jurisdiction or country to which export, re-export, or release is prohibited by law, regulation, or rule. You shall comply with all applicable federal laws, regulations, and rules, and complete all required undertakings (including obtaining any necessary export license or other governmental approval), prior to exporting, re-exporting, releasing, or otherwise making the Services or the software or technology included in the Services available outside the US.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(d) US Government Rights.</strong> Each of the software components that constitute the Services and the Documentation is a “commercial product” as that term is defined at 48 C.F.R. § 2.101, consisting of “commercial computer software” and “commercial computer software documentation” as such terms are used in 48 C.F.R. § 12.212. Accordingly, if you are an agency of the US Government or any contractor therefor, you receive only those rights with respect to the Services and Documentation as are granted to all other end users, in accordance with (a) 48 C.F.R. § 227.7201 through 48 C.F.R. § 227.7204, with respect to the Department of Defense and their contractors, or (b) 48 C.F.R. § 12.212, with respect to all other US Government customers and their contractors
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(e) No Waiver.</strong> No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and Vison.ai’s failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision. Any failure to act by us with respect to a breach of this Agreement by you or others does not constitute a waiver and will not limit our rights with respect to such breach or any subsequent breaches.
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(f) Notices.</strong> Unless otherwise provided for in this Agreement, any notices to us must be sent to our US office at 28 Southeast 28th Avenue Portland, OR 97214 and must be delivered either in person, by certified or registered mail, return receipt requested and postage prepaid, or by recognized overnight courier service, and are deemed given upon receipt by us. Notwithstanding the foregoing, you hereby consent to receiving electronic communications from us. Vison.ai may provide notifications, whether such notifications are required by law or are for marketing or other business-related purposes, to you via email notice, written or hard copy notice, or through posting of such notice on our website, as determined by Vison.ai in our sole discretion. Vison.ai reserves the right to determine the form and means of providing notifications to our Users, provided that you may opt out of certain means of notification as described in this Agreement. Vison.ai is not responsible for any automatic filtering you or your network provider may apply to email notifications we send to the email address you provide us. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that such communications be in writing. You shall also send an electronic copy of any notice to legal@vison.ai..
                    </p>
                    <p className="fs-5 pb-3">
                        <strong>(g) Assignment.</strong> This Agreement, and any rights and licenses granted hereunder, is personal to you and may not be assigned or transferred for any reason whatsoever without our prior written consent and any action or conduct in violation of the foregoing will be void and without effect. We expressly reserve the right to assign this Agreement and to delegate any of its obligations hereunder.
                    </p>
                    <p className="fs-5 pb-3">
                        Please contact us at legal@vison.ai. with any questions regarding this Agreement

                    </p>
                    <p className="fs-5 pb-3"></p>
                    <p className="fs-5 pb-3"></p>
                    <p className="fs-5 pb-3"></p>
                </Col>
            </Row>
        </Container>



        <Footer/>

    </>
  )
}

export default Page