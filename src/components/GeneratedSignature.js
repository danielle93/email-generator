import React from "react";
import logo from "../img/agency-hab-logo-50.png";
import facebookIcon from "../img/facebook.png";
import tiktokIcon from "../img/tiktok.png";
import instagramIcon from "../img/instagram.png";
import linkedinIcon from "../img/linkedin.png";

function GeneratedSignature({
  fullName,
  jobTitle,
  phoneNumber,
  emailAddress,
  address,
  employeeImage,
  color,
}) {
  return (
    <div
      className="tableContainer padding-lg radius-lg"
      style={{
        background: "white",
      }}
    >
      <div
        style={{
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <table
          className="generatedSignature"
          cellSpacing="0"
          cellPadding="0"
          border="0"
          width="500"
          style={{
            borderCollapse: "separate",
            borderSpacing: "10px",
          }}
        >
          <tr>
            {/* Top Left Quadrant: Logo */}
            <td width="200" height="218">
              <a
                href="https://agencyhabitat.com"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "block",
                }}
              >
                <img
                  src={employeeImage}
                  alt="Agency Habitat"
                  className="radius-lg"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                  }}
                />
              </a>
            </td>

            {/* Top Right Quadrant: Social Media Icons */}
            <td
              width="200"
              height="218"
              className="bg radius-lg padding-x-md padding-y-sm"
              style={{
                textAlign: "left",
              }}
            >
              {/* Align them in a row */}
              <img
                src={logo}
                alt="Agency Habitat Logo"
                border="0"
                style={{
                  width: "100%",
                }}
              />
              {phoneNumber && (
                <p
                  className="margin-y-xs hide-if-no-phone-number"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                  }}
                ></p>
              )}
              <p
                style={{
                  fontSize: "14px",
                  margin: 0,
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "var(--color-primary)",
                }}
              >
                {phoneNumber}
              </p>
              <p
                className="margin-y-xs"
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                }}
              ></p>
              <a
                href="agencyhabitt.com"
                className="text-uppercase text-decoration-none"
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                agencyhabitat.com
              </a>
              <p
                className="margin-y-xs"
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                }}
              ></p>
              <div className="text-center">
                <a
                  href="https://www.tiktok.com/@agencyhabitat"
                  style={{
                    marginRight: "32px",
                    textDecoration: "none",
                  }}
                >
                  <img src={tiktokIcon} alt="TikTok" height="20px" border="0" />
                </a>
                <a
                  href="https://www.linkedin.com/company/agencyhabitat/"
                  style={{
                    marginRight: "32px",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    height="20px"
                    border="0"
                  />
                </a>
                <a
                  href="https://www.instagram.com/agencyhabitat/"
                  style={{
                    marginRight: "32px",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    height="20px"
                    border="0"
                  />
                </a>
                <a
                  href="https://www.facebook.com/agencyhabitat"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    height="20px"
                    border="0"
                  />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            {/* Bottom Left Quadrant: Personal Info */}
            <td
              colspan="2"
              className={`bg-${color.toLowerCase()}`} // Apply the selected color class
              style={{
                padding: "var(--space-sm) var(--space-md)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "36px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "#2C2C2A",
                  fontWeight: "300",
                }}
              >
                {fullName}
              </p>
              <p
                style={{
                  margin: "10px 0 0 0",
                  fontSize: "14px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "#2C2C2A",
                  textTransform: "uppercase",
                }}
              >
                <em>{jobTitle}</em>
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default GeneratedSignature;
