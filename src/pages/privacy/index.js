import React from 'react'
import {Container,Row,Col, Modal} from 'react-bootstrap'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Page() {
  return (
    <>
        <Header/>

        <section className='privacy-policy'>
            <Container className="d-flex justify-content-center">
                <Row className='pb-4 d-flex justify-content-center'>
                    <Col className='col-12 text-center pb-5'>
                        <h1 className='ff-reemkufi display-4 fw-600'>
                            Privacy Policy
                        </h1>
                    </Col>
                </Row>
            </Container>
        </section>

        <Container className="py-5">
            <Row className="">
                <Col className="col-12">
                    <p className="fs-5 pb-3 fst-italic">Effective May 01, 2024</p>

                    <p className="fs-5 pb-3">
                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                    </p>
                    <p className="fs-5 pb-3">
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>
                    
                    <h5 className="fw-600 fs-3 pb-3">1. Definitions</h5>

                    <p className="fs-5 pb-3">‍For the purposes of this Privacy Policy:</p>

                    <p className="fs-5 pb-3">
                        (a) “Account” means a unique account created for You to access our Service or parts of our Service.
                    </p>
                    <p className="fs-5 pb-3">
                        (b) ‍“Business”, for the purpose of the CCPA (California Consumer Privacy Act), means the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing of Consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California.

                    </p>
                    <p className="fs-5 pb-3">
                        (c) “Company” (referred to herein as either the "Company", "We", "Us" or "Our") means Vison.ai a product of <a href='https://infiniticube.com'>infiniticube</a>, with USA office at 28 Southeast 28th Avenue Portland, OR 97214 US. For the purpose of the GDPR, the Company is the Data Controller.
                    </p>
                    <p className="fs-5 pb-3">
                        (d) ‍“Consumer”, for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.
                    </p>
                    <p className="fs-5 pb-3">
                        (e) “Cookies” means small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                    </p>
                    <p className="fs-5 pb-3">
                        (f) “Data Controller”, for the purposes of the GDPR (General Data Protection Regulation), means the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.
                    </p>
                    <p className="fs-5 pb-3">
                        (g) “Device” means any electronic device that can access the Service such as a computer, a cellphone or a digital tablet.
                    </p>
                    <p className="fs-5 pb-3">
                        (h) “Do Not Track (DNT)” means a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.
                    </p>
                    <p className="fs-5 pb-3">
                        (i) “Personal Data” means any information that relates to an identified or identifiable individual. For the purposes for GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity. For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.
                    </p>
                    <p className="fs-5 pb-3">
                        (j) ‍“Sale”, for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer's personal information to another business or a third party for monetary or other valuable consideration.
                    </p>
                    <p className="fs-5 pb-3">
                        (k) “Service” means the online and/or mobile services, web site, and software provided on or in connection with the service provided by Vison under this Agreement and as detailed on Vison’s website at <a href='http://www.vison.ai/'>www.vison.ai</a>.
                    </p>
                    <p className="fs-5 pb-3">
                        (l) ‍“Service Provider” means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. For the purpose of the GDPR, Service Providers are considered Data Processors.
                    </p>
                    <p className="fs-5 pb-3">
                        (m) ‍“Third-party Social Media Service” means any website or any social network website through which a User can log in or create an account to use the Service.
                    </p>
                    <p className="fs-5 pb-3">
                        (n) ‍“Usage Data” means data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                    </p>
                    <p className="fs-5 pb-3">
                    (o) ‍“Website” means <a href='http://www.vison.ai/'>https://www.vison.ai/</a>
                    </p>
                    <p className="fs-5 pb-3">
                        (p) ‍“You” means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable. Under GDPR (General Data Protection Regulation), You can be referred to as the Data Subject or as the User as you are the individual using the Service.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">2. Collecting and Using Your Personal Data</h5>

                    <p className="fs-5 pb-3">(a) Personal Data</p>

                    <p className="fs-5 pb-3">
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </p>

                    <ul className='fs-5 pb-3'>
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Address, State, Province, ZIP/Postal code, City</li>
                        <li>Usage Data</li>
                    </ul>

                    <p className="fs-5 pb-3">(b) Usage Data</p>
                    <p className="fs-5 pb-3">
                        Usage Data is collected automatically when using the Service.
                    </p>
                    <p className="fs-5 pb-3">
                        Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>
                    <p className="fs-5 pb-3">
                        When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                    </p>
                    <p className="fs-5 pb-3">
                        We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                    </p>
                    <p className="fs-5 pb-3">
                        (c) Information from Third-Party Social Media Services
                    </p>
                    <p className="fs-5 pb-3">
                        The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:
                    </p>

                    <ul className='fs-5 pb-3'>
                        <li>Google</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                    <p className="fs-5 pb-3">
                        If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.
                    </p>
                    <p className="fs-5 pb-3">
                        You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
                    </p>
                    <p className="fs-5 pb-3">
                        (d) Tracking Technologies and Cookies
                    </p>
                    <p className="fs-5 pb-3">
                        We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                    </p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.

                        </li>
                        <li>
                            Flash Cookies. Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read "Where can I change the settings for disabling, or deleting local shared objects?" available at https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_

                        </li>
                        <li>
                            Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                        </li>
                    </ul>
                    <p className="fs-5 pb-3">
                        Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies: What Are Cookies?.
                    </p>
                    <p className="fs-5 pb-3">
                        We use both Session and Persistent Cookies for the purposes set out below:
                    </p>
                    <p className="fs-5 pb-3">
                        i. Necessary / Essential Cookies
                    </p>

                    <ul className='fs-5 pb-3'>
                        <li>Type: Session Cookies</li>
                        <li>Administered by: Us</li>
                        <li>
                            Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.

                        </li>
                    </ul>
                    <p className="fs-5 pb-3">
                        ii. ‍Cookies Policy / Notice Acceptance Cookies
                    </p>
                    <ul className='fs-5 pb-3'>
                        <li>Type: Persistent Cookies</li>
                        <li> Administered by: Us</li>
                        <li>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</li>
                    </ul>

                    <p className="fs-5 pb-3">
                        iii. ‍Functionality Cookies
                    </p>
                    <ul className='fs-5 pb-3'>
                        <li>Type: Persistent Cookies</li>
                        <li>Administered by: Us</li>
                        <li>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</li>
                    </ul>

                    <p className="fs-5 pb-3">
                        iv. Tracking and Performance Cookies
                    </p>
                    <ul className='fs-5 pb-3'>
                        <li>Type: Persistent Cookies</li>
                        <li>Administered by: Third-Parties</li>
                        <li>Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new pages, features or new functionality of the Website to see how our users react to them.</li>
                    </ul>

                    <p className="fs-5 pb-3">
                        v. ‍Targeting and Advertising Cookies
                    </p>
                    <ul className='fs-5 pb-3'>
                        <li>Type: Persistent Cookies</li>
                        <li>Administered by: Third-Parties</li>
                        <li>Purpose: These Cookies track your browsing habits to enable Us to show advertising which is more likely to be of interest to You. These Cookies use information about your browsing history to group You with other users who have similar interests. Based on that information, and with Our permission, third party advertisers can place Cookies to enable them to show adverts which We think will be relevant to your interests while You are on third party websites.</li>
                    </ul>

                    <p className="fs-5 pb-3">
                        For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                    </p>
                    <p className="fs-5 pb-3">
                        (e) Use of Your Personal Data
                    </p>
                    <p className="fs-5 pb-3">
                        The Company may use Personal Data for the following purposes:
                    </p>
                    <p className="fs-5 pb-3">
                        i. To provide and maintain our Service, including to monitor the usage of our Service.
                    </p>
                    <p className="fs-5 pb-3">
                        ii. To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                    </p>
                    <p className="fs-5 pb-3">
                        iii. For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                    </p>
                    <p className="fs-5 pb-3">
                        iv. To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                    </p>
                    <p className="fs-5 pb-3">
                        v. To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                    </p>
                    <p className="fs-5 pb-3">
                        vi. To manage Your requests: To attend and manage Your requests to Us.
                    </p>
                    <p className="fs-5 pb-3">
                        vii. To deliver targeted advertising to You: We may use Your information to develop and display content and advertising (and work with third-party vendors who do so) tailored to Your interests and/or location and to measure its effectiveness.
                    </p>
                    <p className="fs-5 pb-3">
                        viii. For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                    </p>
                    <p className="fs-5 pb-3">
                        ix. For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                    </p>
                    <p className="fs-5 pb-3">
                        We may share Your personal information in the following situations:
                    </p>
                    <p className="fs-5 pb-3">
                        i. With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to show advertisements to You to help support and maintain Our Service, to advertise on third party websites to You after You visited our Service, for payment processing, to contact You.
                    </p>
                    <p className="fs-5 pb-3">
                        ii. For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                    </p>
                    <p className="fs-5 pb-3">
                        iii. With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                    </p>
                    <p className="fs-5 pb-3">
                        iv. With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.
                    </p>
                    <p className="fs-5 pb-3">
                        v. With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.
                    </p>
                    <p className="fs-5 pb-3">
                        vi. With Your consent: We may disclose Your personal information for any other purpose with Your consent.
                    </p>

                    <p className="fs-5 pb-3">
                        (f) ‍Retention of Your Personal Data
                    </p>
                    <p className="fs-5 pb-3">
                        The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </p>
                    <p className="fs-5 pb-3">
                        The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                    </p>
                    <p className="fs-5 pb-3">
                        (g) ‍Transfer of Your Personal Data
                    </p>
                    <p className="fs-5 pb-3">
                        Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.
                    </p>
                    <p className="fs-5 pb-3">
                         ‍Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                    </p>
                    <p className="fs-5 pb-3">
                        The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                    </p>
                    <p className="fs-5 pb-3">
                        (h) ‍Disclosure of Your Personal Data
                    </p>
                    <p className="fs-5 pb-3">
                        i. ‍Business Transactions
                    </p>
                    <p className="fs-5 pb-3">
                        If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                    </p>
                    <p className="fs-5 pb-3">
                        ii. ‍Law enforcement
                    </p>
                    <p className="fs-5 pb-3">
                        Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                    </p>
                    <p className="fs-5 pb-3">
                        iii. ‍Other legal requirements
                    </p>
                    <p className="fs-5 pb-3">
                        The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                    </p>

                    <ul className='fs-5 pb-3'>
                        <li>Comply with a legal obligation</li>
                        <li>Protect and defend the rights or property of the Compan</li>
                        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>Protect the personal safety of Users of the Service or the public</li>
                        <li>Protect against legal liability</li>
                    </ul>
                    <p className="fs-5 pb-3">
                        (i) ‍Security of Your Personal Data
                    </p>
                    <p className="fs-5 pb-3">
                        The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">3. Detailed Information on the Processing of Your Personal Data</h5>

                    <p className="fs-5 pb-3">
                        The Service Providers We use may have access to Your Personal Data. These third-party vendors collect, store, use, process and transfer information about Your activity on Our Service in accordance with their Privacy Policies.
                    </p>
                    <p className="fs-5 pb-3">(a) ‍Analytics</p>
                    <p className="fs-5 pb-3">
                        We may use third-party Service providers to monitor and analyze the use of our Service.
                    </p>
                    <p className="fs-5 pb-3">
                        i. Google Analytics
                    </p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
                        </li>
                        <li>
                            You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.
                        </li>
                        <li>
                            For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy
                        </li>
                    </ul>

                    <p className="fs-5 pb-3">ii. Clarity</p>
                    <ul className='fs-5 pb-3'>
                        <li>Clarity is a user behavior analytics tool provided by Microsoft Corporation.</li>
                        <li>We also encourage you to review the Microsoft's policy for safeguarding your data: https://privacy.microsoft.com/en-us/privacystatement</li>
                    </ul>

                    <p className="fs-5 pb-3">iii. Mixpanel</p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Mixpanel is provided by Mixpanel Inc.
                        </li>
                        <li>
                            You can prevent Mixpanel from using your information for analytics purposes by opting-out. To opt-out of Mixpanel service, please visit this page: https://mixpanel.com/optout/
                        </li>
                        <li>
                            For more information on what type of information Mixpanel collects, please visit the Terms of Use page of Mixpanel: https://mixpanel.com/terms/
                        </li>
                    </ul>

                    <p className="fs-5 pb-3">(b) ‍Advertising</p>
                    <p className="fs-5 pb-3">
                        We may use Service Providers to show advertisements to You to help support and maintain Our Service.
                    </p>
                    <p className="fs-5 pb-3">i. Google AdSense & DoubleClick Cookie</p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Google, as a third party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet.
                        </li>
                        <li>
                            You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page: http://www.google.com/ads/preferences/
                        </li>
                    </ul>

                    <p className="fs-5 pb-3">ii. Facebook</p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Their Privacy Policy can be viewed at https://www.facebook.com/policy.php
                        </li>
                    </ul>

                    <p className="fs-5 pb-3">iii. Linkedin</p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Their Privacy Policy can be viewed at https://www.linkedin.com/legal/ads-policy
                        </li>
                    </ul>

                    <p className="fs-5 pb-3">(c) ‍Email Marketing</p>
                    <p className="fs-5 pb-3">
                        We may use Your Personal Data to contact You with newsletters, marketing or promotional materials and other information that may be of interest to You. You may opt-out of receiving any, or all, of these communications from Us by following the unsubscribe link or instructions provided in any email We send or by contacting Us.
                    </p>
                    <p className="fs-5 pb-3">
                    ‍   We may use Email Marketing Service Providers to manage and send emails to You.
                    </p>
                    <p className="fs-5 pb-3">i. User</p>
                    <ul className='fs-5 pb-3'>
                        <li>Their Privacy Policy can be viewed at https://user.com/en/privacy-policy/</li>
                    </ul>

                    <p className="fs-5 pb-3">(d) Payments</p>
                    <p className="fs-5 pb-3">
                        We may provide paid products and/or services within the Service. In that case, we may use third-party services for payment processing (e.g. payment processors).
                    </p>
                    <p className="fs-5 pb-3">
                        We will not store or collect Your payment card details. That information is provided directly to Our third-party payment processors whose use of Your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.
                    </p>
                    <p className="fs-5 pb-3">i. Stripe</p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Their Privacy Policy can be viewed at https://stripe.com/us/privacy
                        </li>
                    </ul>
                    <p className="fs-5 pb-3">(e) ‍Remarketing</p>
                    <p className="fs-5 pb-3">
                        We may share information, such as hashed email addresses (if available) or other online identifiers collected on Our Service with these third-party vendors. This allows Our third-party vendors to recognize and deliver You ads across devices and browsers. To read more about the technologies used by these third-party vendors and their cross-device capabilities please refer to the Privacy Policy of each vendor listed below.
                    </p>
                    <p className="fs-5 pb-3">
                        The third-party vendors we use are:
                    </p>
                    <p className="fs-5 pb-3">
                        i. Google Ads (AdWords)
                    </p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Google Ads (AdWords) remarketing service is provided by Google Inc.
                        </li>
                        <li>
                            You can opt-out of Google Analytics for Display Advertising and customise the Google Display Network ads by visiting the Google Ads Settings page: http://www.google.com/settings/ads
                        </li>
                        <li>
                            Google also recommends installing the Google Analytics Opt-out Browser Add-on - https://tools.google.com/dlpage/gaoptout - for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.
                        </li>
                        <li>
                            For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy
                        </li>
                    </ul>

                    <p className="fs-5 pb-3">ii. Twitter</p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Twitter remarketing service is provided by Twitter Inc.
                        </li>
                        <li>
                            You can opt-out from Twitter's interest-based ads by following their instructions: https://support.twitter.com/articles/20170405 
                        </li>
                        <li>
                            You can learn more about the privacy practices and policies of Twitter by visiting their Privacy Policy page: https://twitter.com/privacy
                        </li>
                    </ul>

                    <p className="fs-5 pb-3">iii. Facebook</p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Facebook remarketing service is provided by Facebook Inc. 
                        </li>
                        <li>
                            You can learn more about interest-based advertising from Facebook by visiting this page: https://www.facebook.com/help/164968693837950
                        </li>
                        <li>
                            To opt-out from Facebook's interest-based ads, follow these instructions from Facebook: https://www.facebook.com/help/568137493302217
                        </li>
                        <li>
                            Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through the Digital Advertising Alliance in the USA http://www.aboutads.info/choices/, the Digital Advertising Alliance of Canada in Canada http://youradchoices.ca/ or the European Interactive Digital Advertising Alliance in Europe http://www.youronlinechoices.eu/, or opt-out using your mobile device settings.‍
                        </li>
                        <li>
                            For more information on the privacy practices of Facebook, please visit Facebook's Data Policy: https://www.facebook.com/privacy/explanation
                        </li>
                    </ul>

                    <h5 className="fw-600 fs-3 pb-3">4. ‍GDPR Privacy</h5>

                    <p className="fs-5 pb-3">
                        (a) Legal Basis for Processing Personal Data under GDPR
                    </p>
                    <p className="fs-5 pb-3">
                        We may process Personal Data under the following conditions:
                    </p>

                    <ul className='fs-5 pb-3'>
                        <li>
                            Consent: You have given Your consent for processing Personal Data for one or more specific purposes.
                        </li>
                        <li>
                            Performance of a contract: Provision of Personal Data is necessary for the performance of an agreement with You and/or for any pre-contractual obligations thereof.
                        </li>
                        <li>
                            Legal obligations: Processing Personal Data is necessary for compliance with a legal obligation to which the Company is subject.
                        </li>
                        <li>
                            Vital interests: Processing Personal Data is necessary in order to protect Your vital interests or of another natural person.
                        </li>
                        <li>
                            Public interests: Processing Personal Data is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Company.
                        </li>
                        <li>
                            Legitimate interests: Processing Personal Data is necessary for the purposes of the legitimate interests pursued by the Company.
                        </li>
                    </ul>

                    <p className="fs-5 pb-3">
                        In any case, the Company will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
                    </p>
                    <p className="fs-5 pb-3">
                        (b) ‍Your Rights under the GDPR
                    </p>
                    <p className="fs-5 pb-3">
                        The Company undertakes to respect the confidentiality of Your Personal Data and to guarantee You can exercise Your rights.
                    </p>
                    <p className="fs-5 pb-3">
                        You have the right under this Privacy Policy, and by law if You are within the EU, to:
                    </p>
                    <ul className='fs-5 pb-3'>
                        <li>
                            Request access to Your Personal Data. The right to access, update or delete the information We have on You. Whenever made possible, you can access, update or request deletion of Your Personal Data directly within Your account settings section. If you are unable to perform these actions yourself, please contact Us to assist You. This also enables You to receive a copy of the Personal Data We hold about You.
                        </li>
                        <li>
                            Request correction of the Personal Data that We hold about You. You have the right to to have any incomplete or inaccurate information We hold about You corrected.
                        </li>
                        <li>
                            Object to processing of Your Personal Data. This right exists where We are relying on a legitimate interest as the legal basis for Our processing and there is something about Your particular situation, which makes You want to object to our processing of Your Personal Data on this ground. You also have the right to object where We are processing Your Personal Data for direct marketing purposes.
                        </li>
                        <li>
                            Request erasure of Your Personal Data. You have the right to ask Us to delete or remove Personal Data when there is no good reason for Us to continue processing it.
                        </li>
                        <li>
                            Request the transfer of Your Personal Data. We will provide to You, or to a third-party You have chosen, Your Personal Data in a structured, commonly used, machine-readable format. Please note that this right only applies to automated information which You initially provided consent for Us to use or where We used the information to perform a contract with You.
                        </li>
                        <li>
                            Withdraw Your consent. You have the right to withdraw Your consent on using your Personal Data. If You withdraw Your consent, We may not be able to provide You with access to certain specific functionalities of the Service.
                        </li>
                    </ul>


                    <p className="fs-5 pb-3">
                        (c) ‍Exercising of Your GDPR Data Protection Rights
                    </p>

                    <p className="fs-5 pb-3">
                        You may exercise Your rights of access, rectification, cancellation and opposition by contacting Us. Please note that we may ask You to verify Your identity before responding to such requests. If You make a request, We will try our best to respond to You as soon as possible.
                    </p>
                    <p className="fs-5 pb-3">
                        You have the right to complain to a Data Protection Authority about Our collection and use of Your Personal Data. For more information, if You are in the European Economic Area (EEA), please contact Your local data protection authority in the EEA.
                    </p>

                    <h5 className="fw-600 fs-3 pb-3">5. Share of Personal Informatio</h5>

                    <p className="fs-5 pb-3">We may share Your personal information identified in the above categories with the following categories of third parties:</p>

                    <ul className='fs-5 pb-3'>
                        <li>
                            Service Providers
                        </li>
                        <li>
                            Payment processors
                        </li>
                        <li>
                            Our affiliates
                        </li>
                        <li>
                            Our business partners
                        </li>
                        <li>
                            Third party vendors to whom You or Your agents authorize Us to disclose Your personal information in connection with products or services We provide to You
                        </li>
                    </ul>

                    <h5 className="fw-600 fs-3 pb-3">6. Miscellaneous</h5>

                    <p className="fs-5 pb-3">(a) ‍Links to Other Websites</p>
                    <p className="fs-5 pb-3">
                        Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                    </p>
                    <p className="fs-5 pb-3">
                        We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.
                    </p>
                    <p className="fs-5 pb-3">
                        (b) ‍Changes to this Privacy Policy
                    </p>
                    <p className="fs-5 pb-3">
                        We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                    </p>
                    <p className="fs-5 pb-3">
                        We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
                    </p>
                    <p className="fs-5 pb-3">
                        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                    <p className="fs-5 pb-3">(c) ‍Contact Information</p>
                    <p className="fs-5 pb-3">
                        If you have any questions about this Privacy Policy, You can contact us by email: legal@vison.ai
                    </p>
                </Col>
            </Row>
        </Container>

        <Footer/>
    </>
  )
}

export default Page