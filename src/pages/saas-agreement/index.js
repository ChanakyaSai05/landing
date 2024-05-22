import React from 'react'
import {Container,Row,Col, Modal} from 'react-bootstrap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Page() {
  return (
    <>
        <Header/>
    
        <section className='privacy-policy'>
            <Container className="d-flex justify-content-center">
                <Row className='pb-4 d-flex justify-content-center'>
                    <Col className='col-12 text-center pb-5'>
                        <h1 className='ff-reemkufi display-4 fw-600'>
                            Software As A Service Agreement
                        </h1>
                    </Col>
                </Row>
            </Container>
        </section>

        <Container className="py-5">
            <Row className="">
                <Col className="col-12">
                    <p className="fs-5 pb-3">
                        This SOFTWARE AS A SERVICE AGREEMENT (the “Agreement”) is entered into as of the Effective Date, by and between you (the “Customer”) and Vison.ai, a product of <a href='https://infiniticube.com'>Infiniticube</a>. (“Vison.ai”) with the USA office at  28 Southeast 28th Avenue Portland, OR 97214. <a href='https://www.vison.ai/'>Vision.ai</a> and Customer may be referred to herein collectively as the “Parties” or individually as a “Party.”
                    </p>
                    <p className="fs-5 pb-3">The Parties agree as follows:</p>

                    <h5 className="fw-600 fs-3 pb-3">1. Definitions</h5>

                    <p className="fs-5 pb-3">
                        “Affiliate” of a Party means any entity that, directly or indirectly through one or more intermediaries, controls, is controlled by, or is under common control with, such Party. For purposes of this definition, the “control” of an entity means the direct or indirect ownership or control of more than 50% of the voting interests of such entity.
                    </p>
                    <p className="fs-5 pb-3">
                        "AUP" means the Acceptable Use Policy posted at <a href='https://vison.ai/usage-policies'>vison.ai/usage-policies</a>, which may be updated from time to time.
                    </p>
                    <p className="fs-5 pb-3">
                        “Beta Services” means the features and/or functionality of the Services that may be made available to Customer to try at its option at no additional charge and which are clearly designated as beta, pilot, limited release, non-production, early access, evaluation, labs or by a similar description.
                    </p>
                    <p className="fs-5 pb-3">
                        “Confidential Information” means all confidential and proprietary information of a Party (“Disclosing Party”) disclosed to the other Party (“Receiving Party”), whether orally or in writing, that is either marked or designated as confidential at the time of disclosure to the Receiving Party, or that a reasonable person should consider confidential or proprietary given the nature of the information and the circumstances under which it is disclosed. Vison.ai’s Confidential Information shall include the Vison.ai Property and the terms of this Agreement and all Order Forms. Customer’s Confidential Information shall include the Customer Property. Notwithstanding the foregoing, Confidential Information shall not include any information that the Receiving Party can show: (i) is or becomes generally known to the public without breach of any obligation owed to the Disclosing Party; (ii) was known to the Receiving Party prior to its disclosure by the Disclosing Party; (iii) was independently developed by the Receiving Party without reference to any Confidential Information of the Disclosing Party; or (iv) is received from a third party without breach of any obligation owed to the Disclosing Party.
                    </p>
                    <p className="fs-5 pb-3">
                        “Customer Property” means (i) the Input, (ii) the Output, and (iii) any content (including text, images, illustrations, charts, tables, and other materials) and any Customer and/or User Personal Data supplied by Customer to Vison.ai, either directly through the Service or indirectly through the integration with a Third Party Product.
                    </p>
                    <p className="fs-5 pb-3">
                        “Documentation” means all documentation and other instructional material made available by Vison.ai regarding the use of the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        “Effective Date” means the effective date of the applicable Order Form you have signed with Vison.ai.
                    </p>
                    <p className="fs-5 pb-3">
                        “Input” means the information Customer or its Users input via prompts into the Services to which Customer owns or has permission to use the Intellectual Property Rights therein. For the avoidance of doubt, Input shall not be deemed to include any Vison.ai Property.
                    </p>
                    <p className="fs-5 pb-3">
                        “Vison.ai Property” means (i) the Services, (ii) the Documentation, and (iii) all content and other materials and software supplied by Vison.ai in connection with, or used by Vison.ai in providing, any Services. For the avoidance of doubt, Vison.ai Property shall not be deemed to include the Output.
                    </p>
                    <p className="fs-5 pb-3">
                        “Order Form” means an ordering document for Services purchased from Vison.ai that has been executed hereunder by the Parties and that references this Agreement.
                    </p>
                    <p className="fs-5 pb-3">
                        “Output” means the output generated and returned by the Services to a User based on the Input. For the avoidance of doubt, the Output shall not be deemed to include any Vison.ai Property.
                    </p>
                    <p className="fs-5 pb-3">
                        “Personal Data” means any information relating to an identified or identifiable natural person that relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular natural person.
                    </p>
                    <p className="fs-5 pb-3">
                        “Processing/to Process/Processed” means any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, or erasure or destruction
                    </p>
                    <p className="fs-5 pb-3">
                        “Services” means the software services and platform provided by Vison.ai, including (i) the web and other user interfaces, applications, and software provided to Users, and (ii) any modifications, updates, derivative works, optional modules, custom or standard enhancements, updates, and upgrades to or of any of the foregoing.
                    </p>
                    <p className="fs-5 pb-3">
                        “Subscription Term” means the subscription period set forth in the applicable Order Form during which Vison.ai agrees to provide the Services to Customer.
                    </p>
                    <p className="fs-5 pb-3">
                        “Third Party Products”means certain third-party applications, systems, or services used by Customer pursuant to an agreement between Customer and the third party, but not supplied or controlled by Vison.ai, that are designed to interoperate with the Services.
                    </p>
                    <p className="fs-5 pb-3">
                        “Users” means all users that are authorized to access Customer’s account on the Services.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">2. Services</h5>

                    <p className="fs-5 pb-3">
                        a. Provision of Services. Subject to the payment of all applicable Fees and for the applicable Subscription Term, Vison.ai hereby grants to Customer a non-sublicensable, non-transferable, non-exclusive right to access and use the Services in accordance with the terms and conditions of this Agreement and the applicable Order Form.
                    </p>
                    <p className="fs-5 pb-3">
                        b. Order Forms. Each Order Form for Services will describe additional mutually agreed-upon limitations on the use of the Services, including, to the extent applicable, Fees, the Subscription Term, the number of and/or class of permitted Users, and any usage limitations.
                    </p>
                    <p className="fs-5 pb-3">
                        c. Platform Guidelines. Customer hereby acknowledges that it will at all times comply with, and ensure that all of its Users comply with, the platform guidelines available at <a href='https://vison.ai/usage-policies'>vison.ai/usage-policies</a>, which are incorporated by reference herein (the “Platform Guidelines”).
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">3. Fees and Payment</h5>

                    <p className="fs-5 pb-3">
                        a. Fees. Customer will pay Vison.ai all fees specified in or otherwise incurred pursuant to an Order Form (“Fees”) in accordance with this Section 3 and the applicable Order Form. If Customer adds additional Services during a Subscription Term (a “Subscription Upgrade”), any incremental Fees associated with such Subscription Upgrade will be prorated over the remaining period of the then-current Subscription Term and charged to Customer and due and payable in accordance with Section 3(b). If Customer’s usage of the Services exceeds the purchased quantities, Customer will be provided with written notice of such excess usage and five (5) days to reduce its usage to the purchased levels. To the extent Customer’s usage exceeds the purchased quantities at the end of such period, Customer will be deemed to have executed a Subscription Upgrade with respect to such excess Services and will be invoiced accordingly. In any automatic renewal of the Subscription Term (if applicable), the Fees and quantities will include all prior Subscription Upgrades. Fees are quoted and payable in United States dollars. Except as expressly set forth in this Agreement, payment obligations are non-cancellable and Fees paid are non-refundable.
                    </p>
                    <p className="fs-5 pb-3">
                        b. Invoices and Payment. Vison.ai will invoice Customer for the charges at the email address on file with Vison.ai. Customer will pay all invoiced amounts within the timeframe listed on the respective Order Form. Unless otherwise specified in an Order Form, Customer will pay all Fees on an annual, prepaid basis. Overdue invoices are subject to a finance charge of 1.5% per month or the maximum permitted by law, whichever is lower, plus all expenses of collection.
                    </p>
                    <p className="fs-5 pb-3">
                        3. Taxes. Customer is solely responsible for the payment of all taxes, assessments, tariffs, duties, or other fees imposed, assessed, or collected by or under the authority of any governmental body arising from Vison.ai’s provision of the Services hereunder (collectively, “Taxes”), except any taxes assessed upon Vison.ai’s net income. Vison.ai will invoice Customer for Taxes imposed by governmental bodies in the United States. If Vison.ai is required to directly pay Taxes related to Customer’s use or receipt of any Services, Customer agrees to promptly reimburse Vison.ai for any amounts paid by Vison.ai.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">4. Intellectual Property Ownership</h5>

                    <p className="fs-5 pb-3">
                        a. Customer Property. As between Customer and Vison.ai, Customer retains any and all rights, title, and interest in and to the Customer Property, including any and all intellectual property rights embodied in or related to the Customer Property. Except as expressly set out in this Agreement, no right, title, or license under any Customer Property is granted to Vison.ai or implied hereby. To the extent that ownership of the Inputs or Outputs does not automatically vest in Customer, Vison.ai hereby assigns all of its right title and interest in and to the Inputs and Outputs to Customer; provided, however, Customer acknowledges that due to the nature of machine learning, the Output may not be unique and the Services may generate the same or similar output for Vison.ai or a third party.
                    </p>
                    <p className="fs-5 pb-3">
                        b. Vison.ai Property. As between Vison.ai and Customer, Vison.ai retains all right, title, and interest in and to the Vison.ai Property, including all intellectual property rights embodied in or related to the Vison.ai Property. Except as expressly set out in this Agreement, no right, title, or license under any Vison.ai Property is granted to Customer or implied hereby.
                    </p>
                    <p className="fs-5 pb-3">
                        c. Licenses to Vison.ai. Customer hereby grants Vison.ai a limited, non-exclusive, non-transferable (except in connection with the permitted assignment of this Agreement), and royalty-free license to access and use the Customer Property solely to provide the Services to Customer pursuant to this Agreement. Additionally, Customer grants Vison.ai a non-exclusive, revocable license to use Customer’s trademarks and logos to identify Customer as a subscriber of the Services; provided that Customer may revoke such consent at any time in its sole discretion.
                    </p>
                    <p className="fs-5 pb-3">
                        d. Feedback. By submitting to Vison.ai any unsolicited suggestions, enhancement requests, comments, or other feedback relating to the Services (“Feedback”), Customer and its Users (as applicable) grant to Vison.ai a royalty-free, worldwide, transferable, sublicensable, irrevocable, perpetual license to use or incorporate such Feedback into the Services in any manner. For the avoidance of doubt, Feedback excludes all Customer Property.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">5. Data Usage</h5>

                    <p className="fs-5 pb-3">
                        a. Non-Training of Models. Notwithstanding anything else in this Agreement to the contrary, Vison.ai shall not use, nor permit a third party to use, Customer Property to train artificial intelligence models utilized by the Service.
                    </p>
                    <p className="fs-5 pb-3">
                        b. System Performance. Vison.ai may use data concerning Customer’s or its Users’ use of the Services (“Usage Information”), including but not limited to compiling statistical and performance information related to the operation of the Services. For the avoidance of doubt, Usage Information excludes all Customer Property. The foregoing shall not limit, in any way, Vison.ai’s confidentiality obligations as set forth in Section 7 of the Agreement. Customer agrees that Vison.ai may make Usage Information publicly available, provided that such use does not identify Customer or any Users either directly or indirectly. Vison.ai retains all intellectual property rights in Usage Information.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">6. Data Privacy and Security</h5>

                    <p className="fs-5 pb-3">
                        a. Information Security Requirements. Vison.ai will maintain an information security program (including the adoption and enforcement of internal policies and procedures) designed to (a) secure the Services and Customer Property against accidental or unlawful loss, access, or disclosure, (b) identify reasonably foreseeable and internal risks to security and unauthorized access, and (c) minimize security risks, including through risk assessment and regular testing. 
                    </p>
                    <p className="fs-5 pb-3">
                        b. Hosting and Processing. Unless otherwise specifically agreed to in writing by Vison.ai, Customer Property may be hosted by Vison.ai or its Affiliates, or their respective authorized third-party service providers, in the United States, the European Economic Area (“EEA”), or the United Kingdom.
                    </p>
                    <p className="fs-5 pb-3">
                        c. Processing of Personal Data. The Parties acknowledge that use of the Service does not require Vison.ai to process Personal Data on behalf of Customer. In other words, Customer acknowledges that it does not need to provide Input that contains Personal Data in order to make effective use of the Services. To the extent that Vison.ai processes Personal Data in its capacity as a data controller, such processing will be in accordance with Vison.ai’s Privacy Policy which is accessible at: <a href='https://Vison.ai/privacy'>Vison.ai/privacy</a>.
                    </p>
                    <p className="fs-5 pb-3">
                        d. Third Party Service Providers. Customer acknowledges and agrees that Vison.ai may use third party service providers who may access Customer Property, to provide, secure and improve the Services. Vison.ai shall be responsible for the acts and omissions of such service providers to the same extent that Vison.ai would be responsible if Vison.ai was performing the services of each service provider directly under the terms of this Agreement. 
                    </p>
                    <p className="fs-5 pb-3">
                        e. In-Product Cookies. Whenever Customers or Users interact with the Services, Vison.ai uses First Party Cookies to collect information to ensure Customers and Users can securely, quickly and reliably use the Services, and Vison.ai’s In-Product Cookie Policy. When Vison.ai collects this information, it only uses this data to (i) provide the Services, or (ii) in aggregate form, and not in a manner that would identify the Customers or Users personally.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">7. Confidentiality</h5>

                    <p className="fs-5 pb-3">
                        a. Confidentiality. During the term of this Agreement and for a period of three (3) years thereafter, each Party agrees to protect the confidentiality of the Confidential Information of the other Party in the same manner that it protects the confidentiality of its own proprietary and confidential information of a like kind, but in no event with less than a reasonable standard of care; provided that a Receiving Party may disclose Confidential Information of the Disclosing Party with Disclosing Party’s consent or to its Affiliates, officers, directors, employees, subcontractors, or agents who need to know such information in connection with this Agreement and who are bound by written agreements requiring the protection of such Confidential Information. This Section shall supersede any non-disclosure agreement by and between Customer and Vison.ai entered prior to the Effective Date that would purport to address the confidentiality of Confidential Information and such agreement shall have no further force or effect with respect to either Party’s Confidential Information.
                    </p>
                    <p className="fs-5 pb-3">
                        b. Compelled Disclosure. If the Receiving Party is compelled by law to disclose Confidential Information of the Disclosing Party, it shall provide the Disclosing Party with prior notice of such compelled disclosure (to the extent legally permitted) and reasonable assistance, at Disclosing Party's cost, if the Disclosing Party wishes to contest the disclosure.
                    </p>
                    <p className="fs-5 pb-3">
                        c. Destruction of Confidential Information. At any time upon the request of the Disclosing Party, the Receiving Party will destroy all Confidential Information of the Disclosing Party, including all copies thereof and notes and other materials incorporating such Confidential Information, whether in physical or electronic form; provided, however, the Receiving Party shall not be required to return or destroy electronic copies that are automatically stored in accordance with Receiving Party’s generally applicable backup policies and which are not reasonably accessible by the Receiving Party (“Backup Media”). All Backup Media shall remain subject to the confidentiality obligations set forth herein, notwithstanding the expiration or termination of this Agreement, so long as it remains undeleted.
                    </p>
                    <p className="fs-5 pb-3">
                        d. Remedies. If the Receiving Party discloses or uses (or threatens to disclose or use) any Confidential Information in breach of this Section, the Disclosing Party shall have the right, in addition to any other remedies available to it, to seek injunctive relief to enjoin such acts, it being specifically acknowledged by the Parties that any other available remedies are inadequate.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">8. Warranties</h5>

                    <p className="fs-5 pb-3">
                        a. <span className='fst-italic'>Mutual Warranties.</span> Each Party represents and warrants that it has the legal power and authority to enter into this Agreement.
                    </p>
                    <p className="fs-5 pb-3">
                        b. Vison.ai Warranties. Vison.ai warrants to Customer that the Services purchased by Customer will, in all material respects, perform in accordance with the applicable portions of the Documentation. As Customer’s sole and exclusive remedy for the breach of the warranty set forth in this Section 8(b), Vison.ai will use commercially reasonable efforts to correct the Services to comply with such warranty without charge. If Vison.ai is unable to make the Services operate as warranted within thirty (30) days after Customer’s written notice, then Customer or Vison.ai may terminate this Agreement and/or the applicable Order Form, and Vison.ai will refund any fees actually paid by Customer (excluding any non-recurring fees) to Vison.ai for the remainder of the then-current Subscription Term.
                    </p>
                    <p className="fs-5 pb-3">
                        c. <span className='fst-italic'>Disclaimer.</span> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW BUT EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, (1) THE SERVICES ARE PROVIDED “AS-IS”; (2) NEITHER PARTY MAKES ANY ADDITIONAL WARRANTY, CONDITION, REPRESENTATION, UNDERTAKING OR GUARANTY OF ANY KIND TO THE OTHER PARTY, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, AND (3) EACH PARTY HEREBY SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES, CONDITIONS, REPRESENTATIONS, UNDERTAKINGS AND GUARANTIES, INCLUDING, WITHOUT LIMITATION, ANY WITH RESPECT TO TITLE, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE. IN ADDITION, VISON.AI DOES NOT GUARANTEE THERE WILL BE NO LOSS OR CORRUPTION OF CUSTOMER PROPERTY STORED BY VISON.AI. 
                    </p>
                    <p className="fs-5 pb-3">
                        d. <span className='fst-italic'>Beta Services. </span> Vison.ai may make Beta Services available to Customer at no charge, and Customer may choose to try such Beta Services at its sole discretion. Beta Services are intended for evaluation purposes and not for production use, are not supported, and may be subject to additional terms that will be presented to Customer. Beta Services will not be provided to Customer or any of its Users unless it expressly opts-in to use such services. Further, Beta Services are provided “as-is” and not considered “Services” under this Agreement for purposes of Section 8 (Warranties; Disclaimer) and Sections 9(a) (Indemnification by Vison.ai); however, all restrictions on Customer’s use of the Services, Vison.ai’s reservation of rights, and Customer’s use of any Third Party Products shall apply equally to Customer’s use of Beta Services. Vison.ai may discontinue Beta Services at any time in its sole discretion and may never make them generally available.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">9. Indemnification</h5>

                    <p className="fs-5 pb-3">
                        a. <span className='fst-italic'>Indemnification by Vison.ai.</span> Vison.ai shall indemnify and defend Customer, its employees, directors and officers (the “Customer Indemnified Parties”) from and against any and all costs, damages and expenses (collectively, “Losses”), suffered or incurred by any Customer Indemnified Party, as a result of any claim brought by a third party (“Third Party Claim”) against a Customer Indemnified Party alleging that the Services in accordance with the terms and conditions of this Agreement infringes any patent, copyright, trademark or trade secret right of such third party (an “Infringement Claim”). Without limiting the foregoing, in the event that any portion of the Services is likely to, in Vison.ai’s sole opinion, or does become the subject of an Infringement Claim, Vison.ai may, at its option and expense: (i) procure for Customer the right to continue using the allegedly infringing item, (ii) substitute a functionally equivalent non-infringing replacement for such item, (iii) modify such item to make it non-infringing and functionally equivalent, or (iv) terminate the Agreement and any outstanding Order Forms and refund to Customer prepaid unused Fees for the infringing items. Vison.ai shall have no liability for any Infringement Claim to the extent arising from: (1) Customer’s use or supply to Vison.ai of any Customer Property; (2) use of the Services in combination with any software, hardware, network, or system not supplied by Vison.ai if the alleged infringement relates to such combination; (3) any modification or alteration of the Services (other than by Vison.ai); or (4) Customer’s violation of applicable law or third party rights.
                    </p>
                    <p className="fs-5 pb-3">
                        b. <span className='fst-italic'>Indemnification by Customer. </span> Customer shall indemnify and defend Vison.ai, its employees, directors and officers (the “Vison.ai Indemnified Parties”) from and against any and all Losses, suffered or incurred by any Vison.ai Indemnified Party, arising from any Third Party Claim against a Vison.ai Indemnified Party (i) alleging that any Customer Property infringes, violates or misappropriate any patent, copyright, trademark, publicity, trade secret or other intellectual property , publicity or privacy right of any third party or (ii) arising from Customer’s breach of Sections 3, 4, and 5 of the Platform Guidelines.

                    </p>
                    <p className="fs-5 pb-3">
                        c. <span className='fst-italic'>Indemnification Conditions. </span> The Parties’ obligations under this Section are contingent upon the indemnified party (i) giving prompt written notice to the indemnifying party of any claim subject to indemnification under this Section, (ii) giving the indemnifying party sole control of the defense or settlement of the claim, and (iii) cooperating in the investigation and defense of such claim(s). The indemnifying party shall not settle or consent to an adverse judgment in any such claim that adversely affects the rights or interests of the indemnified party without the prior express written consent of the indemnified party, which shall not be unreasonably withheld. The rights and remedies set forth in this Section are the sole obligations of the indemnifying party and exclusive remedies available to the indemnified party in the event of an applicable Third Party Claim.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">10. Limitation of Liability</h5>

                    <p className="fs-5 pb-3">
                        a. <span className='fst-italic'>Exclusion of Damages. </span> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EITHER PARTY HAVE ANY LIABILITY TO THE OTHER PARTY OR TO ANY THIRD PARTY FOR ANY LOST PROFITS, LOSS OF USE OR DATA, COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR FOR ANY OTHER INDIRECT, SPECIAL, EXEMPLARY, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES HOWEVER CAUSED AND, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LIABILITY, WHETHER OR NOT THE PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. NEITHER PARTY SHALL BE RESPONSIBLE OR LIABLE FOR ANY LOSS, DAMAGE OR INCONVENIENCE SUFFERED BY THE OTHER PARTY OR BY ANY THIRD PERSON, TO THE EXTENT THAT SUCH LOSS, DAMAGE, OR INCONVENIENCE IS CAUSED BY THE FAILURE OF THE OTHER PARTY TO COMPLY WITH ITS OBLIGATIONS UNDER THIS AGREEMENT.
                    </p>
                    <p className="fs-5 pb-3">
                        b. <span className='fst-italic'>Exclusions. </span> THE LIMITATIONS IN THIS SECTION SHALL NOT APPLY TO A PARTY’S LIABILITY ARISING FROM ITS INDEMNIFICATION OBLIGATIONS IN SECTION 9 OR ITS BREACH OF SECTION 7 (CONFIDENTIALITY).
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">11. Term and Termination</h5>

                    <p className="fs-5 pb-3">
                        a. <span className='fst-italic'>Term of Agreement. </span> This Agreement commences on the Effective Date and shall remain in effect until terminated in accordance with Section 11(c).
                    </p>
                    <p className="fs-5 pb-3">
                        b. <span className='fst-italic'>Term of Subscriptions.  </span> Customer’s access to the purchased Services shall commence on the start date specified in the relevant Order Form and continue for the Subscription Term specified on such Order Form. At the expiration of each Subscription Term, the Subscription Term for all purchased services will automatically renew for the same period as the renewing Subscription Term, unless either Party elects to not renew by notifying the other Party in writing at least 30 days before such renewal. Except as otherwise specified in a written notice sent to Customer at least 30 days prior to a renewal and only to the extent an Order From automatically renews, Vison.ai’s per-unit pricing for any renewal of the Subscription Term in such Order From shall not increase by more than the greater of (i) five percent (5%) per year, and (ii) the increase in the Consumer Price Index (CPI), in each case, over the expiring Subscription Term. Any introductory or temporary discount offered in a previous Subscription Term does not apply to renewals.
                    </p>
                    <p className="fs-5 pb-3">
                        c. <span className='fst-italic'>Termination. </span> Either Party may terminate this Agreement and/or any Order Form by providing written notice to the other Party if the other Party materially breaches any of its duties, obligations or responsibilities under this Agreement and fails to: (i) cure such breach within thirty (30) days after receipt by the breaching Party of written notice specifying the breach, or (ii) if the breaching Party is incapable of curing such breach within thirty (30) days, provide the other Party with an acceptable plan for curing such breach within ten (10) days after receipt of such notice, and thereafter curing such breach in accordance with such plan. This Agreement shall automatically terminate if there are no Order Forms in effect for more than thirty (30) days, continuously.
                    </p>
                    <p className="fs-5 pb-3">
                        d. <span className='fst-italic'>Effect of Termination. </span> Expiration or termination of one Order Form shall not affect any other Order Form. In the event of termination of this Agreement and without limiting a Party’s obligations under Section 7(c), Customer shall cease all use of the Services, and Vison.ai shall provide Customer with a copy of all Inputs and Outputs if requested by Customer in writing within 30 days following termination.
                    </p>
                    <p className="fs-5 pb-3">
                        e. <span className='fst-italic'>Surviving Provisions. </span> The following provisions shall survive the termination or expiration of this Agreement for any reason and shall remain in effect after any such termination or expiration: Sections 1, 3-7, 8(d), 9, 10, 11(d), 11(e), 12, and the Platform Guidelines. Termination or expiration of this Agreement shall not affect any obligation accrued or arising prior to such termination or expiration.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">12. Miscellaneous</h5>

                    <p className="fs-5 pb-3">
                        a. <span className='fst-italic'>Relationship. </span> This Agreement does not create a partnership, franchise, joint venture, agency, fiduciary or employment relationship between the Parties, and Vison.ai will be considered an independent contractor when performing any Services hereunder.
                    </p>
                    <p className="fs-5 pb-3">
                        b. <span className='fst-italic'>Entire Understanding. </span> This Agreement constitutes the entire agreement between the Parties as to its subject matter and supersedes all prior proposals, marketing materials, negotiations, and other written or oral communications between the Parties with respect to the subject matter of this Agreement. To the extent of any conflict or inconsistency between the provisions in the body of this Agreement and any Order Form, the terms of such Order Form shall prevail. Notwithstanding any language to the contrary therein, all terms and conditions stated in any Customer purchase orders are hereby rejected, and all such terms and conditions are null and void.

                    </p>
                    <p className="fs-5 pb-3">
                        c. <span className='fst-italic'>Modification; Waiver. </span> Except for Vison.ai’s modification or update of the AUP, which shall take effect immediately upon posting, no modification of this Agreement, and no waiver of any breach of this Agreement or right under this Agreement, is legally binding against the other Party unless in writing and signed or electronically accepted by both Parties.
                    </p>
                    <p className="fs-5 pb-3">
                        d. <span className='fst-italic'>Governing Law; Venue. </span> The parties hereto agree that any dispute, claim, or controversy arising out of or relating to this Agreement or the breach, termination, enforcement, interpretation, or validity hereof or thereof, including the determination of the scope or applicability of this Agreement to arbitrate, shall be determined by final and binding arbitration in Portland, Oregon (except for an action for interim equitable relief otherwise permitted under this Agreement and/or unless otherwise agreed by the parties), before a sole arbitrator, in accordance with the laws of the State of Delaware.
                    </p>
                    <p className="fs-5 pb-3">
                        e. <span className='fst-italic'>Assignment. </span> Neither Party may assign any of its rights or obligations hereunder, whether by operation of law or otherwise, without the prior express written consent of the other Party; provided, however, a Party may assign this Agreement in its entirety, together with all rights and obligations hereunder, without consent of the other Party, in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of its assets related to this Agreement. Any attempt by a Party to assign its rights or obligations under this Agreement in breach of this section shall be void and of no effect. Subject to the foregoing, this Agreement shall bind and insure to the benefit of the Parties, their respective successors and permitted assigns.
                    </p>
                    <p className="fs-5 pb-3">
                        f. <span className='fst-italic'>Notices. </span> Except as expressly permitted under the Platform Guidelines, all notices, requests, consents, claims, demands, waivers, and other communications hereunder (each, a “Notice”) must be in writing and addressed to the Parties at the addresses set forth on the first page of this Agreement (or to such other address that may be designated by the Party giving Notice from time to time in accordance with this Section). All Notices must be delivered by personal delivery, nationally recognized overnight courier (with all fees pre-paid), facsimile, or email (with confirmation of transmission), or certified or registered mail (in each case, return receipt requested, postage pre-paid), with an electronic copy sent to legal@vison.ai. Except as otherwise provided in this Agreement, a Notice is effective only: (i) upon receipt by the receiving Party, and (ii) if the Party giving the Notice has complied with the requirements of this Section.
                    </p>
                    <p className="fs-5 pb-3">
                        g. <span className='fst-italic'>Anti-Corruption. </span> Customer acknowledges and agrees that it has not received or been offered any illegal bribe, kickback, payment, gift, or thing of value from any Vison.ai employees, agent or representative in connection with this Agreement, other than reasonable gifts and entertainment provided in the ordinary course of business. Customer will promptly notify Vison.ai if it offers or receives any such improper payment or transfer in connection with this Agreement.
                    </p>
                    <p className="fs-5 pb-3">
                        h. <span className='fst-italic'>Force Majeure. </span> Except for the performance of a payment obligation, neither Party shall be liable under this Agreement for delays, failures to perform, damages, losses or destruction, or malfunction of any equipment, or any consequence thereof, caused or occasioned by, or due to fire, earthquake, flood, water, the elements, labor disputes or shortages, utility curtailments, power failures, explosions, civil disturbances, governmental actions, epidemics, shortages of equipment or supplies, unavailability of transportation, acts or omissions of third parties, or any other cause beyond its reasonable control. In the event any of the foregoing events results in Vison.ai not being able to provide the Services for a period of more than thirty (30) days, then either Party may terminate the Agreement upon written notice to the other Party.
                    </p>
                    <p className="fs-5 pb-3">
                        i. <span className='fst-italic'>Severability. </span>If any provision of this Agreement is held by a court of competent jurisdiction to be contrary to law, the provision shall be modified by the court and interpreted so as best to accomplish the objectives of the original provision to the fullest extent permitted by law, and the remaining provisions of this Agreement shall remain in effect.
                    </p>
                    <p className="fs-5 pb-3">
                        <span className='fst-italic'> </span>
                    </p>
                </Col>
            </Row>
        </Container>

        <Footer/>
    </>
  )
}

export default Page