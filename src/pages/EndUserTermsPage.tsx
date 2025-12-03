import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  LegalPageContainer,
  LegalHeroSection,
  LegalTitle,
  LegalContent,
  LegalSection,
  LegalSectionTitle,
  LegalParagraph,
  LegalList,
  LegalListItem
} from '../styles/LegalPages.styles';

const EndUserTermsPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Customer Communication Terms for Merchants</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>1. Purpose and Scope</LegalSectionTitle>
            <LegalParagraph>
              We serve only call center clients. These Customer Communication Terms describe how {process.env.REACT_APP_COMPANY_NAME} 
              communicates with your end-users (customers) on your behalf as part of our decline salvage platform services.
            </LegalParagraph>
            <LegalParagraph>
              As a merchant using our platform, you authorize us to send payment recovery communications to your customers via email, SMS, 
              and hosted payment update pages. You are responsible for ensuring you have proper consent from your customers for us to contact them 
              regarding payment recovery and transaction updates.
            </LegalParagraph>
            <LegalParagraph>
              This document outlines the terms governing automated customer communications sent through our platform on behalf of merchant clients.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>2. Communication Services for Merchants</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} provides automated customer communication services for merchants to recover failed payments. 
              Communication services include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Payment Recovery Notifications:</strong> Automated emails and SMS messages sent to your customers about failed transactions on your behalf
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Update Requests:</strong> Secure links to PCI-compliant hosted pages where customers can update payment methods
              </LegalListItem>
              <LegalListItem>
                <strong>Transaction Retry Alerts:</strong> Notifications when we attempt to reprocess failed payments using updated customer information
              </LegalListItem>
              <LegalListItem>
                <strong>Branded Communications:</strong> All customer messages sent using your merchant brand name, logo, and approved messaging templates
              </LegalListItem>
              <LegalListItem>
                <strong>Multi-Channel Outreach:</strong> Coordinated email and SMS campaigns optimized for recovery rates and customer experience
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All customer communications are sent on your behalf as the merchant. Your customers interact with payment update pages hosted by our platform 
              but branded with your company information.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>3. Merchant Responsibilities for Customer Communications</LegalSectionTitle>
            <LegalParagraph>
              Merchants utilizing our platform to communicate with their end-users must ensure proper authorization and regulatory compliance:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Customer Consent:</strong> You warrant that your customers have provided consent to receive payment-related communications via email and SMS
              </LegalListItem>
              <LegalListItem>
                <strong>Privacy Compliance:</strong> You maintain valid privacy policies and data processing agreements with your customers permitting decline salvage processing
              </LegalListItem>
              <LegalListItem>
                <strong>TCPA Compliance:</strong> For SMS communications, you confirm compliance with Telephone Consumer Protection Act requirements and opt-in consent
              </LegalListItem>
              <LegalListItem>
                <strong>CAN-SPAM Compliance:</strong> Email communications meet CAN-SPAM Act requirements including accurate sender information and unsubscribe mechanisms
              </LegalListItem>
              <LegalListItem>
                <strong>Branding Approval:</strong> You authorize use of your merchant brand, logo, and business name in customer-facing communications
              </LegalListItem>
              <LegalListItem>
                <strong>Message Content:</strong> You review and approve communication templates before deployment to your customer base
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>4. Customer Data Processing Authorization</LegalSectionTitle>
            <LegalParagraph>
              By integrating our platform, you authorize us to process your customers' personal data for payment recovery purposes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Data Types Processed:</strong> Customer names, email addresses, phone numbers, transaction IDs, order amounts, payment method tokens
              </LegalListItem>
              <LegalListItem>
                <strong>Processing Purpose:</strong> Sending payment recovery notifications, hosting secure payment update pages, retrying failed transactions
              </LegalListItem>
              <LegalListItem>
                <strong>Data Controller Role:</strong> You remain the data controller; we act as data processor under your instructions per our Data Processing Agreement
              </LegalListItem>
              <LegalListItem>
                <strong>Customer Rights:</strong> You are responsible for handling customer data subject access requests, deletion requests, and privacy inquiries
              </LegalListItem>
              <LegalListItem>
                <strong>Data Security:</strong> All customer data processed through PCI-DSS Level 1 compliant infrastructure with encryption at rest and in transit
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>5. Communication Customization and Branding</LegalSectionTitle>
            <LegalParagraph>
              Merchants can customize customer communications through the platform:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Template Customization:</strong> Modify email templates, SMS message content, and payment page branding via merchant dashboard
              </LegalListItem>
              <LegalListItem>
                <strong>Brand Identity:</strong> Upload your logo, set brand colors, configure sender names, and customize customer-facing URLs
              </LegalListItem>
              <LegalListItem>
                <strong>Message Frequency:</strong> Configure communication cadence, retry timing, and maximum outreach attempts per customer
              </LegalListItem>
              <LegalListItem>
                <strong>Channel Selection:</strong> Enable or disable email, SMS, or webhook notification channels based on your customer communication preferences
              </LegalListItem>
              <LegalListItem>
                <strong>Localization:</strong> Set language preferences and regional formatting for international customer communications
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>6. Customer Opt-Out and Unsubscribe Handling</LegalSectionTitle>
            <LegalParagraph>
              Merchants are responsible for honoring customer opt-out requests:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Unsubscribe Links:</strong> All emails include unsubscribe links; opt-outs are processed automatically within 24 hours
              </LegalListItem>
              <LegalListItem>
                <strong>SMS Opt-Out:</strong> Customers can reply STOP to opt out of SMS communications; opt-outs are processed immediately
              </LegalListItem>
              <LegalListItem>
                <strong>Merchant Notification:</strong> Opt-out events are reported to your merchant dashboard and sent via webhook for CRM synchronization
              </LegalListItem>
              <LegalListItem>
                <strong>Suppression Lists:</strong> Manage customer suppression lists via dashboard to prevent communications to specific email addresses or phone numbers
              </LegalListItem>
              <LegalListItem>
                <strong>Compliance Obligation:</strong> You remain responsible for maintaining master suppression lists and honoring customer communication preferences
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>7. Payment Page Terms and Customer Experience</LegalSectionTitle>
            <LegalParagraph>
              Hosted payment pages where customers update payment methods include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Secure Hosting:</strong> Payment pages hosted on PCI-compliant infrastructure with SSL/TLS encryption
              </LegalListItem>
              <LegalListItem>
                <strong>Merchant Branding:</strong> Pages display your merchant name, logo, and brand colors to maintain customer trust
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Method Support:</strong> Accept major credit cards, debit cards, and alternative payment methods per your merchant account configuration
              </LegalListItem>
              <LegalListItem>
                <strong>Customer Terms Display:</strong> Pages include links to your merchant's terms of service, privacy policy, and refund policy
              </LegalListItem>
              <LegalListItem>
                <strong>Transaction Transparency:</strong> Customers see original transaction details including order ID, amount, and merchant contact information
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>8. Merchant Liability for Customer Communications</LegalSectionTitle>
            <LegalParagraph>
              As the merchant, you retain responsibility for:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Compliance Violations:</strong> Any violations of TCPA, CAN-SPAM, GDPR, or other regulations arising from customer communications sent on your behalf
              </LegalListItem>
              <LegalListItem>
                <strong>Customer Disputes:</strong> Handling customer complaints, disputes, or inquiries about payment recovery communications
              </LegalListItem>
              <LegalListItem>
                <strong>Merchant Products:</strong> The products, services, and original transactions that triggered decline salvage attempts
              </LegalListItem>
              <LegalListItem>
                <strong>Refunds and Cancellations:</strong> Processing customer refund requests, cancellations, and payment disputes per your merchant policies
              </LegalListItem>
              <LegalListItem>
                <strong>Customer Support:</strong> Providing customer service for questions about original purchases, delivery, or product fulfillment
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>9. Communication Monitoring and Compliance</LegalSectionTitle>
            <LegalParagraph>
              Platform monitoring and compliance features:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Message Delivery Tracking:</strong> Real-time tracking of email delivery rates, SMS delivery status, and customer engagement metrics
              </LegalListItem>
              <LegalListItem>
                <strong>Bounce and Complaint Monitoring:</strong> Automated monitoring of email bounces, spam complaints, and deliverability issues
              </LegalListItem>
              <LegalListItem>
                <strong>Opt-Out Compliance:</strong> Automatic suppression of opted-out contacts across all communication channels
              </LegalListItem>
              <LegalListItem>
                <strong>Audit Logs:</strong> Complete logs of all customer communications available for compliance audits and regulatory reviews
              </LegalListItem>
              <LegalListItem>
                <strong>Merchant Alerts:</strong> Notifications of delivery failures, compliance issues, or customer complaints requiring merchant attention
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>10. Termination of Communication Services</LegalSectionTitle>
            <LegalParagraph>
              Communication services may be terminated under the following circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Merchant Subscription Cancellation:</strong> Communication services terminate upon cancellation of your platform subscription
              </LegalListItem>
              <LegalListItem>
                <strong>Compliance Violations:</strong> Repeated violations of TCPA, CAN-SPAM, or anti-spam regulations may result in service suspension
              </LegalListItem>
              <LegalListItem>
                <strong>High Complaint Rates:</strong> Excessive customer spam complaints or unsubscribe rates may trigger communication restrictions
              </LegalListItem>
              <LegalListItem>
                <strong>Data Upon Termination:</strong> Customer communication logs retained for 90 days post-termination for compliance purposes
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>11. Changes to Communication Terms</LegalSectionTitle>
            <LegalParagraph>
              We may update these Customer Communication Terms from time to time to reflect changes in regulations, platform features, 
              or communication best practices. Material changes will be communicated to merchants via email and dashboard notifications 
              with 30 days' advance notice.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Continued use of communication services after changes indicates acceptance of updated terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>12. Contact Information for Merchants</LegalSectionTitle>
            <LegalParagraph>
              For questions about customer communication services or compliance requirements:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Merchant Communication Services Team
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#5a6c7d' }}>
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </LegalParagraph>
          </LegalSection>
        </LegalContent>
      </LegalPageContainer>
      <Footer />
    </>
  );
};

export default EndUserTermsPage;
